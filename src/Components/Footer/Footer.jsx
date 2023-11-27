import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      Copyright &#169; 2023 Bagayoko Yankhoba. All rights reserved.
      <div className="social-box">
        <div className="follow-label special-section">
          <span>Suivez-moi</span>
        </div>
        <div className="social">
          <a
            href="https://twitter.com/BagayokoYankho1"
            target="_blank"
            className="special-section"
          >
            <FontAwesomeIcon icon={faDownload} beat />
          </a>
          <a
            href="https://github.com/Yankhoba92"
            target="_blank"
            className="special-section"
          >
            <FontAwesomeIcon icon={faDownload} beat />
          </a>
          <a
            href="https://www.linkedin.com/in/yankhoba-bagayoko/"
            target="_blank"
            className="special-section"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
