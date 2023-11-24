import "./hobbies.css";
import logoBall from "../../assets/media/cuisine.png";
import logoCuisine from "../../assets/media/football.png";
import logoTkdo from "../../assets/media/tkdo.png";
import { Container, Row, Col } from "react-bootstrap";
const Hobbies = () => {
  return (
    <>
      <section className="hobbies">
        <h2>Centres d'intérets</h2>
        <Container>
          <Row>
            <Col>
              <div className="hobbiesImg">
                <img src={logoBall} alt="" />
                <h3>Cuisine</h3>
              </div>
            </Col>
            <Col>
              <div className="hobbiesImg">
                <img src={logoCuisine} alt="" />
                <h3>Football</h3>
              </div>
            </Col>
            <Col>
              <div className="hobbiesImg">
                <img src={logoTkdo} alt="" />
                <h3>Taekwondo</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Hobbies;
