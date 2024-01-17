import HeadingCard from "../../components/Dashboard/HeadingCard/HeadingCard.jsx";
import QuizCard from "../../components/Dashboard/QuizCard/QuizCard.jsx";
import styles from "./dashboard.module.css";
const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.headingDetails}>
        <HeadingCard color="#FF5D01" text="Quiz created" counts={12} />
        <HeadingCard color="#60B84B" text="questions Created" counts={110} />
        <HeadingCard color="#5076FF" text="Total Impressions" counts={"1.4k"} />
      </div>

      <h1 className={styles.headingQuiz}> Treding Quizs</h1>
      <div className={styles.treadingQuiz}>
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
        <QuizCard quizName={"Quiz 1"} views={120} createdAt={"05 sept 2023"} />
      </div>
    </div>
  );
};

export default DashBoard;
