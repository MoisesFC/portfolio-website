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
import gcpLogo  from "../img/gcpLogo.png";




const SkillsSection = () => {
    return (
        <Container className="pt-5">
            <hr />
            <h1>Tech Skills</h1>
            <Row>
                <Col>
                    <Card className="no-background-border">
                        <Card.Img src={jsLogo} />
                        <Card.Title>JavaScript</Card.Title>
                    </Card>
                </Col>
                <Col>
                <Card className="no-background-border">
                        <Card.Img src={reactLogo} />
                        <Card.Title>React</Card.Title>
                    </Card>
                </Col>
                <Col>
                <Card className="no-background-border">
                        <Card.Img src={nodeLogo} />
                        <Card.Title>NodeJS</Card.Title>
                    </Card>
                </Col>
                <Col>
                <Card className="no-background-border">
                        <Card.Img src={mongoLogo} />
                        <Card.Title>MongoDB</Card.Title>
                    </Card>
                </Col>
                <Col>
                <Card className="no-background-border">
                        <Card.Img src={expressLogo} />
                        <Card.Title>ExpressJS</Card.Title>
                    </Card>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col>
                    <Card className="no-background-border">
                        <Card.Img src={firebaseLogo} />
                        <Card.Title>Google Firebase</Card.Title>
                    </Card>
                </Col>
                <Col>
                <Card className="no-background-border">
                        <Card.Img src={htmlLogo} />
                        <Card.Title>HTML</Card.Title>
                    </Card>
                </Col>
                <Col>
                <Card className="no-background-border">
                        <Card.Img src={cssLogo} />
                        <Card.Title>CSS</Card.Title>
                    </Card>
                </Col>
                <Col>
                <Card className="no-background-border">
                        <Card.Img src={gcpLogo} />
                        <Card.Title>GCP</Card.Title>
                    </Card>
                </Col>
                <Col>
                <Card className="no-background-border">
                        <Card.Img src={reduxLogo} />
                        <Card.Title>Redux</Card.Title>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default SkillsSection;