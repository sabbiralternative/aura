import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-circle-filled"
                    style={{ color: "rgb(14, 165, 233)" }}
                  >
                    <path
                      d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  </svg>
                  <span>AMAR -</span>
                  <span className>4%</span>
                </div>
                <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-circle-filled"
                    style={{ color: "rgb(59, 130, 246)" }}
                  >
                    <path
                      d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  </svg>
                  <span>AKBAR -</span>
                  <span className>40%</span>
                </div>
                <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white rounded-r-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-circle-filled"
                    style={{ color: "rgb(99, 102, 241)" }}
                  >
                    <path
                      d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  </svg>
                  <span>ANTHONY -</span>
                  <span className>56%</span>
                </div>
              </div>
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
                      backgroundColor:
                        item?.winner === "A"
                          ? "rgb(14, 165, 233)"
                          : item?.winner === "B"
                            ? "rgb(59, 130, 246)"
                            : item.winner === "C"
                              ? "rgb(99, 102, 241)"
                              : "",
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
