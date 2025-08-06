import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const Volunteer = () => {
    document.title = "HeartKind | Volunteer";
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    toast.success("Thank you for signing up! We'll contact you soon.");
    reset();
  };

  return (
    <motion.div
      className="BG-Img px-6 py-12 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold text-blue-700 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Volunteer With Us
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-transparent shadow rounded p-6 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="mt-1 w-full border rounded p-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
            className="mt-1 w-full border rounded p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number"
              }
            })}
            className="mt-1 w-full border rounded p-2"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Availability</label>
          <select
            {...register("availability", {
              required: "Please select availability"
            })}
            className="mt-1 w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Both">Both</option>
          </select>
          {errors.availability && (
            <p className="text-red-500 text-sm mt-1">
              {errors.availability.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Skills / Interests</label>
          <textarea
            {...register("skills", { required: "Please describe your skills" })}
            className="mt-1 w-full border rounded p-2"
            rows="3"
          ></textarea>
          {errors.skills && (
            <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Volunteer;
