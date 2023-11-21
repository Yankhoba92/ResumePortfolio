import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./skills.css";

const skillsData = [
  { name: "Html & css", percentage: 60 },
  { name: "Javscript", percentage: 60 },
  { name: "React js", percentage: 60 },
  { name: "Node Js", percentage: 60 },
  { name: "php", percentage: 60 },
  { name: "Symfony", percentage: 60 },
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
          <Container gap={5}>
            {skillsData.map((skill, index) => (
              <Row key={index} className="p-5">
                <Col>
                  <h3>{skill.name}</h3>
                  <ProgressBar animated now={skill.percentage} />
                </Col>
              </Row>
            ))}
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
          <div className="skillBars__experience">
            <div className="skillBars__experience_img">
              <img src="https://placehold.co/100x100" alt="Design" />
            </div>
            <div className="skillBars__experienceText">
              <h3>UI/UX Design</h3>
              <p>This is a demo</p>
            </div>
          </div>
          <div className="skillBars__experience">
            <div className="skillBars__experience_img">
              <img src="https://placehold.co/100x100" alt="Design" />
            </div>
            <div className="skillBars__experienceText">
              <h3>App</h3>
              <p>This is a demo text, you can write</p>
            </div>
          </div>
          <div className="skillBars__experience">
            <div className="skillBars__experience_img">
              <img src="https://placehold.co/100x100" alt="Design" />
            </div>
            <div className="skillBars__experienceText">
              <h3>Website</h3>
              <p>This is a demo text, you can write</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
