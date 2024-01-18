import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./quizForm2.module.css";
const QuestionData = ({ setQuestionData }) => {
  const [correctAnswer, setCorrectAnswer] = useState();
  const [totalOptions, setTotalOptions] = useState([
    {
      id: uuidv4(),
    },
    { id: uuidv4() },
  ]);

  console.log(totalOptions);
  const [questionType, setQuestionType] = useState("Text");

  const addOption = () => {
    setTotalOptions((prevData) => [...prevData, { id: uuidv4() }]);
  };
  const removeOption = (id) => {
    const updatedOptionData = totalOptions.filter((option) => option.id !== id);

    setTotalOptions(updatedOptionData);
  };
  const handleOptionChange = (e) => {
    console.log(e.target.value);
    setCorrectAnswer(e.target.value);
  };

  const handleQuestionType = (e) => {
    console.log(questionType);
    setQuestionType(e.target.name);
  };
  return (
    <>
      <input
        type="text"
        className={styles.questionTitle}
        placeholder="Poll Question"
      />
      <div className={styles.choiceType}>
        <div className="choiceText">Option Type </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="option1"
            name="Text"
            checked={questionType === "Text"}
            className={styles.radioInput}
            onChange={handleQuestionType}
          />
          <label htmlFor="option1" className={styles.radioLabel}>
            Text
          </label>
        </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="option2"
            name="Image URL"
            checked={questionType === "Image URL"}
            className={styles.radioInput}
            onChange={handleQuestionType}
          />
          <label htmlFor="option2" className={styles.radioLabel}>
            Image URL
          </label>
        </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="option3"
            name="text&image"
            className={styles.radioInput}
            checked={questionType === "text&image"}
            onChange={handleQuestionType}
          />
          <label htmlFor="option3" className={styles.radioLabel}>
            Text & Image URL
          </label>
        </div>
      </div>
      <div className={styles.optionsToChoose}>
        {totalOptions.map((opData, index) => (
          <div className={styles.option} key={index}>
            <input
              type="radio"
              value={`option${index + 1}`}
              checked={correctAnswer === `option${index + 1}`}
              onChange={handleOptionChange}
              className={styles.optionRadio}
            />
            <input
              type="text"
              placeholder={
                questionType === "text&image" ? "Text" : `${questionType}`
              }
              className={styles.optionInput}
              style={questionType === "text&image" ? { width: "11rem" } : {}}
            />
            {questionType === "text&image" && (
              <input
                type="text"
                placeholder="Image URL"
                className={styles.optionInput}
                style={{ width: "16rem" }}
              />
            )}
            {index > 1 && (
              <div
                className={styles.deleteBucket}
                onClick={() => removeOption(opData.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                    fill="#D60000"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
        {totalOptions.length < 4 && (
          <div className={styles.addOption} onClick={addOption}>
            Add Option
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default QuestionData;
