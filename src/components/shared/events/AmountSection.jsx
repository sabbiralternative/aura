import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AmountSection = ({ firstEvent, data }) => {
  const roundId = data?.[0]?.roundId;

  const totalWin = JSON.parse(localStorage.getItem("totalWin"));

  const totalBetPlace = localStorage.getItem("totalBetPlace");

  const { eventId } = useParams();
  const { balance } = useSelector((state) => state.auth);

  let totalAmount = 0;
  if (totalBetPlace) {
    const parseTotalBet = JSON.parse(totalBetPlace);
    if (parseTotalBet?.length > 0) {
      const filterOrderByEventId = parseTotalBet?.filter(
        (order) => order?.eventId == eventId
      );
      for (const order of filterOrderByEventId) {
        totalAmount = parseFloat((totalAmount + order?.stake).toFixed(2));
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

              localStorage.setItem("totalWin", totalWin.toString());
            }
          });
        });
      } else {
        const storedTotalWin = localStorage.getItem("totalWin");
        if (storedTotalWin) {
          totalWin = parseFloat(storedTotalWin);
        }
      }
    }
  }, [data, totalBetPlace]);

  useEffect(() => {
    if (totalBetPlace) {
      const parseTotalBet = JSON.parse(totalBetPlace);
      const filterCurrentEventBet = parseTotalBet?.filter(
        (bet) => bet?.eventId != eventId
      );
      localStorage.setItem(
        "totalBetPlace",
        JSON.stringify(filterCurrentEventBet)
      );
      localStorage.removeItem("totalWin");
    }
  }, [roundId, eventId]);

  return (
    <div className="flex items-end justify-between w-full">
      <div className="z-10 flex flex-col text-xs font-normal capitalize text-text-primary">
        {totalWin ? (
          <span className="flex items-center gap-1">
            Total Win<span className="text-yellow">{totalWin}</span>
          </span>
        ) : (
          <span className="flex items-center gap-1">
            Total Bet<span className="text-yellow">{totalAmount}</span>
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
