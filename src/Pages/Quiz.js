import "../index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import FinalScreen from "./FinalScreen";

export default function Quiz(questionList) {
  const questions = questionList.questionList;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const scores = 17;
  const [time, setTime] = useState({});
  const navigate = useNavigate();

  const childToParent = (time) => {
    setTime(time);
  };

  function toFinalScreen() {
    navigate("/score");
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 5) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return ((<FinalScreen score={score} />), 
    <div className="app">
      {showScore ? (
        toFinalScreen()
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/ 5
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
            <br />
            <Timer childToParent={childToParent} score={score}/>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                key={answerOption.id}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
