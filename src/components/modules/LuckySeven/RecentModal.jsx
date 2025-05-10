import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { CardBack } from "../../../assets/icon";

const RecentModal = ({ setRecentWinnerData, recentWinnerData }) => {
  const ref = useRef(null);
  useCloseModalClickOutside(ref, () => {
    setRecentWinnerData(null);
  });

  const indexCard = recentWinnerData?.card;
  const cardNumber = indexCard && parseFloat(indexCard.substring(1));
  return (
    <div
      ref={ref}
      className="scale-y-100 h-fit fixed origin-bottom flex   flex-col items-center   bottom-0   w-full max-w-md  transition-all ease-in-out "
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col flex-grow w-full bg-black/60 backdrop-blur-md rounded-t-xl ">
        <div className="flex items-center justify-between px-4 pt-4">
          <span className="text-lg font-semibold tracking-wider text-white capitalize ">
            7upDown
            <span className="text-sm font-medium text-white/90">
              {recentWinnerData?.roundId}
            </span>
          </span>
          <button
            onClick={() => setRecentWinnerData(null)}
            className="font-semibold "
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
            className="perspective flex mx-auto items-center w-fit gap-3 justify-center
              "
          >
            <div
              className={`applyPerspective flex items-center justify-center gap-2  h-16 w-11 lg:h-20 lg:w-16 rounded-md  border-[1px]    ${
                cardNumber < 7 ? "border-gold" : "border-white/20"
              }`}
              style={{ zIndex: 996 }}
            >
              {cardNumber < 7 && (
                <div
                  className=" h-12 lg:h-16 aspect-[5/7]  flip-card"
                  style={{ zIndex: 999 }}
                >
                  <div className="h-full flex flex-col gap-1 lg:gap-2 py-1 justify-center items-center w-full transition-transform ease-in-out  bg-gradient-to-l from-slate-50 to-slate-300  rounded-sm  relative flip-card-front ">
                    <img src={`/cards/${recentWinnerData?.card}.jpg`} alt="" />
                  </div>
                  <div className="transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-back overflow-hidden">
                    <CardBack />
                  </div>
                </div>
              )}
              <div className="absolute -bottom-8 left-0  flex gap-2 transition-all ease-linear items-center text-white  justify-start">
                Up
              </div>
            </div>
            {/*  */}
            <div
              className={`applyPerspective flex items-center justify-center gap-2   h-16 w-12 lg:h-20 lg:w-16 rounded-md  border-[1px]     ${
                cardNumber === 7 ? "border-gold" : "border-white/20"
              }`}
              style={{ zIndex: 997 }}
            >
              {cardNumber === 7 && (
                <div
                  className=" h-12 lg:h-16 aspect-[5/7]  flip-card"
                  style={{ zIndex: 999 }}
                >
                  <div className="h-full flex flex-col gap-1 lg:gap-2 py-1 justify-center items-center w-full transition-transform ease-in-out  bg-gradient-to-l from-slate-50 to-slate-300  rounded-sm  relative flip-card-front ">
                    <img src={`/cards/${recentWinnerData?.card}.jpg`} alt="" />
                  </div>
                  <div className="transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-back overflow-hidden">
                    <CardBack />
                  </div>
                </div>
              )}
              <div className="absolute -bottom-8   flex gap-2 transition-all ease-linear items-center text-white  justify-start">
                7
              </div>
            </div>

            {/*  */}
            <div
              className={`flex applyPerspective  items-center justify-center gap-2 p-1  h-16 w-11 lg:h-20 lg:w-16 rounded-md  border-[1px]     ${
                cardNumber > 7 ? "border-gold" : "border-white/20"
              }`}
              style={{ zIndex: 996 }}
            >
              {cardNumber > 7 && (
                <div
                  className=" h-12 lg:h-16 aspect-[5/7]  flip-card"
                  style={{ zIndex: 999 }}
                >
                  <div className="h-full flex flex-col gap-1 lg:gap-2 py-1 justify-center items-center w-full transition-transform ease-in-out  bg-gradient-to-l from-slate-50 to-slate-300  rounded-sm  relative flip-card-front ">
                    <img src={`/cards/${recentWinnerData?.card}.jpg`} alt="" />
                  </div>
                  <div className="transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-back overflow-hidden">
                    <CardBack />
                  </div>
                </div>
              )}
              <div className="absolute -bottom-8 right-0  flex gap-2 transition-all ease-linear items-center text-white  justify-start   ">
                Down
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentModal;
