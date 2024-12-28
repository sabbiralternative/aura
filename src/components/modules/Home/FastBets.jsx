const FastBets = () => {
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
                style={{ aspectRatio: "0.75 / 1" }}
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
                  <p>15</p>
                </div>
                <img
                  src="https://auraimgs.imgix.net/teenpattivirtual.png?auto=format&fit=max&w=600&q=65"
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
                id="gameNameBox-Teenpatti T20"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-Teenpatti T20"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  Teenpatti T20
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
                style={{ aspectRatio: "0.75 / 1" }}
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
                  <p>27</p>
                </div>
                <img
                  src="https://auraimgs.imgix.net/7updown.png?auto=format&fit=max&w=600&q=65"
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
                id="gameNameBox-7 up down"
                className="relative w-full h-8 overflow-hidden whitespace-nowrap"
              >
                <span
                  id="gameName-7 up down"
                  className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                >
                  7 up down
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 flex items-center w-full -translate-y-full -top-3">
          <div className="flex items-center gap-1">
            <div className="text-purple">
              <svg
                width={24}
                height={24}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.2687 1.99382C18.4517 2.09569 18.5954 2.25592 18.6767 2.44895C18.758 2.64198 18.7724 2.85668 18.7174 3.05882L16.2274 12.1876H25.3124C25.4951 12.1876 25.6739 12.241 25.8266 12.3412C25.9794 12.4414 26.0995 12.5841 26.1723 12.7517C26.2451 12.9192 26.2673 13.1044 26.2362 13.2845C26.2052 13.4645 26.1222 13.6316 25.9974 13.7651L12.8724 27.8276C12.7295 27.9811 12.5392 28.0822 12.332 28.1148C12.1248 28.1473 11.9126 28.1095 11.7295 28.0072C11.5463 27.905 11.4027 27.7443 11.3217 27.5508C11.2406 27.3574 11.2268 27.1423 11.2824 26.9401L13.7724 17.8126H4.68744C4.50474 17.8126 4.32602 17.7592 4.17326 17.6589C4.0205 17.5587 3.90034 17.4161 3.82757 17.2485C3.7548 17.0809 3.73259 16.8957 3.76365 16.7157C3.79472 16.5356 3.87772 16.3686 4.00244 16.2351L17.1274 2.17257C17.2704 2.01962 17.4604 1.91893 17.6673 1.88654C17.8741 1.85414 18.0858 1.89191 18.2687 1.99382Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex font-bold leading-tight tracking-wider">
              Fast Bets
            </div>
          </div>
          <span className="flex items-center gap-1 ml-auto">
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

export default FastBets;
