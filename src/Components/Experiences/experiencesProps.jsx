import React from "react";

const ExperienceProps = ({ imgSrc, title, description }) => (
  <div className="experience">
    <div className="experience__img">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="experience__Text">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ExperienceProps;