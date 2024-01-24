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
const AnalysisTableCard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [showDeleteForm, setDeleteForm] = useState(false);
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const formatCreatedAt = (date) => {
    // Assuming createdAt is a valid Date object or a string
    const createdAt = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return createdAt;
  };

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
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await analytics();
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
              <tr key={data._id}>
                <td>{index}</td>
                <td>{data.quizName}</td>
                <td>{formatCreatedAt(data.createdAt)}</td>
                <td>{data.impressions}</td>
                <td>
                  <img src={edit} alt="Edit" />
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
                <td>Question Wise Analysis</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      {showDeleteForm && (
        <DeleteForm setDeleteForm={setDeleteForm} quizId={selectedQuizId} />
      )}
    </div>
  );
};

export default AnalysisTableCard;
