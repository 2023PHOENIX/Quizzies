import { useState } from "react";
import styles from "./quiz.module.css";
const QuizInterface = () => {
  const [quizType, setQuizType] = useState("text&url");
  return (
    <div className={styles.wrapper}>
      <div className={styles.quizData}>
        <div className={styles.quizDetails}>
          <div className={styles.questionNumber}>04/04</div>
          <div className={styles.timer}>00:10s</div>
        </div>
        <div className={styles.question}>
          Your question text comes here, its a sample text.
        </div>
        <div className={styles.options}>
          {quizType === "Text" && (
            <>
              <div className={styles.textOption}> Option 1</div>
              <div className={styles.textOption}> Option 1</div>
              <div className={styles.textOption}>Option 1 </div>
              <div className={styles.textOption}> Option 1 </div>
            </>
          )}
          {quizType === "url" && (
            <div className={styles.imageContainer}>
              <div className={styles.imageOption}> </div>
              <div className={styles.imageOption}></div>
              <div className={styles.imageOption}> </div>
              <div className={styles.imageOption}></div>
            </div>
          )}
          {quizType === "text&url" && (
            <div className={styles.textUrlContainer}>
              <div className={styles.textUrlOption}>
                <p>Sample Image</p>
                <img className={styles.imgOption} alt="img" />
              </div>
              <div className={styles.textUrlOption}>
                <p>Some Tex</p>
                <img className={styles.imgOption} alt="img" />
              </div>
              <div className={styles.textUrlOption}>
                <p>Some Text</p>
                <img className={styles.imgOption} alt="img" />
              </div>
              <div className={styles.textUrlOption}>
                <p>Samplel Image</p>
                <img className={styles.imgOption} alt="img" />
              </div>
            </div>
          )}
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
