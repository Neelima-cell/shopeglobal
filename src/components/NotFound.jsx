import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

// NotFound component for 404 pages
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-message">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="home-link">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 