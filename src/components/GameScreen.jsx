import React, { useState } from "react";
import GameLogo from "./GameLogo";
import ScoreBoard from "./ScoreBoard";
import CardSection from "./CardSection";
import GameLose from "./GameLose";
import GameWin from "./GameWin";

function GameScreen({
  activeScreen,
  setActiveScreen,
  areInstructionsOpen,
  setAreInstructionsOpen,
}) {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasPlayerWon, setHasPlayerWon] = useState(false);

  return (
    <div
      className={`relative w-full min-h-screen py-3 sm:py-2 px-7 ${
        areInstructionsOpen && "bg-black opacity-80"
      }`}
    >
      {!areInstructionsOpen && (
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <GameLogo
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
            setAreInstructionsOpen={setAreInstructionsOpen}
          />
          <ScoreBoard
            score={score}
            clickedCards={clickedCards}
            hasPlayerWon={hasPlayerWon}
            setHasPlayerWon={setHasPlayerWon}
          />
        </header>
      )}
      <CardSection
        score={score}
        setScore={setScore}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setIsGameOver={setIsGameOver}
        setHasPlayerWon={setHasPlayerWon}
        areInstructionsOpen={areInstructionsOpen}
        setAreInstructionsOpen={setAreInstructionsOpen}
      />
      {isGameOver && (
        <GameLose
          setIsGameOver={setIsGameOver}
          setScore={setScore}
          setClickedCards={setClickedCards}
          setActiveScreen={setActiveScreen}
        />
      )}
      {hasPlayerWon && (
        <GameWin
          setHasPlayerWon={setHasPlayerWon}
          setScore={setScore}
          setClickedCards={setClickedCards}
          setActiveScreen={setActiveScreen}
        />
      )}
    </div>
  );
}

export default GameScreen;
