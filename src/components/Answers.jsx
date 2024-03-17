import React, { useRef, useState } from "react";
import QUESTIONS from "../questions";

const initialAnswer = { answer: null, showResult: false };

function Answers({ activeIndex, setUserAnswers, selectedAnswer, onSelectAnswer }) {
  const shuffledAnswers = useRef();

  // Event Handlers
  const handleSelectAnswer = (answer) => {
    onSelectAnswer({ answer, showResult: false });
    setTimeout(() => {
      onSelectAnswer({
        answer,
        showResult: true,
      });
      setTimeout(() => {
        onSelectAnswer(initialAnswer);
        setUserAnswers((prev) => [...prev, answer]);
      }, 1500);
    }, 1500);
  };

  // Compute Values
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTIONS[activeIndex].answers]; // copy the answers array because sort mutates the array
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // using sort method to re-order or shuffle the answers
  }
  const correctAnswer = QUESTIONS[activeIndex].answers[0];

  return (
    <ul id="answers">
      {shuffledAnswers.current &&
        shuffledAnswers.current.map((answer) => {
          const isSelected = selectedAnswer.answer === answer;
          const isCorrect = correctAnswer === answer;
          let btnClass = isSelected ? "selected" : "";

          if (selectedAnswer.showResult) {
            btnClass += isCorrect ? " correct" : "";
            btnClass += isSelected && !isCorrect ? " wrong" : "";
          }

          return (
            <li className="answer" key={answer}>
              <button
                onClick={() => handleSelectAnswer(answer)}
                className={`${btnClass}`}
                disabled={selectedAnswer.answer}>
                {answer}
              </button>
            </li>
          );
        })}
    </ul>
  );
}

export default Answers;
