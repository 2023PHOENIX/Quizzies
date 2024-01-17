import { useState } from "react";
import QuizForm from "../../components/QuizForm/QuizForm";
import styles from "./createQuiz.module.css";

const CreateQuiz = () => {
  const [formChoices, setFormChoices] = useState("hello");
  return (
    <div className={styles.wrapper}>
      {!formChoices && (
        <div className={styles.popupForm}>
          <QuizForm setFormChoices={setFormChoices} />
        </div>
      )}

      {formChoices && <div className={styles.popupForm2}></div>}
    </div>
  );
};

export default CreateQuiz;
