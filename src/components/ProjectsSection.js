import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const ProjectsSection = () => {
    return (
        <Container className="pt-5">
            <h1>Projects</h1>
            <hr />
            <Row>
                <Col>
                    <Card>
                        <Card.Img></Card.Img>
                        <Card.Body>
                            <Card.Title>Full Stack React Blog App</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img></Card.Img>
                        <Card.Body>
                            <Card.Title>Summit Bank</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img></Card.Img>
                        <Card.Body>
                            <Card.Title>Nucamp Website</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ProjectsSection;