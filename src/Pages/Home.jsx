import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Navbar";
import Me from "../assets/media/N1.png"

function Home() {
  return (
    <>
      <div className="hero">
        <Nav />
        <div className="about">
        <div className="aboutImg"><img src={Me} alt="" /></div>
          <h1>
           Developpeur Web
          </h1>
          <Link to="/competences">
            <button>En savoir plus</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
