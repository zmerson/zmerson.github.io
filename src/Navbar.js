import React from 'react';
import './Navbar.css';
import { Home, Notebook, Mail } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/"><Home/>Home</a></li>
        <li className="navbar-item"><a href="/about"><Notebook/>About</a></li>
        <li className="navbar-item"><a href="/contact"><Mail />Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;