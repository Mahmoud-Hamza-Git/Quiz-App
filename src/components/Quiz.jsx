import React, { useCallback, useMemo, useState } from "react";
import QUESTIONS from "../questions";
import QuizCompleteImg from "../assets/quiz-complete.png";
import Progress from "./Progress";
import Answers from "../components/Answers";

//

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Event Handlers
  const handleSelectAnswer = useCallback((answer, skip) => {
    setSelectedAnswer(answer);
    if (!skip) {
      setTimeout(() => {
        setSelectedAnswer(null);
        setUserAnswers((prev) => [...prev, answer]);
      }, 2000);
    } else {
      setSelectedAnswer(null);
      setUserAnswers((prev) => [...prev, answer]);
    }
  }, []);
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null, true), [handleSelectAnswer]);

  // Computed Values
  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={QuizCompleteImg} alt="Quiz complete image" />
        <h1>Congratulations! You have completed the quiz!</h1>
        <p>
          Your score is:{userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length}
          / {QUESTIONS.length}
        </p>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        <Progress key={activeQuestionIndex} timeout={15000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      </div>
      <Answers
        key={activeQuestionIndex}
        answers={QUESTIONS[activeQuestionIndex].answers}
        correctAnswer={QUESTIONS[activeQuestionIndex].answers[0]}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
}

export default Quiz;
