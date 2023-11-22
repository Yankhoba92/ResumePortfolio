import { useState } from "react";
import "./portfolio.css";


function Realisation() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <section id="citation">
        <div className="description">
          <p className="citationDescription">
            La vraie sagesse réside dans la mise en pratique. <br />
            C'est là que le savoir devient expérience,
            <br /> et l'expérience,une leçon qui guide notre chemin.
          </p>
        </div>
      </section>
      <section id="realisations">
        <h2 className="realisationsTitle">My Portfolio</h2>
        <p className="realisationsDescription">
          La vraie sagesse réside dans la mise en pratique. C'est là que le
          savoir devient expérience, et l'expérience, une leçon qui guide notre
          chemin.
        </p>
        <div className="realisationsImgs">
            
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="realisationImg"
          />
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="realisationImg"
          />
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="realisationImg"
          />
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="realisationImg"
          />
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="realisationImg"
          />
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="realisationImg"
          />
        </div>
        <button className="realisationBtn">
    Voir Plus
        </button>
      </section>
    </>
  );
}

export default Realisation;
