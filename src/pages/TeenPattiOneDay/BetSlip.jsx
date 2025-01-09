import { Lock } from "../../assets/icon";
import { Status } from "../../const";

const BetSlip = ({ data, status }) => {
  return (
    <div
      className="py-2 perspective lg:absolute  flex flex-col w-full gap-2 transition-all duration-1000 ease-in-out
   lg:bottom-40
   "
    >
      <div
        className={`grid grid-cols-4  gap-0.5  h-fit  w-full mx-auto max-w-3xl px-2 transition-all ease-in-out duration-1000 backdrop-blur-sm
      ${status === Status.SUSPENDED ? "applyPerspective" : ""}`}
      >
        <div
          className="relative hover:border-white/80  flex flex-col items-center justify-center  
         cursor-pointer
         bg-gradient-to-r from-blue to-blue/70 rounded-l-lg h-16
         "
          id="A-back"
        >
          <span className="absolute flex items-center h-4 gap-1 font-semibold tracking-wider text-white whitespace-nowrap -top-5 left-1">
            Player A
          </span>
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10"></div>
          </div>
          {data?.[3]?.status === "OPEN" &&
          data?.[3]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[3]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 right-0.5" />
          )}
        </div>
        <div
          className="relative hover:border-white/80  flex flex-col items-center justify-center  
         cursor-not-allowed pointer-events-none
         bg-gradient-to-l from-red to-red/70 rounded-r-lg h-16
         "
          id="A-lay"
        >
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10"></div>
          </div>
          {data?.[3]?.status === "OPEN" &&
          data?.[3]?.runners?.[1]?.status === "ACTIVE" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[3]?.runners?.[1]?.lay[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>
        <div
          className="relative hover:border-white/80  flex flex-col items-center justify-center  
         cursor-pointer
         bg-gradient-to-r from-blue to-blue/70 rounded-l-lg h-16
         "
          id="B-back"
        >
          <span className="absolute flex items-center h-4 gap-1 font-semibold tracking-wider text-white whitespace-nowrap -top-5 left-1">
            Player B
          </span>
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10"></div>
          </div>
          {data?.[4]?.status === "OPEN" &&
          data?.[4]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[4]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 right-0.5" />
          )}
        </div>
        <div
          className="relative hover:border-white/80  flex flex-col items-center justify-center  
         cursor-not-allowed pointer-events-none
         bg-gradient-to-l from-red to-red/70 rounded-r-lg h-16
         "
          id="B-lay"
        >
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10"></div>
          </div>
          {data?.[4]?.status === "OPEN" &&
          data?.[4]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[4]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>
        <div
          className="relative hover:border-white/80  flex flex-col items-center justify-center  
         cursor-pointer
         bg-gradient-to-t from-gray/30 to-gray/70 col-span-2 rounded-lg h-12
         "
          id="A-plus"
        >
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            A-plus
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10"></div>
          </div>
          {data?.[1]?.status === "OPEN" &&
          data?.[1]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[1]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>
        <div
          className="relative hover:border-white/80  flex flex-col items-center justify-center  
         cursor-pointer
         bg-gradient-to-t from-gray/30 to-gray/70 col-span-2 rounded-lg h-12
         "
          id="B-plus"
        >
          <span className="absolute text-2xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            B-plus
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10"></div>
          </div>
          {data?.[2]?.status === "OPEN" &&
          data?.[2]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute font-mono tracking-tighter bottom-1 text-[10px] text-white left-0.5">
              {data?.[2]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
