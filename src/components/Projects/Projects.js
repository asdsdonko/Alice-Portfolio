import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container className="project-content">
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                  isBlog={false}
                  title="My Math Research"
                  description="Developed and implemented advanced numerical methods in Python to calculate geodesic distances."
                  ghLink="https://github.com/tomsbados/MATH197--"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  isBlog={false}
                  title="Web Scraping Financial Data"
                  description="Used Python to automate the retrieval of S&P 500 financial data and performed machine learning analysis to find the best performing stocks. "
                  ghLink="https://github.com/tomsbados"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  isBlog={false}
                  title="Language Model"
                  description="Used PyTorch to create a language model trained on my math homework as well as Shakespeare passages."
                  ghLink="https://github.com/tomsbados"

              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  isBlog={false}
                  title="Plant Disease Detection"
                  description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                  ghLink="https://github.com/tomsbados"

              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  isBlog={false}
                  title="Ai For Social Good"
                  description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                  ghLink="https://github.com/tomsbados"

              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  isBlog={false}
                  title="Face Recognition and Emotion Detection"
                  description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                  ghLink="https://github.com/tomsbados"

              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
