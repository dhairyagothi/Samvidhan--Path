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
    "PLEDGE",
    "UNITY",
    "SOVEREIGN",
    "REPUBLIC",
    "INDIA",
    "PEOPLE",
  ];

  const [wordsToFind, setWordsToFind] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const shuffledWords = wordBank.sort(() => 0.5 - Math.random());
    setWordsToFind(shuffledWords.slice(0, 7)); // Select 7 random words for the game
    resetGame(shuffledWords.slice(0, 7));
  }, []);

  const resetGame = (selectedWords) => {
    const newGrid = generateGrid(10, 10, selectedWords);
    setGrid(newGrid);
    setFoundWords([]);
    setSelectedCells([]);
    setCurrentWord("");
    setShowPopup(false);
  };

  const generateGrid = (rows, cols, words) => {
    const grid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill("")); // Initialize empty grid

    const placeWordInGrid = (word) => {
      let placed = false;

      while (!placed) {
        const direction = Math.random() > 0.5 ? "HORIZONTAL" : "VERTICAL";
        const startRow = Math.floor(Math.random() * rows);
        const startCol = Math.floor(Math.random() * cols);

        if (direction === "HORIZONTAL") {
          if (startCol + word.length <= cols) {
            // Check if space is available
            const canPlace = word.split("").every((_, i) => {
              return grid[startRow][startCol + i] === "" || grid[startRow][startCol + i] === word[i];
            });

            if (canPlace) {
              word.split("").forEach((char, i) => {
                grid[startRow][startCol + i] = char;
              });
              placed = true;
            }
          }
        } else {
          if (startRow + word.length <= rows) {
            // Check if space is available
            const canPlace = word.split("").every((_, i) => {
              return grid[startRow + i][startCol] === "" || grid[startRow + i][startCol] === word[i];
            });

            if (canPlace) {
              word.split("").forEach((char, i) => {
                grid[startRow + i][startCol] = char;
              });
              placed = true;
            }
          }
        }
      }
    };

    // Place all words
    words.forEach((word) => {
      placeWordInGrid(word);
    });

    // Fill remaining empty cells with random letters
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === "") {
          grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }

    return grid;
  };

  const handleCellClick = (row, col) => {
    const letter = grid[row][col];

    if (!letter) return; // Skip empty cells
    if (selectedCells.some((cell) => cell.row === row && cell.col === col))
      return; // Avoid re-selecting cells

    setSelectedCells((prev) => [...prev, { row, col }]);
    setCurrentWord((prev) => prev + letter);
  };

  const checkWord = () => {
    if (wordsToFind.includes(currentWord) && !foundWords.includes(currentWord)) {
      // Add to found words
      setFoundWords((prev) => [...prev, currentWord]);

      // Remove letters from the grid
      const newGrid = grid.map((row, rowIndex) =>
        row.map((letter, colIndex) =>
          selectedCells.some(
            (cell) => cell.row === rowIndex && cell.col === colIndex
          )
            ? ""
            : letter
        )
      );
      setGrid(newGrid);

      // Check if all words are found
      if (foundWords.length + 1 === wordsToFind.length) {
        setShowPopup(true);
      }

      // Reset selection
      resetSelection();
    } else {
      alert("Invalid word or already found!");
      resetSelection();
    }
  };

  const resetSelection = () => {
    setSelectedCells([]);
    setCurrentWord("");
  };

  const handlePopupAction = (action) => {
    if (action === "restart") {
      resetGame(wordsToFind);
    } else if (action === "back") {
      alert("Returning to the main menu...");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="mb-4 text-2xl font-bold">Samvidhan Path Word Search</h1>
      <p className="mb-2 text-lg">
        Words to Find: {foundWords.length}/{wordsToFind.length}
      </p>
      <div className="grid grid-cols-10 gap-1">
        {grid.map((row, rowIndex) =>
          row.map((letter, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-12 h-12 flex items-center justify-center border text-lg font-bold ${
                selectedCells.some(
                  (cell) => cell.row === rowIndex && cell.col === colIndex
                )
                  ? "bg-green-300 text-white"
                  : letter
                  ? "bg-yellow-100 text-gray-800"
                  : "bg-gray-300"
              } cursor-pointer`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {letter}
            </div>
          ))
        )}
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-lg font-semibold">Selected Word:</h2>
        <p className="text-xl font-bold text-blue-600">{currentWord}</p>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 mt-2 font-bold text-white bg-green-500 rounded"
            onClick={checkWord}
          >
            Submit Word
          </button>
          <button
            className="px-4 py-2 mt-2 font-bold text-white bg-red-500 rounded"
            onClick={resetSelection}
          >
            Reset Selection
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Found Words:</h2>
        <ul className="list-disc list-inside">
          {foundWords.map((word, index) => (
            <li key={index} className="font-bold text-green-600">
              {word}
            </li>
          ))}
        </ul>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 text-center bg-white rounded shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Congratulations!</h2>
            <p className="mb-4">You've found all the words!</p>
            <div className="flex gap-4">
              <button
                className="px-4 py-2 font-bold text-white bg-green-500 rounded"
                onClick={() => handlePopupAction("restart")}
              >
                Restart Game
              </button>
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
                onClick={() => window.history.back()}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordSearchGame;
