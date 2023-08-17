import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import StartPage from "../components/StartPage";

export default function LandingRouter() {
  return (
    <Routes>
      <Route exact path="/startPage" element={<StartPage />} />
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
  );
}
