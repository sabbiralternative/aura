import { CardBack } from "../../../assets/icon";

const NoCard = () => {
  return (
    <div
      className="perspective flex mx-auto items-center w-fit gap-3 justify-center
                           "
    >
      <div
        className=" applyPerspective flex items-center justify-center gap-2  h-16 w-11 lg:h-20 lg:w-16 rounded-md  border-[1px]   border-white/20"
        style={{ zIndex: 996 }}
      >
        <div className="absolute -bottom-8 left-0  flex gap-2 transition-all ease-linear items-center text-white  justify-start">
          Up
        </div>
      </div>
      <div
        className=" applyPerspective flex items-center justify-center gap-2   h-16 w-12 lg:h-20 lg:w-16 rounded-md  border-[1px]    border-white/20"
        style={{ zIndex: 997 }}
      >
        <div
          className=" h-12 lg:h-16 aspect-[5/7]  cardFadeInAnimation"
          style={{ zIndex: 999 }}
        >
          <div className="h-full flex flex-col gap-1 lg:gap-2 py-1 justify-center items-center w-full transition-transform ease-in-out  bg-gradient-to-l from-slate-50 to-slate-300  rounded-sm  relative flip-card-front ">
            <span className="h-5   text-[#000] font-semibold text-lg lg:text-xl" />
            <div className="h-4 ">0</div>
          </div>
          <div className="transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-back overflow-hidden">
            <CardBack />
          </div>
        </div>
        <div className="absolute -bottom-8   flex gap-2 transition-all ease-linear items-center text-white  justify-start">
          7
        </div>
      </div>
      <div
        className="flex applyPerspective  items-center justify-center gap-2 pt-6 p-1  h-16 w-11 lg:h-20 lg:w-16 rounded-md  border-[1px]    border-white/20 "
        style={{ zIndex: 996 }}
      >
        <div className="absolute -bottom-8 right-0  flex gap-2 transition-all ease-linear items-center text-white  justify-start   ">
          Down
        </div>
      </div>
    </div>
  );
};

export default NoCard;
