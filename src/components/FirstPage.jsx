import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cover from "../assets/cover.jpg";
import MainPage from "./MainPage";
import Services from "./Services";
import Impact from "./Impact";

const FirstPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src={cover}
          alt="Business consulting"
          className="absolute w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Professional Tax & Accounting Solutions
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200">
            We offer a comprehensive range of services to help individuals
            and businesses navigate complex
            <span className="text-cyan-400 font-semibold">
              {" "}tax and financial matters
            </span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/services-items"
              className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Our Services
            </Link>

            <Link
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Contact Us
            </Link>

          </div>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-zinc-50">
        <MainPage />
        <Services />
        <Impact />
      </section>
    </>
  );
};

export default FirstPage;