import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

export default function Skills() {
    return (
      <Container className='skills-section'>
        <h1>Programming <span>Languages</span></h1>
        <Row style={{ justifyContent: "center", paddingBottom: "100px"}}>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg" alt="Java" />
          </Col>
          
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" />
          </Col>
          
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
          </Col>
          
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" />
          </Col>
          
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg" alt="R" />
          </Col>
        </Row>


        <h1>Tech <span>Stacks</span></h1>
        <Row style={{ justifyContent: "center", paddingBottom: "100px", fontSize:"4px"}}>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg" alt="Django" />
          </Col>
          
          <Col xs={4} md={2} className="tech-icons">
             <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
          </Col>
          
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" />
          </Col>
          
          <Col xs={4} md={2} className="tech-icons" >
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain-wordmark.svg" alt="NodeJS" />
          </Col>
      
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="PSQL" />
          </Col>
        </Row>

        <h1><span>Other</span> Skills</h1>
        <Container id='skill-list'>
          <ul>
          <li className='others'>Data Structures</li>
          <li className='others'>Algorithms</li>
          <li className='others'>Object-Oriented Programming</li>
        </ul>
        </Container>
        
      </Container>
    )
}
