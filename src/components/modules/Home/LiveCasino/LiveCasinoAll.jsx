const LiveCasinoAll = ({ data, setShowAll, handleNavigate }) => {
  return (
    <div className="w-full px-2 overflow-hidden text-sm lg:px-12">
      <div className="swiper swiper-container swiper-initialized swiper-horizontal swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        ></div>
        <div className="absolute left-0 flex items-center w-full -translate-y-full -top-3 ">
          <div className="flex items-center gap-1">
            <div className=" text-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                id="casino"
                fill="currentColor"
                className="w-6 h-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M15 0C6.729 0 0 6.729 0 15s6.729 15 15 15 15-6.729 15-15S23.271 0 15 0zm4.125 21c-1.599 0-2.655-.408-3.353-.882C16.282 21.681 17.43 23 18.5 23a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1c1.07 0 2.218-1.32 2.728-2.882-.698.474-1.754.882-3.353.882C8.666 21 7 19.13 7 16.65c0-1.15.395-2.233 1.112-3.052l6.512-7.428a.516.516 0 0 1 .752 0l6.512 7.428C22.605 14.417 23 15.5 23 16.65c0 2.48-1.666 4.35-3.875 4.35z"
                ></path>
              </svg>
            </div>
            <div className="flex font-bold leading-tight tracking-wider">
              Live Casino{" "}
            </div>
          </div>
          <span className="flex items-center gap-1 ml-auto">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="flex p-1 px-2 text-xs rounded-md cursor-pointer whitespace-nowrap hover:bg-purple/20 text-purple active:scale-90 autoAnimate"
            >
              <p>Hide all</p>
            </button>
            <div className="flex items-center gap-1 w-fit ">
              <span className="z-50 p-1 transition-all duration-100 rounded-lg cursor-pointer w-fit h-fit hover:bg-white/10 active:bg-white/30 hover:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="z-50 p-1 transition-all duration-100 rounded-lg cursor-pointer w-fit h-fit hover:bg-white/10 active:bg-white/30 hover:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {data?.map((casino) => {
            return (
              <div key={casino?.eventId} onClick={() => handleNavigate(casino)}>
                <div className="relative cursor-pointer select-none group w-full snap-start lg:active:scale-[94%]  transition-all duration-300 ease-in-out group">
                  <div className="absolute top-0 right-0 z-20 w-20 h-20 translate-x-[30%] -translate-y-[30%] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 5760 3240"
                      width="5760"
                      height="3240"
                      preserveAspectRatio="xMidYMid meet"
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: "translate3d(0px, 0px, 0px)",
                        contentVisibility: "visible",
                      }}
                    >
                      <defs>
                        <clipPath id="__lottie_element_403">
                          <rect width="5760" height="3240" x="0" y="0"></rect>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#__lottie_element_403)">
                        <g
                          transform="matrix(1,0,0,1,2171.656982421875,1132.4759521484375)"
                          opacity="1"
                          style={{ display: "block" }}
                        >
                          <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                            <path
                              fill="rgb(255,233,120)"
                              fillOpacity="1"
                              d=" M7.800000190734863,-75.1500015258789 C18.059999465942383,-42.34000015258789 39.12799835205078,-18.41200065612793 71.23899841308594,-7.76200008392334 C74.59700012207031,-6.6479997634887695 76.86599731445312,-3.51200008392334 76.87200164794922,0.028999999165534973 C76.88600158691406,9.979000091552734 66.93199920654297,6.061999797821045 46.82699966430664,19.839000701904297 C44.93600082397461,21.70800018310547 20.135000228881836,35.297000885009766 7.818999767303467,75.12699890136719 C6.755000114440918,78.56400299072266 3.5789999961853027,80.91200256347656 -0.020999999716877937,80.91799926757812 C0.20200000703334808,80.99500274658203 -6.025000095367432,81.08000183105469 -7.88100004196167,75.15299987792969 C-17.913999557495117,43.0989990234375 -38.86899948120117,18.87299919128418 -71.3290023803711,7.760000228881836 C-78.7239990234375,5.228000164031982 -78.71700286865234,-5.263999938964844 -71.33100128173828,-7.794000148773193 C-38.67399978637695,-18.979999542236328 -17.844999313354492,-43.38199996948242 -7.890999794006348,-75.15499877929688 C-6.816999912261963,-78.58200073242188 -3.6389999389648438,-80.91799926757812 -0.04600000008940697,-80.91799926757812 C-0.28200000524520874,-80.9990005493164 5.951000213623047,-81.06400299072266 7.800000190734863,-75.1500015258789z"
                            ></path>
                          </g>
                        </g>
                        <g
                          transform="matrix(1,0,0,1,2501.68798828125,2257.52001953125)"
                          opacity="1"
                          style={{ display: "block" }}
                        >
                          <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                            <path
                              fill="rgb(255,227,84)"
                              fillOpacity="1"
                              d=" M7.802000045776367,-75.14900207519531 C18.097000122070312,-42.20600128173828 39.255001068115234,-18.368000030517578 71.24099731445312,-7.760000228881836 C74.5989990234375,-6.64900016784668 76.86799621582031,-3.509999990463257 76.87200164794922,0.027000000700354576 C76.88700103759766,10.029999732971191 66.98799896240234,6.02400016784668 46.82500076293945,19.836999893188477 C46.82500076293945,19.836999893188477 46.82500076293945,19.836999893188477 46.82400131225586,19.84000015258789 C28.381999969482422,32.46699905395508 15.258999824523926,51.06800079345703 7.820000171661377,75.125 C6.75600004196167,78.56500244140625 3.5799999237060547,80.91300201416016 -0.019999999552965164,80.91899871826172 C0.19900000095367432,80.99400329589844 -6.02400016784668,81.08200073242188 -7.880000114440918,75.15399932861328 C-17.93899917602539,43.01499938964844 -38.948001861572266,18.8439998626709 -71.3290023803711,7.761000156402588 C-78.7239990234375,5.229000091552734 -78.71600341796875,-5.265999794006348 -71.33000183105469,-7.795000076293945 C-38.737998962402344,-18.952999114990234 -17.86400032043457,-43.31399917602539 -7.889999866485596,-75.15499877929688 C-6.815999984741211,-78.58200073242188 -3.6389999389648438,-80.91799926757812 -0.04500000178813934,-80.91799926757812 C-0.28200000524520874,-80.9990005493164 5.952000141143799,-81.06500244140625 7.802000045776367,-75.14900207519531z"
                            ></path>
                          </g>
                        </g>
                        <g
                          transform="matrix(1,0,0,1,3182.6708984375,1619.135009765625)"
                          opacity="1"
                          style={{ display: "block" }}
                        >
                          <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                            <path
                              fill="rgb(255,213,0)"
                              fillOpacity="1"
                              d=" M166.13600158691406,-17.56599998474121 C178.4709930419922,-13.418000221252441 191.5959930419922,-10.067000389099121 205.13900756835938,-7.609000205993652 C209.0449981689453,-6.900000095367432 211.88400268554688,-3.5 211.88999938964844,0.47200000286102295 C211.8939971923828,4.441999912261963 209.06100463867188,7.8480000495910645 205.1580047607422,8.565999984741211 C174.31199645996094,14.243000030517578 146.3040008544922,24.375999450683594 121.91899871826172,38.6870002746582 C45.58399963378906,83.53399658203125 17.743000030517578,160.34100341796875 7.823999881744385,216.875 C7.135000228881836,220.8000030517578 3.7269999980926514,223.6699981689453 -0.26100000739097595,223.67300415039062 C0.15199999511241913,223.83299255371094 -7.140999794006348,223.7989959716797 -8.364999771118164,216.89100646972656 C-27.843000411987305,107.26200103759766 -94.03399658203125,29.260000228881836 -205.19500732421875,8.697999954223633 C-214.12100219726562,7.046000003814697 -214.1230010986328,-5.813000202178955 -205.1999969482422,-7.4679999351501465 C-93.00399780273438,-28.29199981689453 -27.95199966430664,-106.44300079345703 -8.404999732971191,-216.95399475097656 C-6.809000015258789,-225.96499633789062 6.186999797821045,-225.96400451660156 7.7829999923706055,-216.95399475097656 C24.60099983215332,-121.8499984741211 75.71700286865234,-47.972999572753906 166.13600158691406,-17.56599998474121z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div
                    className="relative  overflow-clip rounded-md select-none  w-36 min-[380px]:w-44"
                    style={{ aspectRatio: "0.75 / 1" }}
                  >
                    <img
                      src={casino?.image}
                      loading="eager"
                      alt="game"
                      sizes="30vw"
                      className="z-10 object-cover w-full h-full transition-all absolute duration-500 ease-in-out lg:group-hover:scale-110 bg-white/10  "
                    />
                    <div className="absolute bottom-0 z-20 w-full px-2 autoAnimate  bg-black/30 backdrop-blur-3xl opacity-100 group-hover:opacity-100">
                      <span className="flex items-center justify-center w-full gap-[2px] p-1 text-xs font-semibold text-yellow">
                        <span>₹{casino?.min}</span> -{" "}
                        <span>₹{casino?.max}</span>
                      </span>
                    </div>
                  </div>
                  <div
                    id="gameNameBox-Teen Patti T20"
                    className="relative w-full h-8 overflow-hidden whitespace-nowrap"
                  >
                    <span
                      id="gameName-Teen Patti T20"
                      className="absolute text-sm tracking-tight text-center text-white left-1 top-1"
                    >
                      {casino?.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LiveCasinoAll;
