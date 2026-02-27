import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamWork from '../assets/teamwork.jpg';
import student from '../assets/student.jpg';
import Business from '../assets/business.jpg';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import backGround from '../assets/a.avif';

// Reusable Card Component
const ServiceCard = ({ title, imgSrc, description }) => (
  <div className="bg-white shadow-lg rounded-xl flex flex-col h-full border border-gray-100">
    
    {/* Image */}
    <div className="h-52 w-full overflow-hidden">
      <img
        src={imgSrc}
        alt={`${title} illustration`}
        className="w-full h-full object-cover "
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="p-6 text-center">
      <h3 className="text-blue-900 text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Tax Compliance',
      imgSrc: Business,
      description:
        'Tax number registration, VAT, PAYE, NPO (Section 18A), Estate Tax, and Trust registrations.',
    },
    {
      title: 'Tax Support',
      imgSrc: TeamWork,
      description:
        'Payment arrangements, Tax clearances, Disputes, Audit case management, and Refund follow-ups.',
    },
    {
      title: 'Tax Education',
      imgSrc: student,
      description:
        'Training in Financials & Bookkeeping, CIPC compliance, Payroll systems, and VAT/EMP submissions.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">

      {/* Header Section */}
      

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Explore Our Services
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Info Banner Section */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${backGround})` }}
      >
        <div className="absolute inset-0 bg-blue-900/85"></div>

        <div
          variants={fadeIn("up", 0.01)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white"
        >
          <h2 className="text-2xl md:text-2xl font-bold mb-6">
            Comprehensive Financial Solutions
          </h2>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
            Whether you need help with <strong className="text-emerald-400">Tax Compliance</strong>,
            <strong className="text-emerald-400"> Support</strong>, or
            <strong className="text-emerald-400"> Education</strong>,
            we provide the expertise to secure your financial future.
          </p>

          <button
            onClick={() => navigate('/contact')}
            className="bg-gray-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-white transition duration-300 shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/0711234567?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-5 py-3 rounded-full shadow-xl hover:bg-green-600 transition duration-300 flex items-center gap-2"
        >
          <FaWhatsapp className="text-xl" />
          <span className="hidden sm:inline font-medium">Chat on WhatsApp</span>
        </a>
      </div>

    </div>
  );
};

export default Services;