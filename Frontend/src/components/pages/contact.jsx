import React, { useState } from "react";
import { motion } from "framer-motion";
import { Client, Databases, ID } from "appwrite";

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("675b364a00240d898950"); // Replace with your Appwrite project ID

const databases = new Databases(client);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false); // To control the popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the query to Appwrite database
      const response = await databases.createDocument(
        "675b37430018b762a571", // Replace with your Appwrite Database ID
        "675ffe97001922869595", // Replace with your Appwrite Collection ID
        ID.unique(), // Automatically generate a unique document ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(), // Add timestamp of the query
        }
      );

      console.log("Query saved:", response);

      // Show the popup after submission
      setShowPopup(true);

      // Clear form data
      setFormData({ firstName: "", lastName: "", email: "", message: "" });

      // Hide popup after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error("Error saving query:", error);
    }
  };

  return (
    <section className="px-8 py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Please fill the form and we will get back to you soon.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:space-x-16">
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="mb-2 text-sm text-gray-700 dark:text-gray-300">Full Name</label>
          <div className="flex mb-4 space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>

          <label className="mb-2 text-sm text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 mb-4 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />

          <label className="mb-2 text-sm text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 mb-6 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            rows="4"
          />

          <button
            type="submit"
            className="p-3 text-white transition bg-yellow-500 rounded-md hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700"
          >
            Submit
          </button>
        </motion.form>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg dark:bg-gray-700 dark:text-gray-100">
            <h2 className="text-2xl font-semibold">Thank you!</h2>
            <p>Your query is recorded. We will answer it soon.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
