import logo from "../assets/media/logo.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "white" : "#181E38",
                    borderBottom: isActive ? "3px solid #fff" : "",
                  };
                }}
              >
                A propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/competences"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "white" : "#181E38",
                    borderBottom: isActive ? "3px solid #fff" : "",
                  };
                }}
              >
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "wgite" : "#181E38",
                    borderBottom: isActive ? "3px solid #fff" : "",
                  };
                }}
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="/contact"
                className="linkContact"
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "#181E38",
                  };
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
