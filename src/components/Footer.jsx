import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaWhatsapp, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-slate-300">
      
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400"></div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-5 tracking-wide">
            Tax Tech Solutions
          </h2>
          <p className="text-sm leading-relaxed text-slate-400 mb-6">
           Offering precise tax planning and comprehensive accounting 
           solutions that strengthen financial performance and support long-term growth.
          </p>

          <div className="flex space-x-5">
            
            <a href="https://chat.whatsapp.com/GfJYfhWRSGl0OzM6GXl0uX" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-xl hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-500 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6 border-b border-slate-800 pb-2">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/services-items" className="hover:text-blue-400 transition">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6 border-b border-gray-400 pb-2">
            Solutions
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services-items" className="hover:text-blue-400 transition">Tax compliance</Link></li>
            <li><Link to="/services-items" className="hover:text-blue-400 transition">Tax Support</Link></li>
            <li><Link to="/services-items" className="hover:text-blue-400 transition">Financial Services</Link></li>
            <li><Link to="/services-items" className="hover:text-blue-400 transition">Tax Education</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6 border-b border-slate-800 pb-2">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Hazyview, Mpumalanga</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="text-blue-500" />
              <span>0710383306</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-500" />
              <span>taxtechs6@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-800 bg-slate-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-sm text-slate-400">
            Stay informed with the company updates.
          </p>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full md:w-72 bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold rounded-r-md transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          
          <p>
            &copy; {new Date().getFullYear()}Tax Tech Solutions. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-400 transition">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;