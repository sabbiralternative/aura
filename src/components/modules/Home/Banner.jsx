const Banner = () => {
  return (
    <div className="p-2 lg:p-1">
      <div className=" w-full max-h-screen overflow-hidden rounded-md lg:rounded-none  aspect-video">
        <div
          style={{
            cursor: "grab",
            transitionDuration: "0ms",
            transitionDelay: "0ms",
          }}
        >
          <div
            className="swiper-slide"
            style={{
              width: "414px",
              opacity: 1,
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "0ms",
            }}
          >
            <img
              src="https://auraimgs.imgix.net/Untitled-10-01.webp?auto=format&fit=max&w=800&q=80"
              alt="banner"
              className="object-cover object-top w-full h-full"
            />
            <div className="absolute bottom-0 z-20 w-full px-4 py-2 h-2/4 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-end justify-between h-full gap-4 md:px-12 md:pb-64 md:justify-normal">
                <div className="flex flex-col items-center">
                  <img
                    src="https://auraimgs.imgix.net/asdcvc-01.png?auto=format&fit=max&w=300&q=50"
                    alt="logo"
                    width={512}
                    height={512}
                    className="z-10 w-24 h-24 md:w-64 object-contain object-bottom md:h-64 aspect-square transition-all duration-1000 ease-in-out lg:group-hover:scale-110"
                  />
                  <span className="text-base font-semibold text-white">
                    Mines
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium text-yellow">
                      <span>₹50.00</span> - <span>₹10,000.00</span>
                    </span>
                  </div>
                </div>
                <div className="px-6 cursor-pointer py-2 transition-all ease-in-out bg-white rounded-full hover:scale-[102%] active:scale-[98%]">
                  <button className="font-bold text-background-animation">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
