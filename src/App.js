import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./Game";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

