import React from "react";
import { useNavigate } from "react-router-dom";

const QuizResult = () => {
  const score = localStorage.getItem("quizScore") || 0;
  const navigate = useNavigate();

  return (
    <div className="container p-6 mx-auto space-y-8 text-center">
      <h1 className="text-4xl font-bold text-yellow-500">Quiz Results</h1>
      <p className="text-lg font-semibold">You scored {score} out of 5!</p>
      <button
        onClick={() => navigate("/quiz")}
        className="px-6 py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
      >
        Retake Quiz
      </button>
    </div>
  );
};

export default QuizResult;
