import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import AmountSection from "../../components/shared/events/AmountSection";
import Video from "../../components/shared/events/Video";
import Counter from "../../components/shared/events/Counter";
import TopHeader from "../../components/shared/events/TopHeader";
import { Status } from "../../const";
import BetSlip from "../../components/modules/DragonTiger/BetSlip";
import RecentWinner from "../../components/modules/DragonTiger/RecentWinner";
import { useState } from "react";
import Toast from "../../components/shared/Toast/Toast";
import { useSelector } from "react-redux";
import Setting from "./Setting";
import { handleDoubleStake } from "../../utils/handleDoubleStake";
import { handleUndoStake } from "../../utils/handleUndoStake";
import ActionButton from "../../components/modules/LuckySeven/ActionButton";

const DragonTiger = () => {
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

  const keysArray = [
    "dragonEven",
    "dragonOdd",
    "tigerEven",
    "tigerOdd",
    "dragon",
    "tie",
    "tiger",
    "suitedTie",
    "dragonRed",
    "dragonBlack",
    "tigerRed",
    "tigerBlack",
    "dragonA",
    "dragon2",
    "dragon3",
    "dragon4",
    "tigerA",
    "tiger2",
    "tiger3",
    "tiger4",
  ];

  const initialState = keysArray.reduce((acc, key) => {
    acc[key] = { show: false, stake };
    return acc;
  }, {});

  const [stakeState, setStakeState] = useState(initialState);

  const isRepeatTheBet = Object.values(stakeState).find(
    (item) => item?.selection_id && item?.show === false
  );

  const isPlaceStake = Object.values(stakeState).find((item) => item?.show);

  return (
    <main
      className="max-w-md relative flex gap-2  mx-auto flex-col overflow-x-hidden justify-between items-center bg-gradient-to-b from-[#79272d] via-[#79272d]"
      id="7updownParent"
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <TopHeader />
      {firstEvent?.status === Status.OPEN && firstEvent?.timer > 0 && (
        <Counter timer={firstEvent?.timer} />
      )}

      <Video />

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
      <div className=" bottom-0 flex flex-col w-full gap-2 px-1">
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

      {toast && (
        <div className="place-bets absolute w-full left-1/2 top-[40%] -translate-x-1/2 z-50 text-center text-white">
          <Toast message={toast} setMessage={setToast} />{" "}
        </div>
      )}
      {!toast && firstEvent?.status === Status.OPEN && (
        <div className="place-bets absolute w-full left-1/2 top-[40%] -translate-x-1/2 z-50 text-center text-white">
          PLACE YOUR BETS
        </div>
      )}
    </main>
  );
};

export default DragonTiger;
