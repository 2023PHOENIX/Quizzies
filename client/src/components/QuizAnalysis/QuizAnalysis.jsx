import styles from "./quiz.analysis.module.css";
import quizLine from "../../assets/quizLine.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { analysis } from "../../services/api/quizApi";
const QuizAnalysis = () => {
  const [quiz, setQuiz] = useState(null);
  const [QuizAnalysis, setQuizAnalysis] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const { data } = await analysis(id);
      if (data?.quiz) {
        setQuiz(data.quiz);
      }
      if (data?.quizAnalysis) {
        setQuizAnalysis(data.quizAnalysis);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.quizHeading}>{quiz?.quizName}</h1>
      <div className={styles.questions}>
        {quiz?.questions?.map((q, i) => (
          <div className={styles.question}>
            <h2> {q.title} </h2>
            {
              <div className={styles.options}>
                <div className={styles.optionCard}>
                  <div className={styles.Answer}>
                    {`${QuizAnalysis?.questions[i].correctAttempt +
                      QuizAnalysis?.questions[i].incorrectAttempt
                      }`}
                  </div>
                  <div className={styles.optionTitle}>
                    people Attempted the questions{" "}
                  </div>
                </div>
                <div className={styles.optionCard}>
                  <div className={styles.Answer}>
                    {QuizAnalysis.questions[i].correctAttempt}
                  </div>
                  <div className={styles.optionTitle}>
                    people Answered Correctly
                  </div>
                </div>
                <div className={styles.optionCard}>
                  <div className={styles.Answer}>
                    {QuizAnalysis.questions[i].incorrectAttempt}
                  </div>
                  <div className={styles.optionTitle}>
                    people Answered incorrectly
                  </div>
                </div>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizAnalysis;
