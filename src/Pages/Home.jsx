import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Navbar";

function Home() {
  return (
    <>
    <div  className="hero">
      <Nav />
      <div >
            <h1>Yankhoba Bagayoko</h1>
            <p>Passionné par le codage au fils de mon parcours, je suis développeur intégrateur web. Passant par une formation chez Le PoleS, j'ai pu développer des compétences en : HTML, CSS, Javascript, jQuery, PHP, Symfony, Wordpress, Bootstrap et des notions en : Angular et AJAX. Puis je me suis spécialiser dans le front-end en travaillant avec le framework REACT </p>
            <Link to="/competences"><button>En savoir plus</button></Link>
        </div>
    </div>
      
    </>
  );
}

export default Home;
