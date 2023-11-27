import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";
import Twiter from "../../assets/media/twitter.png"
import Linkedin from "../../assets/media/linkedin.png"
import Github from "../../assets/media/github.png"
import "./SocialMedia.css"

const SocialMedia = () => {
  return (
    <>
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
            <img src={Twiter} alt="" />
            {/* <FontAwesomeIcon icon={faDownload} beat /> */}
          </a>
          <a
            href="https://github.com/Yankhoba92"
            target="_blank"
            className="special-section"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/yankhoba-bagayoko/"
            target="_blank"
            className="special-section"
          >
            <img src={Linkedin} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};
export default SocialMedia;