import { useSelector } from "react-redux";

const AmountSection = ({ firstEvent,totalBet }) => {
  const { balance } = useSelector((state) => state.auth);

  return (
    <div className="flex items-end justify-between w-full">
      <div className="z-10 flex flex-col text-xs font-normal capitalize text-text-primary">
        <span className="flex items-center gap-1">
          Total Win<span className="text-yellow">{totalBet}</span>
        </span>
        <span className="flex items-center gap-1">
          Balance
          <span className="text-yellow">
            <span>₹{balance}</span>
          </span>
        </span>
      </div>
      <div className="z-10 flex flex-col items-end font-normal text-xs tracking-wide capitalize text-text-primary">
        <span className="flex gap-0.5 items-center text-white/50">
          {firstEvent?.roundId}
        </span>
        <span className="whitespace-nowrap">
          {firstEvent?.eventName}
          <span className="text-yellow">
            <span>₹100.00</span> - <span>₹2,00,000.00</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default AmountSection;
