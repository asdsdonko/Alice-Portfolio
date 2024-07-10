import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={12} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Portfolio{" "}
                  <span className="wave" role="img" aria-labelledby="wave">

                </span>
                </h1>

                <h1 className="heading-name">

                  <strong className="main-name"> Tomas Dos Santos</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
            </Row>
          </Container>
          {/* Add margin or padding to create space beneath */}
          <div style={{ height: "150px" }}></div>
        </Container>
        <Home2 />
      </section>
  );
}

export default Home;
