
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view" style={{ position: "relative", zIndex: 2 }}>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Tomas Dos Santos </span>
              from <span className="purple"> Riverside, California.</span>
              <br />
              I am a graduate from the University of California, Riverside.
              <br />
              I completed a degree in mathematics with a concentration in computation.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Chess
              </li>
              <li className="about-activity">
                <ImPointRight /> Reading and writing about mathematics
              </li>
              <li className="about-activity">
                <ImPointRight /> Traveling
              </li>
            </ul>

            <p style={{ color: "#009933" }}>
              "You see, we are here as far as I can tell, to help each other - our brothers, our friends, our enemies."{" "}
            </p>
            <footer className="blockquote-footer">SRV</footer>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;