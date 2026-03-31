import { useSelector } from "react-redux";

const FooterInfo = ({ firstEvent }) => {
  const { balance, username } = useSelector((state) => state.auth);
  return (
    <div className="flex z-50 text-[0.6rem] leading-snug items-center font-light justify-between w-full px-2 pt-1 pb-0 text-white">
      <div className="flex flex-col">
        <div
          className="flex gap-1 items-center transition-all duration-300"
          style={{ opacity: 0, transform: "translateY(100%)" }}
        >
          Total Bet<span className="text-yellow-400">0 FTN </span>
        </div>
        <div className="flex gap-1 items-center">
          Balance<span className="text-yellow-400">{balance} INR</span>
        </div>
        <span>{username}</span>
      </div>
      <div className="flex flex-col items-end">
        <span>Round # ${firstEvent?.roundId}</span>
        <span className="flex gap-1 items-center">
          {" "}
          {firstEvent?.eventName}
        </span>
      </div>
    </div>
  );
};

export default FooterInfo;
