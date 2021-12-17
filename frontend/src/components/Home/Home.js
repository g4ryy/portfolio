import React from "react";
import Type from "./Type";
import Particle from "../Particle";
import Resume from "../../assets/Gary_Yansen_Resume.pdf";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <section>
      <Container className="home-section" id="home">
        <Particle />
        <Row className="home-content">
          <Col md={8} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi there! My name is
              <span id="boxone"></span>
            </h1>

            <h1 className="heading-name">
              Gary Yansen
              <span></span>
            </h1>

            <h2 className="heading-des">
              And I'm a{" "}
              <div id="cursor">
                <Type />
              </div>
            </h2>
          </Col>
          <Col md={4} style={{ paddingBottom: 16 }}>
            <div className="profile-picture">
              <div className="profile-picture-background" onClick></div>
            </div>

            <a href={Resume} type="button" target="_blank" rel="noreferrer" id="resume">
              Resume
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
