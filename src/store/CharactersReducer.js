export function CharactersReducer(currentCharacters, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_INITIAL_CHARACTERS": {
      return payload.characters;
    }
    case "SET_DIFFICULTY": {
      return payload.characters;
    }
    case "RESET": {
      return payload.characters;
    }
    default: {
      return currentCharacters;
    }
  }
}
