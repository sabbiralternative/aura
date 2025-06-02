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
      className="scale-y-100 h-fit fixed origin-bottom flex   flex-col items-center   bottom-0   w-full  max-w-md  transition-all ease-in-out "
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col flex-grow w-full bg-black/60 backdrop-blur-md rounded-t-xl ">
        <div className="flex items-center justify-between px-4 pt-4">
          <span className="text-lg font-semibold tracking-wider text-white capitalize ">
            BollywoodCasino
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

        {/*  */}
        <div className="perspective flex flex-col items-center justify-center w-full h-full gap-6 py-12 overflow-hidden min-[380px]:flex-row">
          <div className="perspective  gap-y-8 mx-auto w-fit gap-x-1 scale-[90%]">
            <div className="relative applyPerspective flex items-center justify-start gap-1 w-14 rounded-lg     border-white/20 ">
              <div className="flex ml-11 scale-[120%]" />
            </div>
            <div className="relative applyPerspective flex items-center justify-start gap-1 w-14 rounded-lg     border-white/20 ">
              <div className="flex ml-11 scale-[120%]" />
            </div>
            <div className="relative applyPerspective flex items-center justify-start gap-1 w-14 rounded-lg  border-[2px]   border-gold h-20">
              <div className="flex ml-11 scale-[120%]">
                <div
                  className=" h-12 aspect-[5/7] flip-card  slide-in -ml-8"
                  style={{ zIndex: 999 }}
                >
                  <div className="h-full w-full transition-transform ease-in-out  bg-gradient-to-l from-slate-50 to-slate-300  rounded-md  relative flip-card-front ">
                    <img
                      className="rounded-md"
                      src={`/cards/${recentWinnerData?.card}.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-md relative flip-card-back overflow-hidden">
                    <CardBack />
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-7 h-8 text-gold absolute bottom-[50px] -translate-y-full  left-4 z-50"
              >
                <path
                  fillRule="evenodd"
                  d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white -mb-[120px] -ml-14 whitespace-nowrap">
                {recentWinnerData?.winner_name}
              </span>
            </div>
            <div className="relative applyPerspective flex items-center justify-start gap-1 w-14 rounded-lg     border-white/20 ">
              <div className="flex ml-11 scale-[120%]" />
            </div>
            <div className="relative applyPerspective flex items-center justify-start gap-1 w-14 rounded-lg     border-white/20 ">
              <div className="flex ml-11 scale-[120%]" />
            </div>
            <div className="relative applyPerspective flex items-center justify-start gap-1 w-14 rounded-lg     border-white/20 ">
              <div className="flex ml-11 scale-[120%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentModal;
