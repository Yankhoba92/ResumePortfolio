import React, { useState } from "react";
import "./portfolio.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { realisationsData } from "./dataPortfolio";
import { Link } from "react-router-dom";


function MyVerticallyCenteredModal({ show, onHide, title, description, link, langage }) {
  return (
    <Modal {...{ show, onHide }} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><span className="modalTechno">Langages et technologies :</span>{langage}</p>

        <p>{description}</p>
        <Link to={link} className="modalLink" target="_blank">Lien du site</Link>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function RealisationImage({ src, title, description, link, langage }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <img
        src={src}
        alt=""
        className="realisationImg"
        onClick={() => setModalShow(true)}
      />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        description={description}
        link={link}
        langage= {langage}      />
    </div>
  );
}

function Realisation() {
  const [visibleDataCount, setVisibleDataCount] = useState(3);
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    if (visibleDataCount < realisationsData.length) {
      // S'il reste des images à afficher, ajoutez 3 images supplémentaires.
      setVisibleDataCount((prevCount) => prevCount + 3);
    } else {
      // Si toutes les images sont déjà affichées, réinitialisez le nombre d'images affichées à 3.
      setVisibleDataCount(3);
    }
  };
  return (
    <>
      <section id="citation">
        <div className="description">
          <p className="citationDescription">
            La vraie sagesse réside dans la mise en pratique. <br />
            C'est là que le savoir devient expérience,
            <br /> et l'expérience, une leçon qui guide notre chemin.
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
          {realisationsData
            .slice(0, visibleDataCount)
            .map(({ src, title, description, id, link, langage }) => (
              <RealisationImage
                key={id}
                src={src}
                title={title}
                description={description}
                link={link}
                langage={langage}
              />
            ))}
        </div>
        {realisationsData.length > 3 && (
          <button
          className="realisationBtn"
          onClick={handleShowMoreClick}
        >
          {visibleDataCount < realisationsData.length ? "Voir Plus" : "Voir Moins"}
        </button>
        )}
      </section>
    </>
  );
}

export default Realisation;
