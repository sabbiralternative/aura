import { useDispatch } from "react-redux";
import { Lock } from "../../../assets/icon";
import { Status } from "../../../const";
import { setPlaceBetValues } from "../../../redux/features/events/eventSlice";

const ClassicBetOptions = ({ data }) => {
  const dispatch = useDispatch();
  const handleOpenBetSLip = (game, runner, price, type) => {
    if (game?.status !== Status.OPEN) return;
    const payload = {
      marketId: game.marketId,
      roundId: game.roundId,
      name: game.name,
      eventId: game.eventId,
      eventName: game.eventName,
      selection_id: runner?.id,
      runner_name: runner?.name,
      isback: type === "back" ? 0 : 1,
      event_id: game?.eventId,
      event_type_id: game?.event_type_id,
      price,
    };
    dispatch(setPlaceBetValues(payload));
  };
  return (
    <div
      id="bet-options-container"
      className={`flex overflow-y-auto relative flex-col flex-1 gap-2 px-2 py-8  min-h-[260px] scrollbar-none
               ${data?.[0]?.status === Status.OPEN ? "opacity-100" : "opacity-50"}`}
      style={{
        maskImage:
          "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, black, black, transparent)",
      }}
    >
      {data?.map((game, index) => {
        return (
          <div
            key={index}
            className="flex flex-col w-full gap-1 p-1 text-white border rounded-2xl bg-white/5  border-green-500/20"
          >
            <div className="flex gap-1 justify-between items-center p-1 px-2 w-full">
              <span className="text-sm capitalize">{game?.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full  ${game?.status === Status.OPEN ? "bg-green-600" : "bg-red-600"}`}
              >
                {data?.[0]?.status}
              </span>
            </div>
            {game?.runners?.map((runner) => {
              return (
                <div
                  key={runner?.id}
                  className="flex relative overflow-hidden items-center transition-all duration-500 border justify-between w-full gap-1 p-1 rounded-xl bg-black/20 border-transparent"
                >
                  <div
                    className="absolute flex items-center origin-center justify-center z-50 p-0.5 text-yellow-500 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 border border-yellow-500 rounded-full left-3/4 top-1/2 bg-yellow-500/10"
                    style={{ pointerEvents: "none", opacity: 0, scale: "0.5" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path
                        d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1 justify-center ml-3">
                    <span className="text-xs font-light">{runner?.name}</span>
                    <div className="flex text-[0.6rem] gap-2 font-light items-center" />
                  </div>
                  <div
                    className="grid items-center justify-center w-1/2 grid-cols-2 gap-0.5 h-10 animate__animated animate__headShake"
                    style={{ animationDelay: "0ms" }}
                  >
                    <button
                      onClick={() =>
                        handleOpenBetSLip(
                          game,
                          runner,
                          runner?.back?.[0]?.price,
                          "back",
                        )
                      }
                      id="backButton-66778"
                      className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full border border-blue-600 p-4 overflow-hidden bg-blue-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-blue-500/40 rounded-l-lg cursor-pointer "
                    >
                      <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                        {runner?.status === Status.SUSPENDED && <Lock />}
                        {runner?.status !== Status.SUSPENDED &&
                          runner?.back?.[0]?.price}
                      </span>
                    </button>
                    <button
                      onClick={() =>
                        handleOpenBetSLip(
                          game,
                          runner,
                          runner?.lay?.[0]?.price,
                          "lay",
                        )
                      }
                      id="layButton-66778"
                      className="relative transition-all duration-300 ease-linear flex flex-col items-center justify-center h-full p-4 overflow-hidden border border-rose-600 rounded-r-lg cursor-pointer bg-rose-800 shadow-[0_0_6px_rgba(0,0,0,0.3)] shadow-rose-500/40"
                    >
                      <span className="absolute top-1/2 left-1/2 text-xs tracking-widest -translate-x-1/2 -translate-y-1/2">
                        {runner?.status === Status.SUSPENDED && <Lock />}
                        {runner?.status !== Status.SUSPENDED &&
                          runner?.lay?.[0]?.price}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ClassicBetOptions;
