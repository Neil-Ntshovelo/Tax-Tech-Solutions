import React, { Suspense, lazy, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Lazy load components to improve initial load time
const MainPage = lazy(() => import("./MainPage"));
const Services = lazy(() => import("./Services"));
const Impact = lazy(() => import("./Impact"));

// Preload critical image
import { useEffect } from "react";

const FirstPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useCallback((node) => {
    if (node?.complete) {
      setImageLoaded(true);
    }
  }, []);

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = "/src/assets/cover.jpg"; // Adjust path as needed
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with loading state */}
        <img
          ref={imageRef}
          src="/src/assets/cover.jpg" // Use absolute path or public folder
          alt="Business consulting"
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          fetchPriority="high"
        />

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-pulse" />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

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
              className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
              aria-label="View our services"
            >
              Our Services
            </Link>

            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
              aria-label="Contact us"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* MAIN CONTENT - Lazy loaded with skeleton */}
      <section className="bg-zinc-50">
        <Suspense 
          fallback={
            <div className="min-h-screen py-20 px-6">
              <div className="animate-pulse space-y-8">
                <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-64 bg-gray-300 rounded-lg"></div>
                  <div className="h-64 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          }
        >
          <MainPage />
          <Services />
          <Impact />
        </Suspense>
      </section>
    </>
  );
};

export default FirstPage;
