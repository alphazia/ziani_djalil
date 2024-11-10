import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUniversity, FaGlobe, FaHandshake, FaLifeRing, FaMapMarkerAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
      animate={{ opacity: 1 }} // Fade to full opacity (visible)
      exit={{ opacity: 0 }} // Fade out to opacity 0 when leaving
      transition={{ duration: 1 }} // Transition duration of 1 second
    >
      <Container fluid className="about-section">
        {/* Hero Image Section */}
        <div className="hero-image">
          <div className="hero-text">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h6>Studying in Romania</h6> 
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Discover a world-class education in a country rich with culture and opportunity.
            </motion.p>
          </div>
        </div>

        {/* Key Benefits Section */}
        <Container className="about-content text-center py-5">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-5"
          >
            Key Benefits of Studying in Romania
          </motion.h3>

          <Row>
            <Col md={4} className="benefit">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaUniversity size={50} color="#007bff" />
                <h4>High Academic Standards</h4>
                <p>Romania's universities are known for their commitment to academic excellence and innovation, offering internationally recognized degrees.</p>
              </motion.div>
            </Col>

            <Col md={4} className="benefit">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FaGlobe size={50} color="#007bff" />
                <h4>Global Recognition</h4>
                <p>Romanian degrees are recognized internationally, opening up strong career opportunities worldwide in diverse fields.</p>
              </motion.div>
            </Col>

            <Col md={4} className="benefit">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FaHandshake size={50} color="#007bff" />
                <h4>Supportive Community</h4>
                <p>Join a vibrant, multicultural student body and gain lifelong connections and friendships. Our campus fosters inclusivity and growth.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>

        {/* Student Life Section */}
        <section className="student-life-section bg-light py-5">
          <Container>
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-4"
            >
              Student Life in Romania
            </motion.h3>
            <Row>
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <img src="/assets/campus-life.jpg" alt="Campus Life" className="img-fluid" />
                </motion.div>
              </Col>
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <p>
                    Romanian universities offer an incredible student experience, combining academic rigor with a rich cultural atmosphere. Whether you're exploring the stunning architecture, participating in student clubs, or attending music and arts festivals, life in Romania is vibrant and full of opportunities for personal and academic growth.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Support Services Section */}
        <section className="support-services-section py-5">
          <Container>
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-4"
            >
              Student Support & Services
            </motion.h3>
            <Row>
              <Col md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaLifeRing size={50} color="#007bff" />
                  <h4>Student Counseling</h4>
                  <p>Our dedicated counseling services provide support for students dealing with stress, homesickness, or personal challenges.</p>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <FaMapMarkerAlt size={50} color="#007bff" />
                  <h4>Campus Navigation</h4>
                  <p>Our campus offers easy access to academic buildings, dormitories, and student centers, and we provide orientation services to help students settle in.</p>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FaUniversity size={50} color="#007bff" />
                  <h4>Career Services</h4>
                  <p>Take advantage of our career counseling, internships, and job placement services to start your professional career while studying.</p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Cultural Experience Section */}
        <section className="cultural-experience-section bg-light py-5">
          <Container>
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-4"
            >
              Discover Romania’s Rich Culture
            </motion.h3>
            <Row>
              <Col>
                <motion.p
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-center"
                >
                  Romania offers a unique blend of history, culture, and natural beauty. From its medieval castles and vibrant cities to its stunning landscapes and traditional festivals, studying in Romania provides an immersive cultural experience that goes beyond the classroom.
                </motion.p>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </motion.div>
  );
};

export default About;
