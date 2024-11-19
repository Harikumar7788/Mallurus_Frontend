import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.css'; 

const Dashboard = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('https://mallurus-backend-2.onrender.com/resources');
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };
    fetchResources();
  }, []);

  return (
    <div>
      <h1>Resource Dashboard</h1>
      <ul>
        {resources.map((resource) => (
          <li key={resource._id}>
           
            <p>
              <strong>Full Name (Username):</strong> {resource.fullName} 
            </p>

          
            <p>
              <strong>Vendor Name:</strong> {resource.vendor ? resource.vendor.name : 'No Vendor'}
            </p>

         
            <p>
              <strong>Technologies:</strong> 
              {Array.isArray(resource.technologies) && resource.technologies.length > 0
                ? resource.technologies.join(', ') 
                : 'No technologies specified'}
            </p>

          
            <p>
              <a
                href={`https://mallurus-backend-2.onrender.com/uploads/${resource.resumePath}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
