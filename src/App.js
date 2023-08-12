import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Cover/>
    </div>
  );
}

export default App;
