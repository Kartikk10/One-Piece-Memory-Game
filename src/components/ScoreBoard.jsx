import React, { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../store/CharactersContext";

function ScoreBoard({ score, clickedCards }) {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (bestScore + 1 === clickedCards.length) {
      setBestScore((prev) => prev + 1);
    } else if (score === bestScore || score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  return (
    <div
      className="flex flex-col gap-2.5 text-white text-xs sm:text-base bg-[#800040] py-2 px-8 sm:p-4 rounded-3xl"
      style={{
        boxShadow:
          "0 10px 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 0, 128, 1), 0 0 60px rgba(255, 0, 128, 0.8)",
      }}
    >
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}

export default ScoreBoard;
