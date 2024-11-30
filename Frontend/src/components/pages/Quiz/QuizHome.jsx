import React from "react";
import { Link } from "react-router-dom";

const QuizHome = () => {
  return (
    <div className="container p-6 mx-auto space-y-8 text-center">
      <h1 className="text-4xl font-bold text-yellow-500">Samvidhan Path Quiz</h1>
      <p className="text-gray-600">
        Test your knowledge about the Indian Constitution, its history, and its principles. Click below to begin!
      </p>
      <Link
        to="/quiz/start"
        className="px-6 py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
      >
        Start Quiz
      </Link>
    </div>
  );
};

export default QuizHome;
