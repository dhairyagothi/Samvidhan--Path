import React, { useState } from "react";
import { QuizQuestions } from "./Quizdata";
import { useNavigate } from "react-router-dom";

const QuizStart = () => {
  const [questions] = useState(
    QuizQuestions.sort(() => 0.5 - Math.random()).slice(0, 5) // Get 5 random questions
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswer = (selectedOption) => {
    const current = questions[currentQuestion];
    setAnswers({ ...answers, [current.id]: selectedOption });
    if (selectedOption === current.answer) setScore(score + 1);

    // Move to the next question or finish
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem("quizScore", score + (selectedOption === current.answer ? 1 : 0));
      navigate("/quiz/result");
    }
  };

  return (
    <div className="container p-6 mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-yellow-500">
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <p className="text-lg font-semibold">{questions[currentQuestion].question}</p>
      <div className="grid grid-cols-1 gap-4">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="px-6 py-3 transition bg-gray-100 rounded-lg shadow hover:bg-yellow-500 hover:text-white"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizStart;
