import React from 'react';
import { siteContent } from '../textContent';

const Header = () => {
  const { header } = siteContent;
  
  return (
    <header className="header">
      <div className="header-content">
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </div>
    </header>
  );
};

export default Header;