import Stake100 from "./Stake100";
import Stake10k from "./Stake10k";
import Stake1k from "./Stake1k";
import Stake500 from "./Stake500";
import Stake5k from "./Stake5k";

const Stake = ({ stake }) => {
  const handleVisibleStake = () => {
    if (stake < 500) {
      return <Stake100 value={stake} />;
    } else if (stake < 1000) {
      return <Stake500 value={stake} />;
    } else if (stake < 5000) {
      return <Stake1k value={stake} />;
    } else if (stake < 10000) {
      return <Stake5k value={stake} />;
    } else {
      return <Stake10k value={stake} />;
    }
  };
  return handleVisibleStake();
};

export default Stake;
