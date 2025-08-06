import React from "react";
import { motion } from "framer-motion";

const About = () => {
  document.title = "HeartKind | About Us";

  return (
    <motion.div
      className="BG-Img px-6 py-12 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Our Story */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Story</h2>
        <p className="text-gray-700">
          HeartKind was born out of the belief that small acts of kindness can
          make a big difference. Founded in 2018 by a group of compassionate
          individuals, our NGO has grown into a vibrant community working
          together to uplift the underserved.
        </p>
      </motion.section>

      {/* Vision and Mission */}
      <motion.section
        className="grid md:grid-cols-2 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-red-600 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-700">
            A world where everyone has access to opportunities and support to
            lead a dignified life.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-red-600 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-700">
            To create impactful programs that empower people and strengthen
            communities through education, health, and compassion.
          </p>
        </motion.div>
      </motion.section>

      {/* Meet the Team */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-blue-700 mb-6">Meet Our Team</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              img: "https://images.unsplash.com/photo-1656019674844-3040aba0350b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
              name: "Asha Verma",
              role: "Founder",
              quote: "Kindness is the foundation of all change."
            },
            {
              img: "https://images.unsplash.com/photo-1557143587-315a19578bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
              name: "Rohan Das",
              role: "Coordinator",
              quote: "Serving people brings true joy."
            },
            {
              img: "https://images.unsplash.com/photo-1728076809994-f57e23fa66d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
              name: "Fatima Sheikh",
              role: "Outreach Lead",
              quote: "Together, we rise."
            }
          ].map((member, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded shadow text-center"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.2 }}
            >
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-red-600">
                {member.name}
              </h4>
              <p className="text-sm text-gray-500">{member.role}</p>
              <blockquote className="italic text-gray-600 mt-2">
                “{member.quote}”
              </blockquote>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
