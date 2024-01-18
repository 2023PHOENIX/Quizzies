import { useState } from "react";
import styles from "./quizForm2.module.css";
const QuestionData = ({ setQuestionData }) => {
  const [correctAnswer, setCorrectAnswer] = useState();
  const [totalOptions, setTotalOptions] = useState(2);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className={styles.questionType}>poll Question </div>
      <div className={styles.choiceType}>
        <div className="choiceText">Option Type </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="option1"
            name="options"
            className={styles.radioInput}
          />
          <label htmlFor="option1" className={styles.radioLabel}>
            Text
          </label>
        </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="option2"
            name="options"
            className={styles.radioInput}
          />
          <label htmlFor="option2" className={styles.radioLabel}>
            Image URL
          </label>
        </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="option3"
            name="options"
            className={styles.radioInput}
          />
          <label htmlFor="option3" className={styles.radioLabel}>
            Text & Image URL
          </label>
        </div>
      </div>
      <div className={styles.optionsToChoose}>
        {[...Array(totalOptions)].map((_, index) => (
          <div className={styles.option} key={index}>
            <input
              type="radio"
              value={`option${index}`}
              checked={correctAnswer === `option${index}`}
              onChange={handleOptionChange}
              className={styles.optionRadio}
            />
            <input type="text" className={styles.optionInput} />
          </div>
        ))}
        {totalOptions < 4 && (
          <div
            className={styles.addOption}
            onClick={() => setTotalOptions(totalOptions + 1)}
          >
            Add Option
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default QuestionData;
