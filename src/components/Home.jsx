import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  document.title = "HeartKind | Home";

  return (
    <motion.div
      className="BG-Img px-6 py-12 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="text-4xl font-bold text-red-600 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Empowering Change Through Compassion
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          HeartKind is dedicated to improving lives through volunteer-driven efforts
          focused on education, health, and community well-being.
        </motion.p>
        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            to="/volunteer"
            className="shadow-[#FF6B6B] bg-red-600 ring-red-600 ring-2 hover:ring-blue-600 text-white px-6 py-3
            rounded-full shadow-lg hover:shadow-blue-600 hover:bg-blue-600 transition"
          >
            Join as a Volunteer
          </Link>
        </motion.div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        className="bg-white rounded-lg shadow p-8 mb-16"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Our Mission</h3>
        <p className="text-gray-600">
          To serve humanity with love and empathy by fostering impactful connections and
          creating opportunities for a better tomorrow.
        </p>
      </motion.section>

      {/* Impact Highlights */}
      <motion.section
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          { number: "1000+", label: "Meals Donated" },
          { number: "500+", label: "Active Volunteers" },
          { number: "50+", label: "Communities Reached" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded shadow text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
          >
            <h4 className="text-3xl font-bold text-red-600">{item.number}</h4>
            <p className="text-gray-600">{item.label}</p>
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  );
};

export default Home;
