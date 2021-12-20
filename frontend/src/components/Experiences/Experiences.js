import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

export default function Experiences() {
    return (
        <Container className='exp-section' style={{marginTop:"200px", color:"white"}}>
            <h1>WORK <span>EXPERIENCE</span></h1>
            <Row className='job'>
                <Col xs={12} md={8} lg={9} className='main'>
                    <h2><strong>TEACHING ASSISTANT</strong></h2>
                    <h3 className='subhead'>NATIONAL UNIVERSITY OF SINGAPORE</h3>
                    <p>Teaching Assistant for CS2030/CS2030S: Programming Methodology II, which delves 
                       into object-oriented programming, functional programming, and medium scale software
                       development in Java. I guide students through their weekly assignments and give feedback on their code
                       submissions.

                    </p>
                </Col>
                <Col xs={12} md={4} lg={3} className='period'>
                    August 2021 - Present
                </Col>
            </Row>

            <Row className='job'>
                <Col xs={12} md={8} lg={9} className='main'>
                    <h2><strong>DATA ANALYST INTERN</strong></h2>
                    <h3 className='subhead'>RUSHOWL SINGAPORE</h3>
                    <p>
                        Analysed the geospatial features of Singapore and explore the correlations with commute experience and
                        daily operations. Conducted research on the commute pattern of platform users and generate service
                        personalization and improve user satisfaction.
                    </p>
                </Col>
                <Col xs={12} md={4} lg={3} className='period'>
                    June 2021 - August 2021
                </Col>
            </Row>

            <Row className='job'>
                <Col xs={12} md={8} className='main'>
                    <h2><strong>ANALYTICS INTERN</strong></h2>
                    <h3 className='subhead'>NATIONAL UNIVERSITY OF SINGAPORE</h3>
                    <p>
                        Performed cleaning and processing of various maritime-related data
                        (AIS, Vessels Stoppage Data) using Python. Analysed and conducted visualisations (vessels trajectories) to detect and remove
                        noisy entries. Organised the datasets (splitting the datasets based on static and dynamic 
                        information) for use as input to predictive machine learning.

                    </p>
                </Col>
                <Col xs={12} md={4} className='period'>
                    December 2020 - January 2021
                </Col>
            </Row>
        </Container>
    )
}
