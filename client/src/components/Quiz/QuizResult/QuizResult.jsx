import trophy from "../../../assets/trophy.png";
import styles from "./quiz.result.module.css";
const QuizResult = () => {
  const [quizType, setquizType] = useState("q&a");
  return (
    <div className={styles.wrapper}>
      {quizType === "q&a" && (
        <>
          <div className={styles.headingCongrats}>
            Congrats Quiz is completed
          </div>
          <img src={trophy} className={styles.trophy} />
          <div className={styles.score}>
            your score is <span> 03/04</span>
          </div>
        </>
      )}

      {quizType === "poll" && (
        <>
          <div className={styles.pollHeading}>
            Thank you for participating in the Poll
          </div>
        </>
      )}
    </div>
  );
};

export default QuizResult;
