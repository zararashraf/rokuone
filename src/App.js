import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Terms from './pages/Terms';
import KeywordResearchTool from './pages/seo/KeywordResearchTool'
import Header from './components/layouts/Header';
import Hero from './components/layouts/Hero';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Footer />
    </React.Fragment>
  );
}

export default App;
