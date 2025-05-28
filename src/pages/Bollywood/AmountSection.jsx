import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setBalance } from "../../redux/features/auth/authSlice";

const AmountSection = ({
  firstEvent,
  data,
  totalWinAmount,
  setTotalWinAmount,
  setShowWinLossResult,
  showWinLossResult,
}) => {
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
        if (order?.isBack === 0) {
          totalBetAmount = parseFloat(
            (totalBetAmount + order?.stake).toFixed(2)
          );
        } else {
          const calculateTotalPrice =
            totalBetAmount + (order?.price * order?.stake - order?.stake);
          totalBetAmount = parseFloat(calculateTotalPrice.toFixed(2));
        }
      }
    }
  }

  useEffect(() => {
    let totalWin = 0;

    if (totalBetPlace) {
      const parseTotalBet = JSON.parse(totalBetPlace);

      if (parseTotalBet && parseTotalBet.length > 0) {
        // 🔍 Check if at least one runner has status === "WINNER"
        const hasWinner = data?.some((games) =>
          games?.runners?.some((runner) => runner?.status === "WINNER")
        );

        if (hasWinner) {
          data?.forEach((games) => {
            games?.runners?.forEach((runner) => {
              const winnerFilter = parseTotalBet?.filter(
                (order) =>
                  order?.selection_id === runner?.id &&
                  runner?.status === "ACTIVE"
              );

              const looserFilter = parseTotalBet?.filter(
                (order) =>
                  order?.selection_id === runner?.id &&
                  runner?.status === "WINNER"
              );

              let WinnerSum = 0;
              let looserSum = 0;

              if (looserFilter) {
                for (const looser of looserFilter) {
                  looserSum += -looser?.stake;
                }
              }

              if (winnerFilter) {
                for (const winner of winnerFilter) {
                  if (winner?.isBack === 1) {
                    WinnerSum += winner?.stake;
                  } else {
                    WinnerSum += winner?.price * winner?.stake;
                  }
                }
              }

              totalWin += looserSum + WinnerSum;
            });
          });

          setTotalWinAmount(totalWin);
          setShowWinLossResult(true);
        }
      }
    }
  }, [data, totalBetPlace]);

  useEffect(() => {
    if (totalBetPlace && (totalWinAmount != null || showWinLossResult)) {
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
  }, [eventId, totalWinAmount, showWinLossResult]);

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
        <span className="whitespace-nowrap">{firstEvent?.eventName}</span>
      </div>
    </div>
  );
};

export default AmountSection;
