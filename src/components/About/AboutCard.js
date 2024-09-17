import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola! Soy <span className="purple">Gio </span>
            de <span className="purple"> Bogotá, Colombia.</span>
            <br />
            Soy estudiante de ingeniería informática en la Universidad de La Sabana.
            <br />
            Tengo habilidades en programación, diseño de sistemas y bases de datos.
            <br />
            <br />
            ¡Aparte de programar, hay otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tocar Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(132 198 245)" }}>
            "Crea con propósito y pasión para <br></br>
            dejar huella en el futuro."{" "}
          </p>
          <footer className="blockquote-footer">Gio</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;