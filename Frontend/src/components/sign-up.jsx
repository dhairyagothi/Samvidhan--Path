import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client, Account } from "appwrite";

// Appwrite client and account initialization
const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("675b364a00240d898950");
const account = new Account(client);

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // State to handle success popup
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

    // Create a sanitized user ID based on the email
    const sanitizedUserId = formData.email.replace(/[^a-zA-Z0-9_.-]/g, "").toLowerCase();

    try {
      // Create user account with Appwrite
      const user = await account.create(
        sanitizedUserId, // Use sanitized email as the userId
        formData.email,
        formData.password,
        formData.name
      );
      console.log(user);

      // Show success popup and redirect to SignIn
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/signin");
      }, 5000); // Redirect after 5 seconds
    } catch (err) {
      setError(err.message); // Display error
      console.error(err);
    }
  };

  return (
    <section className="px-8 py-16 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      {/* Success Popup */}
      {success && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-xl animate-fade-in">
            <h2 className="text-2xl font-semibold text-green-600">Success!</h2>
            <p className="mt-2 text-gray-700">Account created successfully!</p>
            <p className="mt-2 text-gray-700">Redirecting to sign in page....</p>
          </div>
        </div>
      )}

      <div className="container mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-white">Create an Account</h1>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg"
        >
          {error && <p className="mb-4 text-red-500">{error}</p>}
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          
          <button
            type="submit"
            className="w-full p-3 text-white transition-all duration-300 rounded-md bg-gradient-to-r from-yellow-500 to-yellow-600 hover:bg-yellow-700"
          >
            Sign Up
          </button>

          {/* Sign-in Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account ?  
              <a
                href="/signin"
                className="font-semibold text-yellow-500 hover:text-yellow-700"
              >
                 Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
