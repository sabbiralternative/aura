import { useDispatch } from "react-redux";
import { Status } from "../../../const";
import { setPlaceBetValues } from "../../../redux/features/events/eventSlice";

const BetOptions = ({ data }) => {
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
      className={`flex overflow-y-auto relative flex-col flex-1 gap-2 px-2 py-8  min-h-[260px] scrollbar-none ${data?.[0]?.status === Status.OPEN ? "opacity-100" : "opacity-50"}`}
      style={{
        maskImage:
          "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, black, black, transparent)",
      }}
    >
      <div className="flex items-end h-full ">
        <div
          className="origin-bottom gap-0.5 transition-transform duration-300 ease-linear w-full flex flex-col overflow-auto"
          style={{ scale: 1 }}
        >
          <div className="flex flex-col gap-0.5">
            <div className="grid grid-cols-2 gap-0.5">
              {data?.[0]?.runners?.map((runner, index) => {
                const color = {
                  0: "rgb(30, 64, 175)",
                  1: "rgb(159, 18, 57)",
                };
                return (
                  <div
                    onClick={() =>
                      handleOpenBetSLip(
                        data?.[0],
                        runner,
                        runner?.back?.[0]?.price,
                        "back",
                      )
                    }
                    key={runner?.id}
                    className={`flex background-style-2 gap-1 flex-col overflow-hidden relative items-center justify-center p-2 pb-4 border-2 rounded-lg cursor-pointer min-h-[60px] rounded-l-lg ${runner?.status === Status.WINNER ? "border-yellow-400" : "border-white/10"}`}
                    style={{ backgroundColor: `${color[index]}` }}
                  >
                    <div className="flex absolute top-0 left-0 justify-center items-center w-full h-full pointer-events-none z-20">
                      <div className="h-[32px]">
                        <div
                          style={{
                            position: "relative",
                            width: "32px",
                            height: "32px",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      className="font-bold text-white text-center text-xs sm:text-sm flex flex-col items-center"
                      style={{
                        WebkitTextStroke: "4px rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      <span className="text-lg font-semibold opacity-90">
                        {runner?.name}
                      </span>
                    </div>
                    <span className="text-white/70 font-medium text-[0.6rem] absolute bottom-0">
                      {runner?.back?.[0]?.price}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetOptions;
