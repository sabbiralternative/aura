import ChipModal from "./ChipModal";
import Chip100 from "./Chip100";
import Chip500 from "./Chip500";
import Chip10k from "./Chip10k";
import Chip5k from "./Chip5k";
import { useSelector } from "react-redux";
import Chip1k from "./Chip1k";

const Chip = () => {
  const { showChip, stake } = useSelector((state) => state.global);

  return (
    <>
      {showChip && <ChipModal />}
      {!showChip && stake === 100 && <Chip100 />}
      {!showChip && stake === 500 && <Chip500 />}
      {!showChip && stake === 1000 && <Chip1k />}
      {!showChip && stake === 5000 && <Chip5k />}
      {!showChip && stake === 10000 && <Chip10k />}
    </>
  );
};

export default Chip;
