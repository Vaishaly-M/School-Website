import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar"; // Importing Navbar component
import '../styles/Achievements.css';
import Footer from "../components/Footer";

const achievements = [
  { 
    title: 'Scholarships Awarded', 
    count: '50+', 
    description: 'Scholarships given to high-achieving students in various fields.', 
    icon: '🎓', 
    group: 'Top Students' 
  },
  { 
    title: 'O/L Results - A Passes', 
    count: '200+', 
    description: 'Students who passed the O/L exam with distinctions.', 
    icon: '📚', 
    group: 'Grade 10' 
  },
  { 
    title: 'A/L Top Rankings', 
    count: '30+', 
    description: 'Top students who achieved excellent results in their A/L exams.', 
    icon: '🏆', 
    group: 'Grade 12' 
  },
  { 
    title: 'Sports Championships', 
    count: '10+', 
    description: 'Championships won in sports like football, basketball, and athletics.', 
    icon: '⚽', 
    group: 'Sports Team' 
  },
  { 
    title: 'English Day Winners', 
    count: '25+', 
    description: 'Students who won prizes for speaking and performing on English Day.', 
    icon: '🗣️', 
    group: 'Language Enthusiasts' 
  },
  { 
    title: 'Special Recognitions', 
    count: '15+', 
    description: 'Awards given to students for their extraordinary achievements in different fields.', 
    icon: '🌟', 
    group: 'All Students' 
  },
];

function Achievements() {
  return (
    <>
      <Navbar /> 
      <motion.div 
        className="achievements-page"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="achievements-header">
          <h2>Our Proud Achievements</h2>
          <p>Recognizing the outstanding accomplishments of our students.</p>
        </div>
        <div
          className="achievements-bg"
          style={{
            backgroundImage: 'url(/assets/images/students-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <Container>
          <Row className="justify-content-center g-4">
            {achievements.map((achievement, index) => (
              <Col md={4} key={index}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card className="achievement-card">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <Card.Body>
                      <Card.Title>{achievement.title}</Card.Title>
                      <Card.Text>{achievement.description}</Card.Text>
                      <Card.Footer className="text-muted">{achievement.group}</Card.Footer>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          <div className="achievements-cta">
            <Button variant="primary">Learn More</Button>
          </div>
        </Container>
      </motion.div>
      <Footer />
    </>
  );
}

export default Achievements;
