import { useEffect, useRef } from "react";

const MoreDetails = ({ setRoundId, bets }) => {
  const ref = useRef();
  let netMarketTotal = 0;

  for (const bet of bets) {
    netMarketTotal = netMarketTotal + bet?.amount;
  }

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
        {bets?.map((bet, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-2 px-4 py-1 text-white slideInAnimation"
            >
              <div className="flex items-center gap-2 text-base">
                <span className="font-semibold">
                  {bet?.place_name} ({bet?.market_name})
                </span>
                <span className="ml-auto font-semibold ">
                  <div className="tracking-wider text-white w-fit">
                    <span className="text-sm">{bet?.date}</span>
                    {/* <span className="text-xs font-light opacity-75">
                   
                      2:52:27 AM
                    </span> */}
                  </div>
                </span>
              </div>
              <div className="flex justify-between ">
                <span className="text-sm text-white">
                  <span className="text-white/60">Type </span> {bet?.type}
                </span>
                <span className="text-[10px]">{bet?.round_id}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>
                  <span className="text-white/60">Stake </span>₹{bet?.stake}
                  <div />
                </span>
                <span
                  className={`${bet?.amount > 0 ? "text-green" : "text-red"}`}
                >
                  ₹{bet?.amount}
                </span>
              </div>
            </div>
          );
        })}

        {/* <div className="flex flex-col gap-2 px-4 py-1 text-white slideInAnimation">
          <div className="flex items-center gap-2 text-base">
            <span className="font-semibold">Red (Colour)</span>
            <span className="ml-auto font-semibold ">
              <div className="tracking-wider text-white w-fit">
                <span className="text-sm">2025-04-27</span>
                <span className="text-xs font-light opacity-75">
                  {" "}
                  2:52:27 AM
                </span>{" "}
              </div>
            </span>
          </div>
          <div className="flex justify-between ">
            <span className="text-sm text-white">
              <span className="text-white/60">Type </span> Back
            </span>
            <span className="text-[10px]">#680d4e936ca835e7613ee5cd</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>
              <span className="text-white/60">Stake </span>₹100
              <div />
            </span>
            <span className="  text-red">-₹100</span>
          </div>
          <div className="flex flex-col items-start justify-between text-sm border border-dashed border-white/20 rounded-lg p-2">
            <span className="flex justify-between w-full text-white">
              <div className="text-white/60">Balance Before Bet </div>
              <div className>₹9,663</div>
            </span>
            <span className="flex justify-between w-full text-white">
              <div className="text-white/60">Balance After Bet </div>
              <div className>₹9,873</div>
            </span>
          </div>
        </div> */}
        {/* <div className="flex flex-col w-full gap-0 px-4 py-1 mx-auto slideInAnimation">
          <div>
            <div className="w-full">
              <div
                className="flex flex-col items-center justify-center w-full h-full gap-1 px-0 py-1 overflow-y-auto rounded-lg cursor-pointer bg-opacity-80"
                style={{ zIndex: 10 }}
              >
                <div className="items-center mx-auto w-fit">
                  <div className="flex items-center justify-center w-full gap-1 text-xs h-fit">
                    <div className="flex flex-row items-center justify-center w-full gap-4 ">
                      <div className="flex flex-col items-center justify-center w-full gap-1">
                        <div className="flex items-center justify-center gap-1">
                          <div className="w-fit flex gap-1 mt-1 bg-white rounded-lg false">
                            <div className="bounceInAnimation relative text-black uppercase w-10 h-14 bg-white  rounded-md">
                              <span className="absolute top-0 left-1 font-semibold">
                                4
                              </span>
                              <span className="absolute bottom-0 right-1 font-semibold">
                                4
                              </span>
                              <span className="absolute w-3 h-3 left-1 bottom-1 ">
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
                              </span>
                              <span className="absolute w-3 h-3 right-1 top-1 ">
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
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="w-full px-1 font-semibold text-center text-white">
                          Index
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div>
                          <div className="flex flex-col gap-1 items-center rounded-lg px-0 py-1 w-full false">
                            <div className="flex flex-row items-center justify-center gap-1" />
                            <span className="px-1 font-semibold text-center text-white rounded-lg text-sx ">
                              7Up
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col gap-1 items-center rounded-lg px-0 py-1 w-full false">
                            <div className="flex flex-row items-center justify-center gap-1" />
                            <span className="px-1 font-semibold text-center text-white rounded-lg text-sx ">
                              7
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col gap-1 items-center rounded-lg px-0 py-1 w-full border-2 border-gold px-2">
                            <div className="flex flex-row items-center justify-center gap-1" />
                            <div className="flex items-center justify-center w-full gap-0">
                              <span className="px-1 font-semibold text-center text-white rounded-lg text-sx whitespace-nowrap">
                                7Down
                              </span>
                              <span className="px-1 font-semibold text-center rounded-lg text-gold text-sx ">
                                WINNER
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full gap-1 text-xs h-fit">
                    <div className="flex flex-row items-center justify-center w-full gap-4 " />
                  </div>
                  <div className="flex items-center justify-center w-full gap-1 text-xs h-fit">
                    <div className="flex flex-row items-center justify-center w-full gap-4 " />
                  </div>
                  <div className="flex items-center justify-center w-full gap-1 text-xs h-fit">
                    <div className="flex flex-row items-center justify-center w-full gap-4 " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex justify-between px-4 py-2 text-sm bg-controls-idle">
          <span className="text-white">Net Market Total </span>
          <span
            className={` ${netMarketTotal > 0 ? "text-green" : "text-red"}`}
          >
            ₹{netMarketTotal}
          </span>
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
