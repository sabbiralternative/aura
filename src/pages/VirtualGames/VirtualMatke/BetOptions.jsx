const BetOptions = ({ setShowBetSlip }) => {
  return (
    <div
      id="bet-options-container"
      className="flex overflow-y-auto relative flex-col flex-1 gap-2 px-2 py-8  min-h-[260px] scrollbar-none
              opacity-100
              "
      style={{
        maskImage:
          "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, black, black, transparent)",
      }}
    >
      <div className="flex items-start w-full ">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-1 items-center">
            <div className="flex-grow h-0.5 rounded-full bg-gradient-to-r from-transparent to-[#C59F39]" />
            <div className="w-2 h-2 rounded-sm rotate-45 bg-[#C59F39]" />
            <div className="flex-grow h-0.5 rounded-full bg-gradient-to-r from-[#C59F39] to-transparent" />
          </div>
          <div className="grid grid-cols-4 gap-1">
            <div
              onClick={() => setShowBetSlip(true)}
              className="flex relative pt-2 pb-3 px-4 rounded-xl bg-gradient-to-br lg:hover:border-white/20 gap-1 text-xs font-medium border items-center justify-center whitespace-nowrap from-white/80 via-white to-white/80 text-black border-white/20"
            >
              Single
              <span className="text-black bg-white text-[0.6rem] leading-none px-2 rounded-t font-medium absolute bottom-0 ">
                9.5
              </span>
            </div>
            <div className="flex relative pt-2 pb-3 px-4 rounded-xl bg-gradient-to-br lg:hover:border-white/20 gap-1 text-xs font-medium border items-center justify-center whitespace-nowrap from-white/10 via-white/20 to-white/10 text-white border-white/10">
              Odd Even
              <span className="text-black bg-white text-[0.6rem] leading-none px-2 rounded-t font-medium absolute bottom-0 ">
                1.95
              </span>
            </div>
            <div className="flex relative pt-2 pb-3 px-4 rounded-xl bg-gradient-to-br lg:hover:border-white/20 gap-1 text-xs font-medium border items-center justify-center whitespace-nowrap from-white/10 via-white/20 to-white/10 text-white border-white/10">
              High Low
              <span className="text-black bg-white text-[0.6rem] leading-none px-2 rounded-t font-medium absolute bottom-0 ">
                1.95
              </span>
            </div>
            <div className="flex relative pt-2 pb-3 px-4 rounded-xl bg-gradient-to-br lg:hover:border-white/20 gap-1 text-xs font-medium border items-center justify-center whitespace-nowrap from-white/10 via-white/20 to-white/10 text-white border-white/10">
              Single Pana
              <span className="text-black bg-white text-[0.6rem] leading-none px-2 rounded-t font-medium absolute bottom-0 ">
                140
              </span>
            </div>
            <div className="flex relative pt-2 pb-3 px-4 rounded-xl bg-gradient-to-br lg:hover:border-white/20 gap-1 text-xs font-medium border items-center justify-center whitespace-nowrap from-white/10 via-white/20 to-white/10 text-white border-white/10">
              Double Pana
              <span className="text-black bg-white text-[0.6rem] leading-none px-2 rounded-t font-medium absolute bottom-0 ">
                240
              </span>
            </div>
            <div className="flex relative pt-2 pb-3 px-4 rounded-xl bg-gradient-to-br lg:hover:border-white/20 gap-1 text-xs font-medium border items-center justify-center whitespace-nowrap from-white/10 via-white/20 to-white/10 text-white border-white/10">
              Trio
              <span className="text-black bg-white text-[0.6rem] leading-none px-2 rounded-t font-medium absolute bottom-0 ">
                700
              </span>
            </div>
            <div className="flex relative pt-2 pb-3 px-4 rounded-xl bg-gradient-to-br lg:hover:border-white/20 gap-1 text-xs font-medium border items-center justify-center whitespace-nowrap from-white/10 via-white/20 to-white/10 text-white border-white/10">
              Common SP
              <span className="text-black bg-white text-[0.6rem] leading-none px-2 rounded-t font-medium absolute bottom-0 ">
                140
              </span>
            </div>
            <div className="flex relative pt-2 pb-3 px-4 rounded-xl bg-gradient-to-br lg:hover:border-white/20 gap-1 text-xs font-medium border items-center justify-center whitespace-nowrap from-white/10 via-white/20 to-white/10 text-white border-white/10">
              Common DP
              <span className="text-black bg-white text-[0.6rem] leading-none px-2 rounded-t font-medium absolute bottom-0 ">
                240
              </span>
            </div>
          </div>
          <div className="grid w-full grid-cols-5 gap-0.5">
            <div
              className="relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer border-white/10 "
              style={{
                backgroundColor: "rgb(11, 84, 252)",
                gridArea: "span 1 / span 1",
                boxShadow: "rgb(11, 84, 252) 0px 0px 6px",
              }}
            >
              <div className="font-medium text-white">1</div>
              <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                9.5
              </span>
              <div className="flex absolute top-0 left-0 justify-center items-start w-full h-full" />
            </div>
            <div
              className="relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer border-white/10 "
              style={{
                backgroundColor: "rgb(11, 84, 252)",
                gridArea: "span 1 / span 1",
                boxShadow: "rgb(11, 84, 252) 0px 0px 6px",
              }}
            >
              <div className="font-medium text-white">2</div>
              <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                9.5
              </span>
              <div className="flex absolute top-0 left-0 justify-center items-start w-full h-full" />
            </div>
            <div
              className="relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer border-white/10 "
              style={{
                backgroundColor: "rgb(11, 84, 252)",
                gridArea: "span 1 / span 1",
                boxShadow: "rgb(11, 84, 252) 0px 0px 6px",
              }}
            >
              <div className="font-medium text-white">3</div>
              <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                9.5
              </span>
              <div className="flex absolute top-0 left-0 justify-center items-start w-full h-full" />
            </div>
            <div
              className="relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer border-white/10 "
              style={{
                backgroundColor: "rgb(11, 84, 252)",
                gridArea: "span 1 / span 1",
                boxShadow: "rgb(11, 84, 252) 0px 0px 6px",
              }}
            >
              <div className="font-medium text-white">4</div>
              <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                9.5
              </span>
              <div className="flex absolute top-0 left-0 justify-center items-start w-full h-full" />
            </div>
            <div
              className="relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer border-white/10 "
              style={{
                backgroundColor: "rgb(11, 84, 252)",
                gridArea: "span 1 / span 1",
                boxShadow: "rgb(11, 84, 252) 0px 0px 6px",
              }}
            >
              <div className="font-medium text-white">5</div>
              <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                9.5
              </span>
              <div className="flex absolute top-0 left-0 justify-center items-start w-full h-full" />
            </div>
            <div
              className="relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer border-white/10 "
              style={{
                backgroundColor: "rgb(11, 84, 252)",
                gridArea: "span 1 / span 1",
                boxShadow: "rgb(11, 84, 252) 0px 0px 6px",
              }}
            >
              <div className="font-medium text-white">6</div>
              <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                9.5
              </span>
              <div className="flex absolute top-0 left-0 justify-center items-start w-full h-full" />
            </div>
            <div
              className="relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer border-white/10 "
              style={{
                backgroundColor: "rgb(11, 84, 252)",
                gridArea: "span 1 / span 1",
                boxShadow: "rgb(11, 84, 252) 0px 0px 6px",
              }}
            >
              <div className="font-medium text-white">7</div>
              <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                9.5
              </span>
              <div className="flex absolute top-0 left-0 justify-center items-start w-full h-full" />
            </div>
            <div
              className="relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer border-white/10 "
              style={{
                backgroundColor: "rgb(11, 84, 252)",
                gridArea: "span 1 / span 1",
                boxShadow: "rgb(11, 84, 252) 0px 0px 6px",
              }}
            >
              <div className="font-medium text-white">8</div>
              <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                9.5
              </span>
              <div className="flex absolute top-0 left-0 justify-center items-start w-full h-full" />
            </div>
            <div
              className="relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer border-white/10 "
              style={{
                backgroundColor: "rgb(11, 84, 252)",
                gridArea: "span 1 / span 1",
                boxShadow: "rgb(11, 84, 252) 0px 0px 6px",
              }}
            >
              <div className="font-medium text-white">9</div>
              <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                9.5
              </span>
              <div className="flex absolute top-0 left-0 justify-center items-start w-full h-full" />
            </div>
            <div
              className="relative background-style-3 flex items-center justify-center p-3 border-2 rounded cursor-pointer border-white/10 "
              style={{
                backgroundColor: "rgb(11, 84, 252)",
                gridArea: "span 1 / span 1",
                boxShadow: "rgb(11, 84, 252) 0px 0px 6px",
              }}
            >
              <div className="font-medium text-white">0</div>
              <span className="text-white font-medium text-[0.6rem] absolute bottom-0 left-1">
                9.5
              </span>
              <div className="flex absolute top-0 left-0 justify-center items-start w-full h-full" />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BetOptions;
