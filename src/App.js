import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Start from "./components/StartScreen";
import LeaderBoard from "./components/LeaderBoard";
import PokeImage from "./images/pokemon.webp";

export default function App() {
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageReady(true);
    img.src = PokeImage;
  }, []);

  return (
    <BrowserRouter basename="/wheres-pokemon">
      <Routes>
        <Route path="/" element={<Start ready={imageReady} />} />
        <Route path="/game" element={<Game imageSrc={PokeImage} />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
