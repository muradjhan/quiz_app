import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FinalScreen from "./Pages/FinalScreen";
import Quiz from "./Pages/Quiz";
import Initial from "./Pages/Initial";

export default function App() {
  const questions = [
    {
      id: 1,
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false, id: 1 },
        { answerText: "London", isCorrect: false, id: 2 },
        { answerText: "Paris", isCorrect: true, id: 3 },
        { answerText: "Dublin", isCorrect: false, id: 4 },
      ],
    },
    {
      id: 2,
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false, id: 1 },
        { answerText: "Elon Musk", isCorrect: true, id: 2 },
        { answerText: "Bill Gates", isCorrect: false, id: 3 },
        { answerText: "Tony Stark", isCorrect: false, id: 4 },
      ],
    },
    {
      id: 3,
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true, id: 1 },
        { answerText: "Intel", isCorrect: false, id: 2 },
        { answerText: "Amazon", isCorrect: false, id: 3 },
        { answerText: "Microsoft", isCorrect: false, id: 4 },
      ],
    },
    {
      id: 4,
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false, id: 1 },
        { answerText: "4", isCorrect: false, id: 2 },
        { answerText: "6", isCorrect: false, id: 3 },
        { answerText: "7", isCorrect: true, id: 4 },
      ],
    },
    {
      id: 5,
      questionText: "Who is CEO of Microsoft?",
      answerOptions: [
        { answerText: "Mark Zuckerberg", isCorrect: false, id: 1 },
        { answerText: "Tim Cook", isCorrect: false, id: 2 },
        { answerText: "Bill Gates", isCorrect: true, id: 3 },
        { answerText: "Steve Jobs", isCorrect: false, id: 4 },
      ],
    },
    {
      id: 6,
      questionText: "What is the capital of USA?",
      answerOptions: [
        { answerText: "New York", isCorrect: false, id: 1 },
        { answerText: "London", isCorrect: false, id: 2 },
        { answerText: "Washington", isCorrect: true, id: 3 },
        { answerText: "Moscow", isCorrect: false, id: 4 },
      ],
    },
    {
      id: 7,
      questionText: 'Which state of the USA is called "Silicon Valley"?',
      answerOptions: [
        { answerText: "New York", isCorrect: false, id: 1 },
        { answerText: "Miami", isCorrect: false, id: 2 },
        { answerText: "California", isCorrect: true, id: 3 },
        { answerText: "Los Angeles", isCorrect: false, id: 4 },
      ],
    },
    {
      id: 8,
      questionText: "What is the capital of England?",
      answerOptions: [
        { answerText: "Madrid", isCorrect: false, id: 1 },
        { answerText: "London", isCorrect: true, id: 2 },
        { answerText: "Paris", isCorrect: false, id: 3 },
        { answerText: "Manchester", isCorrect: false, id: 4 },
      ],
    },
    {
      id: 9,
      questionText: "When was Amazon founded?",
      answerOptions: [
        { answerText: "1994", isCorrect: true, id: 1 },
        { answerText: "1997", isCorrect: false, id: 2 },
        { answerText: "1990", isCorrect: false, id: 3 },
        { answerText: "1995", isCorrect: false, id: 4 },
      ],
    },
    {
      id: 10,
      questionText: "When was Google founded?",
      answerOptions: [
        { answerText: "1998", isCorrect: true, id: 1 },
        { answerText: "1996", isCorrect: false, id: 2 },
        { answerText: "2001", isCorrect: false, id: 3 },
        { answerText: "1995", isCorrect: false, id: 4 },
      ],
    },
  ];
  
  console.log(questions);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Initial questionList={questions} />} />
        <Route exact path="/quiz" element={<Quiz questionList={questions} />} />
        <Route exact path="/score" element={<FinalScreen />} />
      </Routes>
    </Router>
  );
}
