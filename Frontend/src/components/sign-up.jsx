import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client, Account } from "appwrite";

// Appwrite client and account initialization
const client = new Client().setProject("675b364a00240d898950");
const account = new Account(client);

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      // Create user account with Appwrite
      const user = await account.create(
        "unique()", // USER_ID - You can replace with dynamic logic if required
        formData.email,
        formData.password,
        formData.name
      );
      console.log(user); // Log the user object for verification
      // Send email verification
      await account.createEmailVerification();
      alert("Account created successfully! Please check your email for verification.");
      navigate("/signin"); // Redirect to SignIn page after successful sign-up
    } catch (err) {
      setError(err.message); // Display any errors
    }
  };

  return (
    <section className="px-8 py-16 bg-gray-50">
      <div className="container mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Create an Account</h1>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border"
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            onChange={handleChange}
            required
            className="w-full p-3 mb-6 border"
          />
          <button type="submit" className="w-full p-3 text-white bg-yellow-500 rounded-md">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
