import { useState } from "react";
import "./portfolio.css";

const commonCitation = (
  <p className="citationDescription">
    La vraie sagesse réside dans la mise en pratique. <br />
    C'est là que le savoir devient expérience,
    <br /> et l'expérience, une leçon qui guide notre chemin.
  </p>
);

const RealisationImage = ({ src }) => (
  <img src={src} alt="" className="realisationImg" />
);

function Realisation() {
  const [showMore, setShowMore] = useState(false);

  const realisationsImgs = [
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
  ];

  const visibleImgs = showMore ? realisationsImgs : realisationsImgs.slice(0, 3);

  return (
    <>
      <section id="citation">
        <div className="description">{commonCitation}</div>
      </section>
      <section id="realisations">
        <h2 className="realisationsTitle">My Portfolio</h2>
        <p className="realisationsDescription">
          La vraie sagesse réside dans la mise en pratique. C'est là que le
          savoir devient expérience, et l'expérience, une leçon qui guide notre
          chemin.
        </p>
        <div className="realisationsImgs">
          {visibleImgs.map((src, index) => (
            <RealisationImage key={index} src={src} />
          ))}
        </div>
        {realisationsImgs.length > 3 && (
          <button className="realisationBtn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Voir Moins" : "Voir Plus"}
          </button>
        )}
      </section>
    </>
  );
}

export default Realisation;