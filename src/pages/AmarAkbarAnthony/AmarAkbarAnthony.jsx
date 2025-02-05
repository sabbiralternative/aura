import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import RecentWinner from "../../components/modules/LuckySeven/RecentWinner";
import AmountSection from "../../components/shared/events/AmountSection";

// import Setting from "../../components/modules/LuckySeven/Setting";

import Video from "../../components/shared/events/Video";
import Counter from "../../components/shared/events/Counter";
import TopHeader from "../../components/shared/events/TopHeader";
import { Status } from "../../const";
import Card from "../../components/modules/AmarAkbarAnthony/Card";
import BetSlip from "../../components/modules/AmarAkbarAnthony/BetSlip";
import ActionButton from "../../components/modules/AmarAkbarAnthony/ActionButton";
import { useEffect, useState } from "react";
import Setting from "../../components/modules/LuckySeven/Setting";
import { useSelector } from "react-redux";
import Toast from "../../components/shared/Toast/Toast";

const AmarAkbarAnthony = () => {
  const [totalBet, setTotalBet] = useState(0);
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
  const roundId = firstEvent?.roundId;

  const initialState = {
    amarBack: { show: false, stake },
    amarLay: { show: false, stake },
    akbarBack: { show: false, stake },
    akbarLay: { show: false, stake },
    anthonyBack: { show: false, stake },
    anthonyLay: { show: false, stake },
    odd: { show: false, stake },
    even: { show: false, stake },
    black: { show: false, stake },
    red: { show: false, stake },
    under7: { show: false, stake },
    over7: { show: false, stake },
  };

  const [stakeState, setStakeState] = useState(initialState);

  const handleUndoStake = () => {
    setStakeState((prev) => {
      const prevValues = Object.entries(prev);
      const maxSerialObject = prevValues.reduce((maxObj, [key, currentObj]) => {
        if (currentObj.serial > (maxObj?.serial || 0)) {
          return { key, obj: currentObj };
        }
        return maxObj;
      }, {});

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
    });
  };

  const isPlaceStake = Object.values(stakeState).find((item) => item?.show);

  useEffect(() => {
    setTotalBet(0);
  }, [roundId]);

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
      <div className=" transition-all duration-1000 ease-in-out bottom-48  ">
        {firstEvent?.status === Status.SUSPENDED && <Card data={firstEvent} />}
      </div>
      <BetSlip
        setTotalBet={setTotalBet}
        initialState={initialState}
        stakeState={stakeState}
        setStakeState={setStakeState}
        setToast={setToast}
        data={data?.result}
        status={firstEvent?.status}
      />
      <div className=" bottom-0 flex flex-col w-full gap-2 px-1">
        <ActionButton
          handleUndoStake={handleUndoStake}
          isPlaceStake={isPlaceStake}
          status={firstEvent?.status}
          setShowSetting={setShowSetting}
        />
        <AmountSection totalBet={totalBet} firstEvent={firstEvent} />
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

export default AmarAkbarAnthony;
