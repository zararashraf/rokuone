import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </React.Fragment>
  );
}

export default App;
