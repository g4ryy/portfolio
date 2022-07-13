import React from "react";
import { Container } from "react-bootstrap";
import Contact from "./Contact";

export default function About() {
  return (
    <div>
      <Container className="about-section">
        <h1>
          {"About "}
          <span>me</span>
        </h1>
        <p>
          I am currently a final year undergraduate at the National
          University of Singapore (NUS), pursuing a double major in Data Science
          and Computer Science. I have a strong interest in Software
          Engineering and Data Analytics. My career aspirations lie in the intersection between these fields,
          and I hope to be able to develop useful technological solutions
          that can utilize the data in today's world to benefit people's lives.
        </p>

        <p>
          With a strong desire to learn and a forthcoming character, I am
          determined to learn new skills as well as hone existing ones whilst
          working with others to achieve common goals.
        </p>
      </Container>

        <Contact />
    </div>
  );
}
