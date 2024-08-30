import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import weather from "../../Assets/Projects/weather.png";
import recipe from "../../Assets/Projects/recipe.jpg";
import mcmcp from "../../Assets/Projects/mcmcp.png";
import avge from "../../Assets/Projects/avge.png";
import sketchy from "../../Assets/Projects/sketchy.png";
import snake from "../../Assets/Projects/snake.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading" >
          <span style={{ color: '#374375' }}><b>Recent Projects</b></span>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Whether the Weather"
              description="Suggests activities to a user based in Providence, RI that aligns with personal and friend preferences, alongside input from RI weather conditions. Uses a homemade database of restaurants, landmarks, and more. Designed both for RI residents and visitors. Built with React, Javascript, SQL, Flask, HTML, CSS, and Node.js."
              ghLink="https://github.com/emilywang188/weather"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Rad Recipe Recommender"
              description="A recipe recommender and social web app for food lovers! Users can add friends, search for recipes, view others' recipe lists, and get recommended recipes based on their friends. Built with React, Typescript, HTML, CSS, Firebase, and the Spoonacular API."
              ghLink="https://github.com/seehanah-tang/rad-recipe-recommender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcmcp}
              isBlog={false}
              title="Discrete MCMCP Categorization Task"
              description="Expansion on research in the discrete Monte Carlo Markov Chains with People algorithm. Applied as a backend for a categorization task given to children to study child cognitive development, specifically in essential features and prototype theory. Developed under the guidance of Drs. Daphna Buchsbaum and Pablo Leon-Villagra."
              ghLink="https://github.com/PabloLeon/mcmcp-discrete"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avge}
              isBlog={false}
              title="Brown University's Anime Video Game Ensemble Homepage"
              description="Homepage for Brown University x Rhode Island School of Design's Anime Video Game Ensemble. Features records of the club's history as well as the most up-to-date information on the club's upcoming events. Built for both current or future ensemble members, alumni, and community members alike. Built with React, Javascript, HTML, and CSS."
              ghLink="https://github.com/brownavge/brownavge.github.io"
              demoLink="https://brownavge.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sketchy}
              isBlog={false}
              title="Sketchy"
              description="Drawing program that supports free draw, layering, undo/redo, alongside creation and manipulation of shapes. Modeled to be a replica of Microsoft Paint. Built using Java and JavaFX."
              ghLink="https://github.com/brown-cs15-2022/sketchy-emilywang188"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake"
              description="A replica of the iconic Snake game, in which a user maneuvers a growing snake, avoiding obstacles and its own body while trying to obtain as many food pellets as possible. Supports custom boards, grass with hidden food, and score-keeping. Built in C."
              ghLink="https://github.com/csci0300/cs300-s24-projects-emilywang188"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
