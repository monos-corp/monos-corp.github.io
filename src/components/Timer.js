import React, { useState } from "react";
import "./styles/Timer.css";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const toggleTimer = () => {
    setTimerActive(!timerActive);
    if (timerActive) clearInterval(timerInterval);
    else {
      const timerInterval = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);
    }
  };

  const resetTimer = () => {
    setTimeLeft(0);
    setTimerActive(false);
  };

  return (
    <div className="timer">
      <h2>Timer: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</h2>
      <button onClick={toggleTimer}>{timerActive ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
