import { useDispatch } from "react-redux";
import { setShowChip } from "../../../redux/features/stateSlice";

const Chip100 = ({ handleUndoStake, isPlaceStake }) => {
  const dispatch = useDispatch();

  return (
    <div
      className=" relative flex flex-col items-center w-fit  gap-2 select-none h-fit text-text-primary transition-all ease-in-out duration-500 opacity-100
      "
    >
      <div className="flex  items-center justify-center w-full gap-3 h-fit flex-row">
        <div
          onClick={handleUndoStake}
          className="flex flex-col items-center justify-center w-12 text-xs capitalize transition-opacity ease-in-out cursor-pointer"
          style={{
            zIndex: 997,
            opacity: isPlaceStake ? 1 : "0.5",
            cursor: isPlaceStake ? "pointer" : "not-allowed",
            pointerEvents: isPlaceStake ? "auto" : "none",
          }}
        >
          <div className="flex items-center justify-center h-4 aspect-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-[25px] h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span>undo</span>
        </div>
        <div
          onClick={() => dispatch(setShowChip(true))}
          className="relative flex flex-col items-center h-fit w-fit "
          style={{ zIndex: 998 }}
        >
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/80 via-transparent to-transparent    -space-x-[40px] transition-all rounded-full top-1/2 -translate-y-1/2 z-50  ease-in-out duration-200 absolute   flex items-center justify-center w-fit max-w-xl h-fit  ">
            <span
              className=" transition-all duration-200 ease-in-out "
              style={{ transform: "translate(0px, 0px) rotate(90deg)" }}
            >
              <div className="coinContainer transition-all duration-1000 ease-in-out ">
                <div className="text-white coin ">
                  <span
                    className="absolute w-full h-full  rounded-full"
                    style={{
                      transform: "translateZ(10px)",
                      zIndex: 1000,
                      backgroundColor: "rgb(217, 70, 239)",
                    }}
                  >
                    <span className="relative flex items-center justify-center w-full h-full font-black bg-white rounded-full">
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                        style={{ backgroundColor: "rgb(217, 70, 239)" }}
                      >
                        <span
                          className="w-[40px] h-[8px] absolute"
                          style={{
                            borderLeft: "6px solid rgb(217, 70, 239)",
                            borderRight: "6px solid rgb(217, 70, 239)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "6px solid rgb(217, 70, 239)",
                            borderRight: "6px solid rgb(217, 70, 239)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute rotate-90"
                          style={{
                            borderLeft: "6px solid rgb(217, 70, 239)",
                            borderRight: "6px solid rgb(217, 70, 239)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "6px solid rgb(217, 70, 239)",
                            borderRight: "6px solid rgb(217, 70, 239)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[2px] absolute -rotate-90"
                          style={{
                            zIndex: 999,
                            borderLeft: "6px solid white",
                            borderRight: "6px solid white",
                          }}
                        />
                        <span
                          className="w-[40px] h-[2px] absolute"
                          style={{
                            zIndex: 999,
                            borderLeft: "6px solid white",
                            borderRight: "6px solid white",
                          }}
                        />
                        <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                            style={{ zIndex: 1000 }}
                          >
                            <span
                              className="w-[26px] h-[8px] absolute -rotate-45"
                              style={{
                                borderLeft: "2px solid rgb(217, 70, 239)",
                                borderRight: "2px solid rgb(217, 70, 239)",
                              }}
                            />
                            <span
                              className="w-[26px] h-[2px] absolute -rotate-45"
                              style={{
                                borderLeft: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            />
                            <span
                              className="w-[26px] h-[8px] absolute rotate-45"
                              style={{
                                borderLeft: "2px solid rgb(217, 70, 239)",
                                borderRight: "2px solid rgb(217, 70, 239)",
                              }}
                            />
                            <span
                              className="w-[26px] h-[2px] absolute rotate-45"
                              style={{
                                borderLeft: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            />
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center text-[10px]">
                              100
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(0.5px)", zIndex: 1000 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(1px)", zIndex: 999 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(1.5px)", zIndex: 998 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(2px)", zIndex: 997 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(2.5px)", zIndex: 996 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(3px)", zIndex: 995 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(3.5px)", zIndex: 994 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(4px)", zIndex: 993 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(4.5px)", zIndex: 992 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(5px)", zIndex: 991 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(5.5px)", zIndex: 990 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(6px)", zIndex: 989 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(6.5px)", zIndex: 988 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(7px)", zIndex: 987 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(7.5px)", zIndex: 986 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(8px)", zIndex: 985 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(8.5px)", zIndex: 984 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(9px)", zIndex: 983 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(9.5px)", zIndex: 982 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(10px)", zIndex: 981 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(110, 0, 126)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(110, 0, 126)",
                          borderRight: "6px solid rgb(110, 0, 126)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(110, 0, 126)",
                              borderRight: "2px solid rgb(110, 0, 126)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </span>
            <span
              className=" transition-all duration-200 ease-in-out "
              style={{ transform: "translate(0px, 0px) rotate(90deg)" }}
            >
              <div className="coinContainer transition-all duration-1000 ease-in-out ">
                <div className="text-white coin ">
                  <span
                    className="absolute w-full h-full  rounded-full"
                    style={{
                      transform: "translateZ(10px)",
                      zIndex: 1000,
                      backgroundColor: "rgb(34, 197, 94)",
                    }}
                  >
                    <span className="relative flex items-center justify-center w-full h-full font-black bg-white rounded-full">
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                        style={{ backgroundColor: "rgb(34, 197, 94)" }}
                      >
                        <span
                          className="w-[40px] h-[8px] absolute"
                          style={{
                            borderLeft: "6px solid rgb(34, 197, 94)",
                            borderRight: "6px solid rgb(34, 197, 94)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "6px solid rgb(34, 197, 94)",
                            borderRight: "6px solid rgb(34, 197, 94)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute rotate-90"
                          style={{
                            borderLeft: "6px solid rgb(34, 197, 94)",
                            borderRight: "6px solid rgb(34, 197, 94)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "6px solid rgb(34, 197, 94)",
                            borderRight: "6px solid rgb(34, 197, 94)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[2px] absolute -rotate-90"
                          style={{
                            zIndex: 999,
                            borderLeft: "6px solid white",
                            borderRight: "6px solid white",
                          }}
                        />
                        <span
                          className="w-[40px] h-[2px] absolute"
                          style={{
                            zIndex: 999,
                            borderLeft: "6px solid white",
                            borderRight: "6px solid white",
                          }}
                        />
                        <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                            style={{ zIndex: 1000 }}
                          >
                            <span
                              className="w-[26px] h-[8px] absolute -rotate-45"
                              style={{
                                borderLeft: "2px solid rgb(34, 197, 94)",
                                borderRight: "2px solid rgb(34, 197, 94)",
                              }}
                            />
                            <span
                              className="w-[26px] h-[2px] absolute -rotate-45"
                              style={{
                                borderLeft: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            />
                            <span
                              className="w-[26px] h-[8px] absolute rotate-45"
                              style={{
                                borderLeft: "2px solid rgb(34, 197, 94)",
                                borderRight: "2px solid rgb(34, 197, 94)",
                              }}
                            />
                            <span
                              className="w-[26px] h-[2px] absolute rotate-45"
                              style={{
                                borderLeft: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            />
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center text-[10px]">
                              500
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(0.5px)", zIndex: 1000 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(1px)", zIndex: 999 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(1.5px)", zIndex: 998 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(2px)", zIndex: 997 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(2.5px)", zIndex: 996 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(3px)", zIndex: 995 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(3.5px)", zIndex: 994 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(4px)", zIndex: 993 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(4.5px)", zIndex: 992 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(5px)", zIndex: 991 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(5.5px)", zIndex: 990 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(6px)", zIndex: 989 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(6.5px)", zIndex: 988 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(7px)", zIndex: 987 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(7.5px)", zIndex: 986 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(8px)", zIndex: 985 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(8.5px)", zIndex: 984 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(9px)", zIndex: 983 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(9.5px)", zIndex: 982 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(10px)", zIndex: 981 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 100, 37)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 100, 37)",
                          borderRight: "6px solid rgb(0, 100, 37)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 100, 37)",
                              borderRight: "2px solid rgb(0, 100, 37)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </span>
            <span
              className=" transition-all duration-200 ease-in-out "
              style={{ transform: "translate(0px, 0px) rotate(90deg)" }}
            >
              <div className="coinContainer transition-all duration-1000 ease-in-out ">
                <div className="text-white coin ">
                  <span
                    className="absolute w-full h-full  rounded-full"
                    style={{
                      transform: "translateZ(10px)",
                      zIndex: 1000,
                      backgroundColor: "rgb(245, 158, 11)",
                    }}
                  >
                    <span className="relative flex items-center justify-center w-full h-full font-black bg-white rounded-full">
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                        style={{ backgroundColor: "rgb(245, 158, 11)" }}
                      >
                        <span
                          className="w-[40px] h-[8px] absolute"
                          style={{
                            borderLeft: "6px solid rgb(245, 158, 11)",
                            borderRight: "6px solid rgb(245, 158, 11)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "6px solid rgb(245, 158, 11)",
                            borderRight: "6px solid rgb(245, 158, 11)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute rotate-90"
                          style={{
                            borderLeft: "6px solid rgb(245, 158, 11)",
                            borderRight: "6px solid rgb(245, 158, 11)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "6px solid rgb(245, 158, 11)",
                            borderRight: "6px solid rgb(245, 158, 11)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[2px] absolute -rotate-90"
                          style={{
                            zIndex: 999,
                            borderLeft: "6px solid white",
                            borderRight: "6px solid white",
                          }}
                        />
                        <span
                          className="w-[40px] h-[2px] absolute"
                          style={{
                            zIndex: 999,
                            borderLeft: "6px solid white",
                            borderRight: "6px solid white",
                          }}
                        />
                        <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                            style={{ zIndex: 1000 }}
                          >
                            <span
                              className="w-[26px] h-[8px] absolute -rotate-45"
                              style={{
                                borderLeft: "2px solid rgb(245, 158, 11)",
                                borderRight: "2px solid rgb(245, 158, 11)",
                              }}
                            />
                            <span
                              className="w-[26px] h-[2px] absolute -rotate-45"
                              style={{
                                borderLeft: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            />
                            <span
                              className="w-[26px] h-[8px] absolute rotate-45"
                              style={{
                                borderLeft: "2px solid rgb(245, 158, 11)",
                                borderRight: "2px solid rgb(245, 158, 11)",
                              }}
                            />
                            <span
                              className="w-[26px] h-[2px] absolute rotate-45"
                              style={{
                                borderLeft: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            />
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center text-[10px]">
                              1K
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(0.5px)", zIndex: 1000 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(1px)", zIndex: 999 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(1.5px)", zIndex: 998 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(2px)", zIndex: 997 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(2.5px)", zIndex: 996 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(3px)", zIndex: 995 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(3.5px)", zIndex: 994 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(4px)", zIndex: 993 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(4.5px)", zIndex: 992 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(5px)", zIndex: 991 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(5.5px)", zIndex: 990 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(6px)", zIndex: 989 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(6.5px)", zIndex: 988 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(7px)", zIndex: 987 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(7.5px)", zIndex: 986 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(8px)", zIndex: 985 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(8.5px)", zIndex: 984 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(9px)", zIndex: 983 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(9.5px)", zIndex: 982 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(10px)", zIndex: 981 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(151, 95, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(151, 95, 0)",
                          borderRight: "6px solid rgb(151, 95, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(151, 95, 0)",
                              borderRight: "2px solid rgb(151, 95, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </span>
            <span
              className=" transition-all duration-200 ease-in-out "
              style={{ transform: "translate(0px, 0px) rotate(90deg)" }}
            >
              <div className="coinContainer transition-all duration-1000 ease-in-out ">
                <div className="text-white coin ">
                  <span
                    className="absolute w-full h-full  rounded-full"
                    style={{
                      transform: "translateZ(10px)",
                      zIndex: 1000,
                      backgroundColor: "rgb(59, 130, 246)",
                    }}
                  >
                    <span className="relative flex items-center justify-center w-full h-full font-black bg-white rounded-full">
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                        style={{ backgroundColor: "rgb(59, 130, 246)" }}
                      >
                        <span
                          className="w-[40px] h-[8px] absolute"
                          style={{
                            borderLeft: "6px solid rgb(59, 130, 246)",
                            borderRight: "6px solid rgb(59, 130, 246)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "6px solid rgb(59, 130, 246)",
                            borderRight: "6px solid rgb(59, 130, 246)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute rotate-90"
                          style={{
                            borderLeft: "6px solid rgb(59, 130, 246)",
                            borderRight: "6px solid rgb(59, 130, 246)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "6px solid rgb(59, 130, 246)",
                            borderRight: "6px solid rgb(59, 130, 246)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[2px] absolute -rotate-90"
                          style={{
                            zIndex: 999,
                            borderLeft: "6px solid white",
                            borderRight: "6px solid white",
                          }}
                        />
                        <span
                          className="w-[40px] h-[2px] absolute"
                          style={{
                            zIndex: 999,
                            borderLeft: "6px solid white",
                            borderRight: "6px solid white",
                          }}
                        />
                        <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                            style={{ zIndex: 1000 }}
                          >
                            <span
                              className="w-[26px] h-[8px] absolute -rotate-45"
                              style={{
                                borderLeft: "2px solid rgb(59, 130, 246)",
                                borderRight: "2px solid rgb(59, 130, 246)",
                              }}
                            />
                            <span
                              className="w-[26px] h-[2px] absolute -rotate-45"
                              style={{
                                borderLeft: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            />
                            <span
                              className="w-[26px] h-[8px] absolute rotate-45"
                              style={{
                                borderLeft: "2px solid rgb(59, 130, 246)",
                                borderRight: "2px solid rgb(59, 130, 246)",
                              }}
                            />
                            <span
                              className="w-[26px] h-[2px] absolute rotate-45"
                              style={{
                                borderLeft: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            />
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center text-[10px]">
                              5K
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(0.5px)", zIndex: 1000 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(1px)", zIndex: 999 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(1.5px)", zIndex: 998 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(2px)", zIndex: 997 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(2.5px)", zIndex: 996 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(3px)", zIndex: 995 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(3.5px)", zIndex: 994 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(4px)", zIndex: 993 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(4.5px)", zIndex: 992 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(5px)", zIndex: 991 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(5.5px)", zIndex: 990 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(6px)", zIndex: 989 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(6.5px)", zIndex: 988 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(7px)", zIndex: 987 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(7.5px)", zIndex: 986 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(8px)", zIndex: 985 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(8.5px)", zIndex: 984 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(9px)", zIndex: 983 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(9.5px)", zIndex: 982 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(10px)", zIndex: 981 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 56, 148)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 56, 148)",
                          borderRight: "6px solid rgb(0, 56, 148)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 56, 148)",
                              borderRight: "2px solid rgb(0, 56, 148)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </span>
            <span
              className=" transition-all duration-200 ease-in-out "
              style={{ transform: "translate(0px, 0px) rotate(90deg)" }}
            >
              <div className="coinContainer transition-all duration-1000 ease-in-out ">
                <div className="text-white coin ">
                  <span
                    className="absolute w-full h-full  rounded-full"
                    style={{
                      transform: "translateZ(10px)",
                      zIndex: 1000,
                      backgroundColor: "rgb(39, 39, 39)",
                    }}
                  >
                    <span className="relative flex items-center justify-center w-full h-full font-black bg-white rounded-full">
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                        style={{ backgroundColor: "rgb(39, 39, 39)" }}
                      >
                        <span
                          className="w-[40px] h-[8px] absolute"
                          style={{
                            borderLeft: "6px solid rgb(39, 39, 39)",
                            borderRight: "6px solid rgb(39, 39, 39)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "6px solid rgb(39, 39, 39)",
                            borderRight: "6px solid rgb(39, 39, 39)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute rotate-90"
                          style={{
                            borderLeft: "6px solid rgb(39, 39, 39)",
                            borderRight: "6px solid rgb(39, 39, 39)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "6px solid rgb(39, 39, 39)",
                            borderRight: "6px solid rgb(39, 39, 39)",
                          }}
                        />
                        <span
                          className="w-[40px] h-[2px] absolute -rotate-90"
                          style={{
                            zIndex: 999,
                            borderLeft: "6px solid white",
                            borderRight: "6px solid white",
                          }}
                        />
                        <span
                          className="w-[40px] h-[2px] absolute"
                          style={{
                            zIndex: 999,
                            borderLeft: "6px solid white",
                            borderRight: "6px solid white",
                          }}
                        />
                        <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                            style={{ zIndex: 1000 }}
                          >
                            <span
                              className="w-[26px] h-[8px] absolute -rotate-45"
                              style={{
                                borderLeft: "2px solid rgb(39, 39, 39)",
                                borderRight: "2px solid rgb(39, 39, 39)",
                              }}
                            />
                            <span
                              className="w-[26px] h-[2px] absolute -rotate-45"
                              style={{
                                borderLeft: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            />
                            <span
                              className="w-[26px] h-[8px] absolute rotate-45"
                              style={{
                                borderLeft: "2px solid rgb(39, 39, 39)",
                                borderRight: "2px solid rgb(39, 39, 39)",
                              }}
                            />
                            <span
                              className="w-[26px] h-[2px] absolute rotate-45"
                              style={{
                                borderLeft: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            />
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center text-[10px]">
                              10K
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(0.5px)", zIndex: 1000 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(1px)", zIndex: 999 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(1.5px)", zIndex: 998 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(2px)", zIndex: 997 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(2.5px)", zIndex: 996 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(3px)", zIndex: 995 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(3.5px)", zIndex: 994 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(4px)", zIndex: 993 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(4.5px)", zIndex: 992 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(5px)", zIndex: 991 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(5.5px)", zIndex: 990 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(6px)", zIndex: 989 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(6.5px)", zIndex: 988 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(7px)", zIndex: 987 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(7.5px)", zIndex: 986 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(8px)", zIndex: 985 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(8.5px)", zIndex: 984 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(9px)", zIndex: 983 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(9.5px)", zIndex: 982 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                    style={{ transform: "translateZ(10px)", zIndex: 981 }}
                  >
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(0, 0, 0)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(0, 0, 0)",
                          borderRight: "6px solid rgb(0, 0, 0)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid rgb(233, 233, 233)",
                          borderRight: "6px solid rgb(233, 233, 233)",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(0, 0, 0)",
                              borderRight: "2px solid rgb(0, 0, 0)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div className="relative flex items-center justify-center z-50">
            <div className="coinContainer transition-all duration-1000 ease-in-out ">
              <div className="text-white coin ">
                <span
                  className="absolute w-full h-full  rounded-full"
                  style={{
                    transform: "translateZ(10px)",
                    zIndex: 1000,
                    backgroundColor: "rgb(217, 70, 239)",
                  }}
                >
                  <span className="relative flex items-center justify-center w-full h-full font-black bg-white rounded-full">
                    <span
                      className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                      style={{ backgroundColor: "rgb(217, 70, 239)" }}
                    >
                      <span
                        className="w-[40px] h-[8px] absolute"
                        style={{
                          borderLeft: "6px solid rgb(217, 70, 239)",
                          borderRight: "6px solid rgb(217, 70, 239)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(217, 70, 239)",
                          borderRight: "6px solid rgb(217, 70, 239)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute rotate-90"
                        style={{
                          borderLeft: "6px solid rgb(217, 70, 239)",
                          borderRight: "6px solid rgb(217, 70, 239)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[8px] absolute -rotate-45"
                        style={{
                          borderLeft: "6px solid rgb(217, 70, 239)",
                          borderRight: "6px solid rgb(217, 70, 239)",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute -rotate-90"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid white",
                          borderRight: "6px solid white",
                        }}
                      />
                      <span
                        className="w-[40px] h-[2px] absolute"
                        style={{
                          zIndex: 999,
                          borderLeft: "6px solid white",
                          borderRight: "6px solid white",
                        }}
                      />
                      <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                        <span
                          className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                          style={{ zIndex: 1000 }}
                        >
                          <span
                            className="w-[26px] h-[8px] absolute -rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(217, 70, 239)",
                              borderRight: "2px solid rgb(217, 70, 239)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute -rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span
                            className="w-[26px] h-[8px] absolute rotate-45"
                            style={{
                              borderLeft: "2px solid rgb(217, 70, 239)",
                              borderRight: "2px solid rgb(217, 70, 239)",
                            }}
                          />
                          <span
                            className="w-[26px] h-[2px] absolute rotate-45"
                            style={{
                              borderLeft: "1px solid white",
                              borderRight: "1px solid white",
                            }}
                          />
                          <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center text-[10px]">
                            100
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(0.5px)", zIndex: 1000 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(1px)", zIndex: 999 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(1.5px)", zIndex: 998 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(2px)", zIndex: 997 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(2.5px)", zIndex: 996 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(3px)", zIndex: 995 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(3.5px)", zIndex: 994 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(4px)", zIndex: 993 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(4.5px)", zIndex: 992 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(5px)", zIndex: 991 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(5.5px)", zIndex: 990 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(6px)", zIndex: 989 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(6.5px)", zIndex: 988 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(7px)", zIndex: 987 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(7.5px)", zIndex: 986 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(8px)", zIndex: 985 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(8.5px)", zIndex: 984 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(9px)", zIndex: 983 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(9.5px)", zIndex: 982 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                  style={{ transform: "translateZ(10px)", zIndex: 981 }}
                >
                  <span
                    className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip "
                    style={{ backgroundColor: "rgb(110, 0, 126)" }}
                  >
                    <span
                      className="w-[40px] h-[8px] absolute"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute rotate-90"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[8px] absolute -rotate-45"
                      style={{
                        borderLeft: "6px solid rgb(110, 0, 126)",
                        borderRight: "6px solid rgb(110, 0, 126)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute -rotate-90"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span
                      className="w-[40px] h-[2px] absolute"
                      style={{
                        zIndex: 999,
                        borderLeft: "6px solid rgb(233, 233, 233)",
                        borderRight: "6px solid rgb(233, 233, 233)",
                      }}
                    />
                    <span className="h-[40px] rounded-full flex justify-center border-[5px]  w-[40px] items-center">
                      <span
                        className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center  items-center"
                        style={{ zIndex: 1000 }}
                      >
                        <span
                          className="w-[26px] h-[8px] absolute -rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute -rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span
                          className="w-[26px] h-[8px] absolute rotate-45"
                          style={{
                            borderLeft: "2px solid rgb(110, 0, 126)",
                            borderRight: "2px solid rgb(110, 0, 126)",
                          }}
                        />
                        <span
                          className="w-[26px] h-[2px] absolute rotate-45"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                          }}
                        />
                        <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center  items-center" />
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center w-12 text-xs capitalize transition-opacity ease-in-out cursor-pointer"
          style={{
            zIndex: 997,
            opacity: "0.5",
            cursor: "not-allowed",
            pointerEvents: "none",
          }}
        >
          <div className="flex items-center justify-center h-4 aspect-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span>repeat</span>
        </div>
      </div>
    </div>
  );
};

export default Chip100;
