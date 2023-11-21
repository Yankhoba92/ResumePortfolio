import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Navbar";
import Me from "../assets/media/N1.png";

function Home() {
  return (
    <>
    <Nav />
      <section className="hero">
        
        <div className="aboutContent">
          <div>
            <span className="hello">Salut, je suis</span><br />
            <span>
               <h1 className="aboutName">Yankhoba</h1>

              Developpeur Application Web
            </span>
            <p className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Sint
              Corrupti doloremque dicta, eius, quaerat tempora illo,<br /> alias velit
              similique corporis error quis.
            </p>
            <button className="buttonAbout">
              <Link to="/competences">En savoir plus </Link>
            </button>
          </div>



          <div className="aboutImg">
            <img src={Me} alt="profil" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
