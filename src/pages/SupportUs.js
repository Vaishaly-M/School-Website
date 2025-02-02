import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaSchool, FaHeart, FaHandHoldingUsd, FaChalkboardTeacher, FaUsers, FaBuilding } from 'react-icons/fa';
import '../styles/SupportUs.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function SupportUs() {
  const navigate = useNavigate(); // Initialize navigate

  const handleDonateClick = () => {
    navigate('/login'); // Navigate to the login page when the donate button is clicked
  };

  return (
    <>
      <Navbar />
      <div id="navbar-container"></div>
      <script src="/components/Navbar.js"></script>

      <div className="support-page">
        

        {/* Support and Impact Section */}
        <section className="support-impact-section">
          <Container>
            <h2 className="section-title">Why We Need Your Support</h2>

            {[ 
              { icon: <FaHandHoldingUsd />, title: "Financial Aid for Students", text: "Many students come from underprivileged backgrounds and struggle to afford tuition fees. Your donations help us provide scholarships, ensuring that no student is denied education due to financial constraints. Education is a right, and your support makes it accessible for all." },
              { icon: <FaChalkboardTeacher />, title: "Teacher Development", text: "Quality education starts with well-trained educators. We invest in professional development, training programs, and resources for teachers, helping them enhance their teaching skills and stay updated with modern educational techniques. Your support uplifts our entire teaching community." },
              { icon: <FaUsers />, title: "Community Programs", text: "Beyond academics, our students benefit from sports, extracurricular activities, and community-building initiatives. These programs foster teamwork, leadership, and creativity, shaping students into well-rounded individuals ready to contribute to society. Your donations fund these life-enriching experiences." },
              { icon: <FaBuilding />, title: "Expanding Infrastructure", text: "A conducive learning environment requires proper classrooms, libraries, and labs. Many of our facilities need renovation and upgrades to support modern education. With your support, we can build better schools, ensuring that students have the infrastructure they need to thrive." }
            ].map((reason, index) => (
              <Row key={index} className="support-row">
                <Col md={12} className="support-card">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <div className="support-icon">{reason.icon}</div>
                    <h4>{reason.title}</h4>
                    <p>{reason.text}</p>
                  </motion.div>
                </Col>
              </Row>
            ))}

            {/* Hero Section */}
        <section className="hero-section" style={{ backgroundImage: "url('/assets/images/support-hero.jpg')" }}>
          <div className="hero-overlay">
            <Container>
              <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                Empower the Future – Support Our Students Today!
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
                Your generosity fuels education, improves facilities, and provides scholarships for underprivileged students.
              </motion.p>
            </Container>
          </div>
        </section>

            <h2 className="section-title">Why Your Support Matters</h2>
            <Row className="impact-row">
              {[ 
                { icon: <FaGraduationCap />, title: "500+ Scholarships", text: "Your donations helped over 500 students continue their education last year." },
                { icon: <FaBook />, title: "Better Learning", text: "Funds are used for new books, modern classrooms, and better facilities." },
                { icon: <FaSchool />, title: "Upgraded Facilities", text: "Improved infrastructure creates a better learning environment." },
                { icon: <FaHeart />, title: "Community Growth", text: "Your generosity strengthens our school and the future of our students." }
              ].map((impact, index) => (
                <Col key={index} md={3} className="impact-card">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <div className="impact-icon">{impact.icon}</div>
                    <h4>{impact.title}</h4>
                    <p>{impact.text}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Donate Now Section */}
        <section className="donate-now-section">
          <Container className="text-center">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="primary" size="lg" className="donate-btn" onClick={handleDonateClick}>
                Donate Now
              </Button>
            </motion.div>
          </Container>
        </section>

      </div>

      <Footer /> 
      <div id="footer-container"></div>
      <script src="/components/Footer.js"></script>
    </>
  );
}

export default SupportUs;


