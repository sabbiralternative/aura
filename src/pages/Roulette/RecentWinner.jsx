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
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            24
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            27
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            3
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            25
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            12
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            28
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            21
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            36
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            21
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            22
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            20
          </div>
        </span>
        <span onClick={() => setRecentWinnerData({})}>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            5
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            29
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            17
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            22
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            17
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            5
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            6
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            25
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            7
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            5
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            28
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            12
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            10
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            14
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            36
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            5
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            12
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            23
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            5
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            4
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            30
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            4
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            17
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            7
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            23
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            35
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            12
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            24
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            20
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            15
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            3
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            10
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            23
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            36
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            36
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            3
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#000000]
         "
          >
            8
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            19
          </div>
        </span>
        <span>
          <div
            className="h-7 w-7 text-white text-sm  flex  justify-center items-center cursor-pointer rounded-lg border border-gray/30
         bg-[#ef1616b4]
         "
          >
            5
          </div>
        </span>
      </div>
    </>
  );
};

export default RecentWinner;
