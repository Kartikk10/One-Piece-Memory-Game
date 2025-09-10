import React from "react";
import GameLogo from "./GameLogo";
import DifficultySelector from "./DifficultySelector";

function IntroScreen({
  activeScreen,
  setActiveScreen,
  areInstructionsOpen,
  setAreInstructionsOpen,
}) {
  return (
    <>
      {!areInstructionsOpen && (
        <div className="w-full min-h-screen py-7 px-5">
          <GameLogo activeScreen={activeScreen} />
          <main className="mt-6 sm:mt-44">
            <h1
              className="text-center text-[#FF9800] text-5xl/tight sm:text-6xl font-extrabold"
              style={{
                textShadow:
                  "-.06em 0 .08em #000, .06em 0 .08em #000, 0 .06em .08em #000, 0 -.06em .08em #000, -.06em .06em .08em #000, .06em .06em .08em #000, -.06em -.06em .08em #000, .06em -.06em .08em #000",
              }}
            >
              Memory Game
            </h1>
            <DifficultySelector
              setActiveScreen={setActiveScreen}
              setAreInstructionsOpen={setAreInstructionsOpen}
            />
          </main>
        </div>
      )}
    </>
  );
}

export default IntroScreen;
