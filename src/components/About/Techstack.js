import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiHtml5, DiCss3 
} from "react-icons/di";
import {
  SiTypescript,
  SiJavascript
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><p style={{ color: "#374375", fontSize: 20 }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /><p style={{ color: "#374375", fontSize: 20 }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /><p style={{ color: "#374375", fontSize: 20 }}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript /><p style={{ color: "#374375", fontSize: 20 }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript /><p style={{ color: "#374375", fontSize: 20 }}>TypeScript</p>
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
