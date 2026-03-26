const BetOptions = ({ setShowBetSlip }) => {
  return (
    <div
      id="bet-options-container"
      className="flex overflow-y-auto relative flex-col flex-1 gap-2 px-2 py-8  min-h-[260px] scrollbar-none
 
              "
      style={{
        maskImage:
          "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, black, black, transparent)",
      }}
    >
      <div className="flex items-end h-full ">
        <div
          className="grid grid-cols-2 origin-bottom gap-0.5 transition-transform duration-300 ease-linear w-full"
          style={{ scale: 1 }}
        >
          <div
            className="grid w-full grid-cols-4 gap-0.5 p-0.5 rounded-lg relative"
            style={{
              background:
                "linear-gradient(to top, rgb(67, 56, 202), transparent)",
            }}
          >
            <div className="col-span-4 flex gap-1 items-center justify-center text-center text-white">
              Player A
            </div>
            <div
              onClick={() => setShowBetSlip(true)}
              className="flex background-style-3 flex-col overflow-hidden relative  gap-0.5 p-0.5 border-2 cursor-pointer rounded-lg items-end justify-center border-white/10"
              style={{
                backgroundColor: "rgb(67, 56, 202)",
                gridArea: "span 1 / span 4",
                pointerEvents: "auto",
              }}
            >
              <div className="absolute bottom-0 left-0">
                <div
                  className="flex gap-1 items-center p-1"
                  style={{ filter: "drop-shadow(gray 0px 0px 2px)" }}
                >
                  <div className>
                    <div
                      className="relative duration-500 transition-transform ease-in-out "
                      style={{
                        width: "36px",
                        height: "48px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div
                        className="delay-[200ms] relative w-full h-full inset-0 flex items-center justify-center bg-white overflow-hidden"
                        style={{
                          borderRadius: "4px",
                          opacity: 0,
                          zIndex: 1000,
                        }}
                      >
                        <div
                          className="absolute flex items-center justify-center top-0.5 bottom-0.5 left-0.5 right-0.5 bg-black/30"
                          style={{ borderRadius: "2px" }}
                        >
                          <span className="text-base text-white lg:text-xl">
                            A
                          </span>
                        </div>
                      </div>
                      <div
                        className="__className_c7a506 absolute delay-[200ms] inset-0 text-xl bg-white shadow-md"
                        style={{
                          borderRadius: "4px",
                          transform: "rotateY(180deg)",
                          opacity: 1,
                          zIndex: 999,
                        }}
                      >
                        <div
                          className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] top-[3%] left-[3%]"
                          style={{ fontSize: "1.09091em", color: "black" }}
                        >
                          6
                        </div>
                        <div
                          className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] bottom-[3%] right-[3%] rotate-180"
                          style={{ fontSize: "1.09091em", color: "black" }}
                        >
                          6
                        </div>
                        <div className="absolute h-[50%] flex justify-center items-center w-[36%] top-[3%] right-[3%]">
                          <svg
                            width={30}
                            height={42}
                            className="w-full h-full"
                            viewBox="0 0 30 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M27.897 16.704C27.897 16.704 24.711 12.5051 20.9033 15.2702C23.7785 11.7882 23.0014 7.48683 23.0014 7.48683C22.1466 -0.296551 14.9976 0.0106851 14.9976 0.0106851C14.9976 0.0106851 8.08161 -0.60379 6.9937 7.48683C6.9937 7.48683 6.52738 11.993 9.24716 15.3726C5.43947 12.4027 2.17586 16.704 2.17586 16.704C0.854824 18.5474 0 21.1078 0 23.8729C0 29.608 2.79741 34.0118 7.693 34.0118C7.693 34.0118 10.6459 34.2166 12.9772 30.6322C12.9772 30.6322 13.9096 33.3973 12.3555 37.5962C11.1899 40.4638 9.6357 41.1807 9.6357 41.1807L10.2574 42C10.2574 42 12.8218 40.4638 14.9976 40.4638C17.1735 40.4638 19.7377 42 19.7377 42L20.4372 41.1807C20.4372 41.1807 18.883 40.4638 17.6396 37.4938C16.0855 33.2949 17.0179 30.6322 17.0179 30.6322C19.3492 34.2166 22.3021 34.0118 22.3021 34.0118C27.1977 34.0118 29.9951 29.608 29.9951 23.8729C30.0728 21.1078 29.2181 18.5474 27.897 16.704Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <div className="absolute h-[50%] flex justify-center items-center w-[36%] bottom-[3%] left-[3%] rotate-180">
                          <svg
                            width={30}
                            height={42}
                            className="w-full h-full"
                            viewBox="0 0 30 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M27.897 16.704C27.897 16.704 24.711 12.5051 20.9033 15.2702C23.7785 11.7882 23.0014 7.48683 23.0014 7.48683C22.1466 -0.296551 14.9976 0.0106851 14.9976 0.0106851C14.9976 0.0106851 8.08161 -0.60379 6.9937 7.48683C6.9937 7.48683 6.52738 11.993 9.24716 15.3726C5.43947 12.4027 2.17586 16.704 2.17586 16.704C0.854824 18.5474 0 21.1078 0 23.8729C0 29.608 2.79741 34.0118 7.693 34.0118C7.693 34.0118 10.6459 34.2166 12.9772 30.6322C12.9772 30.6322 13.9096 33.3973 12.3555 37.5962C11.1899 40.4638 9.6357 41.1807 9.6357 41.1807L10.2574 42C10.2574 42 12.8218 40.4638 14.9976 40.4638C17.1735 40.4638 19.7377 42 19.7377 42L20.4372 41.1807C20.4372 41.1807 18.883 40.4638 17.6396 37.4938C16.0855 33.2949 17.0179 30.6322 17.0179 30.6322C19.3492 34.2166 22.3021 34.0118 22.3021 34.0118C27.1977 34.0118 29.9951 29.608 29.9951 23.8729C30.0728 21.1078 29.2181 18.5474 27.897 16.704Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className>
                    <div
                      className="relative duration-500 transition-transform ease-in-out "
                      style={{
                        width: "36px",
                        height: "48px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div
                        className="delay-[200ms] relative w-full h-full inset-0 flex items-center justify-center bg-white overflow-hidden"
                        style={{
                          borderRadius: "4px",
                          opacity: 0,
                          zIndex: 1000,
                        }}
                      >
                        <div
                          className="absolute flex items-center justify-center top-0.5 bottom-0.5 left-0.5 right-0.5 bg-black/30"
                          style={{ borderRadius: "2px" }}
                        >
                          <span className="text-base text-white lg:text-xl">
                            A
                          </span>
                        </div>
                      </div>
                      <div
                        className="__className_c7a506 absolute delay-[200ms] inset-0 text-xl bg-white shadow-md"
                        style={{
                          borderRadius: "4px",
                          transform: "rotateY(180deg)",
                          opacity: 1,
                          zIndex: 999,
                        }}
                      >
                        <div
                          className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] top-[3%] left-[3%]"
                          style={{ fontSize: "1.09091em", color: "black" }}
                        >
                          J
                        </div>
                        <div
                          className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] bottom-[3%] right-[3%] rotate-180"
                          style={{ fontSize: "1.09091em", color: "black" }}
                        >
                          J
                        </div>
                        <div className="absolute h-[50%] flex justify-center items-center w-[36%] top-[3%] right-[3%]">
                          <svg
                            width={30}
                            height={42}
                            className="w-full h-full"
                            viewBox="0 0 30 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M27.897 16.704C27.897 16.704 24.711 12.5051 20.9033 15.2702C23.7785 11.7882 23.0014 7.48683 23.0014 7.48683C22.1466 -0.296551 14.9976 0.0106851 14.9976 0.0106851C14.9976 0.0106851 8.08161 -0.60379 6.9937 7.48683C6.9937 7.48683 6.52738 11.993 9.24716 15.3726C5.43947 12.4027 2.17586 16.704 2.17586 16.704C0.854824 18.5474 0 21.1078 0 23.8729C0 29.608 2.79741 34.0118 7.693 34.0118C7.693 34.0118 10.6459 34.2166 12.9772 30.6322C12.9772 30.6322 13.9096 33.3973 12.3555 37.5962C11.1899 40.4638 9.6357 41.1807 9.6357 41.1807L10.2574 42C10.2574 42 12.8218 40.4638 14.9976 40.4638C17.1735 40.4638 19.7377 42 19.7377 42L20.4372 41.1807C20.4372 41.1807 18.883 40.4638 17.6396 37.4938C16.0855 33.2949 17.0179 30.6322 17.0179 30.6322C19.3492 34.2166 22.3021 34.0118 22.3021 34.0118C27.1977 34.0118 29.9951 29.608 29.9951 23.8729C30.0728 21.1078 29.2181 18.5474 27.897 16.704Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <div className="absolute h-[50%] flex justify-center items-center w-[36%] bottom-[3%] left-[3%] rotate-180">
                          <svg
                            width={30}
                            height={42}
                            className="w-full h-full"
                            viewBox="0 0 30 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M27.897 16.704C27.897 16.704 24.711 12.5051 20.9033 15.2702C23.7785 11.7882 23.0014 7.48683 23.0014 7.48683C22.1466 -0.296551 14.9976 0.0106851 14.9976 0.0106851C14.9976 0.0106851 8.08161 -0.60379 6.9937 7.48683C6.9937 7.48683 6.52738 11.993 9.24716 15.3726C5.43947 12.4027 2.17586 16.704 2.17586 16.704C0.854824 18.5474 0 21.1078 0 23.8729C0 29.608 2.79741 34.0118 7.693 34.0118C7.693 34.0118 10.6459 34.2166 12.9772 30.6322C12.9772 30.6322 13.9096 33.3973 12.3555 37.5962C11.1899 40.4638 9.6357 41.1807 9.6357 41.1807L10.2574 42C10.2574 42 12.8218 40.4638 14.9976 40.4638C17.1735 40.4638 19.7377 42 19.7377 42L20.4372 41.1807C20.4372 41.1807 18.883 40.4638 17.6396 37.4938C16.0855 33.2949 17.0179 30.6322 17.0179 30.6322C19.3492 34.2166 22.3021 34.0118 22.3021 34.0118C27.1977 34.0118 29.9951 29.608 29.9951 23.8729C30.0728 21.1078 29.2181 18.5474 27.897 16.704Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex z-10 flex-col gap-1 justify-center items-center p-2">
                <div className="h-[42px] w-[42px]" />{" "}
              </div>
              <span className="text-white font-medium text-xs __className_575e37">
                1.98
              </span>
            </div>
          </div>
          <div
            className="grid w-full grid-cols-4 gap-0.5 p-0.5 rounded-lg relative"
            style={{
              background:
                "linear-gradient(to top, rgb(109, 40, 217), transparent)",
            }}
          >
            <div className="col-span-4 flex gap-1 items-center justify-center text-center text-white">
              Player B
            </div>
            <div
              onClick={() => setShowBetSlip(true)}
              className="flex background-style-3 flex-col overflow-hidden relative  gap-0.5 p-0.5 border-2 cursor-pointer rounded-lg items-start justify-start border-white/10"
              style={{
                backgroundColor: "rgb(109, 40, 217)",
                gridArea: "span 1 / span 4",
                pointerEvents: "auto",
              }}
            >
              <div className="absolute bottom-0 right-0">
                <div
                  className="flex gap-1 items-center p-1"
                  style={{ filter: "drop-shadow(gray 0px 0px 2px)" }}
                >
                  <div className>
                    <div
                      className="relative  "
                      style={{
                        width: "36px",
                        height: "48px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div
                        className=" relative w-full h-full inset-0 flex items-center justify-center bg-white overflow-hidden"
                        style={{
                          borderRadius: "4px",
                          opacity: 1,
                          zIndex: 1000,
                        }}
                      >
                        <div
                          className="absolute flex items-center justify-center top-0.5 bottom-0.5 left-0.5 right-0.5 bg-black/30"
                          style={{ borderRadius: "2px" }}
                        >
                          <span className="text-base text-white lg:text-xl">
                            B
                          </span>
                        </div>
                      </div>
                      <div
                        className="__className_c7a506 absolute delay-[200ms] inset-0 text-xl bg-white shadow-md"
                        style={{
                          borderRadius: "4px",
                          transform: "rotateY(180deg)",
                          opacity: 0,
                          zIndex: 999,
                        }}
                      >
                        <div
                          className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] top-[3%] left-[3%]"
                          style={{ fontSize: "1.09091em", color: "black" }}
                        />
                        <div
                          className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] bottom-[3%] right-[3%] rotate-180"
                          style={{ fontSize: "1.09091em", color: "black" }}
                        />
                        <div className="absolute h-[50%] flex justify-center items-center w-[36%] top-[3%] right-[3%]" />
                        <div className="absolute h-[50%] flex justify-center items-center w-[36%] bottom-[3%] left-[3%] rotate-180" />
                      </div>
                    </div>
                  </div>
                  <div className>
                    <div
                      className="relative  "
                      style={{
                        width: "36px",
                        height: "48px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div
                        className=" relative w-full h-full inset-0 flex items-center justify-center bg-white overflow-hidden"
                        style={{
                          borderRadius: "4px",
                          opacity: 1,
                          zIndex: 1000,
                        }}
                      >
                        <div
                          className="absolute flex items-center justify-center top-0.5 bottom-0.5 left-0.5 right-0.5 bg-black/30"
                          style={{ borderRadius: "2px" }}
                        >
                          <span className="text-base text-white lg:text-xl">
                            B
                          </span>
                        </div>
                      </div>
                      <div
                        className="__className_c7a506 absolute delay-[200ms] inset-0 text-xl bg-white shadow-md"
                        style={{
                          borderRadius: "4px",
                          transform: "rotateY(180deg)",
                          opacity: 0,
                          zIndex: 999,
                        }}
                      >
                        <div
                          className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] top-[3%] left-[3%]"
                          style={{ fontSize: "1.09091em", color: "black" }}
                        />
                        <div
                          className="absolute text-center m-0 p-0 inline-block leading-none w-[40%] h-[60%] bottom-[3%] right-[3%] rotate-180"
                          style={{ fontSize: "1.09091em", color: "black" }}
                        />
                        <div className="absolute h-[50%] flex justify-center items-center w-[36%] top-[3%] right-[3%]" />
                        <div className="absolute h-[50%] flex justify-center items-center w-[36%] bottom-[3%] left-[3%] rotate-180" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex z-10 flex-col gap-1 justify-center items-center p-2">
                <div className="h-[42px] w-[42px]" />{" "}
              </div>
              <span className="text-white font-medium text-xs __className_575e37">
                1.98
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BetOptions;
