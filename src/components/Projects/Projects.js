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
                  ghLink="https://github.com/tomsbados/SP500-Machine-Learning"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  isBlog={false}
                  title="Language Model"
                  description="Used PyTorch to create a language model trained on my math homework as well as Shakespeare passages."
                  ghLink="https://github.com/tomsbados/Language-Model-Practice"

              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  isBlog={false}
                  title="Income Prediction Project"
                  description="This project aims to predict whether an individual's income exceeds $50K per year based on various demographic and employment-related features. "
                  ghLink="https://github.com/tomsbados/Income-Prediction-Project"

              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  isBlog={false}
                  title="AMES Housing Dataset Kaggle"
                  description="This project aims to gain in depth skills in advanced regression and feature engineering techniques. I set myself the goal of scoring top 10% on Kaggle."
                  ghLink="https://github.com/tomsbados"

              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  isBlog={false}
                  title="Trash Identification Using YoloV8"
                  description="As a project for my internship in Environmental Health and Safety, I implemented a YoloV8 computer vision model to identify mobile trash."
                  ghLink="https://github.com/tomsbados"

              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
