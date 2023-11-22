import React, { useState } from "react";
import "./portfolio.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal({ show, onHide, title, content }) {
  return (
    <Modal {...{ show, onHide }} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{title}</h4>
        <p>{content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function RealisationImage({ src, title, content }) {
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
        content={content}
      />
    </div>
  );
}

function Realisation() {
  const [showMore, setShowMore] = useState(false);

  const realisationsData = [
    {
      src: "https://placehold.co/100x100",
      title: "Title 1",
      content: "Content 1",
    },
    {
      src: "https://placehold.co/100x100",
      title: "Title 2",
      content: "Content 2",
    },
    {
      src: "https://placehold.co/100x100",
      title: "Title 3",
      content: "Content 3",
    },
    {
      src: "https://placehold.co/100x100",
      title: "Title 4",
      content: "Content 4",
    },
  ];
  const visibleData = showMore
    ? realisationsData
    : realisationsData.slice(0, 3);

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
          {visibleData.map(({ src, title, content }, index) => (
            <RealisationImage
              key={index}
              src={src}
              title={title}
              content={content}
            />
          ))}
        </div>
        {realisationsData.length > 3 && (
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
