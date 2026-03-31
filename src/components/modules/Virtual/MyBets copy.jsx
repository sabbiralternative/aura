const MyBets = ({ setModal }) => {
  const closeModal = () => {
    setModal({ name: "" });
  };
  return (
    <div
      className="fixed top-0 left-0 flex flex-col items-center  w-full p-2 h-dvh bg-black/70 backdrop-blur-sm justify-center"
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col w-full max-h-full max-w-lg p-2 border rounded-lg bg-zinc-900 border-zinc-800 scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-white/10 modal-slide-up h-full">
        <div className="flex items-center w-full max-w-lg mb-2 text-white " />
        <div className="flex-grow overflow-y-auto">
          <div className="relative flex flex-col h-full gap-2 __className_575e37">
            <div className="flex z-50 gap-1 justify-between items-center mx-auto w-full max-w-2xl font-semibold text-zinc-300">
              <button
                onClick={closeModal}
                className="flex gap-1 items-center text-sm"
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
                  className="w-4 h-4"
                >
                  <path d="M15 6l-6 6l6 6" />
                </svg>
                Back
              </button>
              <div className="relative ml-auto">
                <button className="flex gap-2 justify-between items-center py-2 pr-2 pl-3 w-full text-xs font-medium rounded-full border transition-colors text-zinc-100 border-zinc-100/10 bg-zinc-800 hover:bg-zinc-700/50">
                  <span>10 per page</span>
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
                    className="w-4 h-4 transition-transform duration-200 "
                  >
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </button>
              </div>
              <button className="flex items-center gap-1 text-xs p-2 font-medium border rounded-full text-zinc-100 border-zinc-100/10 bg-zinc-800 ">
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
                  className="w-4 h-4 "
                >
                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2 items-center mx-auto w-full max-w-2xl p-2 bg-zinc-900 rounded-lg">
              <div className="flex gap-2 items-center flex-1">
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-xs font-medium text-zinc-400">
                    Start Date
                  </label>
                  <input
                    max="2026-03-24"
                    className="px-2 py-1 text-xs font-medium border rounded-lg text-zinc-100 border-zinc-100/10 bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    type="date"
                    defaultValue="2026-03-24"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-xs font-medium text-zinc-400">
                    End Date
                  </label>
                  <input
                    min="2026-03-24"
                    max="2026-03-24"
                    className="px-2 py-1 text-xs font-medium border rounded-lg text-zinc-100 border-zinc-100/10 bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    type="date"
                    defaultValue="2026-03-24"
                  />
                </div>
              </div>
            </div>
            <div className="flex overflow-y-auto flex-col flex-grow gap-2 items-center  w-full scroll-smooth scrollbar-none">
              <span className="font-semibold text-zinc-400">No Bets Found</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBets;
