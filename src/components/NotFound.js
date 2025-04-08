import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../textContent';

const NotFound = () => {
  const { notFound } = siteContent;
  
  return (
    <div className="not-found">
      <h2>{notFound.title}</h2>
      <p>{notFound.message}</p>
      <Link to="/" className="btn">
        {notFound.homeButton}
      </Link>
    </div>
  );
};

export default NotFound;