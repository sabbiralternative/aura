import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BetHistory from "../../shared/BetHistory/BetHistory";
import { playClickSound } from "../../../utils/playClickSound";

const Setting = ({ setShowSetting, showFullScreen, setShowFullScreen }) => {
  const navigate = useNavigate();
  const [showBetHistory, setShowBetHistory] = useState(false);
  const { username, balance } = useSelector((state) => state.auth);

  const handleToggleFullScreen = () => {
    playClickSound();
    if (showFullScreen) {
      setShowFullScreen(false);
      document.exitFullscreen();
      setShowSetting(false);
    } else {
      setShowFullScreen(true);
      document.body.requestFullscreen();
      setShowSetting(false);
    }
  };

  const handleShowBetHistory = () => {
    setShowBetHistory(true);

    playClickSound();
  };

  return (
    <>
      {showBetHistory && (
        <BetHistory
          setShowSetting={setShowSetting}
          setShowBetHistory={setShowBetHistory}
        />
      )}
      <div
        className={`scale-y-100 h-[70%] fixed origin-bottom flex   flex-col items-center   bottom-0   w-full  max-w-md  transition-all ease-in-out ${
          showBetHistory ? "invisible" : "visible"
        }`}
        style={{ zIndex: "1000" }}
      >
        <div className="flex flex-col flex-grow w-full bg-black/60 backdrop-blur-md rounded-t-xl ">
          <div className="flex flex-col h-full overflow-y-scroll ">
            <div className="flex items-center justify-between px-4 pt-4">
              <span className="text-base font-bold text-white"></span>
              <button
                onClick={() => {
                  setShowSetting(false);

                  playClickSound();
                }}
                className="font-semibold "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6 text-slate-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative flex-grow w-full overflow-hidden">
              <div className="px-6 py-2 text-sm text-white animate__animated animate__faster animate__bounceInLeft">
                <div className="flex flex-wrap items-center w-full gap-1">
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
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                  <span className="font-semibold">{username}</span>
                  <span className="ml-auto text-yellow">
                    <span>₹{balance}</span>
                  </span>
                </div>
              </div>
              <div className=" animate__animated animate__faster overflow-y-auto p-4  h-full  grid content-start grid-cols-3 gap-1 w-full transition-transform delay-100 ease-in-out animate__bounceInLeft">
                <div
                  onClick={() => {
                    navigate("/");
                    setShowSetting(false);
                    playClickSound();
                  }}
                  className="flex flex-col items-center gap-2 py-5 text-white transition-transform ease-in-out delay-100 rounded-lg cursor-pointer active:scale-90 bg-slate-100/20 hover:bg-slate-100/30 h-fit "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-10 h-10 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm font-semibold ">Lobby</span>
                </div>
                <div
                  onClick={() => {
                    playClickSound();
                  }}
                  className="flex flex-col items-center gap-2 py-5 text-white transition-transform ease-in-out delay-100 rounded-lg cursor-pointer active:scale-90 bg-slate-100/20 hover:bg-slate-100/30 h-fit "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-10 h-10 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm font-semibold ">How to Play</span>
                </div>
                <div
                  onClick={() => {
                    playClickSound();
                  }}
                  className="flex flex-col items-center gap-2 py-5 text-white transition-transform ease-in-out delay-100 rounded-lg cursor-pointer active:scale-90 bg-slate-100/20 hover:bg-slate-100/30 h-fit "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-10 h-10 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm font-semibold ">Settings</span>
                </div>
                <div
                  onClick={() => {
                    playClickSound();
                  }}
                  className="flex flex-col items-center gap-2 py-5 text-white transition-transform ease-in-out delay-100 rounded-lg cursor-pointer active:scale-90 bg-slate-100/20 hover:bg-slate-100/30 h-fit "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-10 h-10 "
                  >
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"></path>
                    <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
                  <span className="text-sm font-semibold ">sound off</span>
                </div>
                <div
                  onClick={handleToggleFullScreen}
                  className="flex flex-col items-center gap-2 py-5 text-white transition-transform ease-in-out delay-100 rounded-lg cursor-pointer active:scale-90 bg-slate-100/20 hover:bg-slate-100/30 h-fit "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-10 h-10"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm font-semibold ">Fullscreen</span>
                </div>
                <div
                  onClick={handleShowBetHistory}
                  className="flex flex-col items-center gap-2 py-5 text-white transition-transform ease-in-out delay-100 rounded-lg cursor-pointer active:scale-90 bg-slate-100/20 hover:bg-slate-100/30 h-fit "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-10 h-10 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm font-semibold ">Bet History</span>
                </div>
              </div>
              <div className="absolute p-4 animate__animated animate__faster overflow-y-auto h-full w-full  top-0 right-0 transition-transform delay-100 ease-in-out animate__bounceOutRight">
                <div className="space-y-4 text-text-primary">
                  <div className="flex items-center gap-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="w-6 h-6"
                    >
                      <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z"></path>
                    </svg>
                    <span className="text-lg">Video(On/Off)</span>
                    <span className="ml-auto">
                      <label className="relative w-fit select-none h-fit gap-2  flex items-center cursor-pointer   undefined">
                        <input
                          className="sr-only peer"
                          type="checkbox"
                          checked=""
                        />
                        <div className="w-10 bg-white/20 flex justify-start peer-checked:justify-end peer-checked:bg-green transition-all ease-in-out p-[2px] rounded-full">
                          <span className="w-5 h-5 bg-white rounded-full"></span>
                        </div>
                        <span className="font-regular text-text-primary"></span>
                      </label>
                    </span>
                  </div>
                  <div className="bg-controls-idle rounded-full h-[2px] w-full"></div>
                </div>
              </div>
              <div className="absolute p-4 animate__animated animate__faster overflow-y-auto h-full w-full  top-0 right-0 transition-transform delay-100 ease-in-out animate__bounceOutRight">
                <div className="flex flex-col h-full gap-2 py-1 overflow-y-auto scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-white markdown-preview">
                  <div
                    data-accordion-component="Accordion"
                    className="accordion"
                  ></div>
                </div>
              </div>
              <div className="absolute p-4 pb-0  animate__animated animate__faster overflow-y-auto h-full w-full  top-0 right-0 transition-transform delay-100 ease-in-out animate__bounceOutRight">
                <div className="flex flex-col h-full gap-3 pt-2 overflow-y-auto scrollbar-none ">
                  <div className="flex text-sm items-center w-full gap-2 p-[2px] text-white">
                    <input
                      id="fromDate"
                      max="2024-12-16"
                      className="flex-grow p-2 rounded-lg bg-controls-idle"
                      type="date"
                      value="2024-12-15"
                    />
                    <span>to</span>
                    <input
                      id="toDate"
                      max="2024-12-16"
                      className="flex-grow p-2 border-none rounded-lg bg-controls-idle"
                      type="date"
                      value="2024-12-16"
                    />
                  </div>
                  <div>
                    <div className="grid w-full grid-cols-2 gap-1">
                      <div className="bg-white text-blue  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center">
                        Today
                      </div>
                      <div className="bg-controls-idle text-white  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center">
                        Last Week
                      </div>
                      <div className="bg-controls-idle text-white  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center">
                        Last Month
                      </div>
                      <div className="bg-controls-idle text-white  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center">
                        Last 3 Months
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col-reverse gap-2">
                    <div className="flex items-center justify-center w-full h-full text-white ">
                      No bets found.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
