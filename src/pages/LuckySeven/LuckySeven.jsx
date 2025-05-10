import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import RecentWinner from "../../components/modules/LuckySeven/RecentWinner";
import ActionButton from "../../components/modules/LuckySeven/ActionButton";
import BetSlip from "../../components/modules/LuckySeven/BetSlip";
import Setting from "../../components/modules/LuckySeven/Setting";
import Card from "../../components/modules/LuckySeven/Card";
import Video from "../../components/shared/events/Video";
import TopHeader from "../../components/shared/events/TopHeader";
import { Status } from "../../const";
import Counter from "../../components/shared/events/Counter";
import AmountSection from "../../components/shared/events/AmountSection";
import { useState } from "react";
import { useSelector } from "react-redux";
import Toast from "../../components/shared/Toast/Toast";
import { handleUndoStake } from "../../utils/handleUndoStake";
import { handleDoubleStake } from "../../utils/handleDoubleStake";

const LuckySeven = () => {
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
    even: { show: false, stake },
    up: { show: false, stake },
    odd: { show: false, stake },
    red: { show: false, stake },
    down: { show: false, stake },
    black: { show: false, stake },
    seven: { show: false, stake },
    diamond: { show: false, stake },
    heart: { show: false, stake },
    spade: { show: false, stake },
    club: { show: false, stake },
  };

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
      <div className=" transition-all duration-1000 ease-in-out bottom-48">
        {firstEvent?.status === Status.SUSPENDED && <Card data={firstEvent} />}
      </div>
      {/* <SuspendedBetSlip /> */}
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

export default LuckySeven;
