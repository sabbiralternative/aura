import { CardBack } from "../../../assets/icon";

const Card = ({ data }) => {
  const playerA1 = data?.runners?.[0]?.card?.[0];
  const playerA2 = data?.runners?.[0]?.card?.[1];
  const playerA3 = data?.runners?.[0]?.card?.[2];
  const playerB1 = data?.runners?.[1]?.card?.[0];
  const playerB2 = data?.runners?.[1]?.card?.[1];
  const playerB3 = data?.runners?.[1]?.card?.[2];
  console.log({ playerB2 });
  console.log({ playerB3 });

  return (
    <span className="lg:absolute transition-all duration-1000 ease-in-out translate-y-[100%] lg:translate-y-0 lg:left-12">
      <div className="perspective flex lg:flex-col lg:gap-8 mx-auto items-center w-fit gap-4 justify-center transform transition-all linear duration-1000 perspective">
        <div className="applyPerspective flex items-center justify-start gap-2 pt-6 p-1 rounded-lg border-[2px] border-white/20">
          <span className="text-white/80 absolute -top-[2px] -translate-y-full right-0 z-50 text-xs uppercase" />
          <div
            className={`lg:h-16 h-10 aspect-[5/7]  ${
              playerA1 ? "flip-card" : "cardFadeInAnimation"
            }`}
          >
            <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
              <img src={`/src/assets/images/cards/${playerA1}.jpg`} alt="" />
            </div>
            <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
              <CardBack />
            </div>
          </div>
          <div
            className={`lg:h-16 h-10 aspect-[5/7]  ${
              playerA2 ? "flip-card" : "cardFadeInAnimation"
            }`}
          >
            <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
              <img src={`/src/assets/images/cards/${playerA2}.jpg`} alt="" />
            </div>
            <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
              <CardBack />
            </div>
          </div>
          <div
            className={`lg:h-16 h-10 aspect-[5/7]  ${
              playerA3 ? "flip-card" : "cardFadeInAnimation"
            }`}
          >
            <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
              <img src={`/src/assets/images/cards/${playerA2}.jpg`} alt="" />
            </div>
            <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
              <CardBack />
            </div>
          </div>
          <div className="absolute -bottom-8 z-50 text-white text-center w-full">
            Player A
          </div>
        </div>
        <div className="flex applyPerspective items-center justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] border-white/20">
          <span className="text-white/80 absolute -top-[2px] -translate-y-full left-0 z-50 text-xs uppercase" />
          <div
            className={`lg:h-16 h-10 aspect-[5/7]  ${
              playerB1 ? "flip-card" : "cardFadeInAnimation"
            }`}
          >
            <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
              <img src={`/src/assets/images/cards/${playerB1}.jpg`} alt="" />
            </div>
            <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
              <CardBack />
            </div>
          </div>
          <div
            className={`lg:h-16 h-10 aspect-[5/7] ${
              playerB2 ? "flip-card" : "cardFadeInAnimation"
            }`}
          >
            <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
              <img src={`/src/assets/images/cards/${playerB2}.jpg`} alt="" />
            </div>
            <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
              <CardBack />
            </div>
          </div>
          <div
            className={`lg:h-16 h-10 aspect-[5/7] ${
              playerB3 ? "flip-card" : "cardFadeInAnimation"
            }`}
          >
            <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
              <img src={`/src/assets/images/cards/${playerB3}.jpg`} alt="" />
            </div>
            <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
              <CardBack />
            </div>
          </div>

          <div className="absolute -bottom-8 z-50 text-white text-center w-full">
            Player B
          </div>
        </div>
      </div>
    </span>
  );
};

export default Card;
