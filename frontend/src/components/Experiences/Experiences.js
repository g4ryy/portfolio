import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

export default function Experiences() {
    return (
        <Container className='exp-section' style={{marginTop:"200px", color:"white"}}>
            <h1>WORK <span>EXPERIENCE</span></h1>

            <Row className='job'>
                <Col xs={12} md={8} lg={9} className='main'>
                    <h2><strong>CS2102 TEACHING ASSISTANT</strong></h2>
                    <h3 className='subhead'>NATIONAL UNIVERSITY OF SINGAPORE</h3>
                    <ul className='job-desc'>
                        <li>Teaching Assistant for CS2102: Database Systems.</li>
                        <li>Facilitate the teaching of Relational Algebra, ER Diagram, SQL, 
                            Functional Dependencies and Normalization techniques.</li>
                    </ul>
                </Col>
                <Col xs={12} md={4} lg={3} className='period'>
                    January 2022 - Present
                </Col>
            </Row>

            <Row className='job'>
                <Col xs={12} md={8} lg={9} className='main'>
                    <h2><strong>CS2030 TEACHING ASSISTANT</strong></h2>
                    <h3 className='subhead'>NATIONAL UNIVERSITY OF SINGAPORE</h3>
                    <ul className='job-desc'>
                        <li>Teaching Assistant for CS2030: Programming Methodology II.</li>
                        <li>Facilitated the teaching of object-oriented programming, functional programming, and medium scale software
                       development in Java.</li>
                        <li>Conducted weekly lessons and gave feedback on their weekly code submissions.</li>
                    </ul>
                </Col>
                <Col xs={12} md={4} lg={3} className='period'>
                    August 2021 - Present
                </Col>
            </Row>

            <Row className='job'>
                <Col xs={12} md={8} lg={9} className='main'>
                    <h2><strong>DATA ANALYST INTERN</strong></h2>
                    <h3 className='subhead'>RUSHOWL SINGAPORE</h3>
                    <ul className='job-desc'>
                        <li>Analysed the geospatial features of Singapore and explored the correlations with commute experience and
                        daily operations.</li>
                        <li>Conducted research on the commute pattern of platform users and generate service
                        personalization and improve user satisfaction.</li>
                    </ul>
                </Col>
                <Col xs={12} md={4} lg={3} className='period'>
                    June 2021 - August 2021
                </Col>
            </Row>

            <Row className='job'>
                <Col xs={12} md={8} className='main'>
                    <h2><strong>ANALYTICS INTERN</strong></h2>
                    <h3 className='subhead'>NATIONAL UNIVERSITY OF SINGAPORE</h3>
                    <ul className='job-desc'>
                        <li>Performed cleaning and processing of various maritime-related data
                        (AIS, Vessels Stoppage Data) using Python.</li>
                        <li>Analysed and conducted visualisations (vessels trajectories) to detect and remove
                        noisy entries.</li>
                        <li>Organised the datasets (splitting the datasets based on static and dynamic 
                        information) for use as input to predictive machine learning.</li>
                    </ul>
                </Col>
                <Col xs={12} md={4} className='period'>
                    December 2020 - January 2021
                </Col>
            </Row>
        </Container>
    )
}
