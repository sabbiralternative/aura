import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { CardBack } from "../../../assets/icon";

const RecentModal = ({ setRecentWinnerData, recentWinnerData }) => {
  const ref = useRef(null);
  useCloseModalClickOutside(ref, () => {
    setRecentWinnerData(null);
  });

  const amar = [1, 2, 3, 4, 5, 6];
  const akbar = [6, 7, 8, 9, 10];
  const anthony = [11, 12, 13];
  const indexCard = recentWinnerData?.card;
  const cardNumber = indexCard && parseFloat(indexCard.substring(1));
  const isAmarCard = amar.includes(cardNumber);
  const isAkbarCard = akbar.includes(cardNumber);
  const isAnthonyCard = anthony.includes(cardNumber);

  return (
    <div
      ref={ref}
      className="scale-y-100 h-fit fixed origin-bottom flex   flex-col items-center   bottom-0   w-full  max-w-md  transition-all ease-in-out "
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col flex-grow w-full bg-black/60 backdrop-blur-md rounded-t-xl ">
        <div className="flex items-center justify-between px-4 pt-4">
          <span className="text-lg font-semibold tracking-wider text-white capitalize ">
            Amar Akbar Anthony{" "}
            <span className="text-sm font-medium text-white/90">
              {recentWinnerData?.roundId}
            </span>
          </span>
          <button
            onClick={() => setRecentWinnerData(null)}
            className="font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 text-slate-100"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="perspective flex flex-col items-center justify-center w-full h-full gap-6 py-12 overflow-hidden min-[380px]:flex-row">
          <div
            className="perspective flex flex-col mx-auto items-center w-fit justify-center
                "
          >
            <div className="absolute bottom-1.5 applyPerspective">
              <div
                className={`lg:h-16 h-12 aspect-[5/7]   ${
                  isAmarCard
                    ? "flip-card-up ml-[1px]"
                    : isAnthonyCard
                    ? "flip-card-down mr-[1px]"
                    : isAkbarCard
                    ? "flip-card"
                    : "cardFadeInAnimation"
                }`}
                style={{ zIndex: 1000 }}
              >
                <div className="h-full w-full transition-transform ease-in-out  bg-gradient-to-l from-slate-50 to-slate-300  rounded-sm  relative flip-card-front ">
                  <img src={`/cards/${recentWinnerData?.card}.jpg`} alt="" />
                </div>
                <div className="transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-back overflow-hidden">
                  <CardBack />
                </div>
              </div>
            </div>
            <div
              className="flex applyPerspective lg:gap-2 gap-1.5 items-center"
              style={{ zIndex: -1000 }}
            >
              <div
                className={`flex items-center justify-center gap-2  lg:h-20 lg:w-16 h-16 w-12  rounded-lg  border-[1px] lg:border-[2px]    ${
                  isAmarCard ? "border-gold" : "border-white/20"
                }`}
              >
                <div className="absolute -bottom-8 items-center flex flex-col text-xs text-white">
                  <span>Amar</span>
                  <span className="text-gold">A23456</span>
                </div>
              </div>
              <div
                className={`flex items-center justify-center gap-2  lg:h-20 lg:w-16 h-16 w-12  rounded-lg  border-[1px] lg:border-[2px]   ${
                  isAkbarCard ? "border-gold" : "border-white/20"
                }`}
              >
                <div className="absolute -bottom-8 items-center flex flex-col text-xs text-white">
                  <span>Akbar</span>
                  <span className="text-gold">78910</span>
                </div>
              </div>
              <div
                className={`flex items-center justify-center gap-2  lg:h-20 lg:w-16 h-16 w-12  rounded-lg  border-[1px] lg:border-[2px]   ${
                  isAnthonyCard ? "border-gold" : "border-white/20"
                }`}
              >
                <div className="absolute -bottom-8 items-center flex flex-col text-xs text-white">
                  <span>Anthony</span>
                  <span className="text-gold">JQK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentModal;
