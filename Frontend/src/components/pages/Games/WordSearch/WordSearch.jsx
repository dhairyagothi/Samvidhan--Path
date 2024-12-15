import React, { useState, useEffect } from "react";

const WordSearchGame = () => {
  const wordBank = [
    "JUSTICE",
    "LIBERTY",
    "EQUALITY",
    "FRATERNITY",
    "RIGHTS",
    "DUTY",
    "CONSTITUTION",
  ];

  const [grid, setGrid] = useState([]);
  const [wordsToFind, setWordsToFind] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");

  useEffect(() => {
    const selectedWords = wordBank.sort(() => 0.5 - Math.random()).slice(0, 5);
    setWordsToFind(selectedWords);
    setGrid(generateGrid(10, 10, selectedWords));
  }, []);

  const generateGrid = (rows, cols, words) => {
    const grid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(""));
    const directions = [
      [0, 1], // Horizontal
      [1, 0], // Vertical
    ];

    const placeWord = (word) => {
      let placed = false;
      while (!placed) {
        const [dx, dy] = directions[Math.floor(Math.random() * directions.length)];
        const x = Math.floor(Math.random() * rows);
        const y = Math.floor(Math.random() * cols);

        if (x + dx * word.length <= rows && y + dy * word.length <= cols) {
          const canPlace = word.split("").every((char, i) => {
            const nx = x + dx * i;
            const ny = y + dy * i;
            return !grid[nx][ny] || grid[nx][ny] === char;
          });

          if (canPlace) {
            word.split("").forEach((char, i) => {
              const nx = x + dx * i;
              const ny = y + dy * i;
              grid[nx][ny] = char;
            });
            placed = true;
          }
        }
      }
    };

    words.forEach(placeWord);

    // Fill remaining cells
    return grid.map((row) =>
      row.map((cell) => (cell ? cell : String.fromCharCode(65 + Math.random() * 26)))
    );
  };

  const handleCellClick = (row, col) => {
    setSelectedWord((prev) => prev + grid[row][col]);
  };

  const submitWord = () => {
    if (wordsToFind.includes(selectedWord) && !foundWords.includes(selectedWord)) {
      setFoundWords((prev) => [...prev, selectedWord]);
    }
    setSelectedWord("");
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="mb-4 text-xl font-bold">Word Search Game</h1>
      <div className="grid grid-cols-10 gap-1">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="flex items-center justify-center w-10 h-10 border cursor-pointer"
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      <div className="mt-4">
        <p>Selected Word: {selectedWord}</p>
        <button className="px-4 py-2 text-white bg-blue-500" onClick={submitWord}>
          Submit Word
        </button>
      </div>
      <div className="mt-4">
        <h2>Found Words:</h2>
        <ul>
          {foundWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WordSearchGame;
