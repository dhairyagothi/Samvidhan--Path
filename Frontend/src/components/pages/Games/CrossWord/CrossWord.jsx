import React, { useState } from "react";

const CrosswordGame = () => {
  const crosswordGrid = [
    ["C", "O", "N", "S", "T", "I", "T", "U", "T", "I", "O", "N"],
    ["", "", "", "", "", "", "I", "", "", "", "", ""],
    ["", "", "", "", "", "", "B", "", "", "", "", ""],
    ["", "", "E", "Q", "U", "A", "L", "I", "T", "Y", "", ""],
    ["", "", "", "", "", "", "E", "", "", "", "", ""],
    ["", "", "", "", "", "", "R", "", "", "", "", ""],
    ["J", "U", "S", "T", "I", "C", "E", "", "", "", "", ""],
    ["", "", "", "", "", "", "Y", "", "", "", "", ""],
    ["", "F", "R", "A", "T", "E", "R", "N", "I", "T", "Y", ""],
    ["", "", "", "", "", "", "P", "", "", "", "", ""],
    ["", "", "", "", "", "", "L", "I", "B", "E", "R", "T", "Y"],
  ];

  const clues = {
    across: [
      "1: The supreme law of the land (12 letters)",
      "3: Principle of being equal (8 letters)",
      "5: Fairness and impartiality (7 letters)",
      "7: Brotherhood and solidarity (10 letters)",
      "9: Freedom from oppression (7 letters)",
    ],
    down: [
      "2: Principle of fairness and justice (7 letters)",
      "4: Principle of equality (8 letters)",
      "6: The supreme law of the land (12 letters)",
    ],
  };

  const solution = [
    ["C", "O", "N", "S", "T", "I", "T", "U", "T", "I", "O", "N"],
    ["", "", "", "", "", "", "I", "", "", "", "", ""],
    ["", "", "", "", "", "", "B", "", "", "", "", ""],
    ["", "", "E", "Q", "U", "A", "L", "I", "T", "Y", "", ""],
    ["", "", "", "", "", "", "E", "", "", "", "", ""],
    ["", "", "", "", "", "", "R", "", "", "", "", ""],
    ["J", "U", "S", "T", "I", "C", "E", "", "", "", "", ""],
    ["", "", "", "", "", "", "Y", "", "", "", "", ""],
    ["", "F", "R", "A", "T", "E", "R", "N", "I", "T", "Y", ""],
    ["", "", "", "", "", "", "P", "", "", "", "", ""],
    ["", "", "", "", "", "", "L", "I", "B", "E", "R", "T", "Y"],
  ];

  const [userGrid, setUserGrid] = useState(
    crosswordGrid.map((row) => row.map((cell) => (cell ? "" : "")))
  );

  const handleChange = (row, col, value) => {
    const newGrid = [...userGrid];
    newGrid[row][col] = value.toUpperCase();
    setUserGrid(newGrid);
  };

  const checkAnswers = () => {
    for (let i = 0; i < solution.length; i++) {
      for (let j = 0; j < solution[i].length; j++) {
        if (solution[i][j] && userGrid[i][j] !== solution[i][j]) {
          alert("Some answers are incorrect. Keep trying!");
          return;
        }
      }
    }
    alert("Congratulations! You've completed the crossword!");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold text-blue-600">
        Constitution Crossword
      </h1>
      <div className="flex mb-6">
        <div className="mr-8">
          <h2 className="text-lg font-semibold">Across</h2>
          <ul className="pl-4 list-disc">
            {clues.across.map((clue, index) => (
              <li key={index} className="mb-2 text-gray-700">
                {clue}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Down</h2>
          <ul className="pl-4 list-disc">
            {clues.down.map((clue, index) => (
              <li key={index} className="mb-2 text-gray-700">
                {clue}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(12, 2.5rem)" }}>
        {crosswordGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-10 h-10 border flex items-center justify-center ${
                cell ? "bg-yellow-100" : "bg-gray-300"
              }`}
            >
              {cell ? (
                <input
                  type="text"
                  maxLength={1}
                  value={userGrid[rowIndex][colIndex]}
                  onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                  className="w-full h-full font-bold text-center text-gray-800 bg-transparent outline-none"
                />
              ) : (
                ""
              )}
            </div>
          ))
        )}
      </div>
      <button
        onClick={checkAnswers}
        className="px-4 py-2 mt-6 font-bold text-white bg-green-500 rounded hover:bg-green-600"
      >
        Check Answers
      </button>
    </div>
  );
};

export default CrosswordGame;
