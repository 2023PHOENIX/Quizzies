import { useEffect } from "react";
import HeadingCard from "../../components/Dashboard/HeadingCard/HeadingCard.jsx";
import QuizCard from "../../components/Dashboard/QuizCard/QuizCard.jsx";
import styles from "./dashboard.module.css";
import { useState } from "react";
import { dashboard } from "../../services/api/quizApi.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DashBoard = () => {
  const [dashBoardData, setDashboardData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await dashboard();
        console.log(data);
        setDashboardData(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);
  console.log(dashBoardData);
  return (
    <div className={styles.dashboard}>
      <div className={styles.headingDetails}>
        <HeadingCard
          color="#FF5D01"
          text="Quiz created"
          counts={dashBoardData?.quizCreated || "0"}
        />
        <HeadingCard
          color="#60B84B"
          text="questions Created"
          counts={dashBoardData?.totalQuestions || "0"}
        />
        <HeadingCard
          color="#5076FF"
          text="Total Impressions"
          counts={
            dashBoardData?.totalImpression
              ? `${dashBoardData?.totalImpression}K`
              : "0"
          }
        />
      </div>

      <h1 className={styles.headingQuiz}>Treding Quizs</h1>
      <div className={styles.treadingQuiz}>
        {dashBoardData?.trendingQuizData?.map((trendingQuiz) => (
          <QuizCard
            key={trendingQuiz._id}
            quizName={trendingQuiz.quizName}
            createdAt={trendingQuiz.createdAt}
            impressions={trendingQuiz.impressions}
          />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
