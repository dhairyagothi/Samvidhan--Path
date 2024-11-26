import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section className="px-8 py-16 bg-gray-100">
      <div className="container mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Please fill the form and we will get back to you soon.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:space-x-16">
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="mb-2 text-sm text-gray-700">Full Name</label>
          <div className="flex mb-4 space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <label className="mb-2 text-sm text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 mb-4 border border-gray-300 rounded-md"
          />

          <label className="mb-2 text-sm text-gray-700">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 mb-6 border border-gray-300 rounded-md"
            rows="4"
          />

          <button
            type="submit"
            className="p-3 text-white transition bg-yellow-500 rounded-md hover:bg-yellow-600"
          >
            Submit
          </button>
        </motion.form>

        {/* Contact Details Section */}
        <motion.div
          className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Contact Details</h3>

          {/* Contact Info */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-gray-700">Nodal Officer for IT</h4>
            <p className="text-gray-600">Dr. Manoj Kumar</p>
            <p className="text-gray-600">Ministry of Law and Justice</p>
            <p className="text-gray-600">Tel: 23387905</p>
            <p className="text-gray-600">Email: <a href="mailto:nodalo@mlj.gov.in" className="text-blue-500">nodalo@mlj.gov.in</a></p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-medium text-gray-700">Web Information Manager</h4>
            <p className="text-gray-600">Shri Rakesh Kumar Upadhyay</p>
            <p className="text-gray-600">Deputy Legislative Counsel</p>
            <p className="text-gray-600">Tel: 23368363</p>
            <p className="text-gray-600">Email: <a href="mailto:webinfo@mlj.gov.in" className="text-blue-500">webinfo@mlj.gov.in</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
