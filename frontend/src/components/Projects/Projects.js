import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import ProjectCard from './ProjectCard.js';
import projectList from './data.js';

export default function Projects() {
    return (
        <Container style={{marginTop:"100px"}} className="project-section">
            <h1 className="project-heading" style={{color:"white"}}>
                RECENT <span>PROJECTS</span>
            </h1>

            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {projectList.map((project, index) => {
                    return (
                        <Col md={4} key={index} className="project-card" style={{fontSize:"16px"}}>
                            <ProjectCard project={project}/>
                        </Col>  
                    );
                })}            
            </Row>
            
        </Container>
    )
}
