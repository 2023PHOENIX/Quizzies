import { useState } from "react";
import QuizInterface from "../../components/Quiz/QuizInterface/QuizInterface";
import styles from "./quiz.module.css";
import QuizResult from "../../components/Quiz/QuizResult/QuizResult";
const Quiz = () => {
  const [finalPage, setFinalPage] = useState(false);
  const [quizType, setQuizType] = useState("poll");
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        {!finalPage && <QuizInterface />}

        {finalPage && <QuizResult quizType={quizType} />}
      </div>
    </div>
  );
};

export default Quiz;
