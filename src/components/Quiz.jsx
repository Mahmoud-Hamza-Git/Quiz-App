import React, { useCallback, useMemo, useState } from "react";
import QUESTIONS from "../questions";
import QuizCompleteImg from "../assets/quiz-complete.png";
import Progress from "./Progress";
import Answers from "../components/Answers";

//
const initialAnswer = { answer: null, showResult: false };

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(initialAnswer);

  // Event Handlers
  const handleSkipAnswer = useCallback(() => setUserAnswers((prev) => [...prev, null]), []);

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
        <Progress
          key={activeQuestionIndex}
          timeout={selectedAnswer.answer == null ? 15000 : 3000}
          onTimeout={handleSkipAnswer}
          isAnswered={selectedAnswer.answer != null}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      </div>
      <Answers
        key={activeQuestionIndex}
        activeIndex={activeQuestionIndex}
        setUserAnswers={setUserAnswers}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={setSelectedAnswer}
      />
    </div>
  );
}

export default Quiz;
