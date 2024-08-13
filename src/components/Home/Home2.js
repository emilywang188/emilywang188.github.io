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
            ... at a <span className="purple">{"< glance />"} </span> ...
            </h1>
            <p className="home-about-body">
              I'm a computer science student at Brown with special interests in art, graphics, and design!
              
              I'm most comfortable working in
                <b className="purple"> Javascript, Python and C. </b>
              <br />
              <br />
              My goal as a programmer is to explore how to create the most  
              <b className='purple'> sleek, engaging, </b> and <b className='purple'> responsive</b> designs for the web.
              I use what I've learned to apply to new projects with tools like
              <b className="purple"> Node.js </b> and <b className='purple'>React</b>.
              <br/> <br />
              I'm currently seeking <b className='purple'> </b>internship opportunities for summer 2025 in software development!
              
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
            <h1>FIND ME ON</h1>
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
            <p>
              <span className="purple">Connect </span>with me!
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
