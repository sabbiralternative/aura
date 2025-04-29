import { useSelector } from "react-redux";
import { Status } from "../../../const";
import Chip from "../../shared/Chip/Chip";

const ActionButton = ({
  setShowSetting,
  status,
  isPlaceStake,
  handleUndoStake,
}) => {
  const { balance } = useSelector((state) => state.auth);
  return (
    <div className="relative flex justify-between w-full">
      <div className="flex items-center justify-center gap-2 text-white">
        <div>
          <button className="text-text-primary glass p-2 text-sm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4 h-4"
            >
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
              <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
            </svg>
          </button>
        </div>
        <div className="rounded-full relative glass p-1 text-sm border border-white/20 w-fit">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-2 h-2"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
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
              d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* <span className="absolute z-50 -translate-x-1/2 left-1/2 opacity-0">
        <div className="relative flex flex-col items-center w-fit gap-2 select-none h-fit text-text-primary transition-all ease-in-out duration-500">
          <div className="flex items-center justify-center w-full gap-3 h-fit flex-row">
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
              className="relative flex flex-col items-center h-fit w-fit"
              style={{ zIndex: 998 }}
            >
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/80 via-transparent to-transparent -space-x-[40px] transition-all rounded-full top-1/2 -translate-y-1/2 z-50 ease-in-out duration-200 absolute flex items-center justify-center w-fit max-w-xl h-fit" />
              <div className="relative flex items-center justify-center z-50">
                <div className="coinContainer transition-all duration-1000 ease-in-out">
                  <div className="text-white coin">
                    <span
                      className="absolute w-full h-full rounded-full"
                      style={{
                        transform: "translateZ(10px)",
                        zIndex: 1000,
                        backgroundColor: "rgb(217, 70, 239)",
                      }}
                    >
                      <span className="relative flex items-center justify-center w-full h-full font-black bg-white rounded-full">
                        <span
                          className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                          <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                            <span
                              className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                                  borderRight: `2px solid
                                          rgb(217, 70, 239)`,
                                }}
                              />
                              <span
                                className="w-[26px] h-[2px] absolute rotate-45"
                                style={{
                                  borderLeft: "1px solid white",
                                  borderRight: "1px solid white",
                                }}
                              />
                              <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center text-[10px]">
                                100
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(0.5px)",
                        zIndex: 1000,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(1px)",
                        zIndex: 999,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(1.5px)",
                        zIndex: 998,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(2px)",
                        zIndex: 997,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(2.5px)",
                        zIndex: 996,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(3px)",
                        zIndex: 995,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(3.5px)",
                        zIndex: 994,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(4px)",
                        zIndex: 993,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(4.5px)",
                        zIndex: 992,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(5px)",
                        zIndex: 991,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(5.5px)",
                        zIndex: 990,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(6px)",
                        zIndex: 989,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(6.5px)",
                        zIndex: 988,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(7px)",
                        zIndex: 987,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(7.5px)",
                        zIndex: 986,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(8px)",
                        zIndex: 985,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(8.5px)",
                        zIndex: 984,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(9px)",
                        zIndex: 983,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(9.5px)",
                        zIndex: 982,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className="absolute flex items-center justify-center w-full h-full font-black rounded-full bg-white/80"
                      style={{
                        transform: "translateZ(10px)",
                        zIndex: 981,
                      }}
                    >
                      <span
                        className="relative flex items-center justify-center w-full h-full font-bold rounded-full overflow-clip"
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
                        <span className="h-[40px] rounded-full flex justify-center border-[5px] w-[40px] items-center">
                          <span
                            className="relative border-[1px] h-[30px] aspect-square rounded-full flex justify-center items-center"
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
                            <span className="border-[1px] h-[26px] aspect-square rounded-full flex justify-center items-center" />
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
        </div>{" "}
      </span> */}
      {status === Status.OPEN && balance >= 100 && (
        <Chip isPlaceStake={isPlaceStake} handleUndoStake={handleUndoStake} />
      )}
      {balance < 100 && (
        <button className="text-text-primary glass p-1 text-xm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200">
          <span className="px-2 text-xs text-white/70 glass">
            Insufficient Balance
          </span>
        </button>
      )}
      <span className="z-50 flex flex-col items-end gap-0.5">
        <button
          onClick={() => setShowSetting(true)}
          className="text-text-primary glass p-2 text-sm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default ActionButton;
