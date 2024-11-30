// Quiz/QuizIntro.jsx
import React from "react";

const QuizIntro = ({ onStart }) => {
  return (
    <div className="max-w-2xl p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-yellow-500">Welcome to Samvidhan Path Quiz</h1>
      <p className="mt-4 text-lg text-gray-700">
        Test your knowledge about the Indian Constitution! Here's what you need to know before starting:
      </p>
      <ul className="mt-4 text-gray-600 list-disc list-inside">
        <li>Each question has a time limit of 30 seconds.</li>
        <li>Answer all 10 questions to complete the quiz.</li>
        <li>You cannot go back to a previous question.</li>
        <li>Your score will be displayed at the end.</li>
      </ul>
      <div className="mt-6 text-center">
        <button
          onClick={onStart}
          className="px-6 py-3 font-semibold text-white bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizIntro;
