import React from "react";

const AboutUs = () => {
  return (
    <div className="container px-10 py-8 mx-auto my-8 bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-3xl font-bold text-yellow-500">About Us</h1>

      <p className="mb-6 text-gray-700">
        Welcome to our platform! We are dedicated to providing accessible, accurate, and user-friendly resources related to the Indian Constitution, legal rights, and civic knowledge. Our mission is to educate, inform, and empower individuals with reliable information about the laws and principles that shape our nation.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">Our Vision</h2>
      <p className="mb-4 text-gray-700">
        Our vision is to create a well-informed society where every individual understands their rights and duties, enabling them to actively participate in the democratic process and contribute to nation-building.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">What We Offer</h2>
      <ul className="mb-6 text-gray-700 list-disc list-inside">
        <li className="mb-2">
          Detailed explanations of the Indian Constitution, its amendments, and schedules.
        </li>
        <li className="mb-2">
          Engaging content such as quizzes, games, and interactive activities to make learning enjoyable.
        </li>
        <li className="mb-2">
          A repository of case studies, blogs, podcasts, and videos to deepen your understanding of legal and civic topics.
        </li>
        <li className="mb-2">
          Tools for exploring, learning, and discussing legal and civic issues in a collaborative environment.
        </li>
      </ul>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">Acknowledgments</h2>
      <p className="mb-4 text-gray-700">
        We extend our gratitude to the <a 
          href="https://legislative.gov.in" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline hover:text-yellow-500"
        >
          Legislative Department of India
        </a> for providing access to reliable resources. Their contributions are invaluable in making this platform a comprehensive educational tool.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">Our Team</h2>
      <p className="mb-4 text-gray-700">
        Our team consists of passionate educators, developers, and designers committed to creating engaging and informative content. We believe in the power of knowledge to transform individuals and societies.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">Contact Us</h2>
      <p className="mb-4 text-gray-700">
        We love hearing from you! If you have questions, feedback, or suggestions, feel free to <a 
          href="/contact" 
          className="text-blue-500 underline hover:text-yellow-500"
        >
          contact us
        </a>. Together, let's build a more informed and empowered community.
      </p>

      <p className="mt-6 text-gray-700">
        Thank you for being a part of our journey!
      </p>
    </div>
  );
};

export default AboutUs;
