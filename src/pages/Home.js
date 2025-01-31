import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import '../styles/Home.css';

function Home() {
  return (
    <Container fluid className="home-container">
      {/* Hero Section */}
      <Row className="my-5">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/images/event1.jpg"
                alt="Event 1"
              />
              <Carousel.Caption>
                <h3>School Event 1</h3>
                <p>Join us for a celebration of excellence in education!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/images/event2.jpg"
                alt="Event 2"
              />
              <Carousel.Caption>
                <h3>School Event 2</h3>
                <p>Don't miss our annual sports day and festivities!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="text-center mt-3">
            <h2>Welcome to [School Name], where excellence begins!</h2>
            <Button variant="primary" as={Link} to="/about" className="mx-2">
               About Us
            </Button>
            <Button variant="secondary" href="#events" className="mx-2">
              View Events
            </Button>
            <Button variant="info"  as={Link} to="/contact" className="mx-2">
              Contact Us
            </Button>
          </div>
        </Col>
      </Row>

      {/* Login/Register Links */}
      <Row className="text-center my-5">
        <Col>
          <h3>Welcome to Our Platform!</h3>
          <p>Access your account or create one below:</p>
          <Link to="/login">
            <Button variant="primary" className="m-2">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="secondary" className="m-2">
              Register
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;