import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Start from "./components/StartScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

