import React from 'react';
import logo from '../assets/logo.PNG'; 

const Logo = () => {
  return (
    <img 
      src={logo} 
      alt="Company Logo" 
      className="w-36 sm:w-30 lg:h-auto object-contain rounded-md" 
    />
  );
};

export default Logo;