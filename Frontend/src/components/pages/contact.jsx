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
    <section className="min-h-screen px-4 py-16 bg-gradient-to-br from-yellow-50 via-gray-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-600 dark:text-yellow-400 drop-shadow-lg">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Please fill the form and we will get back to you soon.
        </p>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center mb-12">
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg p-8 border border-yellow-200 shadow-2xl bg-white/90 rounded-2xl dark:bg-gray-800/90 dark:text-gray-100 dark:border-yellow-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
          <div className="flex flex-col gap-4 mb-4 sm:flex-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              required
            />
          </div>

          <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            required
          />

          <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 mb-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            rows="4"
            required
          />

          <button
            type="submit"
            className="p-3 text-lg font-semibold text-white transition bg-yellow-500 rounded-md shadow hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700"
          >
            Submit
          </button>
        </motion.form>
      </div>

      {/* Team Details */}
      <motion.div
        className="w-full max-w-4xl p-6 mx-auto mb-8 border border-yellow-200 shadow-2xl sm:p-8 bg-white/90 rounded-2xl dark:bg-gray-800/90 dark:border-yellow-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="flex items-center justify-center gap-2 mb-8 text-2xl font-bold text-center text-yellow-600 dark:text-yellow-400">
          <span role="img" aria-label="team"></span> Team
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {/* Dhairya */}
          <div className="flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/142989448?v=4" alt="Dhairya Gothi" className="w-20 h-20 border-2 border-yellow-400 rounded-full shadow-lg"/>
            <span className="mt-2 font-semibold text-center text-gray-800 dark:text-gray-100">Dhairya Gothi</span>
            <span className="text-xs text-center text-gray-500 dark:text-gray-400">Project Admin</span>
            <a href="https://www.linkedin.com/in/dhairya-gothi-65945b288/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluency/32/000000/linkedin.png" alt="LinkedIn" className="mt-1"/>
            </a>
          </div>
          {/* Rishita */}
          <div className="flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/167749636?v=4" alt="Rishita" className="w-20 h-20 border-2 border-yellow-400 rounded-full shadow-lg"/>
            <span className="mt-2 font-semibold text-center text-gray-800 dark:text-gray-100">Rishita</span>
            <span className="text-xs text-center text-gray-500 dark:text-gray-400">Co-lead</span>
            <a href="https://www.linkedin.com/in/rishita-mehta-1154352b4/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluency/32/000000/linkedin.png" alt="LinkedIn" className="mt-1"/>
            </a>
          </div>
          {/* Riddhi */}
          <div className="flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/180189764?v=4" alt="Riddhi" className="w-20 h-20 border-2 border-yellow-400 rounded-full shadow-lg"/>
            <span className="mt-2 font-semibold text-center text-gray-800 dark:text-gray-100">Riddhi</span>
            <span className="text-xs text-center text-gray-500 dark:text-gray-400">Designer</span>
            <a href="https://www.linkedin.com/in/riddhi-mhadgut-3b0a21289/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluency/32/000000/linkedin.png" alt="LinkedIn" className="mt-1"/>
            </a>
          </div>
          {/* Shreya */}
          <div className="flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/167011296?v=4" alt="Shreya" className="w-20 h-20 border-2 border-yellow-400 rounded-full shadow-lg"/>
            <span className="mt-2 font-semibold text-center text-gray-800 dark:text-gray-100">Shreya</span>
            <span className="text-xs text-center text-gray-500 dark:text-gray-400">Researcher</span>
            <a href="https://www.linkedin.com/in/shreya-dubey-544874289/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluency/32/000000/linkedin.png" alt="LinkedIn" className="mt-1"/>
            </a>
          </div>
          {/* Mrityunjay */}
          <div className="flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/137044290?v=4" alt="Mrityunjay" className="w-20 h-20 border-2 border-yellow-400 rounded-full shadow-lg"/>
            <span className="mt-2 font-semibold text-center text-gray-800 dark:text-gray-100">Mrityunjay</span>
            <span className="text-xs text-center text-gray-500 dark:text-gray-400">Developer</span>
            <a href="https://www.linkedin.com/in/mrityunjay-singh-51a2b627a/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluency/32/000000/linkedin.png" alt="LinkedIn" className="mt-1"/>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg dark:bg-gray-700 dark:text-gray-100">
            <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">Thank you!</h2>
            <p>Your query is recorded. We will answer it soon.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
