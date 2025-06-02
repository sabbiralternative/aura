import { CardBack } from "../../assets/icon";

const Card = ({ data }) => {
  const isPlayer1Winner = data?.[0]?.runners?.[0]?.status === "WINNER";
  const isPlayer2Winner = data?.[1]?.runners?.[0]?.status === "WINNER";
  const isPlayer3Winner = data?.[2]?.runners?.[0]?.status === "WINNER";
  const isPlayer4Winner = data?.[3]?.runners?.[0]?.status === "WINNER";
  const isPlayer5Winner = data?.[4]?.runners?.[0]?.status === "WINNER";
  const isPlayer6Winner = data?.[5]?.runners?.[0]?.status === "WINNER";
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
        <div
          className={`flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] ${
            isPlayer1Winner ? "border-gold" : "border-white/20"
          }`}
        >
          {isPlayer1Winner && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 text-gold absolute -top-[2px] -translate-y-full right-0 z-50"
            >
              <path
                fillRule="evenodd"
                d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7]  ${
                isPlayer1Winner ? "flip-card-selected" : ""
              }  ${
                data?.[0]?.runners?.[0]?.card?.length > 0
                  ? "flip-card"
                  : "cardFadeInAnimation"
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
        <div
          className={`flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] ${
            isPlayer2Winner ? "border-gold" : "border-white/20"
          }`}
        >
          {isPlayer2Winner && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 text-gold absolute -top-[2px] -translate-y-full right-0 z-50"
            >
              <path
                fillRule="evenodd"
                d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7] ${
                isPlayer2Winner ? "flip-card-selected" : ""
              }  ${
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
        <div
          className={`flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] ${
            isPlayer3Winner ? "border-gold" : "border-white/20"
          }`}
        >
          {isPlayer3Winner && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 text-gold absolute -top-[2px] -translate-y-full right-0 z-50"
            >
              <path
                fillRule="evenodd"
                d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7] ${
                isPlayer3Winner ? "flip-card-selected" : ""
              }  ${
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
        <div
          className={`flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] ${
            isPlayer4Winner ? "border-gold" : "border-white/20"
          }`}
        >
          {isPlayer4Winner && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 text-gold absolute -top-[2px] -translate-y-full right-0 z-50"
            >
              <path
                fillRule="evenodd"
                d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7] ${
                isPlayer4Winner ? "flip-card-selected" : ""
              }  ${
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
        <div
          className={`flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] ${
            isPlayer5Winner ? "border-gold" : "border-white/20"
          }`}
        >
          {isPlayer5Winner && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 text-gold absolute -top-[2px] -translate-y-full right-0 z-50"
            >
              <path
                fillRule="evenodd"
                d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7] ${
                isPlayer5Winner ? "flip-card-selected" : ""
              }  ${
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
        <div
          className={`flex applyPerspective items-end justify-end gap-2 pt-6 p-1 rounded-lg border-[2px] ${
            isPlayer6Winner ? "border-gold" : "border-white/20"
          }`}
        >
          {isPlayer6Winner && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 text-gold absolute -top-[2px] -translate-y-full right-0 z-50"
            >
              <path
                fillRule="evenodd"
                d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          <div className="h-14 lg:h-16 aspect-[5/7] cardFadeInAnimation">
            <div
              className={` h-full w-full aspect-[5/7] ${
                isPlayer6Winner ? "flip-card-selected" : ""
              }  ${
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
