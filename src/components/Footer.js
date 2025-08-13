import React from 'react';
import { textContent } from '../constants/textContent';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{textContent.general.appName}</h3>
            <p>{textContent.general.tagline}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-300">{textContent.navigation.home}</a></li>
              <li><a href="/courses" className="hover:text-blue-300">{textContent.navigation.courses}</a></li>
              <li><a href="/about" className="hover:text-blue-300">{textContent.navigation.about}</a></li>
              <li><a href="/contact" className="hover:text-blue-300">{textContent.navigation.contact}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: anmol1616jha@gmail.com</p>
            {/* <p>Phone: +1 (555) 123-4567</p> */}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p>{textContent.general.footer}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;