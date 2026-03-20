import React, { useState, useRef, useEffect, useCallback } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NavLinks = React.memo(() => {
  return (
    <>
      <RouterNavLink 
        to="/" 
        className={({ isActive }) => 
          `nav-link text-blue-900 font-medium hover:text-blue-500 mb-2 transition-colors duration-200 ${
            isActive ? 'text-blue-500 font-semibold' : ''
          }`
        }
      >
        Home
      </RouterNavLink>
      <RouterNavLink 
        to="/about" 
        className={({ isActive }) => 
          `nav-link text-blue-900 font-medium hover:text-blue-500 mb-2 transition-colors duration-200 ${
            isActive ? 'text-blue-500 font-semibold' : ''
          }`
        }
      >
        About
      </RouterNavLink>
      <RouterNavLink 
        to="/services-items" 
        className={({ isActive }) => 
          `nav-link text-blue-900 font-medium hover:text-blue-500 mb-2 transition-colors duration-200 ${
            isActive ? 'text-blue-500 font-semibold' : ''
          }`
        }
      >
        Services
      </RouterNavLink>
      <RouterNavLink 
        to="/contact" 
        className={({ isActive }) => 
          `nav-link text-blue-900 font-medium hover:text-blue-500 mb-2 transition-colors duration-200 ${
            isActive ? 'text-blue-500 font-semibold' : ''
          }`
        }
      >
        Contact
      </RouterNavLink>
    </>
  );
});

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Optimized click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen]);

  // Auto-close mobile menu on route change
  useEffect(() => {
    return () => {
      if (isOpen) {
        timeoutRef.current = setTimeout(() => setIsOpen(false), 100);
      }
    };
  }, []);

  return (
    <>
      <nav className="flex w-1/3 justify-end" aria-label="Main navigation">
        <div className="hidden w-full justify-end pr-20 space-x-10 md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-blue-500" />
            ) : (
              <Menu className="w-6 h-6 text-blue-500" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div 
          ref={menuRef} 
          className="md:hidden fixed top-20 right-5 bg-white shadow-xl rounded-xl p-6 w-64 border border-gray-200 z-30"
          role="menu"
        >
          <div className="flex flex-col items-center space-y-4">
            <NavLinks />
          </div>
        </div>
      )}
    </>
  );
};

const NavBar = React.memo(() => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 flex w-full items-center justify-between px-5 py-4 shadow-lg border-b border-gray-200">
      <Logo />
      <Nav />
    </header>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
