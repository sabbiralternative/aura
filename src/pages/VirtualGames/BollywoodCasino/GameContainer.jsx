import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalsName } from "../../../static";
import img from "../../../assets/img";

const GameContainer = ({ setModal }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
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
            srcSet={img.bollywood_casino}
            src={img.bollywood_casino}
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
                  <div className="flex flex-col gap-1 items-center">
                    <div
                      className="relative  "
                      style={{
                        width: "48px",
                        height: "64px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div
                        className=" relative w-full h-full inset-0 flex items-center justify-center bg-white overflow-hidden"
                        style={{
                          borderRadius: "5.33333px",
                          opacity: 1,
                          zIndex: 1000,
                        }}
                      >
                        <div
                          className="absolute flex items-center justify-center top-0.5 bottom-0.5 left-0.5 right-0.5 bg-black/30"
                          style={{ borderRadius: "3.33333px" }}
                        >
                          <svg
                            className="w-2/3 aspect-square"
                            width={25}
                            height={24}
                            viewBox="0 0 139 127"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C1.1002 79.6415 1.7002 77.1415 2.5002 74.6415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
                              fill="#929292"
                            />
                            <path
                              d="M25.4002 46.3414L20.7002 45.3414C25.5002 40.2414 31.0002 35.4414 37.2002 31.0414C37.7002 30.6414 38.3002 30.3414 38.8002 29.9414L39.2002 30.3414H39.1002C33.5002 35.3414 28.9002 40.7414 25.4002 46.3414Z"
                              fill="#929292"
                            />
                            <path
                              d="M74.1001 123.041C73.4001 123.241 72.7001 123.441 72.0001 123.541C61.7001 126.041 51.6001 126.941 42.4001 126.141L36.1001 112.241C36.8001 112.341 37.5001 112.441 38.3001 112.541C47.7001 113.541 58.1001 112.441 68.7001 109.241V108.941L74.1001 123.041Z"
                              fill="#929292"
                            />
                            <path
                              d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415L67.9002 106.241L68.8002 108.641V109.141Z"
                              fill="#929292"
                            />
                            <path
                              d="M64.9999 18.0415L64.8999 16.4415C67.8999 15.2415 70.9999 14.3415 73.9999 13.4415C79.1999 11.9415 84.3999 10.8415 89.3999 10.2415L86.5999 15.3415C79.8999 14.7415 72.4999 15.6415 64.9999 18.0415Z"
                              fill="#929292"
                            />
                            <path
                              d="M87.4001 77.7414C86.1001 78.6414 84.8001 79.5414 83.5001 80.4414C77.7001 84.1414 71.6001 86.7414 65.6001 88.2414C57.5001 90.3414 49.7001 90.5414 43.1001 88.7414C40.0001 87.9414 37.2001 86.6414 34.7001 85.0414C32.1001 83.3414 30.0001 81.1414 28.3001 78.5414C26.7001 76.0414 25.7001 73.2414 25.3001 70.2414C24.5001 65.0414 25.4001 59.3414 27.7001 53.7414C31.0001 45.8414 37.2001 37.8414 45.7001 31.4414C47.3001 30.2414 48.9001 29.1414 50.6001 28.0414C55.7001 24.8414 61.0001 22.4414 66.2001 20.8414C71.4001 19.2414 76.5001 18.4414 81.3001 18.4414C85.1001 18.4414 88.7001 18.9414 92.0001 19.9414C93.6001 20.4414 95.2001 21.0414 96.6001 21.7414C100.4 23.6414 103.6 26.3414 105.8 29.9414C108 33.3414 109 37.3414 109.1 41.4414C109.2 46.1414 108 51.2414 105.7 56.2414C102.2 63.9414 95.9001 71.6414 87.4001 77.7414Z"
                              fill="white"
                            />
                            <path
                              d="M129.2 81.8414C123.9 93.0414 117.2 99.8414 110.9 104.041C110.7 104.241 110.4 104.341 110.2 104.541L106.3 88.9414L105.1 84.3414L96.7998 77.2414C101.7 72.9414 105.8 68.2414 109 63.3414L126.2 66.3414V66.4414C127.2 71.5414 128.2 76.7414 129.2 81.8414Z"
                              fill="#929292"
                            />
                            <path
                              d="M138.5 42.9414L134 34.3414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C136 24.2414 138.5 42.9414 138.5 42.9414Z"
                              fill="#929292"
                            />
                            <path
                              d="M133.9 34.4414L114.7 41.2414C114.6 36.3414 113.4 31.7414 110.8 27.7414C110.3 26.9414 109.7 26.0414 109 25.3414L125.8 14.0414C126.8 15.2414 127.7 16.4414 128.5 17.7414C131.8 22.6414 133.5 28.3414 133.9 34.4414Z"
                              fill="white"
                            />
                            <path
                              d="M39.3 30.4414C33.5 35.3414 28.9002 40.7414 25.4002 46.3414L20.7002 45.3414L10 43.0414C14.9 35.3414 21.5 27.9414 29.4 21.3414L38.8 30.0414L39.3 30.4414Z"
                              fill="white"
                            />
                            <path
                              d="M68.8002 109.141C58.2002 112.341 47.8002 113.441 38.4002 112.441C37.7002 112.341 36.9002 112.341 36.2002 112.141L46.2002 95.3415C52.7002 96.0415 59.9002 95.3415 67.2002 93.2415C67.5002 93.1415 67.7002 93.1414 67.9002 93.0414L68.7002 108.641L68.8002 109.141Z"
                              fill="white"
                            />
                            <path
                              d="M24.6002 85.1415L7.5002 97.3415C6.7002 96.4415 6.0002 95.4415 5.4002 94.3415C3.0002 90.5415 1.5002 86.4415 0.700195 82.1415C0.300195 79.9415 0.1 77.7415 0 75.5415L2.5 74.7415L18.9002 69.2415C19.0002 74.0415 20.3002 78.4415 22.8002 82.4415C23.3002 83.4415 23.9002 84.2415 24.6002 85.1415Z"
                              fill="url(#paint0_linear_693_22)"
                            />
                            <path
                              d="M95.1001 0.141422L89.5001 10.2414L86.7001 15.3414C80.0001 14.8414 72.6001 15.7414 65.1001 18.1414L65.0001 16.5414L64.6001 4.14142C73.3001 1.44142 81.8001 0.0414213 89.8001 0.0414213C91.5001 -0.0585787 93.3001 0.0414217 95.1001 0.141422Z"
                              fill="white"
                            />
                            <path
                              d="M126.2 66.3414C126.2 66.4414 126.2 66.4414 126.2 66.3414C121.2 74.4414 114.5 82.1414 106.2 88.9414C106.2 88.9414 106.1 88.9414 106.1 89.0414L94.6001 79.1414C95.3001 78.5414 96.1001 77.9414 96.8001 77.3414C101.7 73.0414 105.8 68.3414 109 63.4414L126.2 66.3414Z"
                              fill="white"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_693_22"
                                x1="-373.769"
                                y1="63.3372"
                                x2="314.773"
                                y2="63.3372"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" />
                                <stop offset="0.5594" stopColor="white" />
                                <stop offset={1} stopColor="white" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="__className_c7a506 absolute delay-[200ms] inset-0 text-xl bg-white shadow-md"
                        style={{
                          borderRadius: "5.33333px",
                          transform: "rotateY(180deg)",
                          opacity: 0,
                          zIndex: 999,
                        }}
                      >
                        <div
                          className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] top-[3%] left-[3%]"
                          style={{ fontSize: "1.45455em", color: "black" }}
                        />
                        <div
                          className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] bottom-[3%] right-[3%] rotate-180"
                          style={{ fontSize: "1.45455em", color: "black" }}
                        />
                        <div className="absolute h-[50%] flex justify-center items-center w-[36%] top-[3%] right-[3%]" />
                        <div className="absolute h-[50%] flex justify-center items-center w-[36%] bottom-[3%] left-[3%] rotate-180" />
                      </div>
                    </div>
                    <span className="text-xs font-medium leading-none text-zinc-100 lg:text-sm" />
                  </div>
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
      <div className="flex absolute top-2 left-12 z-50 gap-1">
        <div
          className="relative rounded-full backdrop-blur-sm ring-[0.5px] ring-white/10 transition-all duration-1000 pointer-events-none bg-zinc-900/40"
          style={{
            pointerEvents: "none",
            opacity: 1,
            transform: "translateY(0px)",
            width: "64px",
            height: "64px",
          }}
        >
          <svg className="w-full h-full -rotate-90">
            <circle
              cx={32}
              cy={32}
              r={26}
              fill="transparent"
              stroke="#ffffff10"
              strokeWidth={6}
            />
            <circle
              cx={32}
              cy={32}
              r={26}
              fill="transparent"
              stroke="#ef4444"
              strokeWidth={6}
              strokeDasharray="163.36281798666926"
              strokeDashoffset={143}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <div className="flex absolute top-0 left-0 justify-center items-center w-full h-full">
            <div
              className="font-semibold text-white"
              style={{ fontSize: "26px" }}
            >
              3
            </div>
          </div>
        </div>
      </div>
      <div className="flex absolute top-0 right-0 z-50 gap-1">
        <div className="relative flex flex-col items-end gap-0.5 pt-2 pb-1">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="mr-1 iconButton"
          >
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
              className={`w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out  ${showMenu ? "opacity-100 rotate-90" : "opacity-0"}`}
            >
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
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
              className={`w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out  ${showMenu ? "opacity-0 rotate-90" : "opacity-100"}`}
            >
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
            <div className="w-4 h-4" />
          </button>
          <div
            className={`absolute bottom-0 right-0 origin-right translate-y-full w-64 grid grid-cols-2  gap-0.5 p-1 bg-zinc-900/40 backdrop-blur-sm border-[0.5px] border-r-0 border-white/20 rounded-l-lg transition-all duration-300 ease-in-out  ${showMenu ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          >
            <button
              onClick={() => setModal({ name: ModalsName.howToPlay })}
              className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50"
            >
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
                className="w-8 h-8"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
              </svg>
              <span className="text-xs font-medium whitespace-nowrap">
                How to play
              </span>
            </button>
            <button
              onClick={() => setModal({ name: ModalsName.settings })}
              className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50"
            >
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
                className="w-8 h-8"
              >
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              </svg>
              <span className="text-xs font-medium whitespace-nowrap">
                Settings
              </span>
            </button>
            <button
              onClick={() => setModal({ name: ModalsName.myBets })}
              className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50"
            >
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
                className="w-8 h-8"
              >
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
              </svg>
              <span className="text-xs font-medium whitespace-nowrap">
                My Bets
              </span>
            </button>
            <button
              onClick={() => setModal({ name: ModalsName.moreGames })}
              className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50"
            >
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
                className="w-8 h-8"
              >
                <path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                <path d="M8 6h.01" />
                <path d="M16 18h.01" />
                <path d="M12 16l-3 -4l3 -4l3 4z" />
              </svg>
              <span className="text-xs font-medium whitespace-nowrap">
                More Games
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex absolute right-0 top-14 z-50 flex-col gap-1 py-1 pr-1 pl-4 bg-gradient-to-l to-transparent from-zinc-900 via-zinc-900"
        style={{
          transition: "1s ease-out",
          transformOrigin: "right center",
          scale: "0.8",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <div className="flex flex-col text-xs text-white items-end">
          <div className="flex h-4 text-white/80">1 Players won </div>
          <div className="flex h-4">
            <span className="pr-1 text-yellow-400">
              460<span className="text-white/40 text-[0.6rem]"> INR </span>
            </span>
          </div>
        </div>
        <div className="__className_110d50 relative whitespace-nowrap h-3">
          <span className="opacity-0">---</span>
          <div className=" absolute opacity-0 fade-updown top-0 flex items-center h-full gap-1 text-[0.6rem] right-0">
            <span className="text-yellow-400">1 winners </span>
          </div>
          <div
            id="winner-0"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "1s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-1"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "2s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-2"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "3s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-3"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "4s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-4"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "5s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-5"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "6s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-6"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "7s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-7"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "8s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-8"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "9s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-9"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "10s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-10"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "11s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-11"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "12s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-12"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "13s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-13"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "14s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-14"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "15s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-15"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "16s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-16"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "17s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-17"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "18s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-18"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "19s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-19"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "20s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-20"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "21s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-21"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "22s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-22"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "23s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-23"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "24s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-24"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "25s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-25"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "26s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-26"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "27s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-27"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "28s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-28"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "29s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-29"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "30s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-30"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "31s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-31"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "32s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-32"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "33s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-33"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "34s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-34"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "35s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-35"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "36s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-36"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "37s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-37"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "38s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-38"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "39s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-39"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "40s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-40"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "41s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-41"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "42s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-42"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "43s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-43"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "44s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-44"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "45s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-45"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "46s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-46"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "47s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-47"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "48s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-48"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "49s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
          <div
            id="winner-49"
            className="text-[0.6rem] h-full flex gap-1 items-center text-white absolute fade-updown top-0 right-0"
            style={{
              animationDelay: "50s",
              opacity: 0,
              transform: "translateY(100%)",
            }}
          >
            <span className="truncate max-w-16">b02.91_8217813548</span>
            <span className="text-yellow-400">
              460 <span className="text-[0.6rem] text-white/40">INR </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
