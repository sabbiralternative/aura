import { useState } from "react";
import img from "../../../assets/img";

const Footer = ({ isClassicView, setIsClassicView }) => {
  const [showMyBets, setShowMyBets] = useState(false);
  return (
    <div className="relative z-50 w-full ">
      <div className="flex absolute top-0 right-0 gap-2 justify-center items-center p-1 pl-3 bg-gradient-to-l to-transparent -translate-y-full from-zinc-900 via-zinc-900">
        <span className="text-white">Classic View</span>
        <div
          onClick={() => setIsClassicView((prev) => !prev)}
          className={`relative w-8 h-5 rounded-full cursor-pointer transition-colors duration-200 ease-in-out
          ${isClassicView ? "bg-green-500" : "bg-zinc-700"}
        undefined`}
        >
          <div
            className={`absolute w-4 h-4 rounded-full top-0.5 transition-transform duration-200 ease-in-out
            ${isClassicView ? "bg-zinc-100 translate-x-3.5" : "translate-x-0.5 bg-zinc-400"}`}
          />
        </div>
      </div>
      <button
        onClick={() => setShowMyBets((prev) => !prev)}
        id="myBetsButton"
        className="absolute top-0 left-1/2 transition-all duration-300 ease-linear -translate-x-1/2 -translate-y-1/2 fabButton"
      >
        {showMyBets ? (
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
            className="w-6 h-6 animate__faster animate__animated animate__rotateIn"
          >
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
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
            className="w-6 h-6 animate__faster animate__animated animate__flipInY"
          >
            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
          </svg>
        )}

        <span
          className="transition-all duration-300 ease-linear absolute px-1.5 text-xs font-semibold bg-green-500 border-2 rounded-full right-0 border-white/20 -top-2"
          style={{ opacity: 0, scale: "0.5" }}
        >
          0
        </span>
      </button>
      {showMyBets && (
        <div
          className="absolute -top-0 transition-all duration-300 ease-in-out origin-top w-[96%] max-w-2xl p-2 border left-1/2 shadow-[0_0_12px_rgba(0,0,0,0.3)] shadow-green-500/40 bg-zinc-900 rounded-xl border-green-600"
          style={{
            transform: "translateY(-100%) translateX(-50%) scale(1)",
            opacity: 1,
            pointerEvents: "auto",
          }}
        >
          <div className="flex flex-col gap-1 justify-center items-center p-3 pb-6">
            <h1 className="text-xl font-bold text-gray-300">No open bets</h1>
            <p className="text-sm font-normal text-center text-gray-500">
              Bets in active rounds will appear here
            </p>
          </div>
        </div>
      )}

      <div className="flex z-50 text-[0.6rem] leading-snug items-center font-light justify-between w-full px-2 pt-1 pb-0 text-white">
        <div className="flex flex-col">
          <div
            className="flex gap-1 items-center transition-all duration-300"
            style={{ opacity: 0, transform: "translateY(100%)" }}
          >
            Total Bet<span className="text-yellow-400">0 FTN </span>
          </div>
          <div className="flex gap-1 items-center">
            Balance<span className="text-yellow-400">8766.9 FTN </span>
          </div>
          <span>@wealthymagpie845</span>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-0.5 items-center px-0.5 text-white">
            <div className>15</div>
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
              className="w-3 h-3"
              style={{ filter: "drop-shadow(rgb(0, 0, 0) 0px 0px 2px)" }}
            >
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
          </div>
          <span>Round # 214671598</span>
          <span className="flex gap-1 items-center">Ball by Ball Cricket</span>
        </div>
      </div>
      <div
        className="flex overflow-x-auto relative gap-1 justify-between items-center px-2 py-1 w-full scrollbar-none"
        style={{
          maskImage:
            "linear-gradient(to right, black, black, black, black, black, black, black, black, black, black, black, transparent)",
        }}
      >
        <div className="flex items-center justify-center gap-1 p-1 text-white border-[1px] rounded-full cursor-pointer bg-zinc-900/40 border-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-history"
          >
            <path d="M12 8l0 4l2 2" />
            <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={8}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 text-white/50"
          >
            <path
              d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z"
              fill="currentColor"
              strokeWidth={0}
            />
          </svg>
        </div>{" "}
        <div className="flex flex-grow items-center min-w-fit">
          <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white rounded-l-full">
            <img
              alt="1 Runs"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-4 h-4 p-0.5"
              src={img.cricket_ball}
              style={{ color: "transparent" }}
            />
            <span>1 Runs -</span>
            <span className>24%</span>
          </div>
          <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
            <img
              alt="4 Runs"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-4 h-4 p-0.5"
              src={img.cricket_ball}
              style={{ color: "transparent" }}
            />
            <span>4 Runs -</span>
            <span className>18%</span>
          </div>
          <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
            <img
              alt="0 Runs"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-4 h-4 p-0.5"
              src={img.cricket_ball}
              style={{ color: "transparent" }}
            />
            <span>0 Runs -</span>
            <span className>32%</span>
          </div>
          <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
            <img
              alt="Wicket"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-4 h-4 p-0.5"
              src={img.cricket_ball}
              style={{ color: "transparent" }}
            />
            <span>Wicket -</span>
            <span className>10%</span>
          </div>
          <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
            <img
              alt="2 Runs"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-4 h-4 p-0.5"
              src={img.cricket_ball}
              style={{ color: "transparent" }}
            />
            <span>2 Runs -</span>
            <span className>10%</span>
          </div>
          <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
            <img
              alt="3 Runs"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-4 h-4 p-0.5"
              src={img.cricket_ball}
              style={{ color: "transparent" }}
            />
            <span>3 Runs -</span>
            <span className>2%</span>
          </div>
          <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
            <img
              alt="Extra"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-4 h-4 p-0.5"
              src={img.cricket_ball}
              style={{ color: "transparent" }}
            />
            <span>Extra -</span>
            <span className>2%</span>
          </div>
          <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white rounded-r-full">
            <img
              alt="6 Runs"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="w-4 h-4 p-0.5"
              src={img.cricket_ball}
              style={{ color: "transparent" }}
            />
            <span>6 Runs -</span>
            <span className>2%</span>
          </div>
        </div>{" "}
        <div className="flex items-center gap-0.5 pointer-events-none">
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(183, 39, 118)" }}
            >
              <span className="text-xs whitespace-nowrap">4</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(159, 18, 57)" }}
            >
              <span className="text-xs whitespace-nowrap">W</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">2</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(159, 18, 57)" }}
            >
              <span className="text-xs whitespace-nowrap">W</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">3</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(159, 18, 57)" }}
            >
              <span className="text-xs whitespace-nowrap">W</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(183, 39, 118)" }}
            >
              <span className="text-xs whitespace-nowrap">4</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(183, 39, 118)" }}
            >
              <span className="text-xs whitespace-nowrap">4</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(183, 39, 118)" }}
            >
              <span className="text-xs whitespace-nowrap">4</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(183, 39, 118)" }}
            >
              <span className="text-xs whitespace-nowrap">4</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(183, 39, 118)" }}
            >
              <span className="text-xs whitespace-nowrap">4</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">E</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(183, 39, 118)" }}
            >
              <span className="text-xs whitespace-nowrap">4</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(183, 39, 118)" }}
            >
              <span className="text-xs whitespace-nowrap">4</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">2</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(72, 138, 36)" }}
            >
              <span className="text-xs whitespace-nowrap">6</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(159, 18, 57)" }}
            >
              <span className="text-xs whitespace-nowrap">W</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(159, 18, 57)" }}
            >
              <span className="text-xs whitespace-nowrap">W</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(183, 39, 118)" }}
            >
              <span className="text-xs whitespace-nowrap">4</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">2</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">2</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">2</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-xs whitespace-nowrap">0</span>
            </div>
          </div>
          <div className="flex items-center gap-1 w-full justify-center">
            <div
              className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            h-8 w-8
            border-white/20"
              style={{ backgroundColor: "rgb(30, 64, 175)" }}
            >
              <span className="text-xs whitespace-nowrap">1</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
    </div>
  );
};

export default Footer;
