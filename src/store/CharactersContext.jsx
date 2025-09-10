import {
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { CharactersReducer } from "./CharactersReducer";

export const CharactersContext = createContext({
  characters: [],
  difficultyMode: "",
  setDifficultyMode: () => {},
  resetCharacters: () => {},
});

function CharactersContextProvider({ children }) {
  const [initialCharacters, setInitialCharacters] = useState([]);
  const [characters, dispatchCharacters] = useReducer(CharactersReducer, []);
  const [difficultyMode, setDifficultyMode] = useState("");

  useEffect(() => {
    fetch("https://kartikk10.github.io/onepiece-api/characters.json")
      .then((res) => res.json())
      .then((charactersArray) => {
        setInitialCharacters(charactersArray);
        dispatchCharacters({
          type: "SET_INITIAL_CHARACTERS",
          payload: {
            characters: charactersArray,
          },
        });
      });
  }, []);

  function getCharactersBatch (limit) {
    const sortedCharacters = initialCharacters.toSorted(() => Math.random() - 0.5);
    const newCharactersBatch = sortedCharacters.slice(0, limit);
    return newCharactersBatch;
}

  useEffect(() => {
    if (difficultyMode === "easy") {
      dispatchCharacters({
        type: "SET_DIFFICULTY",
        payload: {
          characters: getCharactersBatch(10)
        }
      })
    } else if (difficultyMode === "medium") {
      dispatchCharacters({
        type: "SET_DIFFICULTY",
        payload: {
          characters: getCharactersBatch(20)
        }
      })
    } else if (difficultyMode === "hard") {
      dispatchCharacters({
        type: "SET_DIFFICULTY",
        payload: {
          characters: getCharactersBatch(30)
        }
      })
    } else if (difficultyMode === "extreme") {
      dispatchCharacters({
        type: "SET_DIFFICULTY",
        payload: {
          characters: getCharactersBatch(50)
        }
      })
    }
  }, [difficultyMode]);

  function resetCharacters() {
    dispatchCharacters({
      type: "RESET",
      payload: {
        characters: initialCharacters,
      },
    });
    setDifficultyMode("");
  }

  return (
    <CharactersContext.Provider
      value={{
        characters: characters,
        difficultyMode: difficultyMode,
        setDifficultyMode: setDifficultyMode,
        resetCharacters: resetCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}

export default CharactersContextProvider;
