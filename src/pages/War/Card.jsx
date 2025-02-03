import { CardBack } from "../../assets/icon";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-1 perspective">
      <div className="flex applyPerspective items-end justify-end gap-2 p-1 rounded-lg w-fit border-[2px] border-white/20">
        <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
          <div
            className={` h-full w-full aspect-[5/7]  ${
              data?.[0]?.indexCard?.length > 0
                ? "flip-card"
                : "cardFadeInAnimation "
            }`}
          >
            <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
              <img src={`/cards/${data?.[0]?.indexCard?.[0]}.jpg`} alt="" />
            </div>
            <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
              <CardBack />
            </div>
          </div>
        </div>
      </div>

      <div className="perspective grid gap-1 grid-cols-6 lg:grid-cols-3 mx-auto items-center">
        <div className="flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] border-white/20">
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7]  ${
                data?.[0]?.runners?.[0]?.card?.length > 0
                  ? "flip-card"
                  : "cardFadeInAnimation "
              }`}
            >
              <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
                <img
                  src={`/cards/${data?.[0]?.runners?.[0]?.card[0]}.jpg`}
                  alt=""
                />
              </div>
              <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
                <CardBack />
              </div>
            </div>
          </div>
          <div className="absolute -top-6 left-1 z-50 text-white">1</div>
        </div>
        <div className="flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] border-white/20">
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7]  ${
                data?.[1]?.runners?.[0]?.card?.length > 0
                  ? "flip-card"
                  : "cardFadeInAnimation "
              }`}
            >
              <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
                <img
                  src={`/cards/${data?.[1]?.runners?.[0]?.card[0]}.jpg`}
                  alt=""
                />
              </div>
              <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
                <CardBack />
              </div>
            </div>
          </div>
          <div className="absolute -top-6 left-1 z-50 text-white">2</div>
        </div>
        <div className="flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] border-white/20">
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7]  ${
                data?.[2]?.runners?.[0]?.card?.length > 0
                  ? "flip-card"
                  : "cardFadeInAnimation "
              }`}
            >
              <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
                <img
                  src={`/cards/${data?.[2]?.runners?.[0]?.card[0]}.jpg`}
                  alt=""
                />
              </div>
              <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
                <CardBack />
              </div>
            </div>
          </div>
          <div className="absolute -top-6 left-1 z-50 text-white">3</div>
        </div>
        <div className="flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] border-white/20">
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7]  ${
                data?.[3]?.runners?.[0]?.card?.length > 0
                  ? "flip-card"
                  : "cardFadeInAnimation "
              }`}
            >
              <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
                <img
                  src={`/cards/${data?.[3]?.runners?.[0]?.card[0]}.jpg`}
                  alt=""
                />
              </div>
              <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
                <CardBack />
              </div>
            </div>
          </div>
          <div className="absolute -top-6 left-1 z-50 text-white">4</div>
        </div>
        <div className="flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] border-white/20">
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7]  ${
                data?.[4]?.runners?.[0]?.card?.length > 0
                  ? "flip-card"
                  : "cardFadeInAnimation "
              }`}
            >
              <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
                <img
                  src={`/cards/${data?.[4]?.runners?.[0]?.card[0]}.jpg`}
                  alt=""
                />
              </div>
              <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
                <CardBack />
              </div>
            </div>
          </div>
          <div className="absolute -top-6 left-1 z-50 text-white">5</div>
        </div>
        <div className="flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] border-white/20">
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7]  ${
                data?.[5]?.runners?.[0]?.card?.length > 0
                  ? "flip-card"
                  : "cardFadeInAnimation "
              }`}
            >
              <div className="h-full w-full transition-transform ease-in-out bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-front">
                <img
                  src={`/cards/${data?.[5]?.runners?.[0]?.card[0]}.jpg`}
                  alt=""
                />
              </div>
              <div className="transition-transform ease-in-out h-full w-full bg-white lg:rounded-[5px] rounded-[3px] relative flip-card-back overflow-hidden">
                <CardBack />
              </div>
            </div>
          </div>
          <div className="absolute -top-6 left-1 z-50 text-white">6</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
