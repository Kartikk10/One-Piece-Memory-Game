import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

function Instructions({ areInstructionsOpen, setAreInstructionsOpen }) {
  return (
    <div className="relative">
      {areInstructionsOpen && (
        <div className="absolute -left-30 -bottom-5">
          <ul className="flex flex-col gap-2.5 justify-center items-center absolute -left-20 -top-54 min-[380px]:-left-36 min-[380px]:-top-54 sm:-left-80 sm:-top-35">
            <li
              className="p-5 w-[200px] sm:w-[380px] bg-[#800040] rounded-3xl text-white"
            >
              Don't click on the same card twice!
            </li>
            <li
              className="p-5 w-[200px] sm:w-[380px] bg-[#800040] rounded-3xl text-white"
            >
              Click on ONE PIECE logo to go back.
            </li>
          </ul>
          <img
            src="/src/assets/luffy-giving-instructions.png"
            alt="Luffy giving Instructions about game"
            className="h-[170px]"
          />
        </div>
      )}
      <button
        type="button"
        className="rounded-full bg-[#ff9800] text-xs sm:text-xl p-4 cursor-pointer hover:scale-110"
        onClick={() => setAreInstructionsOpen((prev) => !prev)}
      >
        {areInstructionsOpen ? <MdClose /> : <FaQuestion />}
      </button>
    </div>
  );
}

export default Instructions;
