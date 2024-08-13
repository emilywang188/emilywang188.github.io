import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home.png";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <i><b><span style= {{ backgroundColor: '#f5c2c2' }}>welcome!</span></b></i>
              </h1>

              <h1 className="heading-name">
                my name is 
                <strong className="main-name"> emily wang</strong>
              </h1>

              <h1 style={{ paddingBottom: 15 }} className="heading-name">
                and I am a:
              </h1>
              <div style={{ padding: 50, paddingTop: 10, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid bounce-img"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
