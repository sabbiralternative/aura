const BalanceInfo = () => {
  return (
    <div className="flex items-end justify-between w-full">
      <div className="z-10 flex flex-col text-xs font-normal capitalize text-text-primary">
        <span className="flex items-center gap-1">
          Total Bet<span className="text-yellow">0</span>
        </span>
        <span className="flex items-center gap-1">
          Balance
          <span className="text-yellow">
            <span>₹0.00</span>
          </span>
        </span>
      </div>
      <div className="z-10 flex flex-col items-end font-normal text-xs tracking-wide capitalize text-text-primary">
        <span className="flex gap-0.5 items-center text-white/50">
          #107488826
        </span>
        <span className="whitespace-nowrap">
          Teenpatti T20
          <span className="text-yellow">
            <span>₹100.00</span> - <span>₹2,00,000.00</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default BalanceInfo;
