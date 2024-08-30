import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5, DiCss3 
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiFlask,
  SiNodedotjs
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /><p style={{ color: "#374375", fontSize: 20 }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask /><p style={{ color: "#374375", fontSize: 20 }}>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs /><p style={{ color: "#374375", fontSize: 20 }}>Node.js</p>
      </Col>
    
    </Row>
  );
}

export default Toolstack;
