import React, { useContext, useEffect } from "react";
import { CharactersContext } from "../store/CharactersContext";

function DifficultySelector({ setActiveScreen, setAreInstructionsOpen }) {
  const { setDifficultyMode } = useContext(CharactersContext);

  function handleSetDifficultyButtonClick(difficulty) {
    setActiveScreen("gameScreen");
    setDifficultyMode(difficulty);
    setAreInstructionsOpen(false);
  }

  return (
    <div className="mt-[90px] min-[396px]:mt-[150px] sm:mt-[50px] flex flex-wrap justify-center items-center gap-5">
      <button
        type="button"
        className="py-3.5 px-4.5 text-xl bg-[#1e293b] text-white rounded-xl cursor-pointer hover:scale-110"
        style={{ boxShadow: "0 4px 8px #000, 0 -4px 8px #000" }}
        onClick={() => handleSetDifficultyButtonClick("easy")}
      >
        Easy
      </button>
      <button
        type="button"
        className="py-3.5 px-4.5 text-xl bg-[#1e293b] text-white rounded-xl cursor-pointer hover:scale-110"
        style={{ boxShadow: "0 4px 8px #000, 0 -4px 8px #000" }}
        onClick={() => handleSetDifficultyButtonClick("medium")}
      >
        Medium
      </button>
      <button
        type="button"
        className="py-3.5 px-4.5 text-xl bg-[#1e293b] text-white rounded-xl cursor-pointer hover:scale-110"
        style={{ boxShadow: "0 4px 8px #000, 0 -4px 8px #000" }}
        onClick={() => handleSetDifficultyButtonClick("hard")}
      >
        Hard
      </button>
      <button
        type="button"
        className="py-3.5 px-4.5 text-xl bg-[#1e293b] text-white rounded-xl cursor-pointer hover:scale-110"
        style={{ boxShadow: "0 4px 8px #000, 0 -4px 8px #000" }}
        onClick={() => handleSetDifficultyButtonClick("extreme")}
      >
        Extreme
      </button>
    </div>
  );
}

export default DifficultySelector;
