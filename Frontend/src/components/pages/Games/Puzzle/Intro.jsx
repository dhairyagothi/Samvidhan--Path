import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState(3); // Default level

  const startGame = () => {
    navigate(`/games/puzzle/${level}`); // Navigate to the game page with the selected level
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <h1 className="text-4xl font-bold text-yellow-500">Sliding Puzzle Game</h1>
      <p className="mt-4 text-lg text-gray-700">
        Choose your level and start solving the puzzle!
      </p>
      <div className="mt-6">
        <label className="text-xl text-gray-600">Select Difficulty Level:</label>
        <select
          className="p-2 ml-4 border border-gray-300 rounded-md"
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
        >
          <option value={3}>Easy (3x3)</option>
          <option value={4}>Medium (4x4)</option>
          <option value={5}>Hard (5x5)</option>
        </select>
      </div>
      <button
        onClick={startGame}
        className="px-6 py-3 mt-6 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
      >
        Start Game
      </button>
    </div>
  );
};

export default Intro;
