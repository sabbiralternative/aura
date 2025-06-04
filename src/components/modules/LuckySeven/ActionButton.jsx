import { useSelector } from "react-redux";
import { Status } from "../../../const";
import Chip from "../../shared/Chip/Chip";
import { playClickSound } from "../../../utils/playClickSound";
import { useState } from "react";
import Chat from "../../shared/Chat/Chat";

const ActionButton = ({
  setShowSetting,
  status,
  isPlaceStake,
  handleUndoStake,
  handleDoubleStake,
  isRepeatTheBet,
}) => {
  const { balance } = useSelector((state) => state.auth);
  const [showChat, setShowChat] = useState(false);
  return (
    <>
      {showChat && <Chat setShowChat={setShowChat} />}
      <div className="relative flex justify-between w-full">
        <div className="flex items-center justify-center gap-2 text-white">
          <div>
            <button
              onClick={() => {
                playClickSound();
                setShowChat(true);
              }}
              className="text-text-primary glass p-2 text-sm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200"
            >
              <svg viewBox="0 0 100 100" className="w-4 h-4">
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  data-role="menu-item-icon"
                  y="0%"
                >
                  <path d="M5 4h10.5c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H10l-3.99 3v-3H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1Zm12.99 17v-3H19c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1h-1v3.5c0 1.1-.9 2-2 2h-5.5l-3 2.31V17c0 .55.45 1 1 1H14l3.99 3Z"></path>
                </svg>
              </svg>
            </button>
          </div>
        </div>

        {status === Status.OPEN && balance >= 100 && (
          <Chip
            isRepeatTheBet={isRepeatTheBet}
            handleDoubleStake={handleDoubleStake}
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
        <span className="z-50 flex flex-col items-end gap-0.5">
          <button
            onClick={() => {
              setShowSetting(true);
              playClickSound();
            }}
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
    </>
  );
};

export default ActionButton;
