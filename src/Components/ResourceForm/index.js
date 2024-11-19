import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const ResourceForm = () => {
  const [vendors, setVendors] = useState([]);
  const [resource, setResource] = useState({
    fullName: '',
    resume: null,
    vendor: '',
    technologies: [],
  });

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/vendors');
        setVendors(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVendors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullName', resource.fullName);
    formData.append('resume', resource.resume);
    formData.append('vendor', resource.vendor);
    formData.append('technologies', resource.technologies);

    try {
      await axios.post('http://localhost:5000/resources', formData);
      alert('Resource added successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckboxChange = (tech) => {
    setResource((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter((t) => t !== tech)
        : [...prev.technologies, tech],
    }));
  };

  return (
    <form className="resource-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <h2 className="form-title">Add Resource</h2>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          className="form-control"
          placeholder="Enter full name"
          value={resource.fullName}
          onChange={(e) => setResource({ ...resource, fullName: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          id="resume"
          className="form-control"
          onChange={(e) => setResource({ ...resource, resume: e.target.files[0] })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="vendor">Vendor</label>
        <select
          id="vendor"
          className="form-control"
          value={resource.vendor}
          onChange={(e) => setResource({ ...resource, vendor: e.target.value })}
          required
        >
          <option value="">Select Vendor</option>
          {vendors.map((vendor) => (
            <option key={vendor._id} value={vendor._id}>
              {vendor.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Technologies</label>
        <div className="checkbox-group">
          {['JavaScript', 'React', 'Node.js', 'Python'].map((tech) => (
            <label key={tech} className="checkbox-label">
              <input
                type="checkbox"
                value={tech}
                onChange={() => handleCheckboxChange(tech)}
              />
              {tech}
            </label>
          ))}
        </div>
      </div>
      <button type="submit" className="btn-submit">Submit</button>
    </form>
  );
};

export default ResourceForm;
