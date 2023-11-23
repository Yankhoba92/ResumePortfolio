import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Row, Col } from "react-bootstrap";
import "./skills.css";
import Experience from "./experiences";
import logoCnfs from "../../assets/media/cnfs.png"
import logoPoles from "../../assets/media/PoleS.png"
import logoGeniunom from "../../assets/media/Stage.jpg"

const skillsData = [
  { name: "Html & css", percentage: 60 },
  { name: "Javscript", percentage: 60 },
  { name: "React js", percentage: 60 },
  { name: "Node Js", percentage: 60 },
  { name: "php", percentage: 60 },
  { name: "Symfony", percentage: 60 },
];
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

function Skills() {
  return (
    <>
      <section id="skill">
        <div className="skills">
          <p className="skill__description">
            La compétence est la clé qui ouvre les portes de
            <br /> l'opportunité et du succès...
          </p>
        </div>
      </section>
      <section className="skillBars">
        <h2>Langages</h2>
        <div className="skillBars__langages">
          <Container gap={5} className="row">
            <Row>
              {skillsData.map((skill) => (
                <Col key={skill.name} md={6} className="p-5">
                  <h3>{skill.name}</h3>
                  <ProgressBar animated now={parseFloat(skill.percentage)} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
      <section className="skillBars">
        <h2>Experiences</h2>
        <p className="skillBars__descriptions">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          perspiciatis hic. <br /> alias laudantium blanditiis necessitatibus
          debitis ab quasi.
        </p>
        <div className="skillBars__experiences">
          {experiencesData.map((experience, index) => (
            <Experience key={index} {...experience} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
