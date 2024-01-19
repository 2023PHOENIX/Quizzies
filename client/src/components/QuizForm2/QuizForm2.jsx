import styles from "./quizForm2.module.css";
import plus from "../../assets/plus.svg";
import { v4 as uuidv4 } from "uuid";

import QuestionData from "./QuestionData";
import { useState } from "react";
import Timer from "../Timer/Timer";
import { useEffect } from "react";
import { generateDefaultData } from "../../data/questionDefaultData";

const QuizForm2 = () => {
  const [questionData, setQuestionData] = useState([generateDefaultData()]);

  const [selectedQuestionData, setSelectedQuestionData] = useState(
    questionData[0],
  );

  console.log(questionData);

  console.log(selectedQuestionData);
  const addQuestion = () => {
    setQuestionData((prevData) => [...prevData, generateDefaultData()]);
  };

  const removeQuestion = (id) => {
    const updatedQuestionData = questionData.filter(
      (question) => question.id !== id,
    );

    setQuestionData(updatedQuestionData);
  };

  const updateUserInputQuestionData = () => {
    const updatedQuestionData = questionData.map((q) => {
      return q.id === selectedQuestionData.id ? selectedQuestionData : q;
    });

    setQuestionData(updatedQuestionData);
  };
  // WARN: using index over here

  const changeSelectedQuestion = (index) => {
    updateUserInputQuestionData();
    setSelectedQuestionData(questionData[index]);
  };

  const handleCreateQuiz = () => {
    // HACK: corner case: last question is not added till now
    updateUserInputQuestionData();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.questionCounter}>
        <div className={styles.qCount}>
          {questionData.map((qd, i) => (
            <div
              className={styles.qNum}
              key={qd.id}
              onClick={() => changeSelectedQuestion(i)}
            >
              {i + 1}
              {i > 0 && (
                <div
                  className={styles.crossBtn}
                  onClick={() => removeQuestion(qd.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                  >
                    <path
                      d="M7.5553 1.34619L1.46155 7.43994M1.46155 1.34619L7.5553 7.43994"
                      stroke="#474444"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
          {questionData.length < 5 && (
            <img
              src={plus}
              className={styles.plusQuestion}
              onClick={addQuestion}
            />
          )}
        </div>
        <p> Max 5 questions</p>
      </div>
      <QuestionData
        data={selectedQuestionData}
        setData={setSelectedQuestionData}
      />
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
          onClick={handleCreateQuiz}
        >
          Create Quiz
        </button>
      </div>
      <Timer />
    </div>
  );
};

export default QuizForm2;
