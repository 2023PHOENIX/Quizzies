import QuizInterface from "../../components/Quiz/QuizInterface";
import styles from "./quiz.module.css";

const Quiz = () => {
  return (
    <div className={styles.wrapper}>
      <QuizInterface />
    </div>
  );
};

export default Quiz;
