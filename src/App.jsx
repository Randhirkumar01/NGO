import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Volunteer from "./components/Volunteer";
import { motion } from "framer-motion";

function App() {
  return (
      <div className="min-h-screen w-full bg-gray-100 text-gray-800 overflow-x-hidden scroll-smooth">
        <motion.nav
          className="bg-white shadow p-4 flex justify-between items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <Link to="/" className="text-xl font-bold text-blue-600">HeartKind</Link>
          </motion.div>
          <motion.div className="space-x-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block hover:text-blue-600 transition duration-300"
            >
              <Link to="/">Home</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block hover:text-blue-600 transition duration-300"
            >
              <Link to="/about">About Us</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block hover:text-blue-600 transition duration-300"
            >
              <Link to="/volunteer">Volunteer</Link>
            </motion.div>
          </motion.div>
        </motion.nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="*" element={<div className="p-4">Page Not Found</div>} />
        </Routes>
      </div>
  );
}

export default App;
