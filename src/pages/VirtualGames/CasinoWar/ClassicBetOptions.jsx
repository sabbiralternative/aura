const ClassicBetOptions = ({ setShowBetSlip }) => {
  return (
    <div
      id="bet-options-container"
      className="flex overflow-y-auto relative flex-col flex-1 gap-2 px-2 py-8 min-h-[260px] scrollbar-none
             
              "
      style={{
        maskImage:
          "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, black, black, transparent)",
      }}
    >
      <div className="flex flex-col w-full gap-1 p-1 text-white border rounded-2xl bg-white/5  border-white/5">
        <div className="flex gap-1 justify-between items-center p-1 px-2 w-full">
          <span className="text-sm capitalize">Match Odds: Player 1</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-orange-600">
            SUSPENDED
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
            <span className="text-xs font-light">Player 1</span>
            <div className="flex text-[0.6rem] gap-2 font-light items-center" />
          </div>
          <div
            className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 "
            style={{ animationDelay: "0ms" }}
          >
            <button
              id="backButton-42200"
              className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
            >
              <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                1.98
              </span>
            </button>
            <button
              id="layButton-42200"
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
        <span className="hidden" />
      </div>
      <div className="flex flex-col w-full gap-1 p-1 text-white border rounded-2xl bg-white/5  border-white/5">
        <div className="flex gap-1 justify-between items-center p-1 px-2 w-full">
          <span className="text-sm capitalize">Match Odds: Player 2</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-orange-600">
            SUSPENDED
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
            <span className="text-xs font-light">Player 2</span>
            <div className="flex text-[0.6rem] gap-2 font-light items-center" />
          </div>
          <div
            className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 "
            style={{ animationDelay: "100ms" }}
          >
            <button
              id="backButton-42206"
              className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
            >
              <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                1.98
              </span>
            </button>
            <button
              id="layButton-42206"
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
        <span className="hidden" />
      </div>
      <div className="flex flex-col w-full gap-1 p-1 text-white border rounded-2xl bg-white/5  border-white/5">
        <div className="flex gap-1 justify-between items-center p-1 px-2 w-full">
          <span className="text-sm capitalize">Match Odds: Player 3</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-orange-600">
            SUSPENDED
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
            <span className="text-xs font-light">Player 3</span>
            <div className="flex text-[0.6rem] gap-2 font-light items-center" />
          </div>
          <div
            className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 "
            style={{ animationDelay: "200ms" }}
          >
            <button
              id="backButton-42211"
              className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
            >
              <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                1.98
              </span>
            </button>
            <button
              id="layButton-42211"
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
        <span className="hidden" />
      </div>
      <div className="flex flex-col w-full gap-1 p-1 text-white border rounded-2xl bg-white/5  border-white/5">
        <div className="flex gap-1 justify-between items-center p-1 px-2 w-full">
          <span className="text-sm capitalize">Match Odds: Player 4</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-orange-600">
            SUSPENDED
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
            <span className="text-xs font-light">Player 4</span>
            <div className="flex text-[0.6rem] gap-2 font-light items-center" />
          </div>
          <div
            className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 "
            style={{ animationDelay: "300ms" }}
          >
            <button
              id="backButton-42216"
              className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
            >
              <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                1.98
              </span>
            </button>
            <button
              id="layButton-42216"
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
        <span className="hidden" />
      </div>
      <div className="flex flex-col w-full gap-1 p-1 text-white border rounded-2xl bg-white/5  border-white/5">
        <div className="flex gap-1 justify-between items-center p-1 px-2 w-full">
          <span className="text-sm capitalize">Match Odds: Player 5</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-orange-600">
            SUSPENDED
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
            <span className="text-xs font-light">Player 5</span>
            <div className="flex text-[0.6rem] gap-2 font-light items-center" />
          </div>
          <div
            className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 "
            style={{ animationDelay: "400ms" }}
          >
            <button
              id="backButton-42221"
              className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
            >
              <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                1.98
              </span>
            </button>
            <button
              id="layButton-42221"
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
        <span className="hidden" />
      </div>
      <div className="flex flex-col w-full gap-1 p-1 text-white border rounded-2xl bg-white/5  border-white/5">
        <div className="flex gap-1 justify-between items-center p-1 px-2 w-full">
          <span className="text-sm capitalize">Match Odds: Player 6</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-orange-600">
            SUSPENDED
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
            <span className="text-xs font-light">Player 6</span>
            <div className="flex text-[0.6rem] gap-2 font-light items-center" />
          </div>
          <div
            className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 "
            style={{ animationDelay: "500ms" }}
          >
            <button
              id="backButton-42226"
              className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
            >
              <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                1.98
              </span>
            </button>
            <button
              id="layButton-42226"
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
        <span className="hidden" />
      </div>
    </div>
  );
};

export default ClassicBetOptions;
