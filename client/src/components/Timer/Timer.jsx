import { useState } from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  const [questionTime, setQuestionTime] = useState("OFF");

  const changeQuestion = (e) => {
    setQuestionTime(e.target.innerText);
  };

  const selectedStyle = {
    backgroundColor: "#D60000",
    color: "#fff",
  };
  return (
    <div className={styles.timerWrapper}>
      <div> Timer </div>
      <div
        name="OFF"
        className={styles.timerBtn}
        onClick={changeQuestion}
        style={questionTime === "OFF" ? selectedStyle : {}}
      >
        OFF
      </div>
      <div
        name="5sec"
        className={styles.timerBtn}
        onClick={changeQuestion}
        style={questionTime === "5 sec" ? selectedStyle : {}}
      >
        5 sec
      </div>
      <div
        name="10sec"
        className={styles.timerBtn}
        onClick={changeQuestion}
        style={questionTime === "10 sec" ? selectedStyle : {}}
      >
        10 sec
      </div>
    </div>
  );
};

export default Timer;
