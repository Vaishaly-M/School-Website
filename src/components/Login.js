import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function Login() {
  return (
    <div className="auth-container" style={{ backgroundImage: `url('/assets/images/login-bg.jpg')` }}>
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
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <div className="social-login">
          <p>Or login with</p>
          <div>
            <button className="social-btn google">
              <FaGoogle /> Google
            </button>
            <button className="social-btn facebook">
              <FaFacebook /> Facebook
            </button>
          </div>
        </div>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        <Link to="/">
          <button className="auth-btn home-btn">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;