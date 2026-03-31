const Settings = ({ setModal }) => {
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
          <div className="flex flex-col px-2 gap-4 __className_575e37">
            <div className="flex justify-between text-zinc-300">
              <span className="ml-2 text-xl font-bold">Settings</span>
              <button onClick={closeModal}>
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
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col rounded-lg bg-zinc-800/50">
              <h3 className="px-3 py-2 text-sm font-medium rounded-t-lg bg-zinc-800/50 text-zinc-200">
                Sound
              </h3>
              <div className="flex flex-col gap-2 p-3">
                <div className="flex gap-1 items-center ">
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
                    className="w-4 h-4 text-zinc-500"
                  >
                    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M9 17v-13h10v13" />
                    <path d="M9 8h10" />
                  </svg>
                  <span className="mr-auto text-sm text-zinc-300">
                    Game Sound
                  </span>
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
                <div className="flex gap-1 items-center ">
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
                    className="w-4 h-4 text-zinc-500"
                  >
                    <path d="M15 8a5 5 0 0 1 0 8" />
                    <path d="M17.7 5a9 9 0 0 1 0 14" />
                    <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                  </svg>
                  <span className="mr-auto text-sm text-zinc-300">
                    Video Sound
                  </span>
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
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-zinc-800/50">
              <h3 className="px-3 py-2 text-sm font-medium rounded-t-lg bg-zinc-800/50 text-zinc-200">
                Video
              </h3>
              <div className="flex flex-col gap-2 p-3">
                <div className="flex gap-1 items-center">
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
                    className="w-4 h-4 text-zinc-500"
                  >
                    <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                    <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                  </svg>
                  <span className="mr-auto text-sm text-zinc-300">
                    Video Quality
                  </span>
                  <div className="flex overflow-hidden items-center ml-auto rounded-md divide-x divide-zinc-900 bg-zinc-800">
                    <div className="px-3 py-1 text-xs font-medium cursor-pointer bg-yellow-500 text-zinc-900">
                      <span>Auto</span>
                    </div>
                    <div className="px-3 py-1 text-xs font-medium cursor-pointer hover:bg-zinc-700 text-zinc-300">
                      <span>Low</span>
                    </div>
                    <div className="px-3 py-1 text-xs font-medium cursor-pointer hover:bg-zinc-700 text-zinc-300">
                      <span>High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-zinc-800/50">
              <h3 className="px-3 py-2 text-sm font-medium rounded-t-lg bg-zinc-800/50 text-zinc-200">
                Playing Mode
              </h3>
              <div className="flex flex-col gap-2 p-3">
                <div
                  className="flex gap-1 items-center"
                  style={{ pointerEvents: "auto", opacity: 1 }}
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
                    className="w-4 h-4 text-zinc-500"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  </svg>
                  <span className="mr-auto text-sm text-zinc-300">
                    Classic View
                  </span>
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
                <div
                  className="flex gap-1 items-center"
                  style={{ pointerEvents: "none", opacity: "0.4" }}
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
                    className="w-4 h-4 text-zinc-500"
                  >
                    <path d="M16 4l4 0l0 4" />
                    <path d="M14 10l6 -6" />
                    <path d="M8 20l-4 0l0 -4" />
                    <path d="M4 20l6 -6" />
                    <path d="M16 20l4 0l0 -4" />
                    <path d="M14 14l6 6" />
                    <path d="M8 4l-4 0l0 4" />
                    <path d="M4 4l6 6" />
                  </svg>
                  <span className="mr-auto text-sm text-zinc-300">
                    Fullscreen
                  </span>
                  <div
                    className="relative w-8 h-5 rounded-full cursor-pointer transition-colors duration-200 ease-in-out
        bg-zinc-700 
        undefined"
                  >
                    <div
                      className="absolute w-4 h-4 rounded-full top-0.5 transition-transform duration-200 ease-in-out
          translate-x-0.5 bg-zinc-400"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-zinc-800/50">
              <h3 className="px-3 py-2 text-sm font-medium rounded-t-lg bg-zinc-800/50 text-zinc-200">
                Language
              </h3>
              <div className="flex flex-col gap-2 p-3">
                <div className="flex gap-2 items-center">
                  <span className="mr-auto text-sm text-zinc-300">
                    Language
                  </span>
                  <div className="relative ">
                    <button className="flex gap-2 justify-between items-center py-2 pr-2 pl-3 w-full text-xs font-medium rounded-full border transition-colors text-zinc-100 border-zinc-100/10 bg-zinc-800 hover:bg-zinc-700/50">
                      <span>English</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
