import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ color: '#374375', fontSize: 17, textAlign: "justify" }}>
            Hi! My name is Emily Wang, and I'm from Chicago, Illinois.
            <br /><br />
            I'm a junior at Brown University working towards an Sc.B in Computer Science, with a focus on software engineering and artificial intelligence.
            <br /><br />
            Currently, I'm working as a lead research assistant at Brown's Computational Cognitive Development Lab. There, I focus on computational modeling of categorical representations in children under Drs. Daphna Buchsbaum and Pablo Leon-Villagra. I am also a teaching assistant for Foundations of AI (CSCI 410), which is a new course designed to introduce students to fundamental concepts of artificial intelligence. I have also been a teaching assistant under Prof. Andy van Dam for Intro to Object-Oriented Programming (CS 15).
            <br />
            <br />
            Outside of CS, I enjoy taking classes in art and art history, music, language, and cognitive science, among other areas!
            <br /><br />
            And when I'm not coding <i>or</i> in class, you can usually find me playing the violin, crocheting keychains, going for runs, trying new recipes, painting, or watching silly romance anime :)
          </p>
  
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
