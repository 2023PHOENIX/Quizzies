import styles from "./analytics.module.css";

import edit from "../../../assets/edit.svg";
import remove from "../../../assets/delete.svg";
import share from "../../../assets/share.svg";
import { useEffect, useState } from "react";
import { analytics } from "../../../services/api/quizApi";
import DeleteForm from "../../DeleteForm/DeleteForm";
import { REACT_APP_BASE_URL } from "../../../../constant";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import EditPage from "../../../pages/EditPage/EditPage";
import { useContext } from "react";
import { formContext } from "../../../context/FormProvider";
const AnalysisTableCard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [showDeleteForm, setDeleteForm] = useState(false);
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [showEdit, setEdit] = useState(false);
  const [currentIndexOfQuiz, setCurrentIndexOfQuiz] = useState(null);

  const formatCreatedAt = (date) => {
    // Assuming createdAt is a valid Date object or a string
    //
    const createdAt = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return createdAt;
  };
  const navigate = useNavigate();
  const handleShareClick = async (id) => {
    setSelectedQuizId(id);
    const url = REACT_APP_BASE_URL || 3000;
    const link = `${url}/quiz/${id}`;
    try {
      await navigator.clipboard.writeText(link);
      toast.success("copied link");
    } catch (e) {
      toast.error(e.message);
    }
  };
  const handleDeleteQuiz = (id) => {
    setSelectedQuizId(id);
    setDeleteForm(true);
  };

  const handleEditQuiz = (id, index) => {
    setCurrentIndexOfQuiz(index);
    setSelectedQuizId(id);
    setEdit(true);
  };
  const handleQuizAnalysis = (id) => {
    const url = `/analysis/${id}`;
    navigate(url);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await analytics();
      console.log(data);
      setAnalyticsData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Quiz Name</th>
              <th>Created on</th>
              <th>Impression</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {analyticsData?.map((data, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{data.quizName}</td>
                <td>{formatCreatedAt(data.createdAt)}</td>
                <td>
                  {!data?.impressions
                    ? "0"
                    : data?.impressions > 1000
                      ? `${(data.impressions / 1000).toFixed(1)}K`
                      : data.impressions}
                </td>
                <td>
                  <img
                    src={edit}
                    alt="Edit"
                    onClick={() => handleEditQuiz(data._id, index)}
                  />
                  <img
                    src={remove}
                    alt="Remove"
                    onClick={() => handleDeleteQuiz(data._id)}
                  />
                  <img
                    src={share}
                    alt="Share"
                    onClick={() => handleShareClick(data._id)}
                  />
                </td>
                <td onClick={() => handleQuizAnalysis(data._id)}>
                  <a className={styles.anchor}>Question Wise Analysis </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      {showDeleteForm && (
        <DeleteForm setDeleteForm={setDeleteForm} quizId={selectedQuizId} />
      )}
      {showEdit && <EditPage quiz={analyticsData[currentIndexOfQuiz]} />}
    </div>
  );
};

export default AnalysisTableCard;
