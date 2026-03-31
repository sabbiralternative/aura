import { useNavigate } from "react-router-dom";
import img from "../../../assets/img";
import Counter from "../../../components/shared/events/Counter";
import { Status } from "../../../const";
import Menu from "../../../components/modules/Virtual/Menu";

const GameContainer = ({ firstEvent }) => {
  const navigate = useNavigate();
  const amar = [1, 2, 3, 4, 5, 6];
  const akbar = [6, 7, 8, 9, 10];
  const anthony = [11, 12, 13];
  const indexCard = firstEvent?.indexCard?.[0];
  const cardNumber = indexCard && parseFloat(indexCard.substring(1));
  const isAmarCard = amar.includes(cardNumber);
  const isAkbarCard = akbar.includes(cardNumber);
  const isAnthonyCard = anthony.includes(cardNumber);
  return (
    <div id="game-container" className="relative w-full aspect-video ">
      <div
        className="w-full aspect-video"
        style={{
          maskImage:
            "linear-gradient(black, black, black, black, black, black, black, black, transparent)",
        }}
      >
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <img
            alt="casino table"
            loading="lazy"
            width={1000}
            height={1000}
            decoding="async"
            data-nimg={1}
            className="object-cover absolute inset-0 w-full h-full"
            srcSet={img.lucky7}
            src={img.lucky7}
            style={{ color: "transparent" }}
          />
          <div
            style={{
              position: "relative",
              perspective: "1000px",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="flex absolute top-[30%] flex-col gap-2 justify-center items-center w-full h-[70%]"
              style={{
                transformOrigin: "center bottom",
                transform: "rotateX(40deg)",
              }}
            >
              <div
                style={{
                  width: "fit-content",
                  minWidth: "fit-content",
                  transform: "scale(1)",
                }}
              >
                <div className="z-50 grid grid-cols-1 p-1 ">
                  {firstEvent?.status === Status.SUSPENDED && indexCard && (
                    <div className="flex flex-col gap-1 items-center">
                      <img
                        className="h-[50px]"
                        src={`/cards/${indexCard}.jpg`}
                        alt="card"
                      />

                      <span className="text-xs font-medium leading-none text-zinc-100 lg:text-sm">
                        {isAmarCard && "Amar"} {isAkbarCard && "Akbar"}
                        {isAnthonyCard && "Anthony"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex absolute top-0 left-0 z-50 flex-col gap-0.5 py-2 px-1">
        <button onClick={() => navigate("/")} className=" iconButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
            <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
          </svg>
        </button>
      </div>
      <div className="flex absolute top-12 left-16 z-50 gap-1">
        {firstEvent?.status === Status.OPEN && (
          <Counter firstEvent={firstEvent} />
        )}
      </div>
      <Menu />
    </div>
  );
};

export default GameContainer;
