// Quiz/Timer.jsx

import React, { useEffect, useState } from "react";

const Timer = ({ duration, onTimeUp, resetKey }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    // Reset timer when resetKey changes
    setTimeLeft(duration);
  }, [resetKey, duration]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          onTimeUp(); // Trigger time-up action
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  return (
    <div className="text-lg font-bold text-yellow-500">
      Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;
