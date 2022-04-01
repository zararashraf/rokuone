import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Footer />
    </React.Fragment>
  );
}

export default App;
