import { Link } from "react-router-dom";
import Nav from "../Components/Navbar";
import Avatar from "../assets/media/avatar.png";
import "../Styles/index.css"

function Home() {
  return (
    <>
      <Nav />
      <section className="hero">
        <div className="aboutContent">
          <div className="aboutContent_text">
            <span className="hello">Salut, je suis</span>
            <br />
            <span>
              <h1 className="aboutName">Yankhoba</h1>
              Developpeur Application Web
            </span>
            <p className="para">
              Passionné par le codage au fils de mon parcours, je suis
              développeur Application web.<br />Passant par une formation chez Le
              PoleS, j'ai pu développer des compétences en <br /> : HTML, CSS,
              Javascript, jQuery, PHP, Symfony, Wordpress, Bootstrap et des
              notions en :<br /> Angular et AJAX. Puis je me suis spécialiser dans le
              front-end en travaillant avec le framework REACT
              
              
            </p>
            <button className="buttonAbout">
              <Link to="/competences">En savoir plus </Link>
            </button>
          </div>
          <div className="aboutAvatar">
            <div className="aboutAvatar__img">
              <img src={Avatar} alt="" />
            </div>
            <div className="downloadButton">
              <a href={Avatar} download>
                Télécharger mon cv
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
