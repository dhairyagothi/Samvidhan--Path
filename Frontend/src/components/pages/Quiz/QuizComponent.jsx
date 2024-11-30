// Quiz/QuizComponent.jsx
import React, { useState } from "react";
import { quizData } from "./data";
import QuizQuestion from "./QuizQuestion";
import Results from "./Results";
import QuizIntro from "./QuizIntro";

const QuizComponent = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [questions] = useState(() =>
    quizData.sort(() => 0.5 - Math.random()).slice(0, 10) // Randomly select 10 questions
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [timeExpired, setTimeExpired] = useState(false);

  const startQuiz = () => {
    setHasStarted(true);
  };

  const handleAnswer = (selectedAnswer) => {
    if (!timeExpired) {
      const currentQuestion = questions[currentQuestionIndex];
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
      navigateNext();
    }
  };

  const navigateNext = () => {
    setTimeExpired(false);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setResetKey((prevKey) => prevKey + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleTimeUp = () => {
    setTimeExpired(true);
    navigateNext();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-300">
      {!hasStarted ? (
        <QuizIntro onStart={startQuiz} />
      ) : !isQuizCompleted ? (
        <QuizQuestion
          question={questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          handleAnswer={handleAnswer}
          onTimeUp={handleTimeUp}
          resetKey={resetKey}
        />
      ) : (
        <Results score={score} total={questions.length} userProfile={{ name: "Dhairya" }} />
      )}
    </div>
  );
};

export default QuizComponent;
