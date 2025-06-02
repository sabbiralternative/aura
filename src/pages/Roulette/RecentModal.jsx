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
      className="scale-y-100 h-fit absolute left-0 origin-bottom flex   flex-col items-center   bottom-0   w-full  max-w-md  transition-all ease-in-out "
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col flex-grow w-full bg-black/60 backdrop-blur-md rounded-t-xl ">
        <div className="flex items-center justify-between px-4 pt-4">
          <span className="text-lg font-semibold tracking-wider text-white capitalize ">
            Roulette
            <span className="text-sm font-medium text-white/90">
              #148240151
            </span>
            s
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
        <div className="perspective flex flex-col items-center justify-center w-full h-full gap-6 pb-12 pt-8 overflow-hidden min-[380px]:flex-row">
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
            bg-[#ef1616b4]
            "
          >
            14
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentModal;
