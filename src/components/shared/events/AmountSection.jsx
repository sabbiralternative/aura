import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setBalance } from "../../../redux/features/auth/authSlice";

const AmountSection = ({
  firstEvent,
  data,
  totalWinAmount,
  setTotalWinAmount,
  setShowWinLossResult,
  showWinLossResult,
}) => {
  // const roundId = data?.[0]?.roundId;
  const dispatch = useDispatch();

  const totalBetPlace = localStorage.getItem("totalBetPlace");
  const { eventId } = useParams();
  const { balance } = useSelector((state) => state.auth);

  let totalBetAmount = 0;
  if (totalBetPlace) {
    const parseTotalBet = JSON.parse(totalBetPlace);
    if (parseTotalBet?.length > 0) {
      const filterOrderByEventId = parseTotalBet?.filter(
        (order) => order?.eventId == eventId
      );
      for (const order of filterOrderByEventId) {
        totalBetAmount = parseFloat((totalBetAmount + order?.stake).toFixed(2));
      }
    }
  }

  useEffect(() => {
    let totalWin = 0;

    if (totalBetPlace) {
      const parseTotalBet = JSON.parse(totalBetPlace);

      if (parseTotalBet && parseTotalBet.length > 0) {
        data?.forEach((games) => {
          games?.runners?.forEach((runner) => {
            if (runner?.status === "WINNER") {
              const winnerFilter = parseTotalBet?.filter(
                (order) =>
                  order?.selection_id === runner?.id &&
                  runner?.status === "WINNER"
              );

              const looserFilter = parseTotalBet?.filter(
                (order) =>
                  order?.selection_id === runner?.id &&
                  runner?.status === "ACTIVE"
              );

              let WinnerSum = 0;
              let looserSum = 0;
              if (looserFilter) {
                for (const looser of looserFilter) {
                  looserSum = looserSum + -looser?.stake;
                }
              }

              if (winnerFilter) {
                for (const winner of winnerFilter) {
                  WinnerSum += winner?.price * winner?.stake;
                }
              }

              totalWin += looserSum + WinnerSum;

              setTotalWinAmount(totalWin);
              setShowWinLossResult(true);
            }
          });
        });
      }
    }
  }, [data, totalBetPlace]);

  useEffect(() => {
    if (totalBetPlace && (totalWinAmount > 0 || showWinLossResult)) {
      const parseTotalBet = JSON.parse(totalBetPlace);
      const filterOrderByEventId = parseTotalBet?.filter(
        (order) => order?.eventId == eventId
      );
      if (totalWinAmount > 0 && filterOrderByEventId?.length > 0) {
        dispatch(setBalance(balance + parseFloat(totalWinAmount)));
        new Audio("/win.mp3").play();
      }

      const filterCurrentEventBet = parseTotalBet?.filter(
        (bet) => bet?.eventId != eventId
      );

      localStorage.setItem(
        "totalBetPlace",
        JSON.stringify(filterCurrentEventBet)
      );
    }
  }, [eventId, totalWinAmount, totalBetPlace, showWinLossResult, dispatch]);

  return (
    <div className="flex items-end justify-between w-full">
      <div className="z-10 flex flex-col text-xs font-normal capitalize text-text-primary">
        {showWinLossResult ? (
          <span className="flex items-center gap-1">
            Last Win<span className="text-yellow">{totalWinAmount}</span>
          </span>
        ) : (
          <span className="flex items-center gap-1">
            Total Bet<span className="text-yellow">{totalBetAmount}</span>
          </span>
        )}

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
