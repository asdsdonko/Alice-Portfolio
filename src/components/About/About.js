import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import deathStarImg from "../../Assets/death_star.webp";  // Import the new image
import Toolstack from "./Toolstack";

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Know Who <strong className="purple">I Am</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "50px", paddingBottom: "50px", position: "relative", zIndex: 2 }}
                        className="about-img"
                    >
                        <img src={deathStarImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <Row style={{ position: "relative", zIndex: 1 }}>
                    <h1 className="project-heading">
                        Professional <strong className="purple">Skillset </strong>
                    </h1>
                    <Techstack />
                </Row>
                <Row style={{ position: "relative", zIndex: 1 }}>
                    <h1 className="project-heading">
                        <strong className="purple">Tools</strong> I use
                    </h1>
                    <Toolstack />
                </Row>
                <Row style={{ position: "relative", zIndex: 1 }}>
                    <Github />
                </Row>
            </Container>
        </Container>
    );
}

export default About;
