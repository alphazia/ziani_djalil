import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Container from 'react-bootstrap/Container';
const Medical = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Hero Section */}
            <motion.section
                style={{ ...styles.hero, backgroundImage: "url('https://images7.alphacoders.com/697/thumb-1920-697207.jpg')" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h3 style={styles.heroTitle}>Study Medical Fields in Romania</h3>
            </motion.section>

            {/* Main Content */}
            <motion.main
                style={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <h2>Programs and Specializations</h2>

                <Row xs={1} md={2} className="g-4">
                    <ProgramCard 
                        title="Medicine" 
                        imageUrl="https://www.future-doctor.de/wp-content/uploads/2024/03/medizinstudium_im_Ausland_auf_Deutsch-1440x961.jpg" 
                        description="The Medicine program offers a comprehensive curriculum covering clinical practice, medical research, and patient care." 
                        excellenceNote="World-Class Medical Education"
                    />

                    <ProgramCard 
                        title="Pharmacy" 
                        imageUrl="https://png.pngtree.com/thumb_back/fw800/background/20220319/pngtree-science-student-holding-up-test-tube-technology-man-medicine-photo-image_16676080.jpg" 
                        description="Our Pharmacy program trains students in drug formulation, distribution, and patient care, emphasizing the role of pharmacists in healthcare." 
                        excellenceNote="Excellence in Pharmaceutical Sciences"
                    />

                    <ProgramCard 
                        title="Dentistry" 
                        imageUrl="https://cliniquedeschutes.com/wp-content/uploads/2022/11/Cou%CC%82t-nettoyage-dentaire.jpeg" 
                        description="The Dentistry program focuses on oral health, providing students with hands-on experience in dental procedures and patient management." 
                        excellenceNote="Advanced Dental Training"
                    />

                    <ProgramCard 
                        title="Veterinary Medicine" 
                        imageUrl="https://f.maformation.fr/edito/sites/3/2021/08/veterinaire.jpeg" 
                        description="Our Veterinary Medicine program equips students with the knowledge and skills to diagnose and treat animal health issues." 
                        excellenceNote="Leading in Veterinary Care"
                    />
                </Row>

                <p>Explore more fields in the healthcare sector, including Nursing and Public Health, each focusing on crucial aspects of health and wellness.</p>
            </motion.main>
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
};

// ProgramCard Component to render individual cards for each program with title overlay and excellence note
const ProgramCard = ({ title, imageUrl, description, excellenceNote }) => (
    <Col key={title}>
        <Card className="program-card">
            <div className="card-img-overlay">
                <Card.Img variant="top" src={imageUrl} style={styles.cardImage} />
                <h3 className="overlay-title">{title}</h3>
            </div>
            <Card.Body>
                <Card.Text>{description}</Card.Text>
                <h5 style={styles.excellenceNote}>{excellenceNote}</h5> {/* Excellence note in bold text */}
            </Card.Body>
        </Card>
    </Col>
);

// Styles as a JavaScript object
const styles = {
    hero: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        borderRadius: '10px',
    },
    heroTitle: {
        fontSize: '1.5em',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '10px 15px',
        borderRadius: '40px',
    },
    content: {
        padding: '20px',
        maxWidth: '1300px',
        margin: '0 auto',
    },
    contact: {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        textAlign: 'center',
    },
    cardImage: {
        position: 'relative',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px 8px 0 0',
    },
    excellenceNote: {
        fontWeight: 'bold',
        fontSize: '1.25em',
        color: '#555',
        marginTop: '10px',
    }
};

// Additional CSS for overlay title and image styling
const overlayStyles = `
    .program-card {
        position: relative;
        overflow: hidden;
    }

    .card-img-overlay {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .overlay-title {
        position: absolute;
        font-size: 2em;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 20px;
        border-radius: 5px;
        text-align: center;
    }
`;

// Injecting CSS for overlay styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = overlayStyles;
document.head.appendChild(styleSheet);

export default Medical;
