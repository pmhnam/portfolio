import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import expressTs from "../../Assets/Projects/express-ts.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Course E-Commerce"
              description="A website for selling courses online is a platform that allows instructors or course creators to create, publish, and sell courses to learners over the internet and real-time Q&A sessions with learners."
              ghLink="https://github.com/pmhnam/courses-ecommerce-apis"
              demoLink="https://api.ce.hnam.id.vn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expressTs}
              isBlog={false}
              title="Express.js & Typescript Codebase"
              description="An Express.js and Typescript codebase for server-side development. Tech stack: Express.js, Typescript, PostgreSQL, Redis-Stack, RabbitMQ and AWS"
              ghLink="https://github.com/pmhnam/express-ts-base"
              demoLink="https://github.com/pmhnam/express-ts-base"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
