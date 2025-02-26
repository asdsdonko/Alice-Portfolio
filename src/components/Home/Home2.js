import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                About <span className="purple"> Me </span>
              </h1>
              <p className="home-about-body">
                I am currently studying Computer Science but am interested in mathematics and linguistics.
                <br />
                <br />I am proficient in the basics like
                <i>
                  <b className="purple"> C++, Javascript, and Python. </b>
                </i>
                <br />
                <br />
                My field of interest includes building new &nbsp;
                <i>
                  <b className="purple">AI and Data Science Models </b> and
                  also in areas related to{" "}
                  <b className="purple">
                    Quantitative Analysis.
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Python</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js </b>
                </i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Find Me On</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/asdsdonko"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
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
