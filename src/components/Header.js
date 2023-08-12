import { Container, Row, Col, Link } from "react-bootstrap";
import logo from "../img/logo-removebg-preview (1).png"


const Header = () => {
    return (
        <Container fluid>
            {/* First Row (Medium and larger screens) */}
            <Row className="pt-5 d-none d-md-flex">
                <Col xs={4} className="name-brand d-flex align-items-center">
                        <h1 className="mx-auto"> Moises Figueroa</h1>
                </Col>
                <Col xs={2} className="text-center d-flex align-items-center justify-content-center">
                    <a className="custom-link" href="#">ABOUT ME</a>
                </Col>
                <Col xs={2} className="text-center d-flex align-items-center justify-content-center">
                    <a className="custom-link" href="#">PROJECTS</a>
                </Col>
                <Col xs={2} className="text-center d-flex align-items-center justify-content-center">
                    <a className="custom-link" href="#">EMAIL ME</a>
                </Col>
                <Col xs={2} className="text-center d-flex align-items-center justify-content-center">
                    <a className="custom-link" href="#">GET RESUME</a>
                </Col>
            </Row>
            {/* Second Row (All screens) */}
            <Row className="d-md-none name-brand d-flex align-items-center justify-content-center pt-3">
            <h1 className="mx-auto">Moises Figueroa</h1>
            </Row>
            <Row className="pt-3 d-md-none">
                <Col xs={3} className="text-center">

                    <a className="custom-link-sm" href="#">ABOUT ME</a>
                </Col>
                <Col xs={3} className="text-center">
                    <a className="custom-link-sm" href="#">PROJECTS</a>
                </Col>
                <Col xs={3} className="text-center">
                    <a className="custom-link-sm" href="#">EMAIL ME</a>
                </Col>
                <Col xs={3} className="text-center">
                    <a className="custom-link-sm" href="#">GET RESUME</a>
                </Col>
            </Row>
        </Container>
    )
};

export default Header;