import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {AiFillGithub, AiOutlineMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    return (
        <Container className='contact-section' style={{color:"white"}}>
            <Row>
          <Col md={12} className="home-about-social">
            <h1>
                <span>CONNECT</span> WITH ME
            </h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/g4ryy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour icon"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:garyyansen@u.nus.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour icon"
                >
                  <AiOutlineMail />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gy777"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour icon"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
    )
}
