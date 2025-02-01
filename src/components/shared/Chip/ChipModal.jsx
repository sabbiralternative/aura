import { useDispatch } from "react-redux";
import Stake100 from "./Stake100";
import Stake10k from "./Stake10k";
import Stake1k from "./Stake1k";
import Stake500 from "./Stake500";
import Stake5k from "./Stake5k";
import { setShowChip } from "../../../redux/features/stateSlice";

const ChipModal = ({ handleUndoStake }) => {
  const dispatch = useDispatch();

  return (
    <div
      className=" relative flex flex-col items-center w-fit  gap-2 select-none h-fit text-text-primary transition-all ease-in-out duration-500 opacity-100
     "
    >
      <div className="flex  items-center justify-center w-full gap-3 h-fit flex-row">
        <div
          onClick={handleUndoStake}
          className="flex flex-col items-center justify-center w-12 text-xs capitalize transition-opacity ease-in-out cursor-pointer"
          style={{
            zIndex: 997,
            opacity: "0.5",
            cursor: "not-allowed",
            pointerEvents: "none",
          }}
        >
          <div className="flex items-center justify-center h-4 aspect-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-[25px] h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span>undo</span>
        </div>
        <div
          className="relative flex flex-col items-center h-fit w-fit "
          style={{ zIndex: 998 }}
        >
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/80 via-transparent to-transparent  p-64  -space-x-[40px] transition-all rounded-full top-1/2 -translate-y-1/2 z-50  ease-in-out duration-200 absolute   flex items-center justify-center w-fit max-w-xl h-fit  ">
            <Stake100 value={100} />
            <Stake500 value={500} />
            <Stake1k value="1K" />
            <Stake5k value="5K" />
            <Stake10k value="10K" />
          </div>
          <div
            onClick={() => dispatch(setShowChip(false))}
            className="relative flex items-center justify-center z-50"
          >
            <button
              className="flex items-center justify-center p-2 text-white rounded-full bg-white/10"
              style={{ opacity: 1, pointerEvents: "auto" }}
            >
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
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center w-12 text-xs capitalize transition-opacity ease-in-out cursor-pointer"
          style={{
            zIndex: 997,
            opacity: "0.5",
            cursor: "not-allowed",
            pointerEvents: "none",
          }}
        >
          <div className="flex items-center justify-center h-4 aspect-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span>repeat</span>
        </div>
      </div>
    </div>
  );
};

export default ChipModal;
