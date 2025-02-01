import React from "react";
import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Container className="about-us-container my-5">
        {/* School Info Section */}
        <Row className="text-center mb-4">
          <Col>
            <Image
              src="/assets/images/school-logo.jpg"
              alt="School Logo"
              className="school-logo"
              width={150}
              height={150}
              roundedCircle
            />
            <h1 className="mt-3">R/Nivi/Kahawatta Muslim Maha Vidyala</h1>
            <h4>Principal: M.J.M.Milhan</h4>
          </Col>
        </Row>

        {/* Mission and Vision Section */}
        <Row className="my-5">
          <Col className="vision-mission">
            <h2 className="text-center">Our Vision & Mission</h2>
            <Row className="my-4">
              <Col md={6}>
                <h4>Vision</h4>
                <p>
                  Our vision is to provide an inclusive, innovative, and
                  enriching environment where students grow and thrive academically,
                  emotionally, and socially.
                </p>
              </Col>
              <Col md={6}>
                <h4>Mission</h4>
                <p>
                  Our mission is to foster a passion for learning through
                  creativity, innovation, and academic excellence. We aim to
                  develop responsible global citizens who are equipped to face the
                  challenges of the future.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* History Section */}
        <Row className="my-5">
          <Col className="history-section">
            <h2 className="text-center">History of R/Nivi/Kahawatta Muslim Maha Vidyala</h2>
            <p>
              Established in [Year], R/Nivi/Kahawatta Muslim Maha Vidyala has been a beacon of
              educational excellence. Over the years, we have grown from a small
              local institution into a prominent school in the region. Our
              commitment to nurturing young minds continues to drive us forward.
            </p>
          </Col>
        </Row>

        {/* Past Principals Section */}
        <Row className="my-5">
          <Col className="past-principals">
            <h2 className="text-center">Past Principals</h2>
            <ListGroup variant="flush">
              <ListGroup.Item>Mr. [Principal Name 1] - [Years]</ListGroup.Item>
              <ListGroup.Item>Mrs. [Principal Name 2] - [Years]</ListGroup.Item>
              <ListGroup.Item>Mr. [Principal Name 3] - [Years]</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* School Details Section */}
        <Row className="my-5">
          <Col className="school-statistics">
            <h2 className="text-center">School Statistics</h2>
            <Row className="my-4">
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Number of Teachers</Card.Title>
                    <Card.Text>Current number of teachers: 50</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Number of Students</Card.Title>
                    <Card.Text>Current number of students: 500</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
