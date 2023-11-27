import { Link } from "react-router-dom";
import Nav from "../Components/Navbar";
import Avatar from "../assets/media/avatar.png";
import "../Styles/index.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


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
            Passionnée par le développement web, j'aime expérimenter, <br/>découvrir et apprendre des nouvelles technologies.
              
              
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
                Télécharger mon cv<FontAwesomeIcon icon={faDownload} beat />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
