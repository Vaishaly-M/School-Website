import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';

function Register() {
  return (
    <div className="auth-container" style={{ backgroundImage: `url('/assets/images/login-bg.jpg')` }}>
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
        <Link to="/">
          <button className="auth-btn home-btn">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;