const CrashGames = () => {
  return (
    <div className="w-full px-2 overflow-hidden text-sm ">
      <div className="swiper swiper-container swiper-initialized swiper-horizontal swiper-ios swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div
            className="swiper-slide swiper-slide-active category-swiper-slide"
            style={{ marginRight: "8px" }}
          >
            <div className="relative cursor-pointer select-none group w-fit snap-start lg:active:scale-[94%] transition-all duration-300 ease-in-out group">
              <div
                className="relative overflow-clip rounded-md select-none w-36 min-[380px]:w-44"
                style={{ aspectRatio: "0.8 / 1" }}
              >
                <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs bg-black/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="items-center w-4 h-4"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p>57</p>
                </div>
                <img
                  src="https://auraimgs.imgix.net/cricket.webp?auto=format&fit=max&w=600&q=65"
                  loading="eager"
                  alt="game"
                  sizes="30vw"
                  className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                />
                <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                  <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                    <span>₹50.00</span> - <span>₹10,000.00</span>
                  </span>
                </div>
              </div>
              <div
                id="gameNameBox-Cricket"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Cricket"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Cricket
                </span>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-next category-swiper-slide"
            style={{ marginRight: "8px" }}
          >
            <div className="relative cursor-pointer select-none group w-fit snap-start lg:active:scale-[94%] transition-all duration-300 ease-in-out group">
              <div
                className="relative overflow-clip rounded-md select-none w-36 min-[380px]:w-44"
                style={{ aspectRatio: "0.8 / 1" }}
              >
                <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs bg-black/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="items-center w-4 h-4"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p>206</p>
                </div>
                <img
                  src="https://auraimgs.imgix.net/MINES.png?auto=format&fit=max&w=600&q=65"
                  loading="eager"
                  alt="game"
                  sizes="30vw"
                  className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                />
                <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                  <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                    <span>₹50.00</span> - <span>₹10,000.00</span>
                  </span>
                </div>
              </div>
              <div
                id="gameNameBox-Mines"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Mines"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Mines
                </span>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide category-swiper-slide"
            style={{ marginRight: "8px" }}
          >
            <div className="relative cursor-pointer select-none group w-fit snap-start lg:active:scale-[94%] transition-all duration-300 ease-in-out group">
              <div
                className="relative overflow-clip rounded-md select-none w-36 min-[380px]:w-44"
                style={{ aspectRatio: "0.8 / 1" }}
              >
                <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs bg-black/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="items-center w-4 h-4"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p>60</p>
                </div>
                <img
                  src="https://auraimgs.imgix.net/5%20game%20posters-02.webp?auto=format&fit=max&w=600&q=65"
                  loading="eager"
                  alt="game"
                  sizes="30vw"
                  className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                />
                <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                  <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                    <span>₹50.00</span> - <span>₹10,000.00</span>
                  </span>
                </div>
              </div>
              <div
                id="gameNameBox-Limbo"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Limbo"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Limbo
                </span>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide category-swiper-slide"
            style={{ marginRight: "8px" }}
          >
            <div className="relative cursor-pointer select-none group w-fit snap-start lg:active:scale-[94%] transition-all duration-300 ease-in-out group">
              <div
                className="relative overflow-clip rounded-md select-none w-36 min-[380px]:w-44"
                style={{ aspectRatio: "0.8 / 1" }}
              >
                <img
                  src="https://auraimgs.imgix.net/1-01.webp?auto=format&fit=max&w=600&q=65"
                  loading="eager"
                  alt="game"
                  sizes="30vw"
                  className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                />
                <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                  <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                    <span>₹50.00</span> - <span>₹10,000.00</span>
                  </span>
                </div>
              </div>
              <div
                id="gameNameBox-Aviator"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Aviator"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Aviator
                </span>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide category-swiper-slide"
            style={{ marginRight: "8px" }}
          >
            <div className="relative cursor-pointer select-none group w-fit snap-start lg:active:scale-[94%] transition-all duration-300 ease-in-out group">
              <div
                className="relative overflow-clip rounded-md select-none w-36 min-[380px]:w-44"
                style={{ aspectRatio: "0.8 / 1" }}
              >
                <img
                  src="https://auraimgs.imgix.net/Untitled-2-01.png?auto=format&fit=max&w=600&q=65"
                  loading="eager"
                  alt="game"
                  sizes="30vw"
                  className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                />
                <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                  <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                    <span>₹50.00</span> - <span>₹10,000.00</span>
                  </span>
                </div>
              </div>
              <div
                id="gameNameBox-Blastoff"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Blastoff"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Blastoff
                </span>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide category-swiper-slide"
            style={{ marginRight: "8px" }}
          >
            <div className="relative cursor-pointer select-none group w-fit snap-start lg:active:scale-[94%] transition-all duration-300 ease-in-out group">
              <div
                className="relative overflow-clip rounded-md select-none w-36 min-[380px]:w-44"
                style={{ aspectRatio: "0.8 / 1" }}
              >
                <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs bg-black/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="items-center w-4 h-4"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p>26</p>
                </div>
                <img
                  src="https://auraimgs.imgix.net/Untitled-2-05.png?auto=format&fit=max&w=600&q=65"
                  loading="eager"
                  alt="game"
                  sizes="30vw"
                  className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                />
                <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                  <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                    <span>₹50.00</span> - <span>₹10,000.00</span>
                  </span>
                </div>
              </div>
              <div
                id="gameNameBox-Coin Toss"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Coin Toss"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Coin Toss
                </span>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide category-swiper-slide"
            style={{ marginRight: "8px" }}
          >
            <div className="relative cursor-pointer select-none group w-fit snap-start lg:active:scale-[94%] transition-all duration-300 ease-in-out group">
              <div
                className="relative overflow-clip rounded-md select-none w-36 min-[380px]:w-44"
                style={{ aspectRatio: "0.8 / 1" }}
              >
                <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs bg-black/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="items-center w-4 h-4"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p>21</p>
                </div>
                <img
                  src="https://auraimgs.imgix.net/Untitled-2-04.png?auto=format&fit=max&w=600&q=65"
                  loading="eager"
                  alt="game"
                  sizes="30vw"
                  className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                />
                <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                  <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                    <span>₹50.00</span> - <span>₹10,000.00</span>
                  </span>
                </div>
              </div>
              <div
                id="gameNameBox-Fortune Wheel"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Fortune Wheel"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Fortune Wheel
                </span>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide category-swiper-slide"
            style={{ marginRight: "8px" }}
          >
            <div className="relative cursor-pointer select-none group w-fit snap-start lg:active:scale-[94%] transition-all duration-300 ease-in-out group">
              <div
                className="relative overflow-clip rounded-md select-none w-36 min-[380px]:w-44"
                style={{ aspectRatio: "0.8 / 1" }}
              >
                <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs bg-black/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="items-center w-4 h-4"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p>16</p>
                </div>
                <img
                  src="https://auraimgs.imgix.net/Untitled-2-03.png?auto=format&fit=max&w=600&q=65"
                  loading="eager"
                  alt="game"
                  sizes="30vw"
                  className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                />
                <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                  <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                    <span>₹50.00</span> - <span>₹10,000.00</span>
                  </span>
                </div>
              </div>
              <div
                id="gameNameBox-Slot Game"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Slot Game"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Slot Game
                </span>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide category-swiper-slide"
            style={{ marginRight: "8px" }}
          >
            <div className="relative cursor-pointer select-none group w-fit snap-start lg:active:scale-[94%] transition-all duration-300 ease-in-out group">
              <div
                className="relative overflow-clip rounded-md select-none w-36 min-[380px]:w-44"
                style={{ aspectRatio: "0.8 / 1" }}
              >
                <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs bg-black/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="items-center w-4 h-4"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p>18</p>
                </div>
                <img
                  src="https://auraimgs.imgix.net/Untitled-2.png?auto=format&fit=max&w=600&q=65"
                  loading="eager"
                  alt="game"
                  sizes="30vw"
                  className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                />
                <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                  <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                    <span>₹50.00</span> - <span>₹10,000.00</span>
                  </span>
                </div>
              </div>
              <div
                id="gameNameBox-Rock Paper Scissor"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Rock Paper Scissor"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Rock Paper Scissor
                </span>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide category-swiper-slide"
            style={{ marginRight: "8px" }}
          >
            <div className="relative cursor-pointer select-none group w-fit snap-start lg:active:scale-[94%] transition-all duration-300 ease-in-out group">
              <div
                className="relative overflow-clip rounded-md select-none w-36 min-[380px]:w-44"
                style={{ aspectRatio: "0.8 / 1" }}
              >
                <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs bg-black/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="items-center w-4 h-4"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  <p>18</p>
                </div>
                <img
                  src="https://auraimgs.imgix.net/5%20game%20posters-03.webp?auto=format&fit=max&w=600&q=65"
                  loading="eager"
                  alt="game"
                  sizes="30vw"
                  className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                />
                <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                  <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                    <span>₹50.00</span> - <span>₹10,000.00</span>
                  </span>
                </div>
              </div>
              <div
                id="gameNameBox-Tower Legends"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Tower Legends"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Tower Legends
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 flex items-center w-full -translate-y-full -top-3">
          <div className="flex items-center gap-1">
            <div className="text-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                  clipRule="evenodd"
                />
                <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
              </svg>
            </div>
            <div className="flex font-bold leading-tight tracking-wider">
              Crash Games
            </div>
          </div>
          <span className="flex items-center gap-1 ml-auto">
            <button className="flex p-1 px-2 text-xs rounded-md cursor-pointer whitespace-nowrap hover:bg-purple/20 text-purple active:scale-90 autoAnimate">
              <p>View all 10</p>
            </button>
            <div className="flex items-center gap-1 w-fit">
              <span className="z-50 p-1 transition-all duration-100 rounded-lg cursor-pointer w-fit h-fit hover:bg-white/10 active:bg-white/30 hover:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="z-50 p-1 transition-all duration-100 rounded-lg cursor-pointer w-fit h-fit hover:bg-white/10 active:bg-white/30 hover:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CrashGames;
