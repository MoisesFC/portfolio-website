import React, { useState } from "react";
import { Container, Card, Row, Col, Modal, Button, Image } from "react-bootstrap";
import nucampsiteWebsiteImg from "../img/nucampWebsiteImage.jpg";
import blogAppWebsiteImg from "../img/blogAppWebsiteImg.jpg";
import summitBankWebsiteImg from "../img/summitBankWebsiteImg.jpg";
import budgetPlanningWebsiteImg from "../img/budgetPlannerWebsiteImg.jpg";
import SummitBankCCImg from "../img/SummitBankCC.png";
import SummitBankHomeImg from "../img/SummiytBankHome.png";
import SummitBankCheckingImg from "../img/SummitBankChecking.png";
import SummitBankRetirementImg from "../img/SummitBankRetirement.png";
import manixTintingImg from '../img/manixTintingWebsiteImg.jpg';
import techTempleImg from '../img/techTempleImg.jpg';

const ProjectsSection = () => {

    const [showWarningModal, setShowWarningModal] = React.useState(false);

    const openModal = () => {
        setShowWarningModal(true);
    };

    const closeModal = () => {
        setShowWarningModal(false);
    };

    const [showBankImgsModal, setShowBankImgsModal] = React.useState(false);

    const openBankImgsModal = () => {
        setShowBankImgsModal(true);
    };

    const closeBankImgsModal = () => {
        setShowBankImgsModal(false);
    };


    return (
        <Container className="pt-5 pb-5">

            <h1>Projects</h1>
            <hr />
            <Row>
                <Col xs={12} md={6} className="pb-3">
                    <Card>
                        <a href="https://react-blog-a5f95.ue.r.appspot.com/" target="_blank" rel="noopener noreferrer">
                            <Card.Img src={blogAppWebsiteImg} alt="react blog Moises website thumbnail" />
                        </a>
                        <Card.Body style={{ minHeight: "250px" }}>
                            <hr />
                            <Card.Title>Full-Stack React Blog App</Card.Title>
                            <Card.Text className="pt-2">
                                Personal blogging app built with the complete suite of the MERN stack.<br />
                                This site allows anyone to read the published articles, as well as to log in or create an account to interact with the posts by adding comments or adding upvotes.
                                <br />The project is powered by the Google Cloud Platform and Google Firebase.
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
                        <Card.Body style={{ minHeight: "250px" }}>
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
                        <a href="https://www.manixtinting.com" target="_blank" rel="noopener noreferrer">
                            <Card.Img src={manixTintingImg} alt="Manix Tinting website thumbnail" />
                        </a>
                        <Card.Body style={{ minHeight: "250px" }}>
                            <hr />
                            <Card.Title>Manix Tinting</Card.Title>
                            <Card.Text>
                            Sleek and user-friendly website for Manix Tinting, a real small business specializing in professional car window tinting services. This project harnessed the power of React for a dynamic and responsive user interface, Firebase for seamless hosting, and EmailJS for efficient communication. 
                            </Card.Text>
                            <a href="https://www.manixtinting.com" target="_blank" rel="noopener noreferrer"><Button >Go to Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} className="pb-3">
                    <Card>
                        <a href="https://tech-temple.web.app/" target="_blank"><Card.Img src={techTempleImg} alt="tech-temple website thumbnail" /></a>
                        <Card.Body style={{ minHeight: "250px" }}>
                            <hr />
                            <Card.Title>Tech Temple eCommerce Store</Card.Title>
                            <Card.Text>
                                Front-End of a technology centered eCommerce website crafted with React, this project features responsive design along with reducer and context logic to incorporate a cart component.
                            </Card.Text>
                            <a href="https://tech-temple.web.app/" target="_blank"><Button >Go to Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} className="pb-3">
                    <Card>
                        <a href="#" onClick={openModal}><Card.Img src={summitBankWebsiteImg} alt="summit bank website thumbnail" /></a>
                        <Card.Body style={{ minHeight: "250px" }}>
                            <hr />
                            <Card.Title>Summit Bank</Card.Title>
                            <Card.Text>
                                Mock Site for a Fictitious Bank. This project features the front end of a bank, serving as a landing page that showcases potential customers the products that the bank offers. The site also includes a functional retirement calculator under the 'Retirement' tab. Check it out!
                            </Card.Text>
                            <a href="#" onClick={openModal}><Button >Go to Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} className="pb-3">
                    <Card>
                        <a href="https://budget-tracker-afeab.web.app/" target="_blank" rel="noopener noreferrer"><Card.Img src={budgetPlanningWebsiteImg} alt="budget planner website thumbnail" /></a>
                        <Card.Body style={{ minHeight: "250px" }}>
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
            <Modal show={showWarningModal} onHide={closeModal} >
                <Modal.Header closeButton style={{ backgroundColor: "#FFC866" }}>
                    <Modal.Title>Heads Up!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The following project is so awesome that it got flagged by Google.
                    I assume this has to do with the fact that this is a mock website for a fake bank, making them think that this is a phishing site.
                    If you get a red warning screen, click on the <strong>Details</strong> button and then click on the <span className="underline">visit this unsafe site</span> link. I am currently working with Google to have the flag removed.
                    <br />
                    If you do not feel safe visiting the website, click <a href="#" onClick={openBankImgsModal}>here</a> to view some screenshots instead.
                </Modal.Body>
                <Modal.Footer>
                    <a href="https://summit-bank-a5b6f.web.app" target="_blank" rel="noopener noreferrer"><Button variant="primary" onClick={closeModal}>
                        Go to the Website
                    </Button>
                    </a>
                </Modal.Footer>
            </Modal>
            <Modal show={showBankImgsModal} onHide={closeBankImgsModal} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Summit Bank Project Screenshots</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modalImgTxt">Home screen or landing page for the project:</p>
                    <Image className="pb-5" src={SummitBankHomeImg} alt="SummitBank website screenshot Home" fluid />
                    <p className="modalImgTxt">Checking account information page:</p>
                    <Image className="pb-5" src={SummitBankCheckingImg} alt="SummitBank website screenshot Home" fluid />
                    <p className="modalImgTxt">Credit card information page:</p>
                    <Image className="pb-5" src={SummitBankCCImg} alt="SummitBank website screenshot Home" fluid />
                    <p className="modalImgTxt">Retirement page with a fully functional retirement calculator:</p>
                    <Image className="pb-5" src={SummitBankRetirementImg} alt="SummitBank website screenshot Home" fluid />
                </Modal.Body>
                <Modal.Footer>
                    <a href="https://summit-bank-a5b6f.web.app" target="_blank" rel="noopener noreferrer"><Button variant="primary" onClick={closeModal}>
                        Go to the Website
                    </Button>
                    </a>
                    <Button variant="danger" onClick={closeBankImgsModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
};

export default ProjectsSection;