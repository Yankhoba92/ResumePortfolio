import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Row, Col } from "react-bootstrap";
import "./skills.css";


const skillsData = [
  { name: "Html & css", percentage: 90 },
  { name: "Javscript", percentage: 65 },
  { name: "React js", percentage: 70},
  { name: "Node Js", percentage: 35 },
  { name: "php", percentage: 35 },
  { name: "Symfony", percentage: 30 },
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
      
    </>
  );
}

export default Skills;
