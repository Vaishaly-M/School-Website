import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion"; // Added for animations
import { FaCalendarAlt, FaTrophy, FaPhone, FaEnvelope, FaInfoCircle, FaBalanceScale, FaPeopleArrows,} from "react-icons/fa";
import "../styles/Home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-container">
      <nav className="home-nav">
        <div className="contact-info">
          <span>
            <FaPhone className="icon" /> +94 77 123 4567
          </span>
          <span>
            <FaEnvelope className="icon" /> example@school.com
          </span>
        </div>
        <div className="sup-buttons">
        <div className="sup-button">
          <Link to="/supportus">
            <button className="support-btn">Support US</button>
          </Link>
        </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
      >
        <div className="hero-overlay">
          <Container>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome to R/Nivi/Kahawatta Muslim Maha Vidyala
            </motion.h1>
            <motion.p
              className="hero-subtext"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Empowering young minds with knowledge, creativity, and innovation.
            </motion.p>
            <div className="hero-buttons">
              <Link to="/contact">
                <Button variant="light" size="lg" className="ml-3">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {/* Information Cards */}
      <Container className="info-section">
        <Row>
          {[
            {
              icon: <FaCalendarAlt />,
              title: "Upcoming Events",
              text: "Don't miss out on our exciting school programs and activities.",
              link: "/events",
              variant: "outline-primary",
            },
            {
              icon: <FaTrophy />,
              title: "Achievements",
              text: "Celebrating excellence in academics, sports, and arts.",
              link: "/achievements",
              variant: "outline-success",
            },
            {
              icon: <FaInfoCircle />,
              title: "About Us",
              text: "We aim to create future leaders with knowledge and ethics.",
              link: "/about",
              variant: "outline-info",
            },
            {
              icon: <FaEnvelope />,
              title: "Contact Us",
              text: "Have questions? We're here to help you.",
              link: "/contact",
              variant: "outline-dark",
            },
          ].map((card, index) => (
            <Col md={3} key={index} className="info-card">
              <motion.div whileHover={{ scale: 1.05 }}>
                {card.icon}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link to={card.link}>
                  <Button variant={card.variant}>
                    {card.title === "Achievements" ? "See More" : "Learn More"}
                  </Button>
                </Link>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our Values Section */}
      <section className="values-section">
        <Container>
          <h2 className="section-title">Our Values</h2>
          <Row className="justify-content-center">
            {[
              {
                icon: <FaBalanceScale />,
                title: "Integrity",
                text: "We uphold honesty, fairness, and transparency in all our actions.",
              },
              {
                icon: <FaTrophy />,
                title: "Excellence",
                text: "We strive for excellence in everything we do, from academics to extracurriculars.",
              },
              {
                icon: <FaPeopleArrows />,
                title: "Community",
                text: "We foster a spirit of collaboration, unity, and support within our school.",
              },
            ].map((value, index) => (
              <Col md={4} key={index} className="value-card">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
