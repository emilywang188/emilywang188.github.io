import React from "react";
import Card from "react-bootstrap/Card";
import { ImHeart } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! My name is <span className="purple">Emily Wang </span>
            and I'm from <span className="purple"> Chicago, Illinois.</span>
            <br />
            I'm a rising junior at Brown University working towards an Sc.B in Computer Science, with a focus on software engineering and artificial intelligence.
            <br />
            Currently, I'm also working as a lead research assistant at Brown's Computational Cognitive Development Lab! 
            <br />
            <br />
            When I'm not coding, you can usually find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImHeart />  Cooking <i><a style={{ fontSize:"15px" }} href="https://docs.google.com/document/d/1VyxiCoRIHVZGFZvMeJq1qrKKQNFSvRSDvqE_fJmmeK4/edit?usp=sharing">browse my cookbook!</a></i>
            </li>
            <li className="about-activity">
              <ImHeart />  Crafting <i><a style={{ fontSize:"15px" }} href="https://instagram.com/misoyarn">see my crochet!</a></i>
            </li>
            <li className="about-activity">
              <ImHeart />  Playing music
            </li>
            <li className="about-activity">
              <ImHeart />  Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
