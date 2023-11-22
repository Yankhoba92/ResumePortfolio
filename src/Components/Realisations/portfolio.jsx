import React, { useState } from "react";
import "./portfolio.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function RealisationImage({ src }) {
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
      />
    </div>
  );
}

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

  const visibleImgs = showMore
    ? realisationsImgs
    : realisationsImgs.slice(0, 3);

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
          {visibleImgs.map((src, index) => (
            <RealisationImage key={index} src={src} />
          ))}
        </div>
        {realisationsImgs.length > 3 && (
          <button
            className="realisationBtn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Voir Moins" : "Voir Plus"}
          </button>
        )}
      </section>
    </>
  );
}

export default Realisation;
