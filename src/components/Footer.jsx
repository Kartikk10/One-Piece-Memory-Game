import React from "react";
import Instructions from "./Instructions";

function Footer({ areInstructionsOpen, setAreInstructionsOpen }) {
  return (
    <footer className="fixed left-0 right-0 bottom-0 pb-3 sm:pb-5 px-2 sm:px-5 md:px-10 flex justify-end items-center">
      <Instructions
        areInstructionsOpen={areInstructionsOpen}
        setAreInstructionsOpen={setAreInstructionsOpen}
      />
    </footer>
  );
}

export default Footer;
