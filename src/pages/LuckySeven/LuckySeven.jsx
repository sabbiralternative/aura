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

  const handleUndoStake = () => {
    new Audio("/undo.mp3").play();
    setStakeState((prev) => {
      const updatedState = { ...prev };
      const prevValues = Object.entries(prev);
      const isPlacedDouble = Object.values(stakeState).filter(
        (item) => item?.double
      );

      if (isPlacedDouble?.length > 0) {
        Object.keys(updatedState).forEach((key) => {
          if (updatedState[key].show) {
            updatedState[key] = {
              ...updatedState[key],
              stake: updatedState[key].stake / 2,
              double: updatedState[key].double - 1,
            };
          }
        });

        return updatedState;
      } else {
        const maxSerialObject = prevValues.reduce(
          (maxObj, [key, currentObj]) => {
            if (currentObj.serial > (maxObj?.serial || 0)) {
              return { key, obj: currentObj };
            }
            return maxObj;
          },
          {}
        );

        if (maxSerialObject.obj) {
          const updatedObj = {
            ...maxSerialObject.obj,
            undo: [...maxSerialObject.obj.undo],
          };

          if (
            updatedObj.undo.length > 0 &&
            updatedObj.stake > updatedObj.undo[updatedObj.undo.length - 1]
          ) {
            updatedObj.stake -= updatedObj.undo.pop();
          } else {
            updatedObj.show = false;
            delete updatedObj.serial;
          }

          return {
            ...prev,
            [maxSerialObject.key]: updatedObj,
          };
        }

        return prev;
      }
    });
  };
  const isRepeatTheBet = Object.values(stakeState).find(
    (item) => item?.selection_id && item?.show === false
  );

  const handleDoubleStake = () => {
    new Audio("/bet.mp3").play();
    if (!isRepeatTheBet) {
      setDouble(true);
      setStakeState((prevState) => {
        const updatedState = { ...prevState };
        console.log({ updatedState });
        const maxSerial = Math.max(
          0,
          ...Object.values(updatedState)
            .map((item) => item.serial)
            .filter((serial) => serial !== undefined)
        );

        const oddNames = [];

        Object.keys(updatedState).forEach((key) => {
          if (updatedState[key].show) {
            oddNames.push(key);
          }
        });
        setAnimation(oddNames);

        setTimeout(() => {
          Object.keys(updatedState).forEach((key) => {
            if (updatedState[key].show) {
              const currentStake = updatedState[key].stake;
              updatedState[key] = {
                ...updatedState[key],
                undo: [...updatedState[key].undo, currentStake],
                serial: updatedState[key]?.serial
                  ? updatedState[key]?.serial
                  : maxSerial + 1,
                stake: updatedState[key].stake * 2,
                double: updatedState[key].double
                  ? updatedState[key].double + 1
                  : 1,
              };
            }
          });

          setDouble(false);
          setAnimation([]);
        }, 500);

        return updatedState;
      });
    } else {
      setStakeState((prev) => {
        const updatedState = { ...prev };
        setDouble(true);
        const oddNames = [];
        Object.keys(updatedState).forEach((key) => {
          if (updatedState[key].selection_id && !updatedState[key].show) {
            oddNames.push(key);
          }
        });
        setAnimation(oddNames);

        setTimeout(() => {
          setAnimation([]);
          Object.keys(updatedState).forEach((key) => {
            if (updatedState[key].selection_id && !updatedState[key].show) {
              updatedState[key] = {
                ...updatedState[key],
                show: true,
              };
            }
          });
        }, 500);

        return updatedState;
      });
    }
  };

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
          handleDoubleStake={handleDoubleStake}
          handleUndoStake={handleUndoStake}
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
          title="7 up &amp; Down"
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
