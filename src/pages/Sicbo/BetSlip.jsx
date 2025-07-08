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
      marketId: data?.[dataIndex]?.id,
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
      <div className=" flex flex-col origin-bottom   w-full mx-auto  items-center gap-1  perspective   transition-all ease-in-out duration-1000   ">
        <div
          className="grid  grid-cols-12 grid-rows-7 px-4  h-fit w-full place-content-center max-w-xl  mx-auto transition-all ease-in-out duration-1000 
       
       
       "
        >
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

             col-span-3
            false
            false
            false
            false 
            false 
            false
            
             bg-white/20
               false   
               rounded-tl-lg
               false
               false
               false
               
          "
            id="small"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              small
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              1.98
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
             col-span-3 
            false
            false
            false 
            false 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id="odd"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              odd
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              1.98
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            col-span-3
            false
            false 
            false 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id="even"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              even
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              1.98
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

             col-span-3
            false
            false
            false
            false 
            false 
            false
            
             bg-white/20
               false   
               false
               rounded-tr-lg
               false
               false
               
          "
            id="big"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              big
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              1.98
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
             col-span-12 
            false 
            false 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id="anyTriple"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              Any Triple
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              20
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            row-span-1 col-span-6  
            false 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id="1+1+1"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              <div className="flex items-center justify-center w-10 h-10 p-2 m-1 text-xl font-bold bg-white bg-gray-700 rounded-lg dice">
                <span className="w-2 h-2 transform rotate-0 rounded-full bg-red" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 p-2 m-1 text-xl font-bold bg-white bg-gray-700 rounded-lg dice">
                <span className="w-2 h-2 transform rotate-0 rounded-full bg-red" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 p-2 m-1 text-xl font-bold bg-white bg-gray-700 rounded-lg dice">
                <span className="w-2 h-2 transform rotate-0 rounded-full bg-red" />
              </div>
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              80
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            row-span-1 col-span-6  
            false 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id="2+2+2"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              <div className="flex flex-col items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <span className="self-start w-2 h-2 rounded-full dot bg-red" />
                <span className="self-end w-2 h-2 rounded-full dot bg-red" />
              </div>
              <div className="flex flex-col items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <span className="self-start w-2 h-2 rounded-full dot bg-red" />
                <span className="self-end w-2 h-2 rounded-full dot bg-red" />
              </div>
              <div className="flex flex-col items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <span className="self-start w-2 h-2 rounded-full dot bg-red" />
                <span className="self-end w-2 h-2 rounded-full dot bg-red" />
              </div>
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              80
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            row-span-1 col-span-6  
            false 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id="3+3+3"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              <div className="flex flex-col items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <span className="self-start w-2 h-2 rounded-full dot bg-red" />
                <span className="self-center w-2 h-2 rounded-full dot bg-red" />
                <span className="self-end w-2 h-2 rounded-full dot bg-red" />
              </div>
              <div className="flex flex-col items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <span className="self-start w-2 h-2 rounded-full dot bg-red" />
                <span className="self-center w-2 h-2 rounded-full dot bg-red" />
                <span className="self-end w-2 h-2 rounded-full dot bg-red" />
              </div>
              <div className="flex flex-col items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <span className="self-start w-2 h-2 rounded-full dot bg-red" />
                <span className="self-center w-2 h-2 rounded-full dot bg-red" />
                <span className="self-end w-2 h-2 rounded-full dot bg-red" />
              </div>
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              80
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            row-span-1 col-span-6  
            false 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id="4+4+4"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              <div className="flex flex-wrap items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <div className="flex justify-between w-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
                <div className="flex justify-between w-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <div className="flex justify-between w-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
                <div className="flex justify-between w-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <div className="flex justify-between w-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
                <div className="flex justify-between w-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
              </div>
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              80
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            row-span-1 col-span-6  
            false 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id="5+5+5"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              <div className="flex flex-wrap items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <div className="flex justify-between w-full gap-1">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
                <span className="self-center w-2 h-2 mx-1 ml-2 rounded-full dot bg-red" />
                <div className="flex justify-between w-full gap-1">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <div className="flex justify-between w-full gap-1">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
                <span className="self-center w-2 h-2 mx-1 ml-2 rounded-full dot bg-red" />
                <div className="flex justify-between w-full gap-1">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <div className="flex justify-between w-full gap-1">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
                <span className="self-center w-2 h-2 mx-1 ml-2 rounded-full dot bg-red" />
                <div className="flex justify-between w-full gap-1">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
              </div>
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              80
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            row-span-1 col-span-6  
            false 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id="6+6+6"
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              <div className="flex flex-wrap items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <div className="flex flex-col justify-between h-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <div className="flex flex-col justify-between h-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between w-10 h-10 p-2 m-1 text-xl font-bold text-white bg-white bg-gray-700 rounded-lg dice">
                <div className="flex flex-col justify-between h-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                  <span className="w-2 h-2 rounded-full dot bg-red" />
                </div>
              </div>
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              80
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={4}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              4
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              30
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={5}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              5
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              20
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={6}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              6
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              16
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={7}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              7
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              13
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={8}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              8
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              9
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={9}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              9
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              7
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={10}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              10
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              7
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={11}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              11
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              7
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={12}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              12
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              7
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={13}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              13
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              9
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={14}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              14
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              13
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            false
            
             bg-white/20
               false   
               false
               false
               false
               false
               
          "
            id={15}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              15
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              16
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            col-span-6
            
             bg-white/20
               false   
               false
               false
               rounded-bl-lg
               false
               
          "
            id={16}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              16
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              20
            </span>
          </div>
          <div
            className="relative backdrop-blur-sm   border border-white/30 h-12 w-full flex flex-col items-center  justify-center place-content-center capitalize

            false
            false
            false
            false
            false 
            row-span-1 col-span-2 
            col-span-6
            
             bg-white/20
               false   
               false
               false
               false
               rounded-br-lg
               
          "
            id={17}
          >
            <span className="absolute top-0 text-xl left-0 flex items-center justify-center w-full h-full font-bold text-white opacity-80">
              17
            </span>
            <div className="scale-75 z-50">
              <div className="relative w-10 h-10" />
            </div>
            <span className="absolute bottom-0  text-[10px] text-white left-1">
              30
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetSlip;
