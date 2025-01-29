import { CardBack } from "../../../assets/icon";

const Card = ({ data }) => {
  const indexCard = data?.indexCard[0];
  const cardNumber = indexCard && parseFloat(indexCard.substring(1));

  return (
    <div className="perspective flex mx-auto items-center w-fit gap-3 justify-center">
      {/* Up */}
      <div
        className={`applyPerspective flex items-center justify-center gap-2 h-16 w-11 lg:h-20 lg:w-16 rounded-md border-[1px] ${
          cardNumber > 7 ? "border-gold" : "border-white/20"
        }`}
        style={{ zIndex: 996 }}
      >
        <div className="absolute -bottom-8 left-0 flex gap-2 transition-all ease-linear items-center text-white justify-start">
          Up
        </div>
      </div>
      {/* Up */}
      {/* Middle */}
      <div
        className="applyPerspective flex items-center justify-center gap-2 h-16 w-12 lg:h-20 lg:w-16 rounded-md border-[1px] border-white/20"
        style={{ zIndex: 997 }}
      >
        <div
          className={`h-12 lg:h-16 aspect-[5/7] ${
            cardNumber > 7
              ? "flip-card-up"
              : cardNumber < 7
              ? "flip-card-down"
              : cardNumber === 7
              ? "flip-card"
              : "cardFadeInAnimation"
          }`}
          style={{ zIndex: 999 }}
        >
          <div className="h-full flex flex-col gap-1 lg:gap-2 py-1 justify-center items-center w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-front">
            <img src={`/cards/${indexCard}.jpg`} alt="" />
            {/* <span className="h-5 text-[#dd181f] font-semibold text-lg lg:text-xl">
              {indexCard}
            </span>
            <div className="h-4">
              <svg
                width={198}
                height={260}
                viewBox="0 0 198 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                  fill="#DD181F"
                />
              </svg>
            </div> */}
          </div>
          <div className="transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-back overflow-hidden">
            <CardBack />
          </div>
        </div>

        <div className="absolute -bottom-8 flex gap-2 transition-all ease-linear items-center text-white justify-start">
          7
        </div>
      </div>
      {/* Middle */}
      {/* Down */}
      <div
        className={`flex applyPerspective items-center justify-center gap-2 pt-6 p-1 h-16 w-11 lg:h-20 lg:w-16 rounded-md border-[1px] ${
          cardNumber < 7 ? "border-gold" : "border-white/20"
        } `}
        style={{ zIndex: 996 }}
      >
        <div className="absolute -bottom-8 right-0 flex gap-2 transition-all ease-linear items-center text-white justify-start">
          Down
        </div>
      </div>
    </div>
  );
};

export default Card;
