import { useDispatch, useSelector } from "react-redux";
import { Lock } from "../../assets/icon";
import { Status } from "../../const";
import { useOrderMutation } from "../../redux/features/events/events";
import { useEffect, useState } from "react";
import { isRunnerActive, isRunnerWinner } from "../../utils/betSlip";
import NextGame from "../../components/shared/NextGame/NextGame";
import Card from "./Card";
import { setBalance } from "../../redux/features/auth/authSlice";
import StakeAnimation from "../../components/shared/StakeAnimation/StakeAnimation";

const BetSlip = ({
  double,
  data,
  status,
  setToast,
  setStakeState,
  stakeState,
  setTotalWinAmount,
  setShowWinLossResult,
  animation,
  setAnimation,
  initialState,
}) => {
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);
  const { balance } = useSelector((state) => state.auth);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    const isRepeatTheBet = Object.values(stakeState).find(
      (item) => item?.selection_id && item?.show === false
    );
    if (isRepeatTheBet) {
      setStakeState(initialState);
    }
    new Audio("/bet.mp3").play();
    const { key, data, dataIndex, runnerIndex, type } = payload;
    setAnimation([key]);
    const formatData = {
      marketId: data?.[dataIndex]?.marketId,
      roundId: data?.[dataIndex]?.roundId,
      name: data?.[dataIndex]?.name,
      eventId: data?.[dataIndex]?.eventId,
      eventName: data?.[dataIndex]?.eventName,
      selection_id: data?.[dataIndex]?.runners?.[runnerIndex]?.id,
      runner_name: data?.[dataIndex]?.runners?.[runnerIndex]?.name,
      isback: type === "back" ? 0 : 1,
      event_id: data?.[dataIndex]?.eventId,
      event_type_id: data?.[dataIndex]?.event_type_id,
      price: data?.[dataIndex]?.runners?.[runnerIndex]?.[type]?.[0]?.price,
    };
    const timeout = setTimeout(() => {
      setAnimation([]);
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
            animation: false,
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
    }, 500);

    return () => clearTimeout(timeout);
  };

  // Reset state when status is OPEN
  useEffect(() => {
    if (status === Status.OPEN) {
      setStakeState((prev) => {
        const updatedState = { ...prev };
        Object.keys(updatedState).forEach((key) => {
          if (updatedState[key].show) {
            updatedState[key] = {
              ...updatedState[key],
              show: false,
            };
          }
        });
        return updatedState;
      });
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
          setShowWinLossResult(false);
          setTotalWinAmount(null);

          let totalBets = [];
          let totalAmountPlaced = 0;

          for (let bet of filterPlacedBet) {
            totalAmountPlaced = totalAmountPlaced + bet?.stake;
            totalBets.push({
              selection_id: bet.selection_id,
              price: bet?.price,
              eventId: bet?.eventId,
              marketId: bet?.marketId,
              name: bet?.name,
              stake: bet?.stake,
              isBack: bet?.isback,
            });
          }

          localStorage.setItem("totalBetPlace", JSON.stringify(totalBets));

          dispatch(setBalance(balance - parseFloat(totalAmountPlaced)));
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
  const don = "S1";
  const AAA = ["H1", "C1", "D1"];
  const DharamVeer = ["D13", "C13"];
  const KKPK = ["H13", "C2", "D12", "H12"];
  const ghulam = ["H11", "C11", "D11"];
  const SBAG = ["S13", "S12", "S11"];
  const indexCard = data?.[0]?.indexCard?.[0];

  return (
    <>
      <div className="  flex flex-col perspective gap-3  w-full transition-all ease-in-out duration-1000 items-center justify-center   ">
        <div className="flex flex-col max-w-md w-full transition-all-except-border-radius-and-color  duration-1000 ease-in-out  ">
          <div
            className="grid gap-0.5 h-fit  w-full rounded-lg p-1 bg-white/20 relative
         grid-cols-7

         
         "
          >
            <div className="flex w-full gap-0.5 -top-7 absolute">
              <div className="relative w-full text-[10px] text-white p-1.5 rounded  -translate-y-1 border border-green bg-green/20 ">
                Single
              </div>
              <div className="relative w-full text-[10px] text-white p-1.5 rounded  -translate-y-1 border border-white/20 bg-white/20 ">
                SinglePana
              </div>
              <div className="relative w-full text-[10px] text-white p-1.5 rounded  -translate-y-1 border border-white/20 bg-white/20 ">
                DoublePana
              </div>
              <div className="relative w-full text-[10px] text-white p-1.5 rounded  -translate-y-1 border border-white/20 bg-white/20 ">
                AllTrio
              </div>
              <div className="relative w-full text-[10px] text-white p-1.5 rounded  -translate-y-1 border border-white/20 bg-white/20 ">
                CommonSP
              </div>
              <div className="relative w-full text-[10px] text-white p-1.5 rounded  -translate-y-1 border border-white/20 bg-white/20 ">
                CommonDP
              </div>
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="1-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                1
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              selectedOption 
             
              
              
             "
              id="2-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                2
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="3-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                3
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="4-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                4
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="5-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                5
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="Odd-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                Odd
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              selectedOption 
             
              
              
             "
              id="Even-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                Even
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="6-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                6
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="7-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                7
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="8-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                8
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="9-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                9
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="0-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                0
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              
             
              
              
             "
              id="High-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                High
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
            <div
              className="relative rounded-md  flex h-16  flex-col items-center justify-center bg-white/20
               cursor-not-allowed pointer-events-none
               
              opacity-100 cursor-pointer
              selectedOption 
             
              
              
             "
              id="Low-Single"
            >
              <span className="absolute text-lg font-bold text-white -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl lg:text-2xl top-1/2 left-1/2 ">
                Low
              </span>
              <div className="float z-50">
                <div className="relative w-10 h-10" />
              </div>
              <span className="absolute font-mono tracking-tighter left-1/2 -translate-x-1/2 text-[10px] bottom-0.5  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center h-4 gap-1 left-1 w-fit top-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetSlip;
