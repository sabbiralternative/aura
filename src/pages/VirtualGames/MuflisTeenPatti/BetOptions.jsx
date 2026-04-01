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
      className={`flex overflow-y-auto relative flex-col flex-1 gap-2 px-2 py-8  min-h-[260px] scrollbar-none
               ${data?.[0]?.status === Status.OPEN ? "opacity-100" : "opacity-50"}`}
      style={{
        maskImage:
          "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, black, black, transparent)",
      }}
    >
      <div className="flex items-end h-full ">
        <div
          className="grid grid-cols-2 origin-bottom gap-0.5 transition-transform duration-300 ease-linear w-full __className_575e37"
          style={{ scale: 1 }}
        >
          {data?.[0]?.runners?.map((runner, index) => {
            const color = {
              0: "rgb(67, 56, 202)",
              1: "rgb(109, 40, 217)",
            };
            return (
              <div
                key={runner?.id}
                className="grid w-full grid-cols-2 gap-0.5 p-1 rounded-lg relative"
                style={{
                  background: `linear-gradient(to top, ${color[index]}, transparent)`,
                }}
              >
                <div className="col-span-2 flex gap-1 items-center justify-center font-semibold text-center text-white">
                  Player A
                </div>
                <div
                  onClick={() =>
                    handleOpenBetSLip(
                      data?.[0],
                      runner,
                      runner?.back?.[0]?.price,
                      "back",
                    )
                  }
                  className={`flex background-style-6 gap-1 flex-col relative items-center justify-center p-2 border-2 rounded-lg cursor-pointer ${runner?.status === Status.WINNER ? "border-yellow-400" : "border-white/10"}`}
                  style={{
                    "--c2": `${color[index]}`,
                    gridArea: "span 1 / span 2",
                  }}
                >
                  <span className="absolute bottom-0 left-1 text-xs font-medium text-white">
                    {runner?.back?.[0]?.price}
                  </span>
                  <div className="z-50 h-[36px] w-[36px]">
                    <div
                      style={{
                        position: "relative",
                        width: "36px",
                        height: "36px",
                      }}
                    ></div>
                  </div>
                  <span
                    className="absolute top-1/2 font-medium text-white -translate-y-1/2"
                    style={{
                      WebkitTextStroke: "4px rgba(255, 255, 255, 0.25)",
                    }}
                  >
                    {runner?.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
};

export default BetOptions;
