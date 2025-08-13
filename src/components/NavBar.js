import React from 'react';
import { Link } from 'react-router-dom';
import { textContent } from '../constants/textContent';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-[#2c3e50] text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            {textContent.general.appName}
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-200">
              {textContent.navigation.home}
            </Link>
            <Link to="/courses" className="hover:text-blue-200">
              {textContent.navigation.courses}
            </Link>
            <Link to="/about" className="hover:text-blue-200">
              {textContent.navigation.about}
            </Link>
            <Link to="/contact" className="hover:text-blue-200">
              {textContent.navigation.contact}
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2">
            <Link to="/" className="block py-2 hover:text-blue-200">
              {textContent.navigation.home}
            </Link>
            <Link to="/courses" className="block py-2 hover:text-blue-200">
              {textContent.navigation.courses}
            </Link>
            <Link to="/about" className="block py-2 hover:text-blue-200">
              {textContent.navigation.about}
            </Link>
            <Link to="/contact" className="block py-2 hover:text-blue-200">
              {textContent.navigation.contact}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;