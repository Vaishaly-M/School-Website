import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Donation from './pages/Donation';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import UpcomingEvents from './pages/UpcomingEvents';
import Achievements from './pages/Achievements';
import SupportUs from "./pages/SupportUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/supportus" element={<SupportUs />} />
      </Routes>
    </Router>
  );
}

export default App;
