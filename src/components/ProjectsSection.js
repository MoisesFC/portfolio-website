import React, { useState } from "react";
import { Container, Card, Row, Col, Modal, Button } from "react-bootstrap";
import nucampsiteWebsiteImg from "../img/nucampWebsiteImage.jpg";
import blogAppWebsiteImg from "../img/blogAppWebsiteImg.jpg";
import summitBankWebsiteImg from "../img/summitBankWebsiteImg.jpg";
import budgetPlanningWebsiteImg from "../img/budgetPlannerWebsiteImg.jpg";


const ProjectsSection = () => {

    const [showModal, setShowModal] = React.useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Container className="pt-5 pb-5">

            <h1>Projects</h1>
            <hr />
            <Row>
                <Col xs={12} md={6} className="pb-3">
                    <Card>
                        <a href="https://react-blog-a5f95.ue.r.appspot.com/" target="_blank" rel="noopener noreferrer">
                            <Card.Img src={blogAppWebsiteImg} alt="nucampsite website thumbnail" />
                        </a>
                        <Card.Body style={{minHeight: "250px"}}>
                            <hr />
                            <Card.Title>Full-Stack React Blog App</Card.Title>
                            <Card.Text className="pt-2">
                                Personal blogging app built with the complete suite of the MERN stack.<br/>
                                This site allows anyone to read the published articles, as well as to log in or create an account to interact with the posts by adding comments or adding upvotes.
                                <br/>The project is powered by the Google Cloud Platform and Google Firebase.
                            </Card.Text>
                            <a href="https://react-blog-a5f95.ue.r.appspot.com/" target="_blank" rel="noopener noreferrer"><Button >Go to Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} className="pb-3">
                    <Card>
                        <a href="https://react-deploy-test-383704.web.app/" target="_blank" rel="noopener noreferrer">
                            <Card.Img src={nucampsiteWebsiteImg} alt="nucampsite website thumbnail" />
                        </a>
                        <Card.Body style={{minHeight: "250px"}}>
                            <hr />
                            <Card.Title>Nucamp Website</Card.Title>
                            <Card.Text>
                                Full Stack single page application website for a fictitional camping site. This website provides user authentication to interact with the Directory portion of the site, users are able to add comments and hit the like button to the campsites after loggin in or creating an account.
                            </Card.Text>
                            <a href="https://react-deploy-test-383704.web.app/" target="_blank" rel="noopener noreferrer"><Button >Go to Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} className="pb-3">
                    <Card>
                        <a href="#" onClick={openModal}><Card.Img src={summitBankWebsiteImg} alt="nucampsite website thumbnail" /></a>
                        <Card.Body style={{minHeight: "250px"}}>
                            <hr />
                            <Card.Title>Summit Bank</Card.Title>
                            <Card.Text>
                                Mock site for a fictitional bank. This project features the front end of a bank, which serves as a landing page, showing potential customers the produts that the bank offers. This site also includes a functional retirement calculator under the Retirement tab. Check it out!
                            </Card.Text>
                            <a href="#" onClick={openModal}><Button >Go to Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} className="pb-3">
                    <Card>
                        <a href="https://budget-tracker-afeab.web.app/" target="_blank" rel="noopener noreferrer"><Card.Img src={budgetPlanningWebsiteImg} alt="nucampsite website thumbnail" /></a>
                        <Card.Body style={{minHeight: "250px"}}>
                            <hr />
                            <Card.Title>Budget Planner</Card.Title>
                            <Card.Text>
                                Simple budget tracker application that uses CRUD(Create, Read, Update, Delete) operations to create a budget and add and eliminate expenses.
                            </Card.Text>
                            <a href="https://budget-tracker-afeab.web.app/" target="_blank" rel="noopener noreferrer"><Button >Go to Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Heads Up!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The following project is so awesome that it got flagged by Google.
                    I assume this has to do with the fact that this is a mock website for a fake bank, making them think that this is a phishing site.
                    To view this project, click on the Details button and then click on the visit this unsafe site link. I am currently working with Google to have the flag removed.
                    <br/>
                    If you do not feel safe visiting the website, click <a href="google.com">here</a> to view some screenshots instead.
                </Modal.Body>
                <Modal.Footer>
                <a href="https://summit-bank-a5b6f.web.app" target="_blank" rel="noopener noreferrer"><Button variant="primary" onClick={closeModal}>
                        Go to the Website 
                    </Button>
                    </a>
                </Modal.Footer>
            </Modal>
        </Container>
    )
};

export default ProjectsSection;