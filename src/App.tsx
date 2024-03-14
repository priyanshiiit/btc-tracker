import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import HomePage from "./pages/HomePage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview/:currency" element={<OverviewPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
