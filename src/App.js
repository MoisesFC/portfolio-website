import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Cover/>
      <SkillsSection/>
    </div>
  );
}

export default App;
