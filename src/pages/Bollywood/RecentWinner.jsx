import { useState } from "react";
import RecentModal from "./RecentModal";

const RecentWinner = ({ recentWinner }) => {
  const [showRecentModal, setShowRecentModal] = useState(false);
  return (
    <>
      {showRecentModal && (
        <RecentModal setShowRecentModal={setShowRecentModal} />
      )}
      <div className="flex justify-start w-full gap-1 p-1 overflow-x-scroll">
        {recentWinner?.map((winner) => {
          return (
            <span
              onClick={() => setShowRecentModal(true)}
              key={winner?.roundId}
            >
              <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                <div
                  className={`w-6 h-6 flex items-center justify-center cursor-pointer rounded-md ${
                    winner?.winner === "D"
                      ? "bg-[#38b142] text-white"
                      : winner.winner === "E"
                      ? "bg-[#d83b32] text-white"
                      : winner.winner === "C"
                      ? "bg-[#156ed1] text-white"
                      : winner.winner === "F"
                      ? "bg-[#15d141] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <span className="text-xs font-medium">{winner?.winner}</span>
                </div>
              </div>{" "}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default RecentWinner;
