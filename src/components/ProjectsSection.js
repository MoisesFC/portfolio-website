import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import nucampsiteWebsiteImg from "../img/nucampWebsiteImage.jpg";
import blogAppWebsiteImg from "../img/blogAppWebsiteImg.jpg";
import summitBankWebsiteImg from "../img/summitBankWebsiteImg.jpg";
import budgetPlanningWebsiteImg from "../img/budgetPlannerWebsiteImg.jpg";


const ProjectsSection = () => {
    return (
        <Container className="pt-5 pb-5">
            <h1>Projects</h1>
            <hr />
            <Row>
                <Col xs={12} md={6} lg={4} className="pb-3">
                    <Card>
                        <a href="https://react-blog-a5f95.ue.r.appspot.com/" target="_blank" rel="noopener noreferrer">
                            <Card.Img src={nucampsiteWebsiteImg} alt="nucampsite website thumbnail" />
                        </a>
                        <Card.Body>
                            <Card.Title>Full Stack React Blog App</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}  className="pb-3">
                    <Card>
                        <a href="https://react-deploy-test-383704.web.app/" target="_blank" rel="noopener noreferrer">
                            <Card.Img src={blogAppWebsiteImg} alt="nucampsite website thumbnail" />
                        </a>
                        <Card.Body>
                            <Card.Title>Full Stack React Blog App</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4}  className="pb-3">
                    <Card>
                        <a href="https://summit-bank-a5b6f.web.app/"><Card.Img src={summitBankWebsiteImg} alt="nucampsite website thumbnail" /></a>
                        <Card.Body>
                            <Card.Title>Summit Bank</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}  className="pb-3">
                    <Card>
                        <a href="https://budget-tracker-afeab.web.app/"><Card.Img src={budgetPlanningWebsiteImg} alt="nucampsite website thumbnail" /></a>
                        <Card.Body>
                            <Card.Title>Budget Planner</Card.Title>
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