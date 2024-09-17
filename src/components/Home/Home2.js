import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Asegúrate de tener tu imagen en esta ubicación
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
  Me enamoré de la programación y especialmente de la I.A. Cada día aprendo algo nuevo y me encanta compartirlo con los demás.🙏
  <br />
  <br />Soy fluido en clásicos como
  <i>
    <b className="purple"> Python, JavaScript, React y FastAPI </b>
  </i>
  <br />
  <br />
  Mis áreas de interés son construir nuevas &nbsp;
  <i>
    <b className="purple">Tecnologías y Productos Web </b> y
    también en áreas relacionadas con{" "}
    <b className="purple">
      I.A & Machine Learning 
    </b>
  </i>
  <br />
  <br />
  Siempre que puedo, también aplico mi pasión por desarrollar productos
  con <b className="purple">Python</b> y
  <i>
    <b className="purple">
      {" "}
      Bibliotecas y Frameworks Modernos de Python o JavaScript
    </b>
  </i>
  &nbsp; como
  <i>
    <b className="purple"> FastAPI, React.js y Next.js</b>
  </i>
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              No dudes en <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gemu03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gemu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ingestebanmu@hotmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/573112830457"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;