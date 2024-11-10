import React, { useState } from 'react'; 
import { Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import motion for animations
import 'bootstrap/dist/css/bootstrap.min.css';
import './Courses.css'; // Ensure this file includes necessary styles
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Container from 'react-bootstrap/Container';
const Courses = () => {
    const [showScholarshipDetails, setShowScholarshipDetails] = useState(false);
    const [showInternationalDetails, setShowInternationalDetails] = useState(false);

    const toggleScholarshipDetails = () => {
        setShowScholarshipDetails(!showScholarshipDetails);
    };

    const toggleInternationalDetails = () => {
        setShowInternationalDetails(!showInternationalDetails);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 1 }}
        >
            <div className="courses-section">
                <h2 className="text-center my-4">Scholarships and International Opportunities</h2>
                <Row className="text-center">
                    <Col md={6}>
                        <ProgramCard
                            title="Scholarships"
                            imageUrl="./assets/scholarships.jpg"
                            description="Explore various scholarship opportunities available for international students, including performance-based scholarships and grants."
                            toggleDetails={toggleScholarshipDetails}
                            showDetails={showScholarshipDetails}
                            details={
                                <>
                                    <h4>Governmental Scholarships</h4>
                                    <p>Governmental scholarships are offered by various national and local governments to support international students in their educational pursuits...</p>
                                    <h4>Performance Scholarships</h4>
                                    <p>Performance scholarships are awarded to students who excel academically or demonstrate outstanding talent...</p>
                                </>
                            }
                        />
                    </Col>

                    <Col md={6}>
                        <ProgramCard
                            title="International Opportunities"
                            imageUrl="./assets/international.jpeg"
                            description="Discover the Erasmus program and other international partnerships that enhance your academic experience and cultural exposure."
                            toggleDetails={toggleInternationalDetails}
                            showDetails={showInternationalDetails}
                            details={
                                <>
                                    <h4>Erasmus Scholarships</h4>
                                    <p>Erasmus scholarships provide international students with the opportunity to study abroad in various European countries...</p>
                                    <h4>Erasmus+ Program</h4>
                                    <p>The Erasmus+ program enhances educational and training opportunities for students...</p>
                                    <h4>EU Scholarships</h4>
                                    <p>Our EU scholarships support students from the European Union and beyond...</p>
                                </>
                            }
                        />
                    </Col>
                </Row>
            </div>
              {/* Contact Section */}
        <section className="contact-section bg-dark text-white py-5">
        <Container>
            <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-4"
            >
                Contact Us
            </motion.h3>
            <Row>
                <Col className="text-center">
                    <p>If you have any questions, feel free to contact our admissions office or schedule a visit. We look forward to hearing from you!</p>
                    {/* Get in Touch Button */}
                    <Link to="/contact">
                        <button className="contact-btn">Get in Touch</button>
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>
        </motion.div>

        
    );
}

const ProgramCard = ({ title, imageUrl, description, toggleDetails, showDetails, details }) => {
    return (
        <Card className="course-card">
            <motion.div
                className="course-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    height: '400px',
                    position: 'relative',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h4 style={titleStyles.cardTitle}>{title}</h4>
            </motion.div>
            <Card.Body>
                <Card.Text>{description}</Card.Text>
                <button className="btn btn-primary" onClick={toggleDetails}>Learn More</button>
                {showDetails && (
                    <motion.div
                        className="details-container"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.5 }}
                    >
                        {details}
                    </motion.div>
                )}
            </Card.Body>
        </Card>
        
        
    );
};

// Define styles for course titles
const titleStyles = {
    cardTitle: {
        fontSize: '1.5em',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '10px 15px',
        borderRadius: '40px',
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translate(-50%, 0)',
        width: 'fit-content',
    },
};

export default Courses;
