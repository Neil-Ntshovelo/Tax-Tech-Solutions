import React from "react";
import { motion } from "framer-motion";

const MainPage = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 px-6 bg-zinc-50">

      {/* COMPANY NAME */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-20"
      >
        Tax Tech Solutions
      </motion.h2>

      {/* VISION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-16 border border-gray-100"
      >
        <div className="text-center mb-6">
          <span className="bg-cyan-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
            OUR VISION
          </span>

          <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 mt-4">
            To Be a Trusted Leader
          </h3>
        </div>

        <p className="text-gray-600 text-lg sm:text-xl text-center leading-relaxed">
          To be a trusted leader in tax and financial solutions, empowering
          individuals and businesses with clarity, compliance, and confidence
          in every financial decision.
        </p>
      </motion.div>

      {/* MISSION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-20 border border-gray-100"
      >
        <div className="text-center mb-6">
          <span className="bg-cyan-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
            OUR MISSION
          </span>

          <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 mt-4">
            What We Do
          </h3>
        </div>

        <p className="text-gray-600 text-lg sm:text-xl text-center mb-8 leading-relaxed">
          At Tax Tech Solutions, our mission is to provide reliable,
          accurate, and innovative tax and financial services that simplify
          compliance and strengthen financial stability.
        </p>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4 text-gray-600 max-w-3xl mx-auto"
        >
          {[
            "Efficient tax compliance and advisory services",
            "Business registration and financial management",
            "Helping clients understand tax responsibilities",
            "Building long-term trusted relationships",
            "Making financial matters stress-free",
            "Providing strategic tax planning"
          ].map((text, index) => (
            <motion.li
              key={index}
              variants={item}
              className="flex items-start gap-2"
            >
              <span className="text-cyan-700 font-bold">✓</span>
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* CORE VALUES */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="bg-cyan-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
            OUR CORE VALUES
          </span>

          <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 mt-4">
            What Drives Us
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Integrity",
              desc: "Honesty, transparency and ethical practice"
            },
            {
              title: "Accuracy",
              desc: "Precise and high-quality financial services"
            },
            {
              title: "Client Focus",
              desc: "Solutions tailored to your business needs"
            },
            {
              title: "Accountability",
              desc: "Reliable professional responsibility"
            },
            {
              title: "Innovation",
              desc: "Modern technology driven tax solutions"
            },
            {
              title: "Education",
              desc: "Empowering clients with financial knowledge"
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100 hover:shadow-xl transition"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {value.title}
              </h4>

              <p className="text-gray-600 text-sm">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default MainPage;