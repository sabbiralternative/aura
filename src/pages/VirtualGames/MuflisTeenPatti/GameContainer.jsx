import { useNavigate } from "react-router-dom";
// import img from "../../../assets/img";
import Counter from "../../../components/shared/events/Counter";
import { Status } from "../../../const";
import Menu from "../../../components/modules/Virtual/Menu";

const GameContainer = ({ firstEvent }) => {
  const navigate = useNavigate();
  const playeraCard = firstEvent?.runners?.[0]?.cards;
  const playerbCard = firstEvent?.runners?.[1]?.cards;

  return (
    <div id="game-container" className="relative w-full aspect-video ">
      <div
        className="w-full aspect-video"
        style={{
          maskImage:
            "linear-gradient(black, black, black, black, black, black, black, black, transparent)",
        }}
      >
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          {/* <img
            alt="casino table"
            loading="lazy"
            width={1000}
            height={1000}
            decoding="async"
            data-nimg={1}
            className="object-cover absolute inset-0 w-full h-full"
            srcSet={img.dragon_tiger}
            src={img.dragon_tiger}
            style={{ color: "transparent" }}
          /> */}
          <div
            style={{
              position: "relative",
              perspective: "1000px",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="flex absolute top-[30%] flex-col gap-2 justify-center items-center w-full h-[70%]"
              style={{
                transformOrigin: "center bottom",
                transform: "rotateX(40deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  margin: "0 auto",
                  transform: "scale(1)",
                }}
              >
                <div className="z-50 grid grid-cols-6 gap-1 w-full px-5">
                  <div className="col-span-3 flex items-start gap-x-0.5 w-full">
                    {playeraCard &&
                      playeraCard?.map((card) => (
                        <div
                          key={card}
                          className="flex flex-col bg-gradient-to-t to-transparent items-start overflow-hidden rounded from-rose-500"
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
                            className="w-4 h-4 text-[#ffff29]"
                            style={{ opacity: 0 }}
                          >
                            <path
                              d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                              fill="currentColor"
                              strokeWidth={0}
                            />
                          </svg>
                          <div className="p-1">
                            <img
                              className="h-[50px]"
                              src={`/cards/${card}.jpg`}
                              alt=""
                            />
                          </div>
                          <div className="flex justify-center gap-1 px-1.5 text-[0.6rem] font-medium lg:text-sm w-full text-white text-white">
                            {card}
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="col-span-3 flex items-start gap-x-0.5 w-full">
                    {playerbCard &&
                      playerbCard?.map((card) => (
                        <div
                          key={card}
                          className="flex flex-col bg-gradient-to-t to-transparent items-center overflow-hidden rounded from-orange-500"
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
                            className="w-4 h-4 text-[#ffff29]"
                            style={{ opacity: 0 }}
                          >
                            <path
                              d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                              fill="currentColor"
                              strokeWidth={0}
                            />
                          </svg>
                          <div className="p-1">
                            <img
                              className="h-[50px]"
                              src={`/cards/${card}.jpg`}
                              alt=""
                            />
                          </div>
                          <div className="flex justify-center gap-1 px-1.5 text-[0.6rem] font-medium lg:text-sm w-full text-white text-white">
                            {card}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex absolute top-0 left-0 z-50 flex-col gap-0.5 py-2 px-1">
        <button onClick={() => navigate("/")} className=" iconButton">
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
      <div className="flex absolute top-12 left-16 z-50 gap-1">
        {firstEvent?.status === Status.OPEN && (
          <Counter firstEvent={firstEvent} />
        )}
      </div>
      <Menu />
    </div>
  );
};

export default GameContainer;
