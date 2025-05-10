import { useState } from "react";
import MoreDetails from "./MoreDetails";
import { useBets } from "../../../hooks/useBets";

const TotalBet = ({ betHistories }) => {
  const { mutate: handleBetDetails, data: bets } = useBets();
  const [roundId, setRoundId] = useState(null);

  const handleToggleTab = (round_id) => {
    if (roundId === round_id) {
      setRoundId(null);
    } else {
      handleBetDetails({ round_id });
      setRoundId(round_id);
    }
  };

  return (
    <>
      <div className="flex w-full gap-1 px-2 text-sm font-semibold text-white">
        <span className="mx-auto">
          {" "}
          {betHistories?.length > 0
            ? `${betHistories?.length} Bets`
            : "No bets found"}
        </span>
      </div>
      <div className="flex flex-col-reverse gap-2">
        {/* First Bet */}
        {betHistories?.map((bet, i) => {
          return (
            <div key={i} className="flex flex-col items-center ">
              <div
                id="child-0"
                className={`flex flex-col w-full gap-[2px] py-2 rounded-lg bg-controls-idle border-l-8  ${
                  bet?.amount > 0 ? "border-green" : "border-red"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between w-full gap-2 px-4 py-1 text-white ">
                  <h1 className="font-bold tracking-wider uppercase ">
                    {bet?.event_name}
                  </h1>
                </div>
                <div className="flex items-center gap-2 px-4 py-1 text-sm text-white/60 bg-controls-idle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                      clipRule="evenodd"
                    />
                    <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                  </svg>
                  Profit/Loss
                  <span
                    className={`ml-auto text-base font-semibold  ${
                      bet?.amount > 0 ? "text-green-500" : "text-red"
                    }`}
                  >
                    ₹{bet?.amount}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-4 py-1 text-sm text-white/60 bg-controls-idle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Settled At
                  <span className="ml-auto font-semibold ">
                    <div className="tracking-wider text-white w-fit">
                      <span className="text-sm">{bet?.date}</span>
                      {/* <span className="text-xs font-light opacity-75">
                   
                        12:13:00 PM
                      </span> */}
                    </div>
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between w-full gap-2 px-4 pt-2 text-white ">
                  <h3 className="text-xs tracking-wider">{bet?.round_id}</h3>
                </div>
              </div>
              {roundId === bet?.round_id && bets && bets?.length > 0 ? (
                <MoreDetails bets={bets} setRoundId={setRoundId} />
              ) : (
                <>
                  <div className="w-[96%]  border-t-[2px] border-white/20 border-dashed" />
                  <button
                    onClick={() => handleToggleTab(bet?.round_id)}
                    className="flex  items-center justify-center gap-2  py-2 bg-controls-idle w-full rounded-lg tracking-wider font-semibold cursor-pointer text-white/70"
                  >
                    More Details
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TotalBet;
