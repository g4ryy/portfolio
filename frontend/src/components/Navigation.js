import React, { useState } from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="xl"
      className={navColour ? "sticky" : "navbar"}
      style={{backgroundColor: "#000000e0"}}
    >
      <Container>
        <Navbar.Brand href="/">
          <h1>
            <span>G</span>
            {"ary "} 
            <span>Y</span>
            {"ansen"}
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
               Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/skills" onClick={() => updateExpanded(false)}>
               Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
      
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                Experiences
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
     
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
               Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
     
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
               Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}