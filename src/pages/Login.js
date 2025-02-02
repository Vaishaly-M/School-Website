import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-box">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <div className="form-links">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <button type="submit" className="auth-btn">Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
