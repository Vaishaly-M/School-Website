import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-box">
            <h2>Register</h2>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your password" required />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select required>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="parent">Parent</option>
                  <option value="alumni">Alumni</option>
                </select>
              </div>
              <button type="submit" className="auth-btn">Register</button>
            </form>
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
        <Footer /> 
      </div>
    </>
  );
}

export default Register;
