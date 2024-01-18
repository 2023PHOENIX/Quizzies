import { useState } from "react";
import QuizForm from "../../components/QuizForm/QuizForm";
import styles from "./createQuiz.module.css";
import QuizForm2 from "../../components/QuizForm2/QuizForm2";

const CreateQuiz = () => {
  const [formChoices, setFormChoices] = useState({});
  return (
    <div className={styles.wrapper}>
      {!formChoices && (
        <div className={styles.popupForm}>
          <QuizForm setFormChoices={setFormChoices} />
        </div>
      )}

      {formChoices && (
        <div className={styles.popupForm2}>
          <QuizForm2 />
        </div>
      )}
    </div>
  );
};

export default CreateQuiz;
