import React from 'react';
import { siteContent } from '../textContent';

const Footer = () => {
  const { footer } = siteContent;
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">{footer.copyright}</div>
        <div className="footer-links">
          {footer.links.map((link, index) => (
            <a key={index} href={link.url}>{link.text}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;