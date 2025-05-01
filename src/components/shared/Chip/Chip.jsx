import ChipModal from "./ChipModal";
import Chip100 from "./Chip100";
import Chip500 from "./Chip500";
import Chip10k from "./Chip10k";
import Chip5k from "./Chip5k";
import { useSelector } from "react-redux";
import Chip1k from "./Chip1k";

const Chip = ({ handleUndoStake, isPlaceStake, handleDoubleStake }) => {
  const { showChip, stake } = useSelector((state) => state.global);

  return (
    <>
      {showChip && <ChipModal />}
      {!showChip && (
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
                opacity: isPlaceStake ? 1 : "0.5",
                cursor: isPlaceStake ? "pointer" : "not-allowed",
                pointerEvents: isPlaceStake ? "auto" : "none",
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

            {stake === 100 && <Chip100 />}
            {stake === 500 && <Chip500 />}
            {stake === 1000 && <Chip1k />}
            {stake === 5000 && <Chip5k />}
            {stake === 10000 && <Chip10k />}
            <div
              onClick={handleDoubleStake}
              className="flex flex-col items-center justify-center w-12 text-xs capitalize transition-opacity ease-in-out cursor-pointer"
              style={{
                zIndex: 997,
                opacity: isPlaceStake ? "1" : "0.5",
                cursor: isPlaceStake ? "pointer" : "not-allowed",
                pointerEvents: isPlaceStake ? "auto" : "none",
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
              <span>Double</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chip;
