// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar.jsx";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home.jsx";
import DashBoard from "./components/Dashboard/Dashboard.jsx";
import Analytics from "./components/Analytics/Analytics.jsx";
import styles from "./app.module.css";
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
