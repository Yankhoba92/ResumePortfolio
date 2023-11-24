import useState from "react";
import './hobbies.css'
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
                <img src="https://placehold.co/100x100" alt="" />
              </div>
              <p>Football</p>
            </Col>
            <Col>
              <div className="hobbiesImg">
                <img src="https://placehold.co/100x100" alt="" />
              </div>
              <p>Cuisine</p>
            </Col>
            <Col>
              <div className="hobbiesImg">
                <img src="https://placehold.co/100x100" alt="" />
              </div>
              <p>Taekwondo</p>
            </Col>
            
            
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Hobbies;