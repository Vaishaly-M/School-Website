import React, { useEffect }  from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Footer.css';
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const { pathname } = useLocation(); // Detect route changes

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when pathname changes
  }, [pathname]);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          {/* School Info Section */}
          <img
            src="/assets/school-logo.png"
            alt="School Logo"
            className="footer-logo"
          />
          <h4>Our School Name</h4>
          <p>
            A place of excellence in education, nurturing young minds with
            knowledge and wisdom. Inspiring future leaders.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/events">Events & News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt className="footer-icon" /> 123 School Lane, City, Country</p>
          <p><FaPhone className="footer-icon" /> +94 71 234 5678</p>
          <p><FaEnvelope className="footer-icon" /> contact@ourschool.com</p>
          <p>
            <a href="https://www.facebook.com/share/15vJnCKbD8/" target="_blank" rel="noopener noreferrer" className="facebook-link">
              <FaFacebook className="footer-icon" /> Follow us on Facebook
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Line & Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} R/Nivi/KMMV. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
