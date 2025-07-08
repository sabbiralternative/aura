import { useState } from "react";
import RecentModal from "./RecentModal";

const RecentWinner = ({ recentWinner }) => {
  const [recentWinnerData, setRecentWinnerData] = useState(null);
  return (
    <>
      {recentWinnerData && (
        <RecentModal
          recentWinnerData={recentWinnerData}
          setRecentWinnerData={setRecentWinnerData}
        />
      )}
      <div className="flex justify-start w-full gap-1 p-1 overflow-x-scroll">
        {recentWinner?.map((winner) => {
          return (
            <span
              onClick={() => setRecentWinnerData(winner)}
              key={winner?.roundId}
            >
              <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                <div
                  className={`w-6 h-6 flex items-center justify-center cursor-pointer rounded-md ${
                    winner?.winner === "A" ||
                    winner?.winner === "B" ||
                    winner?.winner === "C"
                      ? "bg-[#38b142] text-white"
                      : winner.winner === "D"
                      ? "bg-[#f49226] text-white"
                      : winner.winner === "E"
                      ? "bg-[#bd73ff] text-white"
                      : winner.winner === "F"
                      ? "bg-[#6B3700] text-white"
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
