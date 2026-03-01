import React from 'react';
import cover from '../assets/cover.jpg';
import MainPage from './MainPage';
import Services from './Services';
import Impact from './Impact';

const FirstPage = () => {
  return (
    <>
      {/* Cover Section */}
      <div className="relative h-screen w-full">
        <img
          src={cover}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            We offer a comprehensive range of services
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-200 max-w-xl">
            To help individuals <span className="font-semibold text-blue-400 block mt-1">
            And businesses navigate Tax financial matters
            </span>
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-zinc-50">
        <MainPage />
        <Services />
        <Impact />
      </div>
    </>
  );
};

export default FirstPage;