import React, { useState } from "react";
import Timer from "./Timer";
import Modal from "./Modal";

const QuizQuestion = ({
  question,
  currentIndex,
  handleAnswer,
  onTimeUp,
  resetKey,
}) => {
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);

  const handleTimeUpInternal = () => {
    setShowTimeUpModal(true); // Show the modal
    onTimeUp(); // Trigger parent onTimeUp
  };

  return (
    <div className="w-full max-w-2xl p-6 mx-auto space-y-6 text-center bg-white rounded-lg shadow-md">
      {showTimeUpModal && (
        <Modal
          message="Time's Up!"
          onClose={() => setShowTimeUpModal(false)}
        />
      )}
      <Timer duration={30} onTimeUp={handleTimeUpInternal} resetKey={resetKey} />
      <h2 className="text-2xl font-bold text-yellow-500">
        Question {currentIndex + 1}
      </h2>
      <p className="text-xl text-gray-700">{question.question}</p>
      <div className="space-y-4">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(choice)}
            className="w-full px-4 py-3 text-white transition bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
