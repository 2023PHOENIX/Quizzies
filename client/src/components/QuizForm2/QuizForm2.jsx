import styles from "./quizForm2.module.css";
import plus from "../../assets/plus.svg";
import { v4 as uuidv4 } from "uuid";
import cross from "../../assets/cross.svg";
import QuestionData from "./QuestionData";
import { useState } from "react";
import Timer from "../Timer/Timer";
import { useEffect } from "react";
import { generateDefaultData } from "../../data/questionDefaultData";

const QuizForm2 = ({ quizType, setQuizCreated }) => {
  const [questionData, setQuestionData] = useState([generateDefaultData()]);

  const [selectedQuestionData, setSelectedQuestionData] = useState(
    questionData[0],
  );

  console.log(questionData);

  console.log(selectedQuestionData);
  const addQuestion = () => {
    setQuestionData((prevData) => [...prevData, generateDefaultData()]);
  };

  const removeQuestion = (id, i) => {
    const updatedQuestionData = questionData.filter(
      (question) => question.id !== id,
    );

    setQuestionData(updatedQuestionData);
  };

  const updateUserInputQuestionData = () => { };
  // WARN: using index over here

  const changeSelectedQuestion = (index) => {
    setSelectedQuestionData(questionData[index]);
  };

  const handleCreateQuiz = () => {
    // HACK: corner case: last question is not added till now
    updateUserInputQuestionData();
    setQuizCreated(true);
  };
  console.log(selectedQuestionData.id);
  useEffect(() => {
    const updatedQuestionData = questionData.map((q) => {
      return q.id === selectedQuestionData.id ? selectedQuestionData : q;
    });

    setQuestionData(updatedQuestionData);

    console.log(selectedQuestionData.id);
  }, [selectedQuestionData]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.questionCounter}>
        <div className={styles.qCount}>
          {questionData &&
            questionData.map((qd, i) => (
              <div
                className={styles.qNum}
                key={qd.id}
                onClick={() => changeSelectedQuestion(i)}
              >
                {i + 1}
                {i > 0 && (
                  <div
                    className={styles.crossBtn}
                    onClick={() => removeQuestion(qd.id, i)}
                  >
                    <img src={cross} alt="cross" />
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
        quizType={quizType}
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
      {quizType == "qa" && <Timer />}
    </div>
  );
};

export default QuizForm2;
