import React from "react";
import { useNavigate } from "react-router-dom";

const Completion = ({ moves }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <h1 className="text-4xl font-bold text-green-500">Congratulations!</h1>
      <p className="mt-4 text-xl text-gray-700">
        You've successfully completed the puzzle in{" "}
        <span className="font-semibold text-yellow-500">{moves}</span> moves.
      </p>

      <div className="flex flex-col mt-6 space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
        >
          Back to Home
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Completion;
