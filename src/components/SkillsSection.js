import { Container, Row, Col, Card } from "react-bootstrap";
import jsLogo from "../img/JSLogo.png";
import reactLogo from "../img/reactLogo.png";
import nodeLogo from "../img/NodeJs.png";
import mongoLogo from "../img/MongoLogo.png";
import expressLogo from "../img/expressJS.png";
import firebaseLogo from "../img/firebaseLogo.png";
import htmlLogo from "../img/htmlLogo.png";
import cssLogo from "../img/css-logo.png";
import reduxLogo from "../img/reduxLogo.png";
import gcpLogo from "../img/gcpLogo.png";
import gitLogo from "../img/gitLogo.png";
import npmLogo from "../img/npmLogo.png";


const SkillsSection = () => {
    return (
        <Container className="pt-5">

            <h1>Tech Skills</h1>
            <hr />
            <Row>
                <Col xs={1}></Col>
                <Col xs={2}>
                    <Card className="no-background-border">
                        <Card.Img src={jsLogo} />
                        <Card.Body>
                            <Card.Title className="d-none d-lg-block" >JavaScript</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2} >
                    <Card className="no-background-border">
                        <Card.Img src={reactLogo} />
                        <Card.Body>
                            <Card.Title className="d-none d-lg-block">React</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card className="no-background-border">
                        <Card.Img src={nodeLogo} />
                        <Card.Body>
                            <Card.Title className="d-none d-lg-block">NodeJS</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card className="no-background-border">
                        <Card.Img src={mongoLogo} />
                        <Card.Body>
                            <Card.Title className="d-none d-lg-block">MondoDB</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card className="no-background-border">
                        <Card.Img src={expressLogo} />
                        <Card.Body>
                            <Card.Title className="d-none d-lg-block">ExpressJS</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row className="pt-5">
                <Col xs={1}></Col>
                <Col xs={2}>
                    <Card className="no-background-border">
                        <Card.Img src={firebaseLogo} />
                        <Card.Body>
                            <Card.Title className="d-none d-lg-block">Google Firebase</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card className="no-background-border">
                        <Card.Img src={htmlLogo} />
                        <Card.Body>
                            <Card.Title className="d-none d-lg-block">HTML</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card className="no-background-border">
                        <Card.Img src={gitLogo} />
                        <Card.Body>
                            <Card.Title className="d-none d-lg-block">Git & Github</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card className="no-background-border">
                        <Card.Img src={gcpLogo} />
                        <Card.Body>
                            <Card.Title className="d-none d-lg-block">GCP</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card className="no-background-border">
                        <Card.Img src={npmLogo} />
                        <Card.Body>
                            <Card.Title className="d-none d-lg-block">NPM</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
};

export default SkillsSection;