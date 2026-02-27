import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const MainPage = () => {
  // Custom animation variants for smoother, more professional effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="mt-8 sm:mt-20 px-4 pb-20">
      {/* Company Name */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center text-gray-600 font-bold text-2xl sm:text-5xl mb-8 sm:mb-16"
      >
        Tax Tech Solutions
      </motion.h2>

      {/* Vision Section */}
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto mb-12 p-8 sm:p-12 rounded-[40px] shadow-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100"
      >
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="inline-block px-4 py-1 bg-green-900 text-gray-200 text-sm font-semibold rounded-md mb-4"
          >
            OUR VISION
          </motion.span>
          <h3 className="text-gray-600 font-bold text-xl sm:text-4xl">To Be a Trusted Leader</h3>
        </div>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-600 text-lg sm:text-xl text-center leading-relaxed"
        >
          To be a trusted leader in tax and financial solutions, empowering individuals and businesses with clarity, compliance, and confidence in every financial decision.
        </motion.p>
      </motion.article>

      {/* Mission Section */}
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="max-w-4xl mx-auto mb-16 p-8 sm:p-12 rounded-[40px] shadow-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100"
      >
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="inline-block px-4 py-1 bg-green-900 text-gray-200 text-sm font-semibold rounded-md mb-4"
          >
            OUR MISSION
          </motion.span>
          <h3 className="text-gray-600 font-bold text-2xl sm:text-4xl">What We Do</h3>
        </div>
        <p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-600 text-lg sm:text-xl text-center leading-relaxed mb-6"
        >
          At Tax Tech Solutions, our mission is to provide reliable, accurate, and innovative tax and financial services that simplify compliance and strengthen financial stability.
        </p>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-600 text-md sm:text-lg space-y-3 max-w-2xl mx-auto"
        >
          <motion.li variants={itemVariants} className="flex items-start">
            <span className="text-green-700 mr-2">✓</span>
            Delivering efficient tax compliance and support services
          </motion.li>
          <motion.li variants={itemVariants} className="flex items-start">
            <span className="text-green-700 mr-2">✓</span>
            Offering expert financial management and business registration solutions
          </motion.li>
          <motion.li variants={itemVariants} className="flex items-start">
            <span className="text-green-700 mr-2">✓</span>
            Educating clients to better understand and manage their tax responsibilities
          </motion.li>
          <motion.li variants={itemVariants} className="flex items-start">
            <span className="text-green-700 mr-2">✓</span>
            Building long-term relationships based on trust, transparency, and professionalism
          </motion.li>
          <motion.li variants={itemVariants} className="flex items-start">
            <span className="text-green-700 mr-2">✓</span>
            Making tax and financial matters stress-free, accessible, and strategically beneficial
          </motion.li>
        </motion.ul>
      </motion.article>

      {/* Core Values Section */}
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[40px] shadow-lg bg-white border border-gray-100"
      >
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="inline-block px-4 py-1 bg-green-900 text-gray-200 text-sm font-semibold rounded-md mb-4"
          >
            OUR CORE VALUES
          </motion.span>
          <h3 className="text-gray-600 font-bold text-2xl sm:text-4xl">What Drives Us</h3>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            { title: "Integrity", desc: "Honesty, transparency, and ethical standards" },
            { title: "Accuracy & Excellence", desc: "Precision and high-quality services" },
            { title: "Client-Centered", desc: "Tailored solutions for your needs" },
            { title: "Accountability", desc: "Professionalism and reliability" },
            { title: "Innovation", desc: "Modern tax solutions" },
            { title: "Education", desc: "Empowering financial confidence" }
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              className="p-6 bg-green-50 rounded-2xl text-center cursor-pointer"
            >
              <motion.div variants={cardHoverVariants}>
                <h4 className="text-blue-950 font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.article>
    </section>
  );
}

export default MainPage;