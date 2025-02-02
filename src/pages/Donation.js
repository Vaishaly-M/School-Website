import React, { useState } from 'react';
import Navbar from "../components/Navbar"; // Importing Navbar component
import '../styles/Donation.css';
import Footer from "../components/Footer";

const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    receipt: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      receipt: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send formData to backend API)
    alert('Donation details submitted successfully!');
  };

  return (
    <>
      <Navbar /> 
    <div className="donation-container">
      <h2>Make Your Donation</h2>
      <p className="instruction">
        Please make your payment using the bank details below and upload your receipt or payment bill here.
      </p>
      <div className="bank-details">
        <h3>Bank Details:</h3>
        <p>Bank Name: Bank Of Ceylon</p>
        <p>Account Name: KahawattaMMV</p>
        <p>Account Number: 123-456-789</p>
        <p>Branch: Balangoada</p>
        <p>Swift Code: ABCD1234</p>
      </div>
      
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Phone Number:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Donation Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="receipt">Upload Receipt:</label>
          <input
            type="file"
            id="receipt"
            name="receipt"
            accept="image/*, .pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit Donation
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Donation;
