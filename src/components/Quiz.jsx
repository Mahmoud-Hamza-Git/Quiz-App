import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Progress from "./Progress";
import Answers from "../components/Answers";
import Summary from "./Summary";

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
  const isAnswered = selectedAnswer.answer != null;
  let timer = 15000;
  if (selectedAnswer.answer != null) {
    timer = 3000;
  }

  if (quizIsOver) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <div id="question">
        <Progress
          key={activeQuestionIndex + timer}
          timeout={timer}
          onTimeout={!isAnswered ? handleSkipAnswer : null}
          isAnswered={isAnswered}
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
