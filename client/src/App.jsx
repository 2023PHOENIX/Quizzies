// App.js

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
function App() {
  return (
    <div className={styles.app}>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/quiz/:id" element={<Quiz />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
