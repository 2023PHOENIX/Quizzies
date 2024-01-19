import { useState } from "react";
import QuizForm from "../../components/QuizForm/QuizForm";
import styles from "./createQuiz.module.css";
import QuizForm2 from "../../components/QuizForm2/QuizForm2";
import Congrats from "../../components/Congrats/Congrats";

const CreateQuiz = () => {
  const [formChoices, setFormChoices] = useState();
  const [quizCreated, setQuizCreated] = useState(false);
  return (
    <div className={styles.wrapper}>
      {!formChoices && (
        <div className={styles.popupForm}>
          <QuizForm setFormChoices={setFormChoices} />
        </div>
      )}

      {!quizCreated && formChoices && (
        <div className={styles.popupForm2}>
          <QuizForm2
            quizType={formChoices?.quizType}
            setQuizCreated={setQuizCreated}
          />
        </div>
      )}

      {quizCreated && <Congrats />}
    </div>
  );
};

export default CreateQuiz;
