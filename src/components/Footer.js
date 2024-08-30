import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright" />
        <Col md="4" className="footer-body">
          <h3>made with ♡ | forked from <a style={{ color: 'white', textDecoration: 'none'}} href='https://github.com/soumyajit4419'>SB</a></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/emilywang188"
                style={{ color: '#ede8f5' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:emilywang188@gmail.com"
                style={{ color: '#ede8f5' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/emily-mt-wang/"
                style={{ color: "#ede8f5" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/emilyw.ng"
                style={{ color: "#ede8f5" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
