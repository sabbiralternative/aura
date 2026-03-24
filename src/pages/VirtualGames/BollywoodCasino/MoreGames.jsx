const MoreGames = ({ setModal }) => {
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
          <div className="flex flex-col h-full">
            <div className="flex justify-between text-zinc-300">
              <span className="ml-2 text-xl font-bold __className_575e37" />
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
            <div
              className="overflow-y-auto flex-grow"
              style={{
                maskImage:
                  "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, transparent)",
              }}
            >
              <div className="grid overflow-y-auto grid-cols-2 gap-1 py-6 h-full">
                <div className="flex gap-1 items-center col-span-2 mb-4">
                  <div className="flex-grow h-0.5 rounded-full bg-gradient-to-r from-transparent to-zinc-500" />
                  <div className="w-2 h-2 rounded-sm rotate-45 bg-zinc-500" />
                  <h2 className="px-2 text-xl font-semibold text-center text-zinc-200">
                    Live Games
                  </h2>
                  <div className="w-2 h-2 rounded-sm rotate-45 bg-zinc-500" />
                  <div className="flex-grow h-0.5 rounded-full bg-gradient-to-r from-zinc-500 to-transparent" />
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Teen Patti T20"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F1.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F1.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F1.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Teen Patti T20
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Teen Patti 1Day"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F3.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F3.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F3.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Teen Patti 1Day
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Hi Low"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F17.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F17.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F17.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      High Low
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Andar Bahar"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F21.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F21.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F21.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Andar Bahar
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="7up Down"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F7.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F7.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F7.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      7up Down
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Dragon Tiger"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F18.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F18.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F18.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Dragon Tiger
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="2 Card Teenpatti"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F10.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F10.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F10.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      2 Card Teenpatti
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Poker"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F6.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F6.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F6.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Poker
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Poker 20-20"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F6.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F6.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F6.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Poker 20-20
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Roulette"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F20.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F20.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F20.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Roulette
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Muflis Teenpatti"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F4.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F4.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F4.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Muflis Teenpatti
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Sicbo"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F20.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F20.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F20.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Sicbo
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Queen Race"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F2.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F2.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F2.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Queen Race
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Baccarat"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F15.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F15.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F15.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Baccarat
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Super over"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F19.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F19.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F19.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Super over
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="3 Card Judgement"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F9.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F9.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F9.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      3 Card Judgement
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="32 Card Casino"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F2.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F2.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F2.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      32 Card Casino
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Matka"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F11.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F11.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F11.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Matka
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Amar Akbar Anthony"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F15.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F15.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F15.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Amar Akbar Anthony
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Race 20-20"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F19.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F19.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F19.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Race 20-20
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Bollywood Casino"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F17.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F17.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F17.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Bollywood Casino
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Trio"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F9.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F9.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F9.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Trio
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Teenpatti Test"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F13.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F13.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F13.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Teenpatti Test
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Teenpatti Open"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F1.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F1.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F1.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Teenpatti Open
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Casino War"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F22.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F22.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F22.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Casino War
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="29 Card Baccarat"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F4.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F4.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F4.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      29 Card Baccarat
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Race to 17"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F8.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F8.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F8.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Race to 17
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Six Player Poker"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F13.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F13.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F13.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Six Player Poker
                    </span>
                  </span>
                </div>
                <div className="flex gap-1 items-center col-span-2 mt-8 mb-4">
                  <div className="flex-grow h-0.5 rounded-full bg-gradient-to-r from-transparent to-zinc-500" />
                  <div className="w-2 h-2 rounded-sm rotate-45 bg-zinc-500" />
                  <h2 className="px-2 text-xl font-semibold text-center text-zinc-200">
                    Virtual Games
                  </h2>
                  <div className="w-2 h-2 rounded-sm rotate-45 bg-zinc-500" />
                  <div className="flex-grow h-0.5 rounded-full bg-gradient-to-r from-zinc-500 to-transparent" />
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Teenpatti T20"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F28.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F28.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F28.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Teen Patti T20
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Seven Up Down"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Seven Up Down
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Muflis Teenpatti"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Muflis TP
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Amar Akbar Anthony"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual AAA
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Dragon Tiger"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Dragon Tiger
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="High Low"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual High Low
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Andar Bahar"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F27.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F27.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F27.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Andar Bahar
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Teenpatti One Day"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Teen Patti 1Day
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Poker"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Poker
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Matka"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Matka
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="32 Card Casino"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual 32 Card Casino
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="6 Player Poker"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual 6 Player Poker{" "}
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Bollywood Casino"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Bollywood Casino{" "}
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Race 20-20"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Race 20-20
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Baccarat"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F27.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F27.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F27.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Baccarat
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Casino War"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Casino War
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Trio"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F24.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Trio
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Queen Race"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F25.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Queen Race
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Teenpatti Test"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F23.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Teenpatti Test
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Teenpatti Open"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F26.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Teenpatti Open
                    </span>
                  </span>
                </div>
                <div className="relative border-white/20 group items-center h-fit w-full font-medium text-white border cursor-pointer bg-black hover:border-yellow-400/40 overflow-clip rounded-2xl __className_8b9125">
                  <img
                    alt="Poker 20-20"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover w-full transition-all duration-300 aspect-[0.8] group-hover:scale-105"
                    srcSet="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F27.webp&w=128&q=75 1x, /_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F27.webp&w=256&q=75 2x"
                    src="/_next/image?url=%2Fassets%2FcardGames%2Fdealers%2F27.webp&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                  <span className="absolute bottom-0 left-0 p-4 pt-8 w-full bg-gradient-to-t from-black via-black to-black/0">
                    <span
                      className="w-full text-xl text-center goldText"
                      style={{
                        textShadow: "rgba(255, 215, 0, 0.5) 0px 0px 50px",
                      }}
                    >
                      Virtual Poker 20-20
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreGames;
