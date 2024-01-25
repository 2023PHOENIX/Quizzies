import { useState } from "react";
import QuizForm from "../../components/QuizForm/QuizForm";
import styles from "./editPage.module.css";
import QuizForm2 from "../../components/QuizForm2/QuizForm2";
import Congrats from "../../components/Congrats/Congrats";
import { useContext } from "react";
import { formContext } from "../../context/FormProvider";
import { useEffect } from "react";
import QuestionData from "../../components/QuizForm2/QuestionData";

const EditPage = ({ quiz }) => {
  console.log(quiz._id);
  const [formChoices, setFormChoices] = useState(null);
  const [quizCreated, setQuizCreated] = useState(false);
  const [url, setUrl] = useState();
  const [questionData, setQuestionData] = useState(null);

  const { showForm, setForm } = useContext(formContext);

  useEffect(() => {
    const updatedQuiz = {
      ...quiz,
      questions: quiz.questions.map((question) => ({
        ...question,
        choiceType: question.optionType,
      })),
    };

    setQuestionData(updatedQuiz.questions);
    setFormChoices({
      id: quiz._id,
      quizName: quiz.quizName,
      quizType: quiz.quizType,
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.popupForm2}>
        {questionData && (
          <QuizForm2
            questionData={questionData}
            setQuestionData={setQuestionData}
            quizType={formChoices?.quizType}
            setQuizCreated={setQuizCreated}
            formChoices={formChoices}
            setUrl={setUrl}
            editForm={true}
          />
        )}
      </div>
    </div>
  );
};

export default EditPage;
