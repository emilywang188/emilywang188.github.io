import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/portrait.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <b>At a </b> <span style={{ color: '#708c82'}}>{"<glance />"} </span> <b>...</b>
            </h1>
            <p className="home-about-body">
              I'm a computer science student at Brown University with special interests in art, graphics, and design! I'm currently working at Brown's Computational Cognitive Development Lab and as a teaching assistant for Artificial Intelligence (CS 410 / CS 1411).
              <br /><br />
              I am most comfortable working in Javascript, Python, and C. I'm currently exploring ways to create the most responsive and comfortable experiences in user interfaces. I love creating apps to improve the quality of life for different communities in unique ways. 
              <br /><br /> 
              I am currently seeking opportunities in the industry for summer 2025 in frontend development and software engineering!
              
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
            <h1 style={{ paddingBottom:10 }}><b>Get in touch!</b></h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:emilywang188@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/emilywang188"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/emily-mt-wang/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/emilyw.ng"
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
