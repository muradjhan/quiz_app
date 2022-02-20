import { useNavigate } from "react-router-dom";

export default function Initial(questionList) {
  const questions = questionList.questionList;
  
  const navigate = useNavigate();

  function handleClickToQuiz() {
    navigate("/quiz");
    for (let i = questions.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = questions[i]
      questions[i] = questions[j]
      questions[j] = k
    }
  }

  return (
    <div className="app">
      <div className="score-section">
        <h3 className="">Quiz app with 5 questions</h3>
        <button type="submit" onClick={handleClickToQuiz}>
          Get Started
        </button>
      </div>
    </div>
  );
}
