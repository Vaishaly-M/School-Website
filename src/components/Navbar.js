import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/assets/images/school-logo.jpg" alt="School Logo" />
                <span>R/Nivi/Kahawatta Muslim Maha Vidyala</span>
            </div>
             <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/events">Events & News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
             </ul>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
