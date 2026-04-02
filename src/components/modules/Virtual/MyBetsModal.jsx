const MyBetsModal = ({ setModal }) => {
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
              <div className="flex flex-col gap-1 w-full rounded-lg bg-zinc-800">
                <div className="flex gap-1 items-center px-2 py-1 rounded-t-lg bg-zinc-700">
                  <span className="font-medium text-zinc-200">
                    2nd April, 2026
                  </span>
                  <span className="ml-auto text-xs font-normal text-zinc-400">
                    1 Rounds
                  </span>
                </div>
                <div className="flex flex-col gap-1 py-1 divide-y-2 divide-zinc-900">
                  <div className="flex flex-col gap-1 py-1">
                    <div className="flex gap-1 items-center px-2 pb-2">
                      <span className="text-sm font-medium text-zinc-400">
                        4:53:19 PM # 217189483
                      </span>
                      <span className="rounded-full cursor-pointer text-zinc-500 active:text-green-500">
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
                          <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                          <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                        </svg>
                      </span>
                      <button className="flex gap-1 items-center ml-auto text-sm font-medium text-zinc-400">
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
                          className="w-3 h-3 transition-all duration-300 text-zinc-400 rotate-180 scale-50"
                        >
                          <path
                            d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z"
                            fill="currentColor"
                            strokeWidth={0}
                          />
                        </svg>{" "}
                        Details
                      </button>
                    </div>
                    <table className="w-full text-xs font-normal">
                      <thead>
                        <tr className="text-zinc-400">
                          <th className="px-2 text-left">Selection</th>
                          <th className="px-2 text-left">Type</th>
                          <th className="px-2 text-left">Amount</th>
                          <th className="px-2 text-left">Odds</th>
                          <th className="px-2 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="flex flex-col px-2 py-0.5 leading-none bg-gradient-to-r from-white/5 to-transparent text-zinc-400">
                              <span className="text-zinc-400"> 7Up</span>
                              <span className="text-zinc-500 text-[0.6rem]">
                                Match odds
                              </span>
                            </span>
                          </td>
                          <td className="px-2">
                            <span className="text-blue-500">Back</span>
                          </td>
                          <td className="px-2 text-zinc-400">100 INR </td>
                          <td className="px-2 text-zinc-400">2</td>
                          <td className="px-2 text-right text-rose-500">
                            -100 INR{" "}
                          </td>
                        </tr>
                        <tr className="border-t border-dashed border-zinc-700">
                          <td className="px-2 py-1 text-zinc-400">Total</td>
                          <td className="px-2 py-1" />
                          <td className="px-2 py-1 text-zinc-400">
                            100 INR{" "}
                          </td>{" "}
                          <td className="px-2 py-1" />
                          <td className="px-2 py-1 text-right text-rose-500">
                            -100 INR{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>{" "}
              {/* <span className="font-semibold text-zinc-400">No Bets Found</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBetsModal;
