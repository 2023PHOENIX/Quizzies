// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home.jsx";
import DashBoard from "./pages/Dashboard/Dashboard.jsx";
import Analytics from "./pages/Analytics/Analytics.jsx";
import styles from "./app.module.css";
import CreateQuiz from "./pages/createQuiz/CreateQuiz.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";

function App() {
  return (
    <div className={styles.app}>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/quiz/:id" element={<Quiz />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
