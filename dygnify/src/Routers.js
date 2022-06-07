import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Components/Home";
function Allrouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Allrouter;
