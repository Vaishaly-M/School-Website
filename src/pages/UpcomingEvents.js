import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaNewspaper, FaCalendarAlt } from "react-icons/fa"; // Import icons
import Navbar from "../components/Navbar"; // Import Navbar component
import "../styles/UpcomingEvents.css";
import Footer from "../components/Footer";

// Event Data
const events = [
  {
    title: "Science Fair 2025",
    date: "February 10, 2025",
    description:
      "Join us for the annual science fair showcasing students’ innovations. Explore exciting projects, experiments, and scientific discoveries.",
    image: "/assets/images/science-fair.jpg",
  },
  {
    title: "Annual Sports Day",
    date: "February 15, 2025",
    description:
      "A day filled with sports, teamwork, and unforgettable moments. From relay races to football matches, students showcase their best performances.",
    image: "/assets/images/sports-day.jpg",
  },
  {
    title: "Art Exhibition 2025",
    date: "February 20, 2025",
    description:
      "Experience the creativity of our students through their amazing artwork, including paintings, sculptures, and digital masterpieces.",
    image: "/assets/images/art-exhibition.jpg",
  },
];

// News Data
const news = [
  {
    title: "New Science Lab Inauguration",
    description:
      "Our school proudly announces the opening of a state-of-the-art science laboratory, fully equipped with modern technology to enhance students’ learning experience.",
    image: "/assets/images/science-lab.jpg",
  },
  {
    title: "Robotics Club Wins National Award",
    description:
      "The school's robotics club secured the first-place trophy at the National Robotics Championship. Their innovative design and teamwork were praised by industry experts.",
    image: "/assets/images/robotics-award.jpg",
  },
  {
    title: "Student Council Elections 2025",
    description:
      "The student council elections for 2025 were successfully conducted, with an enthusiastic turnout from students. Meet the newly elected representatives!",
    image: "/assets/images/student-council.jpg",
  },
];

function UpcomingEvents() {
  return (
    <>
      <Navbar /> {/* Adding Navbar here */}
      <Container className="upcoming-events-container">
        {/* Events Section */}
        <Row>
          <Col className="section-heading">
            <FaCalendarAlt className="section-icon" />
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">
              Stay informed about our school's exciting upcoming events.
            </p>
          </Col>
        </Row>
        <Row className="card-container">
          {events.map((event, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src={event.image} />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Subtitle className="event-date">{event.date}</Card.Subtitle>
                  <Card.Text>{event.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* News Section */}
        <Row>
          <Col className="section-heading">
            <FaNewspaper className="section-icon" />
            <h2 className="section-title">Latest News</h2>
            <p className="section-subtitle">
              Catch up on the latest news and announcements from our school.
            </p>
          </Col>
        </Row>
        <Row className="card-container">
          {news.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default UpcomingEvents;
