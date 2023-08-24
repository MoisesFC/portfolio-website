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
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
