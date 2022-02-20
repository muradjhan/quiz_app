import React, { useState, useEffect } from "react";
import FinalScreen from "./FinalScreen";

const Timer = ({ childToParent, score}) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const time = { minutes: minutes, seconds: seconds };
  console.log(score);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (seconds > 59) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  <FinalScreen timer={time}/>
  return (console.log(time),
    () => childToParent(time),
    (
      <div className="time">
        {minutes}:{seconds}
      </div>
    )
  );
};

export default Timer;
