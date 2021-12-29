import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BiLinkExternal} from 'react-icons/bi';


export default function ProjectCard(props) {
    const {image, title, description, link} = props.project;
    return (
        <Card className='project-card-view'>
            <Card.Img variant="top" src={image} alt="image" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{textAlign: "left"}}>
                    {description}
                </Card.Text>
                <Button variant='primary' href={link} target="_blank">
                    <BiLinkExternal />
                    View Project
                </Button>
            </Card.Body>
        </Card>
    )
}
