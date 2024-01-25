import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home.jsx";
import DashBoard from "./pages/Dashboard/Dashboard.jsx";
import Analytics from "./pages/Analytics/Analytics.jsx";
import styles from "./app.module.css";
import Quiz from "./pages/Quiz/Quiz.jsx";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import QuizAnalysis from "./components/QuizAnalysis/QuizAnalysis.jsx";
function App() {
  return (
    <div className={styles.app}>
      <ToastContainer />
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/analysis/:id" element={<QuizAnalysis />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/quiz/:id" element={<Quiz />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
