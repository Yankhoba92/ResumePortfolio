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
            <i class="fa-brands fa-twitter"></i>
            {/* <FontAwesomeIcon icon={faDownload} beat /> */}
          </a>
          <a
            href="https://github.com/Yankhoba92"
            target="_blank"
            className="special-section"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yankhoba-bagayoko/"
            target="_blank"
            className="special-section"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
};
export default SocialMedia;