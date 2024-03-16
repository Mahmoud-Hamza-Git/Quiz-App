import React, { useEffect, useRef } from "react";

function Questions({ answers, selectedAnswer, correctAnswer, onSelectAnswer }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers]; // copy the answers array because sort mutates the array
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // using sort method to re-order or shuffle the answers
  }

  const isWrongAnswer = selectedAnswer !== correctAnswer && selectedAnswer !== null ? "wrong" : "";

  return (
    <ul id="answers">
      {shuffledAnswers.current &&
        shuffledAnswers.current.map((answer) => (
          <li className="answer" key={answer}>
            <button
              onClick={() => onSelectAnswer(answer)}
              className={`${selectedAnswer == answer ? isWrongAnswer + " selected" : ""} ${
                answer == correctAnswer && selectedAnswer ? "correct" : ""
              }`}
              disabled={selectedAnswer != null}>
              {answer}
            </button>
          </li>
        ))}
    </ul>
  );
}

export default Questions;
