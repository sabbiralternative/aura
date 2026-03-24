import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const VirtualGames = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/virtual/teen-patti-t-20/1000/1001");
  };

  useEffect(() => {
    // Set the swiper instance on initial render
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current = swiperRef.current.swiper;
    }
  }, []);
  const slideLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  // Slide right function
  const slideRight = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="w-full px-2 overflow-hidden text-sm">
      <div className="swiper swiper-container swiper-initialized swiper-horizontal">
        <Swiper ref={swiperRef} slidesPerView="auto">
          <div
            className="swiper-wrapper"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "0ms",
              transitionDelay: "0ms",
            }}
          >
            <SwiperSlide>
              {" "}
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>24</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/56769/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>14</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/56766/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>20</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/98793/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>17</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/87565/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>25</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/98794/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      src="https://auraimgs.imgix.net/thumb/56969/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>19</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/67568/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>20</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/67601/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      src="https://auraimgs.imgix.net/thumb/98795/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>22</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/67631/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>25</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/67621/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>28</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/92039/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      src="https://auraimgs.imgix.net/thumb/67571/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      src="https://auraimgs.imgix.net/thumb/92036/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>24</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/67641/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      src="https://auraimgs.imgix.net/thumb/67581/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      src="https://auraimgs.imgix.net/thumb/90101/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      src="https://auraimgs.imgix.net/thumb/56966/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      src="https://auraimgs.imgix.net/thumb/67611/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={handleNavigate}>
                <div className="relative cursor-pointer aspect-[1/1.3] select-none group w-fit snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group ">
                  <div
                    className="relative w-36 h-full overflow-clip rounded-md select-none min-[380px]:w-44 "
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <div className="absolute top-0 left-0 z-20 flex gap-1 py-0.5 px-2 rounded-br-lg text-xs  bg-black/30">
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
                      <p>24</p>
                    </div>
                    <img
                      src="https://auraimgs.imgix.net/thumb/67563/thumb_3.4.webp?auto=format&fit=max&w=600&q=65"
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="object-cover absolute z-10 w-full h-full transition-all duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>

        <div className="absolute left-0 flex items-center w-full -translate-y-full -top-3 ">
          <div className="flex items-center gap-1">
            <div className=" text-purple">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" />
                <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" />
                <path d="M8 9v2" />
                <path d="M7 10h2" />
                <path d="M14 10h2" />
              </svg>
            </div>
            <div className="flex font-bold leading-tight tracking-wider">
              Virtual Games{" "}
            </div>
          </div>
          <span className="flex items-center gap-1 ml-auto">
            <button className="flex p-1 px-2 text-xs rounded-md cursor-pointer whitespace-nowrap hover:bg-purple/20 text-purple active:scale-90 autoAnimate">
              <p>View all 21</p>
            </button>
            <div className="flex items-center gap-1 w-fit ">
              <span
                onClick={slideLeft}
                className="z-50 p-1 transition-all duration-100 rounded-lg cursor-pointer w-fit h-fit hover:bg-white/10 active:bg-white/30 hover:scale-95"
              >
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
              <span
                onClick={slideRight}
                className="z-50 p-1 transition-all duration-100 rounded-lg cursor-pointer w-fit h-fit hover:bg-white/10 active:bg-white/30 hover:scale-95"
              >
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
            </div>{" "}
          </span>
        </div>
      </div>{" "}
    </div>
  );
};

export default VirtualGames;
