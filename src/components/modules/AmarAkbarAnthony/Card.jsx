import { CardBack } from "../../../assets/icon";

const Card = ({ data }) => {
  const amar = [1, 2, 3, 4, 5, 6];
  const akbar = [6, 7, 8, 9, 10];
  const anthony = [11, 12, 13];
  const indexCard = data?.indexCard?.[0];
  const cardNumber = indexCard && parseFloat(indexCard.substring(1));
  const isAmarCard = amar.includes(cardNumber);
  const isAkbarCard = akbar.includes(cardNumber);
  const isAnthonyCard = anthony.includes(cardNumber);

  return (
    <div className="lg:absolute transition-all duration-1000 ease-in-out bottom-[380px] translate-y-12 lg:translate-y-0 lg:left-2 lg:bottom-40">
      <div className="perspective flex flex-col mx-auto items-center w-fit justify-center">
        <div className="absolute bottom-1.5 applyPerspective">
          <div
            className={`lg:h-16 h-12 aspect-[5/7] flip-card ${
              isAmarCard
                ? "flip-card-up"
                : isAnthonyCard
                ? "flip-card-down"
                : isAkbarCard
                ? "flip-card"
                : "cardFadeInAnimation"
            }`}
            style={{ zIndex: 1000 }}
          >
            <div className="h-full w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-front">
              <div className="absolute top-1 right-1 w-[30%]">
                <svg
                  width={209}
                  height={235}
                  viewBox="0 0 209 235"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#000] font-semibold text-xl lg:text-3xl">
                {indexCard}
              </span>
              <div className="absolute bottom-1 left-1 w-[30%]">
                <svg
                  width={209}
                  height={235}
                  viewBox="0 0 209 235"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div className="transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-back overflow-hidden">
              <CardBack />
            </div>
          </div>
        </div>

        <div
          className="flex applyPerspective lg:gap-2 gap-1.5 items-center"
          style={{ zIndex: -1000 }}
        >
          <div
            className={`flex items-center justify-center gap-2 lg:h-20 lg:w-16 h-16 w-12 rounded-lg border-[1px] lg:border-[2px]  ${
              isAmarCard ? "border-gold" : "border-white/20"
            }`}
          >
            <div className="absolute -bottom-8 items-center flex flex-col text-xs text-white">
              <span>Amar</span>
              <span className="text-gold">A23456</span>
            </div>
          </div>
          <div
            className={`flex items-center justify-center gap-2 lg:h-20 lg:w-16 h-16 w-12 rounded-lg border-[1px] lg:border-[2px] ${
              isAkbarCard ? "border-gold" : "border-white/20"
            }`}
          >
            <div className="absolute -bottom-8 items-center flex flex-col text-xs text-white">
              <span>Akbar</span>
              <span className="text-gold">78910</span>
            </div>
          </div>
          <div
            className={`flex items-center justify-center gap-2 lg:h-20 lg:w-16 h-16 w-12 rounded-lg border-[1px] lg:border-[2px]  ${
              isAnthonyCard ? "border-gold" : "border-white/20"
            }`}
          >
            <div className="absolute -bottom-8 items-center flex flex-col text-xs text-white">
              <span>Anthony</span>
              <span className="text-gold">JQK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
