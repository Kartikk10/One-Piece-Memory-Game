import React from "react";
import Overlay from "./Overlay";
import { FaHome } from "react-icons/fa";
import { FaSync } from "react-icons/fa";

function GameLose({
  setIsGameOver,
  setScore,
  setClickedCards,
  setActiveScreen,
}) {
  return (
    <div className="w-full h-full z-20">
      <Overlay />
      <div
        className="w-[80vw] h-[calc(80vw/2)] xl:w-[900px] xl:h-[450px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl z-20"
        style={{ boxShadow: "0 5px 20px #611111, 0 -5px 20px #611111" }}
      >
        <div className="relative w-full h-full">
          <img
            src="/src/assets/game-lose-bg-img.jpg"
            alt="Background image after losing the game"
            className="absolute top-0 left-0 w-full h-full rounded-xl"
          />
          <div className="absolute top-2 bottom-2 lg:top-8 lg:bottom-8 left-0 w-full flex flex-col items-center justify-between">
            <p className="bg-[#af0f0f] py-2 px-4 sm:py-4 sm:px-8 rounded-2xl text-white text-sm min-[450px]:text-base sm:text-2xl lg:text-[40px]">
              You lose!
            </p>
            <div className="flex gap-6 justify-center items-center">
              <button
                type="button"
                className="rounded-2xl py-1 px-4 sm:py-3 sm:px-5 text-[10px] min-[450px]:text-sm sm:text-base lg:text-2xl flex gap-2 justify-center items-center bg-white cursor-pointer hover:scale-110"
                onClick={() => {
                  setIsGameOver(false);
                  setScore(0);
                  setClickedCards([]);
                }}
              >
                <FaSync />
                <span>Restart</span>
              </button>
              <button
                type="button"
                className="rounded-2xl py-1 px-4 sm:py-3 sm:px-5 text-[10px] min-[450px]:text-sm sm:text-base lg:text-2xl flex gap-2 justify-center items-center bg-white cursor-pointer hover:scale-110"
                onClick={() => {
                  setActiveScreen("introScreen");
                  setIsGameOver(false);
                  setScore(0);
                  setClickedCards([]);
                }}
              >
                <FaHome />
                <span>Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameLose;
