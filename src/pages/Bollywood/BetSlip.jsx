import { useSelector } from "react-redux";
import { Lock } from "../../assets/icon";
import { Status } from "../../const";
import { useOrderMutation } from "../../redux/features/events/events";
import { useEffect } from "react";
import { isRunnerActive } from "../../utils/betSlip";
import Stake from "../../components/shared/Stake/Stake";

const BetSlip = ({
  data,
  status,
  setToast,
  setStakeState,
  stakeState,
  initialState,
  setTotalBet,
}) => {
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    const { key, data, dataIndex, runnerIndex, type } = payload;
    const formatData = {
      roundId: data?.[dataIndex]?.roundId,
      name: data?.[dataIndex]?.name,
      eventId: data?.[dataIndex]?.eventId,
      eventName: data?.[dataIndex]?.eventName,
      marketId: data?.[dataIndex]?.id,
      selection_id: data?.[dataIndex]?.runners?.[runnerIndex]?.id,
      runner_name: data?.[dataIndex]?.runners?.[runnerIndex]?.name,
      isback: type === "back" ? 0 : 1,
      event_id: data?.[dataIndex]?.eventId,
      event_type_id: data?.[dataIndex]?.event_type_id,
      price: data?.[dataIndex]?.runners?.[runnerIndex]?.[type]?.[0]?.price,
    };
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
          roundId: formatData?.roundId,
          name: formatData?.name,
          eventId: formatData?.eventId,
          eventName: formatData?.eventName,
          show: true,
          stake: prev[key].show
            ? prev[key].stake + prev[key].actionBy
            : prev[key].stake,
          marketId: formatData?.marketId,
          selection_id: formatData?.selection_id,
          price: formatData?.price,
          runner_name: formatData?.runner_name,
          isback: formatData?.isback,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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
      roundId: bet?.roundId,
      name: bet?.name,
      eventId: bet?.eventId,
      eventName: bet?.eventName,
      marketId: bet?.marketId,
      selection_id: bet?.selection_id,
      runner_name: bet?.runner_name,
      stake: bet?.stake,
      isback: bet?.isback,
      price: bet?.price,
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

  return (
    <div className="flex flex-col perspective  w-full transition-all ease-in-out duration-1000 items-center justify-center">
      <div
        className={`grid grid-cols-16 lg:grid-cols-12 grid-row-4 gap-x-0.5 h-fit gap-y-0.5 w-full mx-auto max-w-2xl px-2 transition-all ease-in-out duration-1000 backdrop-blur-sm
   ${status === Status.SUSPENDED ? "applyPerspective" : ""}`}
      >
        <div
          onClick={() =>
            handleStakeChange({
              key: "donBack",
              data,
              dataIndex: 0,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 ${
       isRunnerActive(data, 0, 0)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="Don-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            Don
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.donBack?.show && (
                <Stake stake={stakeState?.donBack?.stake} />
              )}
            </div>
          </div>

          {isRunnerActive(data, 0, 0) ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "donLay",
              data,
              dataIndex: 0,
              runnerIndex: 0,
              type: "lay",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16  ${
       isRunnerActive(data, 0, 0)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="Don-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.donLay?.show && (
                <Stake stake={stakeState?.donLay?.stake} />
              )}
            </div>
          </div>

          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[0]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[0]?.lay[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "aaaBack",
              data,
              dataIndex: 0,
              runnerIndex: 1,
              type: "back",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 ${
       isRunnerActive(data, 0, 1)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="AmarAkbarAnthony-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            AmarAkbarAnthony
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.aaaBack?.show && (
                <Stake stake={stakeState?.aaaBack?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[1]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[1]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "aaaLay",
              data,
              dataIndex: 0,
              runnerIndex: 1,
              type: "lay",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16 ${
       isRunnerActive(data, 0, 1)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="AmarAkbarAnthony-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.aaaLay?.show && (
                <Stake stake={stakeState?.aaaLay?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[1]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[1]?.lay?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 right-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "sbagBack",
              data,
              dataIndex: 0,
              runnerIndex: 2,
              type: "back",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 ${
       isRunnerActive(data, 0, 2)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="SahibBibiAurGulam-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            SahibBibiAurGulam
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.sbagBack?.show && (
                <Stake stake={stakeState?.sbagBack?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[2]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[2]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "sbagLay",
              data,
              dataIndex: 0,
              runnerIndex: 2,
              type: "lay",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16 ${
       isRunnerActive(data, 0, 2)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="SahibBibiAurGulam-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.sbagLay?.show && (
                <Stake stake={stakeState?.sbagLay?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[2]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[2]?.lay?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 right-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "dvBack",
              data,
              dataIndex: 0,
              runnerIndex: 3,
              type: "back",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 ${
       isRunnerActive(data, 0, 3)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="DharamVeer-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            DharamVeer
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.dvBack?.show && (
                <Stake stake={stakeState?.dvBack?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[3]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[3]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "dvLay",
              data,
              dataIndex: 0,
              runnerIndex: 3,
              type: "lay",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16 ${
       isRunnerActive(data, 0, 3)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="DharamVeer-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.dvLay?.show && (
                <Stake stake={stakeState?.dvLay?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[3]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[3]?.lay?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 right-0.5" />
          )}
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "kkpkBack",
              data,
              dataIndex: 0,
              runnerIndex: 4,
              type: "back",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 ${
       isRunnerActive(data, 0, 4)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="KisKisoPyaarKaroon-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            KisKisoPyaarKaroon
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.kkpkBack?.show && (
                <Stake stake={stakeState?.kkpkBack?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[4]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[4]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "kkpkLay",
              data,
              dataIndex: 0,
              runnerIndex: 4,
              type: "lay",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16 ${
       isRunnerActive(data, 0, 4)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="KisKisoPyaarKaroon-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.kkpkLay?.show && (
                <Stake stake={stakeState?.kkpkLay?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[4]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[4]?.lay?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 right-0.5" />
          )}
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "gulamBack",
              data,
              dataIndex: 0,
              runnerIndex: 5,
              type: "back",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 ${
       isRunnerActive(data, 0, 5)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="Ghulam-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            Ghulam
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.gulamBack?.show && (
                <Stake stake={stakeState?.gulamBack?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[5]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[5]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "gulamLay",
              data,
              dataIndex: 0,
              runnerIndex: 5,
              type: "lay",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16  ${
       isRunnerActive(data, 0, 5)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="Ghulam-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.gulamLay?.show && (
                <Stake stake={stakeState?.gulamLay?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[5]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[5]?.lay?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 right-0.5" />
          )}
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "kq",
              data,
              dataIndex: 2,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 bg-gradient-to-b from-gray/40 to-gray/20 h-[50px] ${
       isRunnerActive(data, 2, 0)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="K-Q"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            K-Q
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.kq?.show && <Stake stake={stakeState?.kq?.stake} />}
            </div>
          </div>
          {data?.[2]?.status === Status.OPEN &&
          data?.[2]?.runners?.[0]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[2]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "ja",
              data,
              dataIndex: 2,
              runnerIndex: 1,
              type: "back",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 bg-gradient-to-b from-gray/40 to-gray/20 h-[50px] ${
       isRunnerActive(data, 2, 1)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="J-A"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            J-A
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.ja?.show && <Stake stake={stakeState?.ja?.stake} />}
            </div>
          </div>
          {data?.[2]?.status === Status.OPEN &&
          data?.[2]?.runners?.[1]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[2]?.runners?.[1]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "red",
              data,
              dataIndex: 3,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 bg-gradient-to-b from-gray/40 to-gray/20 h-[50px] ${
       isRunnerActive(data, 3, 0)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="Red"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Red
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.red?.show && (
                <Stake stake={stakeState?.red?.stake} />
              )}
            </div>
          </div>
          {data?.[3]?.status === Status.OPEN &&
          data?.[3]?.runners?.[0]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[3]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1">
            <span className="flex h-3 gap-1 w-fit">
              <svg
                width={198}
                height={260}
                viewBox="0 0 198 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                  fill="#DD181F"
                />
              </svg>
              <svg
                width={220}
                height={194}
                viewBox="0 0 220 194"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  id="Vector"
                  d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                  fill="#DD181F"
                />
              </svg>
            </span>
          </span>
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "black",
              data,
              dataIndex: 3,
              runnerIndex: 1,
              type: "back",
            })
          }
          className={`relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 bg-gradient-to-b from-gray/40 to-gray/20 h-[50px] ${
       isRunnerActive(data, 3, 1)
         ? "cursor-pointer"
         : " cursor-not-allowed pointer-events-none"
     }`}
          id="Black"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Black
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.black?.show && (
                <Stake stake={stakeState?.black?.stake} />
              )}
            </div>
          </div>
          {data?.[3]?.status === Status.OPEN &&
          data?.[3]?.runners?.[1]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[3]?.runners?.[1]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1">
            <span className="flex h-3 gap-1 w-fit">
              <svg
                width={209}
                height={211}
                viewBox="0 0 209 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  id="Vector"
                  d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                  fill="black"
                />
              </svg>
              <svg
                width={209}
                height={235}
                viewBox="0 0 209 235"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  id="Vector"
                  d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                  fill="black"
                />
              </svg>
            </span>
          </span>
        </div>
        {data?.[4]?.runners?.map((runner, i) => {
          return (
            <div
              onClick={() =>
                handleStakeChange({
                  key: runner?.name,
                  data,
                  dataIndex: 4,
                  runnerIndex: i,
                  type: "back",
                })
              }
              key={runner?.id}
              className={`relative   flex flex-col items-center justify-center  
         cursor-pointer
         false
         false
         rounded-md col-span-4 lg:col-span-3 h-[50px] bg-gradient-to-b from-gray/40 to-gray/20 ${
           isRunnerActive(data, 4, i)
             ? "cursor-pointer"
             : " cursor-not-allowed pointer-events-none"
         }`}
              id="J"
            >
              <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
                {runner?.name}
              </span>
              <div className="z-50">
                <div className="relative w-10 h-10">
                  {stakeState?.[runner?.name]?.show && (
                    <Stake stake={stakeState?.[runner?.name]?.stake} />
                  )}
                </div>
              </div>
              {data?.[4]?.status === Status.OPEN &&
              runner?.status === Status.ACTIVE ? (
                <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
                  {runner?.back?.[0]?.price}
                </span>
              ) : (
                <Lock position="bottom-0.5 left-0.5" />
              )}

              <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1">
                <span className="flex justify-between w-full h-3">
                  <span className="flex gap-1 w-fit">
                    <svg
                      width={209}
                      height={211}
                      viewBox="0 0 209 211"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        id="Vector"
                        d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      width={209}
                      height={235}
                      viewBox="0 0 209 235"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        id="Vector"
                        d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <span className="flex gap-1 w-fit">
                    <svg
                      width={198}
                      height={260}
                      viewBox="0 0 198 260"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                        fill="#DD181F"
                      />
                    </svg>
                    <svg
                      width={220}
                      height={194}
                      viewBox="0 0 220 194"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        id="Vector"
                        d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                        fill="#DD181F"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BetSlip;
