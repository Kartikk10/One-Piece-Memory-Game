import { useState } from "react";
import GameLogo from "./components/GameLogo";
import IntroScreen from "./components/IntroScreen";
import GameScreen from "./components/GameScreen";
import CharactersContextProvider from "./store/CharactersContext";
import Footer from "./components/Footer";

function App() {
  const [activeScreen, setActiveScreen] = useState("introScreen");
  const [areInstructionsOpen, setAreInstructionsOpen] = useState(false);

  return (
    <CharactersContextProvider>
      <div className={`relative w-full min-h-screen ${areInstructionsOpen && "bg-black opacity-80"}`}>
        {activeScreen === "introScreen" ? (
          <IntroScreen
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
            areInstructionsOpen={areInstructionsOpen}
            setAreInstructionsOpen={setAreInstructionsOpen}
          />
        ) : (
          <GameScreen
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
            areInstructionsOpen={areInstructionsOpen}
            setAreInstructionsOpen={setAreInstructionsOpen}
          />
        )}
        <Footer areInstructionsOpen={areInstructionsOpen} setAreInstructionsOpen={setAreInstructionsOpen} />
      </div>
    </CharactersContextProvider>
  );
}

export default App;
