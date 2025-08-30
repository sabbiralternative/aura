import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import Counter from "../../components/shared/events/Counter";
import TopHeader from "../../components/shared/events/TopHeader";
import { Status } from "../../const";
import Card from "../../components/modules/TeenPatti2020/Card";
import { useState } from "react";
import AntMedia from "../../components/shared/Antmedia/Antmedia";
import { useSelector } from "react-redux";
import BetSlip from "./BetSlip";
import Toast from "../../components/shared/Toast/Toast";
import ActionButton from "../../components/modules/LuckySeven/ActionButton";
import AmountSection from "../../components/shared/events/AmountSection";
import { handleDoubleStake } from "../../utils/handleDoubleStake";
import { handleUndoStake } from "../../utils/handleUndoStake";
import RecentWinner from "./RecentWinner";
import Setting from "./Setting";

const Muflis = () => {
  const [double, setDouble] = useState(false);
  const [animation, setAnimation] = useState([]);
  const [showWinLossResult, setShowWinLossResult] = useState(false);
  const [totalWinAmount, setTotalWinAmount] = useState(null);
  const { stake } = useSelector((state) => state.global);
  const [toast, setToast] = useState(null);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    { pollingInterval: 1000 }
  );

  const firstEvent = data?.result?.[0];

  const initialState = {
    top9A: { show: false, stake },
    top9B: { show: false, stake },
    playerA: { show: false, stake },
    playerB: { show: false, stake },
    baccaratA: { show: false, stake },
    baccaratB: { show: false, stake },
  };

  const [stakeState, setStakeState] = useState(initialState);

  const isRepeatTheBet = Object.values(stakeState).find(
    (item) => item?.selection_id && item?.show === false
  );

  const isPlaceStake = Object.values(stakeState).find((item) => item?.show);

  return (
    <main
      className="main max-w-md relative flex  lg:aspect-video    mx-auto   flex-col overflow-x-hidden  items-center justify-between bg-gradient-to-b from-[#1d184b] via-[#1d184b]"
      id="7updownParent"
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <TopHeader />
      {firstEvent?.status === Status.OPEN && (
        <Counter timer={firstEvent?.timer} />
      )}

      <div className="relative w-full  h-[20%]">
        <div className="w-full aspect-video w-[100%]  origin-top  transition-all duration-1000 ease-in-out scale-[140%]">
          <AntMedia />
        </div>
        <div
          className="h-full absolute pointer-events-none top-0  text-xs overflow-y-auto w-fit  transition-all duration-500 ease-in-out opacity-0 left-0"
          style={{
            maskImage:
              "linear-gradient(transparent,black,black, black,black,transparent)",
          }}
        >
          <div style={{ height: "186px" }} />
          <div
            className="text-xl text-white stroke-black"
            style={{ textShadow: "black 1px 1px 2px" }}
          >
            Total Win
            <span
              className="text-yellow"
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              0
            </span>
          </div>
          <div style={{ height: "186px" }} />
        </div>
      </div>
      <div className="bottom-0 flex flex-col w-full gap-4 px-1">
        {firstEvent?.status === Status.SUSPENDED && <Card data={firstEvent} />}
        <BetSlip
          initialState={initialState}
          double={double}
          animation={animation}
          setAnimation={setAnimation}
          setShowWinLossResult={setShowWinLossResult}
          setTotalWinAmount={setTotalWinAmount}
          stakeState={stakeState}
          setStakeState={setStakeState}
          setToast={setToast}
          data={data?.result}
          status={firstEvent?.status}
        />

        <div className="bottom-0 flex flex-col w-full gap-2 px-1">
          <ActionButton
            isRepeatTheBet={isRepeatTheBet}
            handleDoubleStake={() =>
              handleDoubleStake(
                isRepeatTheBet,
                setDouble,
                setStakeState,
                setAnimation,
                firstEvent
              )
            }
            handleUndoStake={() => handleUndoStake(setStakeState, stakeState)}
            isPlaceStake={isPlaceStake}
            status={firstEvent?.status}
            setShowSetting={setShowSetting}
          />

          <AmountSection
            showWinLossResult={showWinLossResult}
            setShowWinLossResult={setShowWinLossResult}
            setTotalWinAmount={setTotalWinAmount}
            totalWinAmount={totalWinAmount}
            data={data?.result}
            firstEvent={firstEvent}
          />
          <RecentWinner recentWinner={firstEvent?.recent_winner} />
        </div>
        {showSetting && (
          <Setting
            setShowFullScreen={setShowFullScreen}
            showFullScreen={showFullScreen}
            setShowSetting={setShowSetting}
          />
        )}
      </div>
      {/* {showSetting && (
        <Setting
          setShowFullScreen={setShowFullScreen}
          showFullScreen={showFullScreen}
          setShowSetting={setShowSetting}
        />
      )} */}

      {/* <div
        className="scale-y-0 h-[70%] fixed origin-bottom flex flex-col items-center bottom-0 w-full max-w-xl transition-all ease-in-out"
        style={{ zIndex: 1000 }}
      />
      <div
        className="scale-y-0 h-fit fixed origin-bottom flex flex-col items-center bottom-0 w-full max-w-xl transition-all ease-in-out"
        style={{ zIndex: 1000 }}
      >
        0
      </div>
      */}
      {toast && (
        <div className="place-bets absolute w-full left-1/2 top-[30%] -translate-x-1/2 z-50 text-center text-white">
          <Toast message={toast} setMessage={setToast} />{" "}
        </div>
      )}
      {/* {!toast && firstEvent?.status === Status.OPEN && (
        <div className="place-bets absolute w-full left-1/2 top-[30%] -translate-x-1/2 z-50 text-center text-white">
          PLACE YOUR BETS
        </div>
      )} */}
    </main>
  );
};

export default Muflis;
