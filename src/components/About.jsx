import React, { useEffect, useRef } from 'react';
import AboutImage from '../assets/aboutImage.jpg';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const buttonRef = useRef(null);

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
      {/* Hero Section */}
      <section className="relative h-72 sm:h-96">
        <img
          src={AboutImage}
          alt="Tax Tech Solutions Company Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Taking care of your financial matters
          </h2>
          <p className="text-lg text-blue-200 font-semibold">
            Tax Tech Solutions
          </p>
          
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-5xl mx-auto p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Vision Statement
        </h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          To be a trusted leader in tax and financial solutions, empowering individuals and
          businesses with clarity, compliance, and confidence in every financial decision.
        </p>
      </section>

      {/* About & Mission Section */}
      <section className="bg-white max-w-5xl mx-auto p-8 rounded-xl shadow-lg mb-10">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
          About Us
        </h2>

        <p className="text-lg text-gray-700 mb-6 text-center">
          At <strong>Tax Tech Solutions</strong>, our mission is to provide reliable,
          accurate, and innovative tax and financial services that simplify compliance
          and strengthen financial stability.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Mission Statement
        </h3>

        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          <li>Delivering efficient tax compliance and support services</li>
          <li>Offering expert financial management and business registration solutions</li>
          <li>Educating clients to better understand and manage their tax responsibilities</li>
          <li>Building long-term relationships based on trust, transparency, and professionalism</li>
        </ul>

        <p className="mt-6 text-lg text-gray-700">
          We strive to make tax and financial matters stress-free, accessible,
          and strategically beneficial for every client we serve.
        </p>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Core Values
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-lg">
          <Value title="Integrity">
            We operate with honesty, transparency, and strict adherence to ethical and regulatory standards.
          </Value>

          <Value title="Accuracy & Excellence">
            We are committed to precision, attention to detail, and delivering high-quality services every time.
          </Value>

          <Value title="Client-Centered Service">
            Our clients are at the heart of everything we do. We listen, understand, and tailor solutions to meet their unique needs.
          </Value>

          <Value title="Accountability">
            We take responsibility for our work and honor our commitments with professionalism and reliability.
          </Value>

          <Value title="Innovation">
            We leverage technology and modern tax solutions to improve efficiency and deliver smarter financial outcomes.
          </Value>

          <Value title="Education & Empowerment">
            We believe informed clients make better decisions. We provide guidance and education that empowers financial confidence.
          </Value>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-lg">

            <div>
              <h3 className="font-semibold text-blue-700 mb-4">Tax Compliance</h3>
              <ul className="space-y-2">
                <li>Tax Number Registration</li>
                <li>VAT Registration</li>
                <li>PAYE Registration</li>
                <li>NPO Registration & Section 18A Exemption</li>
                <li>Estate Tax Registration (Insolvent & Late Estates)</li>
                <li>Trust Registration</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-700 mb-4">Tax Support</h3>
              <ul className="space-y-2">
                <li>Payment Arrangements & Allocation</li>
                <li>Tax Clearance (Tax PIN)</li>
                <li>Disputes</li>
                <li>Audit Cases Follow-Up</li>
                <li>Refund Follow-Up</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-700 mb-4">Financial & Tax Education</h3>
              <ul className="space-y-2">
                <li>Financials & Bookkeeping</li>
                <li>CIPC Company Registration & Compliance</li>
                <li>Payroll Systems</li>
                <li>Tax Education (PBO, VAT, PAYE, Income Tax, CIT)</li>
                <li>Tax Returns Submission</li>
                <li>VAT201 & VAT501 Submissions</li>
                <li>EMP201 & EMP501 Submissions</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center my-10">
        <Link
          to="/services-items"
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 text-lg shadow-md"
        >
          Explore Our Services
        </Link>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          ref={buttonRef}
          href="https://wa.me/27710383306?text=Hello%20Tax%20Tech%20Solutions,%20I%20would%20like%20assistance%20with%20your%20tax%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-500 flex items-center"
        >
          Contact Us on WhatsApp
          <FaWhatsapp className="ml-2" />
        </a>
      </div>
    </>
  );
};

const Value = ({ title, children }) => (
  <div>
    <h3 className="font-semibold text-blue-700 mb-2">{title}</h3>
    <p className="text-gray-700">{children}</p>
  </div>
);

export default About;