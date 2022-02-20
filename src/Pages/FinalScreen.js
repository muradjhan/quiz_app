import { useNavigate } from "react-router-dom";

export default function FinalScreen({ score }) {
  const navigate = useNavigate();
  const scoree = score;
  console.log(score);

  function handleClick() {
    navigate("/");
  }
  return (
    <div className="app">
      <div className="score-section">
        <h3>You scored {score} out of 5</h3>

        <button type="button" onClick={handleClick}>
          Start again!
        </button>
      </div>
    </div>
  );
}
