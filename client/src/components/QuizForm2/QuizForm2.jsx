import styles from "./quizForm2.module.css";
import plus from "../../assets/plus.svg";

import QuestionData from "./QuestionData";
import { useState } from "react";

const QuizForm2 = () => {
  const [totalQuestions, setTotalQuestions] = useState(2);

  const [questionData, setQuestionData] = useState({});
  console.log(questionData);
  return (
    <div className={styles.wrapper}>
      <div className={styles.questionCounter}>
        <div className={styles.qCount}>
          {[...Array(totalQuestions)].map((_, index) => (
            <div className={styles.qNum} key={index}>
              {index + 1}
            </div>
          ))}
          {totalQuestions < 4 && (
            <img
              src={plus}
              className={styles.plusQuestion}
              onClick={() => setTotalQuestions(totalQuestions + 1)}
            />
          )}
        </div>
        <p> Max 5 questions</p>
      </div>
      <QuestionData setQuestionData={setQuestionData} />
      <div className={styles.buttons}>
        <button
          className={styles.buttonStyle}
          style={{ background: "#fff", color: "#474444" }}
        >
          Cancel
        </button>
        <button
          className={styles.buttonStyle}
          style={{ background: "#60B84B", color: "#fff" }}
        >
          Create Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizForm2;
