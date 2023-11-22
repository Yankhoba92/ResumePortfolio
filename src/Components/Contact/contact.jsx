import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation des champs
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez fournir une adresse e-mail valide.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message ne peut pas être vide.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Envoyer le formulaire - vous pouvez ajouter la logique d'envoi ici
      setSuccessMessage("Votre message a été envoyé avec succès!");
      // Réinitialiser le formulaire après la soumission réussie
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div>
      <h2>Contactez-nous</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
