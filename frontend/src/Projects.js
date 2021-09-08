import './Projects.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "./redux/ducks/projectsSlice";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const Projects = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects({ test: "hi", id: 2 }));
    }, [dispatch]);

    const projects = useSelector((state) => state.projects);

    console.log("this: ", projects);
    // const { title } = projects[0];
    // console.log("title: ", title);

    return (
        <div className="section projects">
            <Container>
                <Row>
                    <Col>
                        <h1 className="heading">Projects</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center g-4" xs={1} md={3}>

                    {projects && Object.entries(projects).map(([key, project]) => (
                        <Col>
                            <Card bg="dark" text="white">
                                <a href="https://google.com">
                                    <Card.Img variant="top" src={project.image}/>
                                </a>
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <Card.Link href={project.github_url} className="btn btn-secondary">GitHub</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Projects;