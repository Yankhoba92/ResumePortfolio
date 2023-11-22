import logo from "../assets/media/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">A propos</Link>
            </li>
            <li>
              <Link to="/competences">Compétences</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/contact" className="linkContact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
