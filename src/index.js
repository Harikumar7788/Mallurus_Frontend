import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the 'client' version of ReactDOM
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
