import { useSelector } from "react-redux";
import { Lock } from "../../assets/icon";
import { Status } from "../../const";
import { useEffect, useState } from "react";
import Stake from "../../components/shared/Stake/Stake";

const BetSlip = ({ data, status }) => {
  const { stake } = useSelector((state) => state.global);

  // Single state object to manage all stake values and visibility
  const [stakeState, setStakeState] = useState({
    playerABack: { show: false, value: stake },
    playerALay: { show: false, value: stake },
    playerBBack: { show: false, value: stake },
    playerBLay: { show: false, value: stake },
    aPlus: { show: false, value: stake },
    bPlus: { show: false, value: stake },
  });

  // Generic function to update stake state
  const handleStakeChange = (key) => {
    setStakeState((prev) => ({
      ...prev,
      [key]: {
        show: true,
        value: prev[key].show ? prev[key].value + 100 : prev[key].value,
      },
    }));
  };

  // Reset state when status is OPEN
  useEffect(() => {
    if (status === Status.OPEN) {
      setStakeState({
        playerABack: { show: false, value: stake },
        playerALay: { show: false, value: stake },
        playerBBack: { show: false, value: stake },
        playerBLay: { show: false, value: stake },
        aPlus: { show: false, value: stake },
        bPlus: { show: false, value: stake },
      });
    }
  }, [status, stake]);

  return (
    <div
      className="py-2 perspective lg:absolute  flex flex-col w-full gap-2 transition-all duration-1000 ease-in-out
   lg:bottom-40
   "
    >
      <div
        className={`grid grid-cols-4  gap-0.5  h-fit  w-full mx-auto max-w-3xl px-2 transition-all ease-in-out duration-1000 backdrop-blur-sm
      ${status === Status.SUSPENDED ? "applyPerspective" : ""}`}
      >
        <div
          onClick={() => handleStakeChange("playerABack")}
          className={`relative hover:border-white/80  flex flex-col items-center justify-center
            ${
              data?.[0]?.status === "OPEN"
                ? "cursor-pointer"
                : " cursor-not-allowed pointer-events-none"
            }
         bg-gradient-to-r from-blue to-blue/70 rounded-l-lg h-16`}
          id="A-back"
        >
          <span className="absolute flex items-center h-4 gap-1 font-semibold tracking-wider text-white whitespace-nowrap -top-5 left-1">
            Player A
          </span>
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState.playerABack.show && (
                <Stake stake={stakeState.playerABack.value} />
              )}
            </div>
          </div>
          {data?.[0]?.status === "OPEN" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[0]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 right-0.5" />
          )}
        </div>
        <div
          onClick={() => handleStakeChange("playerALay")}
          className={`relative hover:border-white/80  flex flex-col items-center justify-center
        cursor-pointer
         bg-gradient-to-l from-red to-red/70 rounded-r-lg h-16 ${
           data?.[0]?.status === "OPEN"
             ? "cursor-pointer"
             : " cursor-not-allowed pointer-events-none"
         }`}
          id="A-lay"
        >
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {" "}
              {stakeState.playerALay.show && (
                <Stake stake={stakeState.playerALay.value} />
              )}
            </div>
          </div>
          {data?.[0]?.status === "OPEN" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[0]?.runners?.[0]?.lay[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>
        <div
          onClick={() => handleStakeChange("playerBBack")}
          className={`relative hover:border-white/80  flex flex-col items-center justify-center
       ${
         data?.[0]?.status === "OPEN"
           ? "cursor-pointer"
           : " cursor-not-allowed pointer-events-none"
       }
         bg-gradient-to-r from-blue to-blue/70 rounded-l-lg h-16`}
          id="B-back"
        >
          <span className="absolute flex items-center h-4 gap-1 font-semibold tracking-wider text-white whitespace-nowrap -top-5 left-1">
            Player B
          </span>
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {" "}
              {stakeState.playerBBack.show && (
                <Stake stake={stakeState.playerBBack.value} />
              )}
            </div>
          </div>
          {data?.[0]?.status === "OPEN" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[0]?.runners?.[1]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 right-0.5" />
          )}
        </div>
        <div
          onClick={() => handleStakeChange("playerBLay")}
          className={`relative hover:border-white/80  flex flex-col items-center justify-center

         bg-gradient-to-l from-red to-red/70 rounded-r-lg h-16 ${
           data?.[0]?.status === "OPEN"
             ? "cursor-pointer"
             : " cursor-not-allowed pointer-events-none"
         }`}
          id="B-lay"
        >
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {" "}
              {stakeState.playerBLay.show && (
                <Stake stake={stakeState.playerBLay.value} />
              )}
            </div>
          </div>
          {data?.[0]?.status === "OPEN" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[0]?.runners?.[1]?.lay[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>

        <div
          onClick={() => handleStakeChange("aPlus")}
          className={`relative hover:border-white/80  flex flex-col items-center justify-center
         cursor-pointer
         bg-gradient-to-t from-gray/30 to-gray/70 col-span-2 rounded-lg h-12 ${
           data?.[1]?.status === "OPEN"
             ? "cursor-pointer"
             : " cursor-not-allowed pointer-events-none"
         }`}
          id="A-plus"
        >
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            A-plus
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {" "}
              {stakeState.aPlus.show && (
                <Stake stake={stakeState.aPlus.value} />
              )}
            </div>
          </div>
          {data?.[1]?.status === "OPEN" &&
          data?.[1]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[1]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>
        <div
          onClick={() => handleStakeChange("bPlus")}
          className={`relative hover:border-white/80  flex flex-col items-center justify-center
         cursor-pointer
         bg-gradient-to-t from-gray/30 to-gray/70 col-span-2 rounded-lg h-12 ${
           data?.[2]?.status === "OPEN"
             ? "cursor-pointer"
             : " cursor-not-allowed pointer-events-none"
         }`}
          id="B-plus"
        >
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            B-plus
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {" "}
              {stakeState.bPlus.show && (
                <Stake stake={stakeState.bPlus.value} />
              )}
            </div>
          </div>
          {data?.[2]?.status === "OPEN" &&
          data?.[2]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[2]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
