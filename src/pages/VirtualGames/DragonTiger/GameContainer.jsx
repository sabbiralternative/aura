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
            srcSet={img.dragon_tiger}
            src={img.dragon_tiger}
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
                <div className="z-50 grid grid-cols-2 gap-1 ">
                  <div className="flex flex-col bg-gradient-to-t to-transparent items-center overflow-hidden rounded from-rose-500">
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
                      className="w-4 h-4 text-[#ffff29]"
                      style={{ opacity: 0 }}
                    >
                      <path
                        d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </svg>
                    <div className="p-1">
                      <div
                        className="relative  "
                        style={{
                          width: "30px",
                          height: "40px",
                          transformStyle: "preserve-3d",
                          transformOrigin: "center center",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <div
                          className=" relative w-full h-full inset-0 flex items-center justify-center bg-white overflow-hidden"
                          style={{
                            borderRadius: "3.33333px",
                            opacity: 1,
                            zIndex: 1000,
                          }}
                        >
                          <div
                            className="absolute flex items-center justify-center top-0.5 bottom-0.5 left-0.5 right-0.5 bg-black/30"
                            style={{ borderRadius: "1.33333px" }}
                          >
                            <span className="__className_7fdbeb text-white text-base lg:text-xl">
                              D
                            </span>
                          </div>
                        </div>
                        <div
                          className="__className_c7a506 absolute delay-[200ms] inset-0 text-xl bg-white shadow-md"
                          style={{
                            borderRadius: "3.33333px",
                            transform: "rotateY(180deg)",
                            opacity: 0,
                            zIndex: 999,
                          }}
                        >
                          <div
                            className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] top-[3%] left-[3%]"
                            style={{ fontSize: "0.909091em", color: "black" }}
                          />
                          <div
                            className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] bottom-[3%] right-[3%] rotate-180"
                            style={{ fontSize: "0.909091em", color: "black" }}
                          />
                          <div className="absolute h-[50%] flex justify-center items-center w-[36%] top-[3%] right-[3%]" />
                          <div className="absolute h-[50%] flex justify-center items-center w-[36%] bottom-[3%] left-[3%] rotate-180" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-1 px-1.5 text-[0.6rem] font-medium lg:text-sm w-full text-white text-white">
                      Dragon
                    </div>
                  </div>
                  <div className="flex flex-col bg-gradient-to-t to-transparent items-center overflow-hidden rounded from-orange-500">
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
                      className="w-4 h-4 text-[#ffff29]"
                      style={{ opacity: 0 }}
                    >
                      <path
                        d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </svg>
                    <div className="p-1">
                      <div
                        className="relative  "
                        style={{
                          width: "30px",
                          height: "40px",
                          transformStyle: "preserve-3d",
                          transformOrigin: "center center",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <div
                          className=" relative w-full h-full inset-0 flex items-center justify-center bg-white overflow-hidden"
                          style={{
                            borderRadius: "3.33333px",
                            opacity: 1,
                            zIndex: 1000,
                          }}
                        >
                          <div
                            className="absolute flex items-center justify-center top-0.5 bottom-0.5 left-0.5 right-0.5 bg-black/30"
                            style={{ borderRadius: "1.33333px" }}
                          >
                            <span className="__className_7fdbeb text-white text-base lg:text-xl">
                              T
                            </span>
                          </div>
                        </div>
                        <div
                          className="__className_c7a506 absolute delay-[200ms] inset-0 text-xl bg-white shadow-md"
                          style={{
                            borderRadius: "3.33333px",
                            transform: "rotateY(180deg)",
                            opacity: 0,
                            zIndex: 999,
                          }}
                        >
                          <div
                            className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] top-[3%] left-[3%]"
                            style={{ fontSize: "0.909091em", color: "black" }}
                          />
                          <div
                            className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] bottom-[3%] right-[3%] rotate-180"
                            style={{ fontSize: "0.909091em", color: "black" }}
                          />
                          <div className="absolute h-[50%] flex justify-center items-center w-[36%] top-[3%] right-[3%]" />
                          <div className="absolute h-[50%] flex justify-center items-center w-[36%] bottom-[3%] left-[3%] rotate-180" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-1 px-1.5 text-[0.6rem] font-medium lg:text-sm w-full text-white text-white">
                      Tiger
                    </div>
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
