import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/image.jpg";
import Toolstack from "./Toolstack";
import Langstack from "./Langstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ color: '#374375', fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong>More <i><span style={{ color: '#708c82'}}>About Me!</span></i></strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img style = {{ maxHeight: '35vh' }}src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading" >
          <span style={{ color: '#374375' }}><b>Frontend Skillset</b></span>
        </h1>

        <Techstack />

        <h1 className="project-heading">
        <span style={{ color: '#374375' }}><b>Backend Skillset</b></span>
        </h1>
        <Toolstack />

        <h1 className="project-heading">
        <span style={{ color: '#374375' }}><b>More Languages</b></span>
        </h1>
        <Langstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
