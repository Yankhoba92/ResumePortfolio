import React, { useState } from "react";
import "./contact.css";

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
      setSuccessMessage("Votre message a été envoyé avec succès!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div>
      <div className="contactContent">
        <h1 className="contactTitre">Contactez moi</h1>
        <span className="contactDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          odio error, quia a saepe dolorum enim,
          <br /> est quasi, tempore eligendi placeat architecto! Saepe amet
          dolorum sit fugit consequatur ullam deserunt.
        </span>
      

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form className="contactForm" onSubmit={handleSubmit}>
       
          <label htmlFor="name"/>
          <input
            placeholder="Votre Nom"
            type="text"
            id="name"
            name="name"
            className="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        
        
          <label htmlFor="email"/>
          <input
            placeholder="Votre Mail"
            type="email"
            id="email"
            name="email"
            className="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        
        
          <label htmlFor="message"/>
          <textarea
            placeholder="Votre Message"
            id="message"
            name="message"
            className="message"
            rows={7}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        
        <button type="submit" value="send">
          Envoyer
        </button>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;
