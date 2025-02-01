import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import Counter from "../../components/shared/events/Counter";
import TopHeader from "../../components/shared/events/TopHeader";
import { Status } from "../../const";
import { useState } from "react";
import Setting from "../../components/modules/LuckySeven/Setting";
import AntMedia from "../../components/shared/Antmedia/Antmedia";
import BetSlip from "./BetSlip";
import RecentWinner from "./RecentWinner";
import BalanceInfo from "./BalanceInfo";
import Card from "./Card";
import Chip from "../../components/shared/Chip/Chip";
import { useSelector } from "react-redux";
import Toast from "../../components/shared/Toast/Toast";

const TeenPattiOneDay = () => {
  const { stake } = useSelector((state) => state.global);
  const [toast, setToast] = useState(null);
  const { balance } = useSelector((state) => state.auth);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    { pollingInterval: 1000 }
  );

  const firstEvent = data?.result?.[0];

  const initialState = {
    playerABack: { show: false, stake },
    playerALay: { show: false, stake },
    playerBBack: { show: false, stake },
    playerBLay: { show: false, stake },
    aPlus: { show: false, stake },
    bPlus: { show: false, stake },
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
        const updatedObj = { ...maxSerialObject.obj };
        if (updatedObj.stake > updatedObj.actionBy) {
          updatedObj.stake -= updatedObj.actionBy;
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

  return (
    <main
      className="main max-w-md relative flex  lg:aspect-video    mx-auto   flex-col overflow-x-hidden  items-center justify-between bg-gradient-to-b from-[#1d184b] via-[#1d184b]"
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
        {/* <div
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
        </div> */}
      </div>

      <div className="bottom-0  flex flex-col w-full gap-4 px-1">
        {<Card data={firstEvent} />}
        <BetSlip
          initialState={initialState}
          stakeState={stakeState}
          setStakeState={setStakeState}
          setToast={setToast}
          data={data?.result}
          status={firstEvent?.status}
        />

        <div className="relative flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2 text-white">
            <div>
              <button className="text-text-primary glass p-2 text-sm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                  <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                </svg>
              </button>
            </div>
            <div className="rounded-full relative glass p-1 text-sm border border-white/20 w-fit">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-2 h-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <span className="absolute z-50 -translate-x-1/2 left-1/2 transition-all duration-1000 ease-in-out">
            <div>
              {firstEvent?.status === Status.OPEN && balance >= 100 && (
                <Chip
                  isPlaceStake={isPlaceStake}
                  handleUndoStake={handleUndoStake}
                />
              )}
              {balance < 100 && (
                <button className="text-text-primary glass p-1 text-xm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200">
                  <span className="px-2 text-xs text-white/70 glass">
                    Insufficient Balance
                  </span>
                </button>
              )}

              {/* <button className="text-text-primary glass p-1 text-xm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200">
                <span className="px-2 text-xs text-white/70 glass">
                  Insufficient Balance
                </span>
              </button> */}
            </div>{" "}
          </span>
          <span className="z-50 flex flex-col items-end gap-0.5">
            <button
              onClick={() => setShowSetting(true)}
              className="text-text-primary glass p-2 text-sm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>
        <div>
          <BalanceInfo firstEvent={firstEvent} />
          <RecentWinner recentWinner={firstEvent?.recent_winner} />
        </div>
      </div>
      {showSetting && (
        <Setting
          setShowSetting={setShowSetting}
          setShowFullScreen={setShowFullScreen}
          showFullScreen={showFullScreen}
        />
      )}
      {toast && (
        <div className="place-bets absolute w-full left-1/2 top-[30%] -translate-x-1/2 z-50 text-center text-white">
          <Toast message={toast} setMessage={setToast} />{" "}
        </div>
      )}
      {!toast && firstEvent?.status === Status.OPEN && (
        <div className="place-bets absolute w-full left-1/2 top-[30%] -translate-x-1/2 z-50 text-center text-white">
          PLACE YOUR BETS
        </div>
      )}
    </main>
  );
};

export default TeenPattiOneDay;
