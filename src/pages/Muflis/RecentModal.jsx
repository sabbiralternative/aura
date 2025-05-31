import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";
import { CardBack } from "../../assets/icon";

const RecentModal = ({ setRecentWinnerData, recentWinnerData }) => {
  const ref = useRef(null);
  useCloseModalClickOutside(ref, () => {
    setRecentWinnerData(null);
  });

  return (
    <div
      ref={ref}
      className="scale-y-100 h-fit absolute left-0 origin-bottom flex flex-col items-center bottom-0  w-full max-w-md transition-all ease-in-out "
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col flex-grow w-full bg-black/60 backdrop-blur-md rounded-t-xl">
        <div className="flex items-center justify-between px-4 pt-4">
          <span className="text-lg font-semibold tracking-wider text-white capitalize">
            MuflisTeenpatti{" "}
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
          <div className="perspective my-6 flex lg:flex-col mx-auto items-center w-fit sm:w-full gap-4 lg:gap-8 justify-center opacity-100">
            {/*  */}
            <div
              className={`flex applyPerspective items-end justify-end gap-2 p-1 rounded-lg border-[2px]  ${
                recentWinnerData?.winner === "A"
                  ? "border-gold"
                  : "border-white/80"
              }`}
            >
              <span
                className={` absolute -top-[1px] -translate-y-full left-0 z-20 text-[10px] uppercase ${
                  recentWinnerData?.winner === "A"
                    ? "text-gold"
                    : "text-white/80"
                }`}
              >
                {recentWinnerData?.a?.cards_type}
              </span>
              {recentWinnerData?.a?.cards?.map((card) => (
                <div key={card} className="h-12 lg:h-16 aspect-[5/7] flip-card">
                  <div className="h-full w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-front">
                    <img src={`/cards/${card}.jpg`} alt="card" />
                  </div>
                  <div className="transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-back overflow-hidden">
                    <CardBack />
                  </div>
                </div>
              ))}

              <div className="absolute -bottom-8 left-12 z-50 flex gap-2 transition-all ease-linear items-center text-white justify-start">
                Player A
              </div>
            </div>
            {/*  */}
            <div
              className={`flex applyPerspective items-end justify-end gap-2 p-1 rounded-lg border-[2px] ${
                recentWinnerData?.winner === "B"
                  ? "border-gold"
                  : "border-white/20"
              }`}
            >
              <span
                className={` absolute -top-[1px] -translate-y-full left-0 z-50 text-[10px] uppercase ${
                  recentWinnerData?.winner === "B"
                    ? "text-gold"
                    : "text-white/80"
                }`}
              >
                PAIR
              </span>
              {recentWinnerData?.b?.cards?.map((card) => (
                <div key={card} className="h-12 lg:h-16 aspect-[5/7] flip-card">
                  <div className="h-full w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-front">
                    <img src={`/cards/${card}.jpg`} alt="card" />
                  </div>
                  <div className="transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-back overflow-hidden">
                    <CardBack />
                  </div>
                </div>
              ))}

              <div className="absolute -bottom-8 right-10 z-50 flex gap-2 transition-all ease-linear items-center text-white justify-start">
                Player B
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentModal;
