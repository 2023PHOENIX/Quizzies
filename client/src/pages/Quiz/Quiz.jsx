import { useState } from "react";
import QuizInterface from "../../components/Quiz/QuizInterface/QuizInterface";
import styles from "./quiz.module.css";
import QuizResult from "../../components/Quiz/QuizResult/QuizResult";
import { useEffect } from "react";
import { fetchQuizData } from "../../services/api/quizApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const Quiz = () => {
  const { id } = useParams();
  const [finalPage, setFinalPage] = useState(false);
  const [questionData, setQuestionsData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [timer, setTimer] = useState("OFF");
  const [userAnswer, setUserAnswer] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await fetchQuizData(id);
        console.log(data);

        if (data) {
          setQuestionsData(data?.questions);
          setCurrentQuestion(0);
          setTimer(data.timer);
        }
      } catch (e) {
        toast.error(e);
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    questionData && (
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          {!finalPage && (
            <QuizInterface
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questionData={questionData}
              setFinalPage={setFinalPage}
              timer={timer}
            />
          )}

          {finalPage && <QuizResult />}
        </div>
      </div>
    )
  );
};

export default Quiz;
