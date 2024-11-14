import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import SlideExample from './slide';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'; // Import the Card component
import 'bootstrap/dist/css/bootstrap.min.css';
import './Courses.css'; // Ensure this file includes necessary styles
import HomeBody from './homebody'; // Additional component for more content
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom


const Content = () => (
  <motion.div
    initial={{ opacity: 0 }} // Initial state: fully transparent
    animate={{ opacity: 1 }} // Animate to full opacity
    exit={{ opacity: 0 }} // Fade out when the component leaves
    transition={{ duration: 1 }} // Transition duration of 1 second
  >
    <div className="content-container">
      {/* Hero Section with Slideshow */}
      <SlideExample />

      {/* Introduction Section */}
      <section className="intro-section">
        <Container>
          <Row>
            <Col>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-4"
              >
                <h5>Welcome to your future</h5>
              </motion.h2>
              <p className="text-center">
              Discover a university dedicated to helping you succeed. With world-class education, diverse programs, and an inspiring campus life, we’re here to support your journey. Explore our opportunities and start your application to shape a brighter future.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Academic Programs Section */}
      <section className="programs-section">
        <Container>
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-4"
          >
            Academic Programs
          </motion.h3>
          <Row>
            {/* Example Program Cards */}
            <Col md={4}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-3d-printer-in-use-by-engineering-students-image_3863968.jpg" />
                  <Card.Body>
                    <Card.Title>Engineering</Card.Title>
                    <Card.Text>
                      Engineering programs provide students with the skills and knowledge to tackle global challenges. With a focus on innovation and research, our graduates are ready to lead in diverse industries.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col md={4}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <Card.Img variant="top" src="https://www.nottingham.ac.uk/medicine/images-multimedia/study-with-us/undergraduate-study-content-card.jpg" />
                  <Card.Body>
                    <Card.Title>Medicine</Card.Title>
                    <Card.Text>
                      Medical school offers a comprehensive curriculum designed to train future healthcare professionals. From clinical practice to research, we prepare students for impactful careers in medicine.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col md={4}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <Card.Img variant="top" src="https://unibuc.ro/wp-content/uploads/2022/03/17.jpg" />
                  <Card.Body>
                    <Card.Title>Preparatory year </Card.Title>
                    <Card.Text>
                    The Preparatory Year equips students with essential language skills and foundational knowledge, preparing them for university success through immersive lessons and cultural experiences.





</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Research Opportunities Section */}
      <section className="research-section bg-light">
        <Container>
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-4"
          >
            Research Opportunities
          </motion.h3>
          <Row className="justify-content-center">
          <Col md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Card>
                  <Card.Img variant="top" src="https://cdn.digitaleurope.org/uploads/2018/10/Research-Innovation-1-e1549447938766.jpg" />
                  <Card.Body>
                    <Card.Title>Innovative Research</Card.Title>
                    <Card.Text>
                      Universities offers state-of-the-art research facilities and collaborations with industry leaders. Explore groundbreaking projects in fields ranging from biotechnology to artificial intelligence.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Campus Life Section */}
      <section className="campus-life-section">
        <Container>
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-4"
          >
            Campus Life
          </motion.h3>
          <Row>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Card>
                  <Card.Img variant="top" src="https://estudiar.vamtam.com/wp-content/uploads/2020/12/iStock-1210745478-conflicted-scaled.jpg" />
                  <Card.Body>
                    <Card.Title>Vibrant Campus</Card.Title>
                    <Card.Text>
                      Our beautiful campus is a hub of activity, with plenty of spaces for students to study, relax, and socialize. From sports to cultural events, there’s always something happening.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Card>
                  <Card.Img variant="top" src="https://www.romaniaexperience.com/wp-content/uploads/2022/10/students-in-Romania-1200x800.jpg" />
                  <Card.Body>
                    <Card.Title>Student Clubs</Card.Title>
                    <Card.Text>
                      Join one of our many student clubs to enhance your university experience. Whether you're passionate about music, technology, or community service, there’s a group for you.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Admissions and Scholarships Section */}
      <section className="admissions-section bg-light">
        <Container>
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-4"
          >
            Admissions & Scholarships
          </motion.h3>
          <Row>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <Card.Body>
                    <Card.Title>Apply Now</Card.Title>
                    <Card.Text>
                      Ready to start your academic journey? Apply today and take the first step towards your future at our university.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <Card.Body>
                    <Card.Title>Scholarships</Card.Title>
                    <Card.Text>
                      Learn about various scholarships available to help fund your education. We offer both merit-based and need-based scholarships for deserving students.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-dark text-white py-5">
        <Container>
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-4"
          >
            
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
        <h4 > developed by ziani </h4>
        </Container>
      </section>
    </div>
  </motion.div>
);

export default Content;
