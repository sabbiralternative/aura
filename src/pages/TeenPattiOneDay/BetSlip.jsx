import { useSelector } from "react-redux";
import { Lock } from "../../assets/icon";
import { Status } from "../../const";
import { useEffect, useState } from "react";
import Stake from "../../components/shared/Stake/Stake";
import { useOrderMutation } from "../../redux/features/events/events";
import NextGame from "../../components/shared/NextGame/NextGame";

const BetSlip = ({
  data,
  status,
  setToast,
  setStakeState,
  stakeState,
  initialState,
  setTotalBet,
}) => {
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);

  // Generic function to update stake state
  const handleStakeChange = (key, data) => {
    setStakeState((prev) => {
      const maxSerial = Math.max(
        0,
        ...Object.values(prev)
          .map((item) => item.serial)
          .filter((serial) => serial !== undefined)
      );

      return {
        ...prev,
        [key]: {
          show: true,
          stake: prev[key].show
            ? prev[key].stake + prev[key].actionBy
            : prev[key].stake,
          marketId: data?.marketId,
          selection_id: data?.selection_id,
          price: data?.price,
          runner_name: data?.runner_name,
          roundId: data?.roundId,
          name: data?.name,
          eventId: data?.eventId,
          eventName: data?.eventName,
          isback: data?.isback,
          serial: prev[key]?.serial ? prev[key]?.serial : maxSerial + 1,
          actionBy: stake,
          undo: [...(prev[key]?.undo || []), stake],
        },
      };
    });
  };

  // Reset state when status is OPEN
  useEffect(() => {
    if (status === Status.OPEN) {
      setStakeState(initialState);
    }
    if (showSuspendedWarning) {
      setTimeout(() => {
        setShowSuspendedWarning(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, showSuspendedWarning]);

  useEffect(() => {
    setStakeState((prev) => {
      const updatedState = {};
      for (const key in prev) {
        updatedState[key] = {
          ...prev[key],
          stake: prev[key].show ? prev[key].stake : stake,
          actionBy: stake,
        };
      }
      return updatedState;
    });
  }, [stake]); // Runs when stake value changes

  useEffect(() => {
    const filterPlacedBet = Object.values(stakeState).filter((bet) => bet.show);
    let payload = filterPlacedBet.map((bet) => ({
      marketId: bet?.marketId,
      selection_id: bet?.selection_id,
      runner_name: bet?.runner_name,
      stake: bet?.stake,
      isback: bet?.isback,
      price: bet?.price,
      roundId: bet?.roundId,
      name: bet?.name,
      eventId: bet?.eventId,
      eventName: bet?.eventName,
    }));

    if (status === Status.SUSPENDED && payload?.length > 0) {
      const handleOrder = async () => {
        const res = await addOrder(payload).unwrap();
        payload = [];
        if (res?.success) {
          let totalBet = 0;
          for (let bet of filterPlacedBet) {
            totalBet += bet?.stake;
          }
          setTotalBet((prev) => prev + totalBet);
          setToast(res?.Message);
        }
      };
      handleOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOrder, status]);
  const handleShowSuspendedStatus = () => {
    if (status === Status.SUSPENDED) {
      setShowSuspendedWarning(true);
    }
  };

  return (
    <div
      onClick={handleShowSuspendedStatus}
      className="py-2 perspective lg:absolute  flex flex-col w-full gap-2 transition-all duration-1000 ease-in-out
   lg:bottom-40
   "
    >
      <div
        className={`grid grid-cols-4  gap-0.5  h-fit  w-full mx-auto max-w-3xl px-2 transition-all ease-in-out duration-1000 backdrop-blur-sm
      ${status === Status.SUSPENDED ? "applyPerspective" : ""}`}
      >
        {showSuspendedWarning && <NextGame />}
        <div
          onClick={() =>
            handleStakeChange("playerABack", {
              marketId: data?.[0]?.id,
              selection_id: data?.[0]?.runners?.[0]?.id,
              runner_name: data?.[0]?.runners?.[0]?.name,
              isback: 0,
              event_id: data?.[0]?.eventId,
              event_type_id: data?.[0]?.event_type_id,
              price: data?.[0]?.runners?.[0]?.back[0]?.price,
              roundId: data?.[0]?.roundId,
              name: data?.[0]?.name,
              eventId: data?.[0]?.eventId,
              eventName: data?.[0]?.eventName,
            })
          }
          className={`relative hover:border-white/80  flex flex-col items-center justify-center
            ${
              data?.[0]?.status === Status.OPEN
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
                <Stake stake={stakeState.playerABack.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[0]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 right-0.5" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange("playerALay", {
              marketId: data?.[0]?.id,
              selection_id: data?.[0]?.runners?.[0]?.id,
              runner_name: data?.[0]?.runners?.[0]?.name,
              isback: 1,
              event_id: data?.[0]?.eventId,
              event_type_id: data?.[0]?.event_type_id,
              price: data?.[0]?.runners?.[0]?.lay[0]?.price,
              roundId: data?.[0]?.roundId,
              name: data?.[0]?.name,
              eventId: data?.[0]?.eventId,
              eventName: data?.[0]?.eventName,
            })
          }
          className={`relative hover:border-white/80  flex flex-col items-center justify-center
        cursor-pointer
         bg-gradient-to-l from-red to-red/70 rounded-r-lg h-16 ${
           data?.[0]?.status === Status.OPEN
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
                <Stake stake={stakeState.playerALay.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[0]?.runners?.[0]?.lay[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange("playerBBack", {
              marketId: data?.[0]?.id,
              selection_id: data?.[0]?.runners?.[1]?.id,
              runner_name: data?.[0]?.runners?.[1]?.name,
              isback: 0,
              event_id: data?.[0]?.eventId,
              event_type_id: data?.[0]?.event_type_id,
              price: data?.[0]?.runners?.[1]?.back[0]?.price,
              roundId: data?.[0]?.roundId,
              name: data?.[0]?.name,
              eventId: data?.[0]?.eventId,
              eventName: data?.[0]?.eventName,
            })
          }
          className={`relative hover:border-white/80  flex flex-col items-center justify-center
       ${
         data?.[0]?.status === Status.OPEN
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
                <Stake stake={stakeState.playerBBack.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[0]?.runners?.[1]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 right-0.5" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange("playerBLay", {
              marketId: data?.[0]?.id,
              selection_id: data?.[0]?.runners?.[1]?.id,
              runner_name: data?.[0]?.runners?.[1]?.name,
              isback: 1,
              event_id: data?.[0]?.eventId,
              event_type_id: data?.[0]?.event_type_id,
              price: data?.[0]?.runners?.[1]?.lay[0]?.price,
              roundId: data?.[0]?.roundId,
              name: data?.[0]?.name,
              eventId: data?.[0]?.eventId,
              eventName: data?.[0]?.eventName,
            })
          }
          className={`relative hover:border-white/80  flex flex-col items-center justify-center

         bg-gradient-to-l from-red to-red/70 rounded-r-lg h-16 ${
           data?.[0]?.status === Status.OPEN
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
                <Stake stake={stakeState.playerBLay.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[0]?.runners?.[1]?.lay[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>

        <div
          onClick={() =>
            handleStakeChange("aPlus", {
              marketId: data?.[1]?.id,
              selection_id: data?.[1]?.runners?.[0]?.id,
              runner_name: data?.[1]?.runners?.[0]?.name,
              isback: 0,
              event_id: data?.[1]?.eventId,
              event_type_id: data?.[1]?.event_type_id,
              price: data?.[1]?.runners?.[0]?.back[0]?.price,
              roundId: data?.[1]?.roundId,
              name: data?.[1]?.name,
              eventId: data?.[1]?.eventId,
              eventName: data?.[1]?.eventName,
            })
          }
          className={`relative hover:border-white/80  flex flex-col items-center justify-center
         cursor-pointer
         bg-gradient-to-t from-gray/30 to-gray/70 col-span-2 rounded-lg h-12 ${
           data?.[1]?.status === Status.OPEN
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
                <Stake stake={stakeState.aPlus.stake} />
              )}
            </div>
          </div>
          {data?.[1]?.status === Status.OPEN &&
          data?.[1]?.runners?.[0]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[1]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange("bPlus", {
              marketId: data?.[2]?.id,
              selection_id: data?.[2]?.runners?.[0]?.id,
              runner_name: data?.[2]?.runners?.[0]?.name,
              isback: 0,
              event_id: data?.[2]?.eventId,
              event_type_id: data?.[2]?.event_type_id,
              price: data?.[2]?.runners?.[0]?.back[0]?.price,
              roundId: data?.[2]?.roundId,
              name: data?.[2]?.name,
              eventId: data?.[2]?.eventId,
              eventName: data?.[2]?.eventName,
            })
          }
          className={`relative hover:border-white/80  flex flex-col items-center justify-center
         cursor-pointer
         bg-gradient-to-t from-gray/30 to-gray/70 col-span-2 rounded-lg h-12 ${
           data?.[2]?.status === Status.OPEN
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
                <Stake stake={stakeState.bPlus.stake} />
              )}
            </div>
          </div>
          {data?.[2]?.status === Status.OPEN &&
          data?.[2]?.runners?.[0]?.status === Status.ACTIVE ? (
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
