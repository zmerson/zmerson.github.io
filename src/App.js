import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<Contact />} />
          <Route path="/contact" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;