import React, { useState, useEffect } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import puzzleImage from "../../../../assets/education.png"; // Replace with your image path
import { useParams, useNavigate } from "react-router-dom";

const Game = () => {
  const { level } = useParams();
  const navigate = useNavigate();

  const gridSize = Number(level); // Grid size (e.g., 3x3, 4x4, etc.)
  const tileSize = 100; // Size of each tile
  const puzzleSize = gridSize * tileSize;
  const [tiles, setTiles] = useState([]);
  const [emptyTile, setEmptyTile] = useState({ x: gridSize - 1, y: gridSize - 1 });
  const [moves, setMoves] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [image] = useImage(puzzleImage); // Image for the puzzle

  // Initialize and shuffle tiles
  useEffect(() => {
    const tempTiles = [];
    // Create tiles excluding the empty one
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (x === gridSize - 1 && y === gridSize - 1) continue; // Skip the empty tile
        tempTiles.push({
          x,
          y,
          originalX: x,
          originalY: y,
          number: y * gridSize + x + 1,
        });
      }
    }
    // Shuffle tiles (excluding the empty one)
    shuffleArray(tempTiles);
    setTiles(tempTiles);
  }, [gridSize]);

  // Shuffle helper function
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Check if the puzzle is complete
  const checkCompletion = () => {
    return tiles.every(
      (tile) => tile.x === tile.originalX && tile.y === tile.originalY
    );
  };

  // Handle tile click
  const handleTileClick = (tile) => {
    const dx = Math.abs(tile.x - emptyTile.x);
    const dy = Math.abs(tile.y - emptyTile.y);
    if (dx + dy === 1) {
      // Swap tile and empty tile
      const newTiles = tiles.map((t) =>
        t.x === tile.x && t.y === tile.y
          ? { ...t, x: emptyTile.x, y: emptyTile.y }
          : t
      );
      setTiles(newTiles);
      setEmptyTile({ x: tile.x, y: tile.y });
      setMoves((prev) => prev + 1);

      // Check for completion after each move
      if (checkCompletion()) {
        setIsComplete(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <h1 className="text-3xl font-bold text-yellow-500">Sliding Puzzle</h1>
      <p className="absolute text-xl text-gray-700 top-10 right-10">Moves: {moves}</p>

      <div className="flex">
        {/* Puzzle grid */}
        <div className="relative">
          <Stage width={puzzleSize} height={puzzleSize}>
            <Layer>
              {/* Render tiles */}
              {tiles.map((tile, index) => (
                <Image
                  key={index}
                  x={tile.x * tileSize}
                  y={tile.y * tileSize}
                  width={tileSize}
                  height={tileSize}
                  image={image}
                  crop={{
                    x: tile.originalX * tileSize,
                    y: tile.originalY * tileSize,
                    width: tileSize,
                    height: tileSize,
                  }}
                  stroke="#000"
                  strokeWidth={2}
                  onClick={() => handleTileClick(tile)}
                />
              ))}
            </Layer>
          </Stage>
        </div>

        {/* Original image on the side */}
        <div className="ml-8">
          <img
            src={puzzleImage}
            alt="Original"
            width={puzzleSize}
            height={puzzleSize}
            style={{ border: "2px solid #000" }}
          />
        </div>
      </div>

      {/* Display completion message */}
      {isComplete && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellow-500 bg-opacity-90">
          <p className="text-3xl font-bold text-white">Puzzle Complete!</p>
          <p className="mt-4 text-xl text-white">Moves: {moves}</p>
          <div className="mt-6">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
