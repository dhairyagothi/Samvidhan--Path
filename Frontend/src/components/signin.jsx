import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.email}!`);
    setFormData({ email: "", password: "" });
  };

  return (
    <section className="px-8 py-16 bg-gray-50">
      {/* Welcome Message */}
      <motion.div
        className="container mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Welcome Back!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Please sign in to access your account.
        </p>
      </motion.div>

      {/* Sign-In Form */}
      <div className="flex justify-center">
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Email Field */}
          <label className="mb-2 text-sm text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
            required
          />

          {/* Password Field with Animated Eye Icon */}
          <label className="mb-2 text-sm text-gray-700">Password</label>
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <span
              className="absolute text-gray-500 cursor-pointer right-3 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEye className="text-xl animate-pulse" />
              ) : (
                <AiFillEyeInvisible className="text-xl" />
              )}
            </span>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full p-3 text-white transition bg-yellow-500 rounded-md hover:bg-yellow-600"
          >
            Sign In
          </button>

          {/* Social Login */}
          <div className="my-6 text-center text-gray-600">or sign in with</div>
          <div className="flex justify-center gap-4">
            <button
              className="flex items-center justify-center w-12 h-12 text-white transition bg-red-500 rounded-full hover:bg-red-600"
              title="Sign in with Google"
            >
              <FaGoogle className="text-2xl" />
            </button>
            <button
              className="flex items-center justify-center w-12 h-12 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
              title="Sign in with Facebook"
            >
              <FaFacebook className="text-2xl" />
            </button>
            <button
              className="flex items-center justify-center w-12 h-12 text-white transition bg-blue-400 rounded-full hover:bg-blue-500"
              title="Sign in with Twitter"
            >
              <FaTwitter className="text-2xl" />
            </button>
          </div>

          {/* Additional Links */}
          <div className="flex justify-between mt-6 text-sm text-gray-600">
            <a href="/forgot-password" className="hover:text-yellow-600">
              Forgot Password?
            </a>
            <a href="/sign-up" className="hover:text-yellow-600">
              Don't have an account? Sign Up
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default SignIn;
