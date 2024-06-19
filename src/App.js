import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Login from "./pages/Login/login";
import Complaint from "./pages/Complaint/Complaint";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/complaint" element={<Complaint />} />
      </Routes>
    </Router>
  );
}

export default App;
