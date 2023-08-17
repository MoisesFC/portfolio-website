import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ResumePDF from "./Resume-Moises-Figueroa.pdf";
import React from 'react';
import './App.css';
import { BsLinkedin, BsGithub } from "react-icons/bs"
import Cover from './components/Cover';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className='App'>
      <>
        <Container fluid>
          {/* First Row (Medium and larger screens) */}
          <Row className="pt-5 d-none d-md-flex">
            <Col xs={4} className="name-brand d-flex align-items-center">
              <h1 className="mx-auto disappearing-name"> Moises Figueroa</h1>
            </Col>
            <Col xs={2} className="text-center d-flex align-items-center justify-content-center">
              <Col>
                <a className="social-link" href="https://www.linkedin.com/in/moisesfc" target="_blank" ><BsLinkedin style={{ fontSize: '40px', color: '#007FFF ' }}/></a></Col>
              <Col>
                <a className="social-link" href="https://www.github.com/moisesfc" target="_blank"><BsGithub  style={{ fontSize: '40px', color: 'black' }}/></a></Col>
              {/* <a className="custom-link" href="#">ABOUT ME</a> */}
            </Col>
            <Col xs={2} className="text-center d-flex align-items-center justify-content-center">
              <a className="custom-link" href="#projects">PROJECTS</a>
            </Col>
            <Col xs={2} className="text-center d-flex align-items-center justify-content-center">
              <a className="custom-link" href="mailto:figueroa.abe@outlook.com">EMAIL ME</a>
            </Col>
            <Col xs={2} className="text-center d-flex align-items-center justify-content-center">
              <a className="custom-link" href={ResumePDF} download="Resume - Moises Figueroa" target="_blank" >GET RESUME</a>
            </Col>
          </Row>
          {/* Second Row (All screens) */}
          <Row className="d-md-none name-brand d-flex align-items-center justify-content-center pt-3">
            <h1 className="mx-auto">Moises Figueroa</h1>
          </Row>
          <Row className="pt-3 d-md-none">
          <Col xs={3} className="text-center d-flex align-items-center justify-content-center">
              <Col></Col>
              <Col className='mb-3'><a href="https://www.linkedin.com/in/moisesfc" target="_blank"><BsLinkedin style={{ fontSize: '25px', color: 'blue' }}/></a></Col>
              <Col></Col>
              <Col></Col>
              <Col className='mb-3'><a href="https://www.github.com/moisesfc" target="_blank"><BsGithub  style={{ fontSize: '25px', color: 'black' }}/></a></Col>
              {/* <a className="custom-link" href="#">ABOUT ME</a> */}
            </Col>
            <Col xs={3} className="text-center">
              <a className="custom-link-sm" href="#projects">PROJECTS</a>
            </Col>
            <Col xs={3} className="text-center">
              <a className="custom-link-sm" href="mailto:figueroa.abe@outlook.com">EMAIL ME</a>
            </Col>
            <Col xs={3} className="text-center">
              <a className="custom-link-sm" href={ResumePDF} download="Resume - Moises Figueroa" target="_blank" >RESUME</a>
            </Col>
          </Row>
        </Container>

        <Cover id="cover" />
        <SkillsSection id="skills" />
        <span id="projects"><ProjectsSection id="projects" />
        </span>
      </>
    </div>
  );
}

export default App;
