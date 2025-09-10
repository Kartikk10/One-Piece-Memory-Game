import React, { useRef, useState } from "react";

function Card({
  characters,
  character,
  onCardClick,
  isCardFlipped,
  clickableRef,
  transitionContainerRef,
  areInstructionsOpen,
}) {
  const { id, name, image } = character;
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    if (isCardFlipped) return;
    const card = cardRef.current;
    const glare = glareRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.05, 1.05, 1.05)
    `;
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    glare.style.transform = `rotate(${angle}deg) translate(-50%, -50%)`;
    glare.style.opacity = Math.min(distance / (rect.width / 2), 1);
  };

  const handleMouseLeave = () => {
    if (isCardFlipped) return;
    const card = cardRef.current;
    const glare = glareRef.current;
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;
    glare.style.opacity = 0;
  };

  return (
    <>
      {!areInstructionsOpen && (
        <div
          className={`relative ${
            characters.length > 20
              ? "w-[116px] h-[150px] md:max-[880px]:w-[154px] md:max-[880px]:h-[200px] min-[880px]:w-[185px] min-[880px]:h-[240px]"
              : "w-[116px] h-[150px] md:w-[216px] md:h-[308px]"
          } xl:w-[280px] xl:h-[362px] rounded-xl cursor-pointer`}
          style={{ perspective: "1000px" }}
          onClick={() => onCardClick(id, name, image)}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transform: isCardFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              transition: "transform 850ms cubic-bezier(0.45, 0, 0.55, 1)",
            }}
            ref={transitionContainerRef}
          >
            <div
              className={`absolute w-full h-full bg-[linear-gradient(135deg,#ff9966_0%,#ff5e62_30%,#8e54e9_70%,#4776e6_100%)] p-2 rounded-xl`}
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                backfaceVisibility: "hidden",
                transition:
                  "transform 300ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
              }}
            >
              <img
                src={image}
                className={`w-full ${
                  characters.length > 20
                    ? "h-[110px] md:max-[880px]:h-[160px] min-[880px]:h-[200px]"
                    : "h-[110px] md:h-[268px]"
                } xl:h-[310px] rounded-xl`}
              />
              <p className="pt-2 text-center w-full h-[24px] xl:h-auto truncate text-xs xl:text-lg text-white">
                {name}
              </p>
              <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden pointer-events-none">
                <div
                  ref={glareRef}
                  className={`absolute top-1/2 left-1/2 opacity-0 ${
                    characters.length > 20
                      ? "w-[174px] h-[174px] md:max-[880px]:w-[230px] md:max-[880px]:h-[230px] min-[880px]:w-[278px] min-[880px]:h-[278px] xl:w-[420px] xl:h-[420px]"
                      : "w-[174px] h-[174px] md:w-[324px] md:h-[324px] xl:w-[420px] xl:h-[420px]"
                  }`}
                  style={{
                    transformOrigin: "0% 0%",
                    background:
                      "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="absolute w-full h-full rounded-xl"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src="./src/assets/card-back-face.jpg"
                alt="Card Backface"
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
