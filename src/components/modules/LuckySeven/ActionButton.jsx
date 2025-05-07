import { useSelector } from "react-redux";
import { Status } from "../../../const";
import Chip from "../../shared/Chip/Chip";
import { playClickSound } from "../../../utils/playClickSound";

const ActionButton = ({
  setShowSetting,
  status,
  isPlaceStake,
  handleUndoStake,
  handleDoubleStake,
  isRepeatTheBet,
}) => {
  const { balance } = useSelector((state) => state.auth);
  return (
    <div className="relative flex justify-between w-full">
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
  );
};

export default ActionButton;
