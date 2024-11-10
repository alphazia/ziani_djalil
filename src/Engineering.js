import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Container from 'react-bootstrap/Container';

const Engineering = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Hero Section */}
            <motion.section
                style={{ ...styles.hero, backgroundImage: "url('./assets/eng2.jpg')" , height: '550px'}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h3 style={styles.heroTitle}>Study Engineering in Romania</h3>
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
                        title="Mechanical Engineering" 
                        imageUrl="./assets/mecha.jpg" 
                        description="The Mechanical Engineering program provides a deep understanding of mechanical systems and processes, emphasizing design, analysis, and manufacturing technologies." 
                        excellenceNote="Innovative Mechanical Solutions"
                    />

                    <ProgramCard 
                        title="Electrical Engineering" 
                        imageUrl="./assets/electrical.jpg" 
                        description="The Electrical Engineering program focuses on the study of electrical systems, electronics, and electromagnetism, preparing students for careers in various industries." 
                        excellenceNote="Pioneering Electrical Innovations"
                    />

                    <ProgramCard 
                        title="Civil Engineering" 
                        imageUrl="./assets/civil.jpg" 
                        description="Our Civil Engineering program emphasizes the design and construction of infrastructure, including roads, bridges, and buildings." 
                        excellenceNote="Building the Future"
                    />

                    <ProgramCard 
                        title="Automation Engineering" 
                        imageUrl="./assets/auto.jpeg" 
                        description="The Automation Engineering program covers control systems, robotics, and the automation of industrial processes." 
                        excellenceNote="Advancing Automation"
                    />

                    <ProgramCard 
                        title="Computer Science" 
                        imageUrl="./assets/computer-science.jpg" 
                        description="Our Computer Science program equips students with the skills needed for software development, data analysis, and artificial intelligence." 
                        excellenceNote="Innovating in Computing"
                    />

                    <ProgramCard 
                        title="Architecture" 
                        imageUrl="./assets/architecture.jpeg" 
                        description="The Architecture program combines creativity with engineering principles to design sustainable and innovative buildings." 
                        excellenceNote="Sustainable Architectural Design"
                    />
                </Row>

                <p>Explore additional fields, such as Environmental and Chemical Engineering, each contributing to innovative and practical solutions in the world of engineering.</p>
            </motion.main>

            {/* Contact Section */}
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

// ProgramCard Component for displaying each engineering program
const ProgramCard = ({ title, imageUrl, description, excellenceNote }) => (
    <Col key={title}>
        <Card className="program-card">
            <div className="card-img-overlay">
                <Card.Img variant="top" src={imageUrl} style={styles.cardImage} />
                <h3 className="overlay-title">{title}</h3>
            </div>
            <Card.Body>
                <Card.Text>{description}</Card.Text>
                <h5 style={styles.excellenceNote}>{excellenceNote}</h5>
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

// CSS for overlay styling
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

export default Engineering;
