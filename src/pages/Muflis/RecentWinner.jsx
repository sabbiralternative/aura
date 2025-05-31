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
      <div className="overflow-x-scroll flex items-center gap-0.5 pb-1">
        {recentWinner?.map((winner) => {
          return (
            <span
              onClick={() => setRecentWinnerData(winner)}
              key={winner?.roundId}
            >
              <div className="bounceInAnimation text-black uppercase flex items-center justify-center gap-2">
                <div
                  className={`px-2 py-1  flex items-center justify-center gap-1 cursor-pointer rounded-md ${
                    winner?.winner === "A"
                      ? "bg-green/60 text-white"
                      : winner.winner === "B"
                      ? "bg-blue/60 text-white"
                      : "bg-white"
                  }`}
                >
                  <span className="text-sm font-semibold ">
                    {winner?.winner}
                  </span>
                </div>
              </div>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default RecentWinner;
