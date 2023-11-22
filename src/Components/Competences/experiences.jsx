import React from "react";

const Experience = ({ imgSrc, title, description }) => (
  <div className="skillBars__experience">
    <div className="skillBars__experience_img">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="skillBars__experienceText">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Experience;