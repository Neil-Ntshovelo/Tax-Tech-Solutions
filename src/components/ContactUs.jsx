import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp, FaLinkedin, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Contact from '../assets/contact.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setLoading(true);
      console.log('Form submitted:', formData);
      
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Clear form
  const handleClear = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  // Animate WhatsApp button
  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.classList.add('animate-bounce');
      const timeout = setTimeout(() => {
        button.classList.remove('animate-bounce');
      }, 3000); 
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      {/* Page Title */}
      <motion.h2 
        variants={fadeIn("down", 0.01)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center text-blue-800 text-4xl font-bold mb-4 mt-20 font-poppins"
      >
        Contact Us
      </motion.h2>

      {/* Company Intro */}
      <div className='flex justify-center mb-10'>
        <div className='bg-white m-4 rounded-md w-2/3 shadow-lg'>
          <img src={Contact} alt="Contact Us" className='w-full h-64 object-cover rounded-t-md' />
          <div className='p-6 text-center'>
            <p className='text-gray-700 text-lg mb-4 font-poppins'>
              At <strong>Tax Tech Solutions</strong>At Tax Tech Solutions, 
              we are here to make your tax and financial matters simple and stress-free.
               Whether you have questions, need guidance, or 
               want assistance with tax registration or compliance, 
               our friendly and professional team is ready to help. Reach out to us anytime —
               we’re here to support you every step of the way..
            </p>
            <p className='text-blue-800 font-semibold text-lg'>
              071 038 3306 | taxtechs6@gmail.com | Hazyview, Mpumalanga
            </p>
          </div>
        </div>
      </div>

      {/* Info & Map */}
      <motion.div 
        variants={fadeIn("up", 0.05)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.05 }}
        className='flex flex-col md:flex-row md:justify-center md:items-start mb-16'
      >
        {/* Company Info & Social Links */}
        <div className="flex flex-col items-center m-10 md:w-1/2 mx-4">
          <h3 className="text-2xl text-blue-800 font-bold mb-6 font-poppins">Tax Tech Solutions</h3>

          <div className="flex flex-col items-center text-gray-700 space-y-4 text-lg">
            <p className="flex items-center">
              <FaPhone className='mr-3 text-green-600' /> 071 038 3306
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-3 text-blue-600" /> taxtechs6@gmail.com
            </p>
            <p className="flex items-center text-center">
              <FaMapMarkerAlt className="mr-3 text-red-600" /> Hazyview, Mpumalanga, South Africa
            </p>
          </div>

          <div className="mt-6 text-center text-gray-600 max-w-md">
            <p>
              We are committed to delivering reliable, accurate, and innovative tax and financial services that simplify compliance and strengthen financial stability for individuals and businesses.
            </p>
          </div>

          <div className="flex space-x-6 mt-6">
           
            <a href="https://wa.me/27710383306" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-600 hover:text-green-800 transform hover:scale-125 transition-transform duration-200" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 hover:text-blue-900 transform hover:scale-125 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="md:w-1/2 mx-4 md:mr-24 mb-10">
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=Hazyview,%20Mpumalanga,%20South%20Africa&z=14&ie=UTF8&iwloc=B&output=embed"
            title="Google Map"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </motion.div>

      <hr className="border-t border-gray-300 my-12" />

      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mb-16">
        {submitted && <p className="text-green-500 mb-4 text-center font-poppins">Thank you for your message!</p>}
        <form onSubmit={handleSubmit}>
          <h3 className='font-semibold text-2xl text-blue-800 mb-5 text-center font-poppins'>Connect With Us</h3>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full p-3 border-b ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none hover:border-blue-500 transition duration-200`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby="name-error"
                required
              />
            </label>
            {errors.name && <p id="name-error" className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full p-3 border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none hover:border-blue-500 transition duration-200`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="email-error"
                required
              />
            </label>
            {errors.email && <p id="email-error" className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full p-3 border-b ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none hover:border-blue-500 transition duration-200`}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby="message-error"
                required
              />
            </label>
            {errors.message && <p id="message-error" className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Buttons */}
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          <button type="button" onClick={handleClear} className="w-full mt-2 bg-gray-300 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-400 transition duration-200">
            Clear
          </button>
        </form>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <a 
          ref={buttonRef}
          href="https://wa.me/27710383306?text=Hello!%20I%20would%20like%20assistance%20with%20your%20tax%20and%20financial%20services." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-500 flex items-center"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="mr-2" />
          WhatsApp Us
        </a>
      </div>
    </>
  );
};

export default ContactUs;