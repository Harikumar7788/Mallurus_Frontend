import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './style.css';

const VendorForm = () => {
  const [vendorName, setVendorName] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/vendors', { name: vendorName });
      alert('Vendor added successfully!');
      setVendorName('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="vendor-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Vendor</h2>
        <input
          type="text"
          placeholder="Vendor Name"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="navigation-buttons">
        <button onClick={() => navigate('/resource')}>Add Resource</button>
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
      </div>
    </div>
  );
};

export default VendorForm;
