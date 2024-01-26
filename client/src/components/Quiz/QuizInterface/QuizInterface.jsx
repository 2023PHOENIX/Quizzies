import { useState } from "react";
import styles from "./quiz.module.css";
import { useEffect } from "react";
import { submitQuiz } from "../../../services/api/quizApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const QuizInterface = ({
  currentQuestion,
  setCurrentQuestion,
  questionData,
}) => {
  const [lastQuestion, setLastQuestion] = useState(false);
  const [userAnswer, setUserAnswer] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);

  const { id } = useParams();
  const handleNextClick = () => {
    updateUserAnswers(currentQuestion, selectedOption + 1);
    setCurrentQuestion((prev) => prev + 1);
  };

  const updateUserAnswers = (index, value) => {
    const tempUserAnswer = [...userAnswer];
    console.log(tempUserAnswer);
    tempUserAnswer[index] = value;

    setUserAnswer(tempUserAnswer);
  };
  const handleSubmit = async () => {
    try {
      const userResponse = {
        userAnswers: userAnswer,
      };
      const response = await submitQuiz(id, userResponse);
      console.log("data", response);
      if (response.success) {
        toast.success("quiz is submitted successfully");
      } else {
        toast.error("something went wrong");
      }
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
  };
  const handleSelectedOptionChange = (i) => {
    setSelectedOption(i);
  };
  useEffect(() => {
    updateUserAnswers(currentQuestion, selectedOption + 1); // HACK: need to handled last question.
  }, [selectedOption]);
  useEffect(() => {
    setUserAnswer(Array.from({ length: questionData?.length }).fill(0));
  }, []);
  useEffect(() => {
    if (currentQuestion === questionData.length - 1) {
      setLastQuestion(true);
    }
  }, [currentQuestion]);

  console.log(userAnswer);
  return (
    <div className={styles.quizData}>
      <div className={styles.quizDetails}>
        <div className={styles.questionNumber}>
          {currentQuestion + 1}/{questionData.length}
        </div>
        <div className={styles.timer}>00:10s</div>
      </div>
      {questionData[currentQuestion] && (
        <>
          <div className={styles.question}>
            {questionData[currentQuestion]?.title}
          </div>
          <div className={styles.options}>
            {questionData[currentQuestion].optionType == "Text" &&
              questionData[currentQuestion].options.map((option, i) => (
                <div
                  className={`${styles.textOption} ${selectedOption === i ? styles.selectedOption : ""
                    }`}
                  onClick={() => handleSelectedOptionChange(i)}
                  key={i}
                >
                  {option.text}
                </div>
              ))}
            {questionData[currentQuestion].optionType === "url" &&
              questionData[currentQuestion].options.map((option, i) => (
                <div
                  key={i}
                  className={`${styles.imageOption} ${selectedOption === i ? styles.selectedOption : ""
                    }`}
                  onClick={() => handleSelectedOptionChange(i)}
                >
                  <img
                    key={i}
                    className={styles.imageOption}
                    src={option?.url}
                    alt={`Option ${i + 1}`}
                  />
                </div>
              ))}
            {questionData[currentQuestion].optionType === "text&url" && (
              <div className={styles.textUrlContainer}>
                {questionData[currentQuestion].options.map((option, i) => (
                  <div
                    key={i}
                    className={`${styles.textUrlOption} ${selectedOption === i ? styles.selectedOption : ""
                      }`}
                    onClick={() => handleSelectedOptionChange(i)}
                  >
                    <p>{option.text}</p>
                    <img
                      className={styles.imgOption}
                      src={option.url}
                      alt="img"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
      <div className={styles.buttonContainer}>
        {!lastQuestion && (
          <button className={styles.button} onClick={handleNextClick}>
            NEXT
          </button>
        )}
        {lastQuestion && (
          <button className={styles.button} onClick={handleSubmit}>
            SUBMIT
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizInterface;
