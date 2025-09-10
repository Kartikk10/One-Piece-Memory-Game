import React, { useContext, useEffect, useRef, useState } from "react";
import { CharactersContext } from "../store/CharactersContext";
import Card from "./Card";
import { FaShuffle } from "react-icons/fa6";

function CardSection({
  score,
  setScore,
  setIsGameOver,
  setHasPlayerWon,
  clickedCards,
  setClickedCards,
  setAreInstructionsOpen,
  areInstructionsOpen,
}) {
  const { characters } = useContext(CharactersContext);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [cardsToRender, setCardsToRender] = useState([]);
  const clickableRef = useRef(true);
  const transitionContainerRef = useRef(null);

  const getCardsToRender = () => {
    const sortedCharacters = characters.toSorted(() => Math.random() - 0.5);
    if (sortedCharacters.length === 10 || sortedCharacters.length === 20) {
      return sortedCharacters.slice(0, 3);
    } else if (
      sortedCharacters.length === 30 ||
      sortedCharacters.length === 50
    ) {
      return sortedCharacters.slice(0, 4);
    }
    return [];
  };

  useEffect(() => {
    setCardsToRender(getCardsToRender());
  }, [characters]);

  const handleSettingScore = (id, name, image) => {
    const existingCard = clickedCards.find((card) => card.id === id);
    if (existingCard) {
      setIsGameOver(true);
      setIsCardFlipped(false);
      return;
    } else {
      setScore((prev) => prev + 1);
      setClickedCards((prev) => [
        ...prev,
        { id: id, name: name, image: image },
      ]);
    }
    const newScore = score + 1;
    if (newScore === characters.length) {
      setHasPlayerWon(true);
    }
  };

  const triggerFlipAndReshuffle = (
    skipSettingScore = false,
    id,
    name,
    image
  ) => {
    const existingCard = clickedCards.find((card) => card.id === id);
    if (!clickableRef.current) return;
    setIsCardFlipped(true);
    clickableRef.current = false;
    if (!skipSettingScore) {
      handleSettingScore(id, name, image);
    }
    setTimeout(() => {
      if (!existingCard) {
        setCardsToRender(getCardsToRender());
      }
    }, 900);
    setTimeout(() => {
      setIsCardFlipped(false);
    }, 950);
    setTimeout(() => {
      clickableRef.current = true;
    }, 1800);
  };

  const onCardClick = (id, name, image) => {
    if (areInstructionsOpen) return;
    triggerFlipAndReshuffle(false, id, name, image);
    setAreInstructionsOpen(false);
  };

  const reshuffleCards = () => {
    if (areInstructionsOpen) return;
    triggerFlipAndReshuffle(true);
    setAreInstructionsOpen(false);
  };

  const renderedCards = cardsToRender.map((character) => (
    <Card
      key={character.id}
      characters={characters}
      character={character}
      onCardClick={onCardClick}
      isCardFlipped={isCardFlipped}
      clickableRef={clickableRef}
      transitionContainerRef={transitionContainerRef}
      areInstructionsOpen={areInstructionsOpen}
    />
  ));

  return (
    <section
      className={`flex flex-col flex-wrap justify-center items-center gap-3 sm:gap-6 ${
        characters.length > 20
          ? "mt-4 min-[556px]:mt-20 sm:max-md:mt-30 md:mt-25"
          : "mt-4 min-[428px]:mt-20 sm:mt-30 md:mt-15 "
      } xl:mt-4`}
    >
      {!areInstructionsOpen && (
        <p className="text-xs sm:text-xl text-white bg-gradient-to-r bg-[#1e293b] py-2 px-4 rounded-lg sm:mt-[-60px]">
          {score}/{characters.length}
        </p>
      )}
      <div className="flex flex-wrap gap-3 sm:gap-6 justify-center items-center">
        {renderedCards}
      </div>
      {!areInstructionsOpen && (
        <button
          type="button"
          onClick={reshuffleCards}
          className="text-white text-xs sm:text-lg bg-gradient-to-r bg-[#1e293b] py-3 px-4 sm:py-4 sm:px-8 rounded-lg flex justify-center items-center gap-2.5 cursor-pointer hover:scale-105 z-10"
        >
          <FaShuffle />
          <span>Reshuffle Cards</span>
        </button>
      )}
    </section>
  );
}

export default CardSection;
