import "./experiences.css";
import ExperienceProps from "./experiencesProps";
import logoCnfs from "../../assets/media/cnfs.png"
import logoPoles from "../../assets/media/PoleS.png"
import logoGeniunom from "../../assets/media/Stage.jpg"


const experiencesData = [
  {
    imgSrc: logoCnfs,
    title: "Conseiller Numérique",
    description: "E.N.S.E.M.B.L.E.",
  },
  {
    imgSrc: logoGeniunom,
    title: "Développeur application saas",
    description: "GENIUNOM",
  },
  {
    imgSrc: logoPoles,
    title: "Développeur integrateur web",
    description: "PoleS ",
  },
];

function Experiences() {
  return (
    <>
      
      <section className="sectionExperience">
        <div className="experiences">
          <h2>Experiences</h2>
        <p className="experiences__descriptions">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          perspiciatis hic. <br /> alias laudantium blanditiis necessitatibus
          debitis ab quasi.
        </p>
        <div className="experiences__List">
          {experiencesData.map((experience, index) => (
            <ExperienceProps key={index} {...experience} />
          ))}
        </div>
        </div>
        
      </section>
    </>
  );
}

export default Experiences;
