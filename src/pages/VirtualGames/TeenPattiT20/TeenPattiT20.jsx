const TeenPattiT20 = () => {
  return (
    <main className="w-full h-full max-w-xl mx-auto lg:max-w-[1600px] lg:my-auto">
      <main
        id="card-games-container"
        className="__className_575e37 relative flex lg:flex-row flex-col w-full h-dvh overflow-y-auto scrollbar-none"
      >
        <div
          id="game-container"
          className="relative w-full aspect-video lg:w-2/3"
        >
          <div className="w-full h-auto flex justify-center items-center aspect-video relative">
            <div className="absolute bottom-10 right-1/2 translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2  w-fit h-fit text-xl text-white z-50 flex justify-center items-center flex">
              <span className="text-white text-xl font-bold">
                Place Your Bet
              </span>
            </div>
            <div className="w-full h-full  justify-center items-center absolute top-0 left-0 flex">
              <video
                className="w-full h-full object-contain"
                src="/videos/ballbyball.mp4"
                autoPlay
                playsInline
                loop
              />
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <video
                className="w-full h-full object-contain"
                src="/videos/ballbyball.mp4"
                autoPlay
                playsInline
                loop
              />
            </div>
          </div>
          <div className="flex absolute top-0 left-0 z-50 flex-col gap-0.5 py-2 px-1">
            <button className=" iconButton">
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
              <button className="mr-1 iconButton">
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
                  className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out opacity-0"
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
                  className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out opacity-100"
                >
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </svg>
                <div className="w-4 h-4" />
              </button>
              <div className="absolute bottom-0 right-0 origin-right translate-y-full w-64 grid grid-cols-2  gap-0.5 p-1 bg-zinc-900/40 backdrop-blur-sm border-[0.5px] border-r-0 border-white/20 rounded-l-lg transition-all duration-300 ease-in-out opacity-0 scale-x-0">
                <button className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50">
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
                <button className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50">
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
                <button className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50">
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
                <button className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50">
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
        <div
          id="bet-options-container"
          className="flex overflow-y-auto relative flex-col flex-1 gap-2 px-2 py-8 lg:w-1/3 min-h-[260px] scrollbar-none
              opacity-100
              "
          style={{
            maskImage:
              "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, black, black, transparent)",
          }}
        >
          <div className="flex flex-col w-full gap-1 p-1 text-white border rounded-2xl bg-white/5  border-green-500/20">
            <div className="flex gap-1 justify-between items-center p-1 px-2 w-full">
              <span className="text-sm capitalize">Bookmaker 1</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-600">
                OPEN
              </span>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">0 Runs</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "0ms" }}
              >
                <button
                  id="backButton-40003"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    3.10
                  </span>
                </button>
                <button
                  id="layButton-40003"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
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
                      className="w-5 h-5"
                    >
                      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">1 Runs</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "0ms" }}
              >
                <button
                  id="backButton-40004"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    2.30
                  </span>
                </button>
                <button
                  id="layButton-40004"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
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
                      className="w-5 h-5"
                    >
                      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">2 Runs</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "0ms" }}
              >
                <button
                  id="backButton-40005"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    7.00
                  </span>
                </button>
                <button
                  id="layButton-40005"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
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
                      className="w-5 h-5"
                    >
                      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">3 Runs</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "0ms" }}
              >
                <button
                  id="backButton-40006"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    31.00
                  </span>
                </button>
                <button
                  id="layButton-40006"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
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
                      className="w-5 h-5"
                    >
                      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">4 Runs</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "0ms" }}
              >
                <button
                  id="backButton-40007"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    6.00
                  </span>
                </button>
                <button
                  id="layButton-40007"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
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
                      className="w-5 h-5"
                    >
                      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">6 Runs</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "0ms" }}
              >
                <button
                  id="backButton-40008"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    11.00
                  </span>
                </button>
                <button
                  id="layButton-40008"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
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
                      className="w-5 h-5"
                    >
                      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">Wicket</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "0ms" }}
              >
                <button
                  id="backButton-40009"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    11.00
                  </span>
                </button>
                <button
                  id="layButton-40009"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
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
                      className="w-5 h-5"
                    >
                      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">Extra</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "0ms" }}
              >
                <button
                  id="backButton-40010"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    17.00
                  </span>
                </button>
                <button
                  id="layButton-40010"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
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
                      className="w-5 h-5"
                    >
                      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1 p-1 text-white border rounded-2xl bg-white/5  border-green-500/20">
            <div className="flex gap-1 justify-between items-center p-1 px-2 w-full">
              <span className="text-sm capitalize">Bookmaker 2</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-600">
                OPEN
              </span>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">0 Runs or 1 Runs</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "100ms" }}
              >
                <button
                  id="backButton-40012"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    1.60
                  </span>
                </button>
                <button
                  id="layButton-40012"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    1.70
                  </span>
                </button>
              </div>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">Any other result</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "100ms" }}
              >
                <button
                  id="backButton-40013"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    2.42
                  </span>
                </button>
                <button
                  id="layButton-40013"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    2.66
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1 p-1 text-white border rounded-2xl bg-white/5  border-green-500/20">
            <div className="flex gap-1 justify-between items-center p-1 px-2 w-full">
              <span className="text-sm capitalize">Bookmaker 3</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-600">
                OPEN
              </span>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">0/2/3/4 (runs)</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "200ms" }}
              >
                <button
                  id="backButton-40015"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    1.97
                  </span>
                </button>
                <button
                  id="layButton-40015"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    2.03
                  </span>
                </button>
              </div>
            </div>
            <div className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent">
              <div
                className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
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
                  <path
                    d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 justify-center ml-3">
                <span className="text-xs font-light">1/6/wkt/extra</span>
                <div className="flex text-[0.6rem] gap-2 font-light items-center" />
              </div>
              <div
                className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                style={{ animationDelay: "200ms" }}
              >
                <button
                  id="backButton-40016"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    1.97
                  </span>
                </button>
                <button
                  id="layButton-40016"
                  className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                >
                  <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                    2.03
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-50 w-full lg:w-2/3 lg:absolute lg:bottom-0 lg:left-0">
          <div className="flex absolute top-0 right-0 gap-2 justify-center items-center p-1 pl-3 bg-gradient-to-l to-transparent -translate-y-full from-zinc-900 via-zinc-900">
            <span className="text-white">Classic View</span>
            <div
              className="relative w-8 h-5 rounded-full cursor-pointer transition-colors duration-200 ease-in-out
        bg-green-500 
        undefined"
            >
              <div
                className="absolute w-4 h-4 rounded-full top-0.5 transition-transform duration-200 ease-in-out
          translate-x-3.5 bg-zinc-100"
              />
            </div>
          </div>
          <button
            id="myBetsButton"
            className="absolute top-0 left-1/2 transition-all duration-300 ease-linear -translate-x-1/2 -translate-y-1/2 fabButton"
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
              className="w-6 h-6 animate__faster animate__animated animate__flipInY"
            >
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
            </svg>
            <span
              className="transition-all duration-300 ease-linear absolute px-1.5 text-xs font-semibold bg-green-500 border-2 rounded-full right-0 border-white/20 -top-2"
              style={{ opacity: 0, scale: "0.5" }}
            >
              0
            </span>
          </button>
          <div
            className="absolute -top-0 transition-all duration-300 ease-in-out origin-top w-[96%] max-w-2xl p-2 border left-1/2 shadow-[0_0_12px_rgba(0,0,0,0.3)] shadow-green-500/40 bg-zinc-900 rounded-xl border-green-600"
            style={{
              transform: "translateY(0px) translateX(-50%) scale(0)",
              opacity: 0,
              pointerEvents: "none",
            }}
          >
            <div className="flex flex-col gap-1 justify-center items-center p-3 pb-6">
              <h1 className="text-xl font-bold text-gray-300">No open bets</h1>
              <p className="text-sm font-normal text-center text-gray-500">
                Bets in active rounds will appear here
              </p>
            </div>
          </div>
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
              <span className="flex gap-1 items-center">
                Ball by Ball Cricket
              </span>
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
                  src="/assets/cardGames/virtuals/Cricket_ball.svg"
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
                  src="/assets/cardGames/virtuals/Cricket_ball.svg"
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
                  src="/assets/cardGames/virtuals/Cricket_ball.svg"
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
                  src="/assets/cardGames/virtuals/Cricket_ball.svg"
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
                  src="/assets/cardGames/virtuals/Cricket_ball.svg"
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
                  src="/assets/cardGames/virtuals/Cricket_ball.svg"
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
                  src="/assets/cardGames/virtuals/Cricket_ball.svg"
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
                  src="/assets/cardGames/virtuals/Cricket_ball.svg"
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
      </main>
    </main>
  );
};

export default TeenPattiT20;
