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
  SiNodedotjs,
  SiC,
  SiCplusplus
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Langstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><p style={{ color: "#374375", fontSize: 20 }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><p style={{ color: "#374375", fontSize: 20 }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC /><p style={{ color: "#374375", fontSize: 20 }}>C</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus /><p style={{ color: "#374375", fontSize: 20 }}>C++</p>
      </Col>
    
    </Row>
  );
}

export default Langstack;
