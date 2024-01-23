import styles from "./sidebar.module.css";
import line from "../../assets/line.svg";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { formContext } from "../../context/FormProvider";
const Sidebar = () => {
  const { showForm, setForm } = useContext(formContext);
  console.log("SideBar");
  return (
    <div className={styles.sidebar}>
      <h1> QUIZZIE</h1>

      <div className={styles.elements}>
        <Link to="/dashboard">
          <div>Dashboard</div>
        </Link>
        <Link to="/analytics">
          <div>Analytics</div>
        </Link>
        <div onClick={() => setForm(!showForm)}>Create Quiz</div>
      </div>

      <img src={line} alt="line" className={styles.line} />
      <div className={styles.logout}>Logout </div>
    </div>
  );
};

export default Sidebar;
