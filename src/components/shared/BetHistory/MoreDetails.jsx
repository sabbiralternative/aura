import { useEffect, useRef } from "react";
import Style from "./BetDetails/Style";
import WinnerTable from "./BetDetails/WinnerTable";
import BetDetailsTable from "./BetDetails/BetDetailsTable";
import { useParams } from "react-router-dom";

const MoreDetails = ({ setRoundId, bets }) => {
  const ref = useRef();
  const { eventId } = useParams();

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="flex flex-col w-full pt-2 overflow-hidden divide-y-2 rounded-lg bg-controls-idle divide-dashed divide-controls-idle
        "
      >
        <div className="flex flex-col gap-2 px-4 py-1 text-white slideInAnimation">
          <div className="flex justify-between ">
            <span className="text-sm text-white">
              <span className="text-white/60">Table:</span>{" "}
              {bets?.result?.game_details?.table}
            </span>
          </div>
          <div className="flex justify-between ">
            <span className="text-sm text-white">
              <span className="text-white/60">Game Resolved:</span>{" "}
              {bets?.result?.game_details?.game_resolved}
            </span>
          </div>
          <div className="flex justify-between ">
            <span className="text-sm text-white">
              <span className="text-white/60"> Game Number:</span>{" "}
              {bets?.result?.game_details?.game_number}
            </span>
          </div>
        </div>

        <div className="header--c62fa">
          <div className="wrapper--f4eb9" data-role="scrollable-wrapper">
            <div
              data-role="scrollable"
              className="scrollable--96151 pan--202dc"
            >
              <div className="jsClientsWrapperStylesToSsrContent--72a1c">
                <Style />
                <div>
                  <div className="ssr_dt_gameRound">
                    <WinnerTable data={bets} eventId={eventId} />
                    <BetDetailsTable data={bets} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setRoundId(null)}
        className="flex  items-center justify-center gap-2  py-2 bg-controls-idle w-full rounded-lg tracking-wider font-semibold cursor-pointer text-red"
      >
        Hide Details
      </button>
    </>
  );
};

export default MoreDetails;
