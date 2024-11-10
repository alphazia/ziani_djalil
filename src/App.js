import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Courses from './Courses';
import Contact from './Contact';
import HigherEducation from './medical';
import Medical from './medical';
import Engineering from './Engineering';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Content from './contentofhome';
import Scholarships from './higher-education';
import PreparatoryYear from './romanian';
import HomeBody from './homebody';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

function App() {
  return (
    <Router>
  <Helmet>
    <title>Study-Ro</title>
    <link rel="icon" href="/icon.png"  />
  </Helmet>


      <motion.div style={{ width: '100%' }}>
        <Navbar className="justify-content-center" bg="light" expand="lg">
          <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className={({ isActive }) => (isActive ? 'highlight' : '')}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/higher-education" element={<Scholarships />} />
          <Route path="/Engineering" element={<Engineering />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/romanian" element={<PreparatoryYear />} />
        </Routes>
      </motion.div>
      
    </Router>
  );
}

export default App;
