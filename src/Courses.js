/* eslint-disable no-undef */
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStethoscope, FaCog, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './Courses.css';
import Medical from './medical';
import Scholarships from './higher-education';
import PreparatoryYear from './romanian';

const Courses = () => {
    const navigate = useNavigate(); // Create a navigate function

    // Define the click handler
    const handleLearnMore = (path) => {
        navigate(path); // Navigate to the specified path
    };

    return (
        <motion.div
            initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
            animate={{ opacity: 1 }} // Fade to full opacity (visible)
            exit={{ opacity: 0 }} // Fade out to opacity 0 when leaving
            transition={{ duration: 1 }} // Transition duration of 1 second
        >
            <Container className="courses-section">
                <h2 className="text-center my-4">Our Courses</h2>
                <Row className="text-center">
                    <Col md={5} className="course-card">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }} // Cards start with a slight offset (20px) and are invisible
                            animate={{ y: 0, opacity: 1 }} // Cards animate to their normal position and become visible
                            transition={{ duration: 0.5 }}
                        >
                            <FaStethoscope size={50} color="#007bff" />
                            <h4>Medicine</h4>
                            <p>Join one of the most prestigious medical programs in Romania. Our curriculum is designed to provide you with comprehensive knowledge and practical skills to excel in the medical field.</p>
                            <button className="btn btn-primary" onClick={() => handleLearnMore('/medical')}>Learn More</button> 
                        </motion.div>
                    </Col>

                    <Col md={5} className="course-card">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }} // Cards start with a slight offset (20px) and are invisible
                            animate={{ y: 0, opacity: 1 }} // Cards animate to their normal position and become visible
                            transition={{ duration: 0.5, delay: 0.2 }} // Delay for this card's animation
                        >
                            <FaCog size={50} color="#007bff" />
                            <h4>Engineering</h4>
                            <p>Explore a wide range of engineering disciplines, including civil, mechanical, and electrical engineering. Our programs focus on innovation, sustainability, and hands-on experience.</p>
                            <button className="btn btn-primary" onClick={() => handleLearnMore('/Engineering')}>Learn More</button>                    
                        </motion.div>
                    </Col>

                    <Col md={5} className="course-card">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }} // Cards start with a slight offset (20px) and are invisible
                            animate={{ y: 0, opacity: 1 }} // Cards animate to their normal position and become visible
                            transition={{ duration: 0.5, delay: 0.4 }} // Delay for this card's animation
                        >
                            <FaGraduationCap size={50} color="#007bff" />
                            <h4>Scholarships</h4>
                            <p>Our higher education programs are designed for students who aspire to excel academically and professionally. We offer advanced degrees in various fields tailored to meet your career goals.</p>
                            <button className="btn btn-primary" onClick={() => handleLearnMore('/higher-education')}>Learn More</button>
                        </motion.div>
                    </Col>

                    <Col md={5} className="course-card">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }} // Cards start with a slight offset (20px) and are invisible
                            animate={{ y: 0, opacity: 1 }} // Cards animate to their normal position and become visible
                            transition={{ duration: 0.5, delay: 0.6 }} // Delay for this card's animation
                        >
                            <FaLanguage size={50} color="#007bff" />
                            <h4>Romanian Language</h4>
                            <p>Our Romanian Language program offers students a comprehensive approach to mastering both the language and cultural nuances. Perfect for those looking to study or work in Romania.</p>
                            <button className="btn btn-primary" onClick={() => handleLearnMore('/romanian')}>Learn More</button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default Courses;
