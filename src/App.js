import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import BalanceEnquiry from './pages/BalanceEnquiry';
import Transfers from './pages/Transfers';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/balance">Balance Enquiry</Link></li>
            <li><Link to="/transfers">Transfers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/balance" element={<BalanceEnquiry />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
