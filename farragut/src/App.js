import React from "react";
import Login from "./component/Login";
import "./App.css";
import LandingPage from "./component/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./elements/Admin";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
