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
                  className={`w-6 h-6 flex items-center justify-center cursor-pointer rounded-md  ${
                    winner?.winner === "P"
                      ? "bg-gradient-to-t from-blue to-blue/70 text-white"
                      : winner.winner === "T"
                      ? "bg-gradient-to-t from-green to-green/70 text-white"
                      : winner.winner === "B"
                      ? "bg-gradient-to-t from-red to-red/70 text-white"
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
