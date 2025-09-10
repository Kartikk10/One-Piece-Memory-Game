import clsx from "clsx";
import React, { useEffect } from "react";
import { useContext } from "react";
import { CharactersContext } from "../store/CharactersContext";

function GameLogo({ activeScreen, setActiveScreen, setAreInstructionsOpen }) {
  const { resetCharacters } = useContext(CharactersContext);

  return (
    <img
      src="../src/assets/game-logo.png"
      alt="One Piece Memory Game Logo"
      width={activeScreen === "introScreen" ? "500px" : "280px"}
      height={activeScreen === "introScreen" ? "150px" : ""}
      className={clsx(
        "block",
        activeScreen === "introScreen"
          ? "w-3/4 sm:w-[500px] h-auto sm:h-[150px] mx-auto"
          : "w-[180px] h-auto cursor-pointer hover:scale-110"
      )}
      onClick={() => {
        if (activeScreen === "gameScreen") {
          setActiveScreen("introScreen");
          resetCharacters();
          setAreInstructionsOpen(false);
        }
      }}
    />
  );
}

export default GameLogo;
