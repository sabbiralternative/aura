import ChipModal from "./ChipModal";
import Chip100 from "./Chip100";
import Chip500 from "./Chip500";
import Chip10k from "./Chip10k";
import Chip5k from "./Chip5k";
import { useSelector } from "react-redux";
import Chip1k from "./Chip1k";

const Chip = ({ handleUndoStake, isPlaceStake }) => {
  const { showChip, stake } = useSelector((state) => state.global);

  return (
    <>
      {showChip && <ChipModal />}
      {!showChip && stake === 100 && (
        <Chip100
          isPlaceStake={isPlaceStake}
          handleUndoStake={handleUndoStake}
        />
      )}
      {!showChip && stake === 500 && (
        <Chip500
          isPlaceStake={isPlaceStake}
          handleUndoStake={handleUndoStake}
        />
      )}
      {!showChip && stake === 1000 && (
        <Chip1k isPlaceStake={isPlaceStake} handleUndoStake={handleUndoStake} />
      )}
      {!showChip && stake === 5000 && (
        <Chip5k isPlaceStake={isPlaceStake} handleUndoStake={handleUndoStake} />
      )}
      {!showChip && stake === 10000 && (
        <Chip10k
          isPlaceStake={isPlaceStake}
          handleUndoStake={handleUndoStake}
        />
      )}
    </>
  );
};

export default Chip;
