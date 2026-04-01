import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import img from "../../../assets/img";

const RecentResultModal = ({ setShowRecentResultModal, firstResult }) => {
  const [activeCard, setActiveCard] = useState({
    card: firstResult?.recent_winner?.[0]?.card,
    winner: firstResult?.recent_winner?.[0]?.winner,
    roundId: firstResult?.recent_winner?.[0]?.roundId,
  });
  const ref = useRef();

  const closeModal = () => {
    setShowRecentResultModal(false);
  };

  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  return (
    <div
      className="fixed top-0 flex flex-col items-center  w-full max-w-[430px] p-2 h-dvh bg-black/70 backdrop-blur-sm justify-end"
      style={{ zIndex: 1000 }}
    >
      <div
        ref={ref}
        className="flex flex-col w-full max-h-full max-w-lg p-2 border rounded-lg bg-zinc-900 border-zinc-800 scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-white/10 modal-slide-up h-fit"
      >
        <div className="flex items-center w-full max-w-lg mb-2 text-white " />
        <div className="flex-grow overflow-y-auto">
          <div className="flex items-center cursor-pointer justify-between gap-1 px-2 text-white __className_575e37">
            <div className="flex gap-1 items-center">
              <div className="text-white">Round Id # {activeCard?.roundId}</div>
            </div>
            <svg
              onClick={closeModal}
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-x"
            >
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </div>

          <div className="__className_575e37 flex justify-center w-full py-3">
            <div className="z-50 grid grid-cols-1 p-1 ">
              <div className="flex flex-col gap-1 items-center">
                <img
                  className="h-[50px]"
                  src={`/cards/${activeCard?.card}.jpg`}
                  alt=""
                />
                <span className="text-xs font-medium leading-none text-zinc-100 lg:text-sm">
                  {activeCard?.winner}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 pt-2 __className_575e37">
            <div className="flex-grow h-0.5 rounded-full bg-gradient-to-r from-transparent to-white/20" />
            <div className="w-2 h-2 rounded-sm rotate-45 bg-white/20" />
            <div className="px-2 text-white">
              Last {firstResult?.recent_winner?.length} Rounds
            </div>
            <div className="w-2 h-2 rounded-sm rotate-45 bg-white/20" />
            <div className="flex-grow h-0.5 rounded-full bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <div className="w-full __className_575e37 grid gap-1 pb-2 grid-cols-5">
            <div className="flex overflow-x-auto col-span-5 mt-2">
              <div className="flex flex-grow items-center min-w-fit">
                <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white rounded-l-full">
                  <img
                    alt="1 Runs"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-4 h-4 p-0.5"
                    src={img.cricket_ball}
                    style={{ color: "transparent" }}
                  />
                  <span>1 Runs -</span>
                  <span className>24%</span>
                </div>
                <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
                  <img
                    alt="4 Runs"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-4 h-4 p-0.5"
                    src={img.cricket_ball}
                    style={{ color: "transparent" }}
                  />
                  <span>4 Runs -</span>
                  <span className>18%</span>
                </div>
                <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
                  <img
                    alt="0 Runs"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-4 h-4 p-0.5"
                    src={img.cricket_ball}
                    style={{ color: "transparent" }}
                  />
                  <span>0 Runs -</span>
                  <span className>32%</span>
                </div>
                <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
                  <img
                    alt="Wicket"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-4 h-4 p-0.5"
                    src={img.cricket_ball}
                    style={{ color: "transparent" }}
                  />
                  <span>Wicket -</span>
                  <span className>10%</span>
                </div>
                <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
                  <img
                    alt="2 Runs"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-4 h-4 p-0.5"
                    src={img.cricket_ball}
                    style={{ color: "transparent" }}
                  />
                  <span>2 Runs -</span>
                  <span className>10%</span>
                </div>
                <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
                  <img
                    alt="3 Runs"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-4 h-4 p-0.5"
                    src={img.cricket_ball}
                    style={{ color: "transparent" }}
                  />
                  <span>3 Runs -</span>
                  <span className>2%</span>
                </div>
                <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
                  <img
                    alt="Extra"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-4 h-4 p-0.5"
                    src={img.cricket_ball}
                    style={{ color: "transparent" }}
                  />
                  <span>Extra -</span>
                  <span className>2%</span>
                </div>
                <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white rounded-r-full">
                  <img
                    alt="6 Runs"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="w-4 h-4 p-0.5"
                    src={img.cricket_ball}
                    style={{ color: "transparent" }}
                  />
                  <span>6 Runs -</span>
                  <span className>2%</span>
                </div>
              </div>{" "}
            </div>
            {firstResult?.recent_winner?.map((item, index) => {
              return (
                <div
                  onClick={() =>
                    setActiveCard({
                      card: item?.card,
                      winner: item?.winner,
                      roundId: item?.roundId,
                    })
                  }
                  key={index}
                  className="flex items-center gap-1 w-full justify-center"
                >
                  <div
                    className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            w-full
            border-white/20"
                    style={{
                      backgroundColor: "rgb(99, 102, 241)",
                    }}
                  >
                    <span className="text-xs whitespace-nowrap text-white/50">
                      {item?.winner}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentResultModal;
