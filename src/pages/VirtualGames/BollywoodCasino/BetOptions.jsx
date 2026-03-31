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
      className={`flex overflow-y-auto relative flex-col flex-1 gap-2 px-2 py-8 min-h-[260px] scrollbar-none
               ${data?.[0]?.status === Status.OPEN ? "opacity-100" : "opacity-50"}`}
      style={{
        maskImage:
          "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, black, black, transparent)",
      }}
    >
      <div className="flex items-end h-full ">
        <div
          className="grid grid-cols-12 gap-1 w-full transition-transform duration-300 ease-linear origin-bottom"
          style={{ scale: 1 }}
        >
          {data?.[0]?.runners?.map((runner, index) => {
            const color = {
              0: "rgb(16, 185, 129)",
              1: "rgb(59, 130, 246)",
              2: "rgb(99, 102, 241)",
              3: "rgb(139, 92, 246)",
              4: "rgb(244, 63, 94)",
              5: "rgb(249, 115, 22)",
            };
            return (
              <div
                key={runner?.id}
                className="grid rounded-lg w-full grid-cols-1 gap-0.5 relative col-span-2"
                style={{
                  background: `linear-gradient(to top, ${color[index]}, transparent)`,
                }}
              >
                <div className="flex flex-col items-center justify-center text-center text-white">
                  <span className="opacity-0 text-[0.6rem] leading-none px-1 border py-0.5">
                    0
                  </span>
                  <div className="text-sm font-semibold">{runner?.name}</div>
                </div>
                <div
                  onClick={() =>
                    handleOpenBetSLip(
                      data[0],
                      runner,
                      runner?.back?.[0]?.price,
                      "back",
                    )
                  }
                  className={`flex background-style flex-col relative items-center gap-1 justify-center p-1 border-2 cursor-pointer rounded-t-lg ${runner?.status === Status.WINNER ? "border-yellow-400" : "border-white/10"}`}
                  style={{
                    backgroundColor: "rgb(30, 64, 175)",
                    filter: "drop-shadow(rgb(30, 64, 175) 0px 0px 4px)",
                    gridArea: "span 1 / span 1",
                  }}
                >
                  <div className="w-[32px] h-[32px]">
                    <div
                      style={{
                        position: "relative",
                        width: "32px",
                        height: "32px",
                      }}
                    ></div>
                  </div>
                  <span className="text-white font-medium text-xs __className_575e37">
                    {runner?.back?.[0]?.price}
                  </span>
                </div>
                <div
                  onClick={() =>
                    handleOpenBetSLip(
                      data[0],
                      runner,
                      runner?.lay?.[0]?.price,
                      "lay",
                    )
                  }
                  className="flex background-style flex-col relative items-center gap-1 justify-center p-1 border-2 cursor-pointer rounded-b-lg border-white/5 "
                  style={{
                    backgroundColor: "rgb(159, 18, 57)",
                    filter: "drop-shadow(rgb(159, 18, 57) 0px 0px 4px)",
                    gridArea: "span 1 / span 1",
                  }}
                >
                  <div className="w-[32px] h-[32px]">
                    <div
                      style={{
                        position: "relative",
                        width: "32px",
                        height: "32px",
                      }}
                    ></div>
                  </div>
                  <span className="text-white font-medium text-xs __className_575e37">
                    {runner?.lay?.[0]?.price}
                  </span>
                </div>
              </div>
            );
          })}

          {data?.slice(1, 3)?.map((game) =>
            game?.runners?.map((runner) => {
              const color = {
                "K-Q": "rgb(83, 83, 83)",
                "J-A": "rgb(83, 83, 83)",
                Red: "rgb(190, 18, 60)",
                Black: "rgb(39, 39, 42)",
              };

              return (
                <div
                  onClick={() =>
                    handleOpenBetSLip(
                      game,
                      runner,
                      runner?.back?.[0]?.price,
                      "back",
                    )
                  }
                  key={runner?.id}
                  className={`relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer ${runner?.status === Status.WINNER ? "border-yellow-400" : "border-white/10"}`}
                  style={{
                    backgroundColor: `${color[runner?.name]}`,
                    gridArea: "span 1 / span 3",
                    boxShadow: `${color[runner?.name]} 0px 0px 6px`,
                  }}
                >
                  <div
                    className="font-medium text-white"
                    style={{
                      WebkitTextStroke: "4px rgba(255, 255, 255, 0.25)",
                    }}
                  >
                    {runner?.name}
                  </div>
                  <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                    {runner?.back?.[0]?.price}
                  </span>
                  <div className="flex absolute top-0 left-0 justify-center items-center w-full h-full">
                    <div
                      style={{
                        position: "relative",
                        width: "32px",
                        height: "32px",
                      }}
                    ></div>
                  </div>
                </div>
              );
            }),
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default BetOptions;
