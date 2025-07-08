import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import Counter from "../../components/shared/events/Counter";
import TopHeader from "../../components/shared/events/TopHeader";
import { Status } from "../../const";
import { useState } from "react";
import AntMedia from "../../components/shared/Antmedia/Antmedia";
import BetSlip from "./BetSlip";
import RecentWinner from "./RecentWinner";

import { useSelector } from "react-redux";
import Toast from "../../components/shared/Toast/Toast";
import ActionButton from "../../components/modules/LuckySeven/ActionButton";
import { handleDoubleStake } from "../../utils/handleDoubleStake";
import { handleUndoStake } from "../../utils/handleUndoStake";
import AmountSection from "./AmountSection";
import Setting from "./Setting";

const Sicbo = () => {
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
    donBack: { show: false, stake },
    donLay: { show: false, stake },
    aaaBack: { show: false, stake },
    aaaLay: { show: false, stake },
    sbagBack: { show: false, stake },
    sbagLay: { show: false, stake },
    dvBack: { show: false, stake },
    dvLay: { show: false, stake },
    kkpkBack: { show: false, stake },
    kkpkLay: { show: false, stake },
    gulamBack: { show: false, stake },
    gulamLay: { show: false, stake },
    kq: { show: false, stake },
    ja: { show: false, stake },
    red: { show: false, stake },
    black: { show: false, stake },
    J: { show: false, stake },
    Q: { show: false, stake },
    K: { show: false, stake },
    A: { show: false, stake },
  };

  const [stakeState, setStakeState] = useState(initialState);

  const isRepeatTheBet = Object.values(stakeState).find(
    (item) => item?.selection_id && item?.show === false
  );

  const isPlaceStake = Object.values(stakeState).find((item) => item?.show);

  return (
    <main
      className="main max-w-md relative flex  lg:aspect-video    mx-auto   flex-col overflow-x-hidden  items-center justify-between  bg-gradient-to-b from-[#3A070B] via-[#3A070B]"
      id="7updownParent"
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <TopHeader />
      {firstEvent?.status === Status.OPEN && firstEvent?.timer > 0 && (
        <Counter timer={firstEvent?.timer} />
      )}

      <div className="relative w-full  h-[20%]">
        <div className="w-full aspect-video w-[100%]  origin-top  transition-all duration-1000 ease-in-out scale-[140%]">
          <AntMedia />
        </div>
      </div>
      <div className="bottom-0  flex flex-col w-full gap-4 px-1">
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

export default Sicbo;
