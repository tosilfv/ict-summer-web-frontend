import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/Login";

export default function LandingRouter() {
  return (
    <Routes>
      <Route exact path="/landingPage" element={<LandingPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
  );
}
