import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const BetSlip = ({ setShowBetSlip }) => {
  const ref = useRef();

  useCloseModalClickOutside(ref, () => {
    setShowBetSlip(false);
  });
  return (
    <div
      className="flex inset-y-0 fixed top-0 right-0 flex-col justify-end items-center p-2 w-full lg:w-1/3 lg:justify-center lg:items-end h-dvh bg-black/50"
      style={{ zIndex: 1000, pointerEvents: "auto" }}
    >
      <div
        ref={ref}
        className="__className_575e37 relative flex modal-slide-up via-zinc-900 to-zinc-900 bg-gradient-to-b flex-col w-full rounded-2xl border-zinc-800 border gap-0 text-white from-blue-800 "
      >
        <span className="absolute top-0 left-1/2 text-2xl font-semibold -translate-x-1/2 -translate-y-full">
          00:07
        </span>
        <div className="flex flex-col gap-1 px-3 pt-2 w-full">
          <div className="flex flex-col gap-1 p-1">
            <span className="text-xl font-semibold leading-none">0 Runs</span>
            <span className="text-sm font-light leading-none opacity-50">
              Bookmaker 1
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-1 items-center" style={{ opacity: 1 }}>
              <span className="bg-rose-500 hidden rounded-full text-white font-medium px-2 py-0.5 text-xs">
                0 FTN{" "}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 opacity-0"
              >
                <path d="M7 7l5 5l-5 5" />
                <path d="M13 7l5 5l-5 5" />
              </svg>
              <span className="bg-rose-500 -translate-x-full opacity-0 rounded-full text-white font-medium px-2 py-0.5 text-xs transition-all duration-300">
                0 FTN{" "}
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-1 p-2"
          style={{ pointerEvents: "auto" }}
        >
          <div className="grid grid-cols-2 gap-1">
            <div className="flex flex-col px-2 pb-1 pt-1.5 leading-none border rounded-lg border-white/5 bg-white/10">
              <span className="text-[0.6rem] text-white/50">Odds</span>
              <span className="text-sm">
                <span className="flex flex-col gap-1">
                  <span className>3.10</span>
                </span>
              </span>
            </div>
            <div className="flex flex-col px-2 pb-1 pt-1.5 leading-none border rounded-lg border-white/5 bg-white/10">
              <span className="text-[0.6rem] text-white/50">Balance</span>
              <span className="text-sm">2101.92 FTN </span>
            </div>
          </div>
          <div className="flex flex-col px-2 pb-1 pt-1.5 group transition-all duration-300 border rounded-lg focus-within:border-white/50 bg-white/10 border-white/5">
            <div className="text-[0.6rem] flex justify-between w-full text-white/50">
              <span>Stake Amount</span>
              <span className="pointer-events-none" style={{ opacity: 0 }}>
                Min 1 FTN - Max 10K FTN - Market 30K FTN{" "}
              </span>
            </div>
            <span className="leading-none whitespace-nowrap">
              <input
                placeholder="Min 1 FTN  - Max 10K FTN "
                className="w-full text-lg font-medium bg-transparent outline-none"
                type="text"
                defaultValue
              />
              <div className="flex flex-col text-sm pointer-events-none w-fit transition-all duration-300 opacity-0 max-h-0 overflow-hidden">
                <div className="flex transition-all duration-300 items-center gap-1 text-[0.6rem] lg:text-xs font-normal text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                  <span>Stake must be greater than 0</span>
                </div>
              </div>
            </span>
          </div>
          <div className="grid grid-cols-6 gap-1 w-full">
            <button
              value={1}
              className="flex items-center justify-center px-3 py-2 text-sm transition-all duration-300 lg:hover:border-white/50 border rounded-lg active:scale-95 bg-white/10 border-white/5"
              style={{ gridColumn: "span 2 / span 2" }}
            >
              +1
            </button>
            <button
              value={2}
              className="flex items-center justify-center px-3 py-2 text-sm transition-all duration-300 lg:hover:border-white/50 border rounded-lg active:scale-95 bg-white/10 border-white/5"
              style={{ gridColumn: "span 2 / span 2" }}
            >
              +2
            </button>
            <button
              value={5}
              className="flex items-center justify-center px-3 py-2 text-sm transition-all duration-300 lg:hover:border-white/50 border rounded-lg active:scale-95 bg-white/10 border-white/5"
              style={{ gridColumn: "span 2 / span 2" }}
            >
              +5
            </button>
            <button
              value={10}
              className="flex items-center justify-center px-3 py-2 text-sm transition-all duration-300 lg:hover:border-white/50 border rounded-lg active:scale-95 bg-white/10 border-white/5"
              style={{ gridColumn: "span 2 / span 2" }}
            >
              +10
            </button>
            <button
              value={50}
              className="flex items-center justify-center px-3 py-2 text-sm transition-all duration-300 lg:hover:border-white/50 border rounded-lg active:scale-95 bg-white/10 border-white/5"
              style={{ gridColumn: "span 2 / span 2" }}
            >
              +50
            </button>
            <button
              value={100}
              className="flex items-center justify-center px-3 py-2 text-sm transition-all duration-300 lg:hover:border-white/50 border rounded-lg active:scale-95 bg-white/10 border-white/5"
              style={{ gridColumn: "span 2 / span 2" }}
            >
              +100
            </button>
            <button
              value
              className="flex items-center justify-center px-3 py-2 text-sm transition-all duration-300 lg:hover:border-white/50 border rounded-lg active:scale-95 bg-white/10 border-white/5"
              style={{ gridColumn: "span 3 / span 3" }}
            >
              Reset
            </button>
            <button
              value={10000}
              className="flex items-center justify-center px-3 py-2 text-sm transition-all duration-300 lg:hover:border-white/50 border rounded-lg active:scale-95 bg-white/10 border-white/5"
              style={{ gridColumn: "span 3 / span 3" }}
            >
              Max
            </button>
          </div>
        </div>
        <div className="flex gap-1 p-2 w-full border-t border-zinc-800">
          <button className="w-full button buttonInfo">Place Bet</button>
          <button
            onClick={() => setShowBetSlip(false)}
            className="buttonOutlined button w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
