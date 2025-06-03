import { IoIosChatboxes, IoIosSend } from "react-icons/io";
import { playClickSound } from "../../../utils/playClickSound";
import { MdOutlineMoreVert } from "react-icons/md";
import { useState } from "react";

const Chat = ({ setShowChat, setShowSetting }) => {
  const [message, setMessage] = useState(null);
  return (
    <div
      className="scale-y-100 h-[70%] fixed origin-bottom flex   flex-col items-center   bottom-0   w-full  max-w-md  transition-all ease-in-out"
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col flex-grow w-full bg-[#1a1a1a] backdrop-blur-md rounded-t-xl z-50">
        <div className="flex flex-col h-full overflow-y-scroll ">
          <div className="flex items-center justify-between px-4 pt-4">
            <span
              onClick={() => {
                setShowChat(false);
                setShowSetting(true);
                playClickSound();
              }}
              className="flex items-center gap-1 text-white cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-6 h-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </span>
            <div
              onClick={() => {
                setShowChat(false);
                setShowSetting(true);
                playClickSound();
              }}
              className="flex flex-col  text-white cursor-pointer"
            >
              <div className="flex items-center gap-3 leading-none">
                <IoIosChatboxes size={20} />
                <h4 className="text-xl font-semibold">Chat</h4>
              </div>
              <div className="flex items-center text-sm">
                <p> Dealer:</p>
                <h4 className="text-[#86f604] ml-1">Nora</h4>
              </div>
            </div>
            <button
              onClick={() => {
                setShowChat(false);
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
                />
              </svg>
            </button>
          </div>
          <div className="relative flex-grow w-full overflow-hidden">
            <div className="absolute p-4 animate__animated animate__faster overflow-y-auto h-full w-full  top-0 right-0 transition-transform delay-100 ease-in-out  animate__bounceInRight">
              <div className="flex flex-col h-full gap-2 py-1 overflow-y-auto scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-white markdown-preview">
                <div className="flex flex-col gap-3 pb-12  overflow-hidden">
                  <div className="overflow-y-scroll scrollbar-thin flex flex-col gap-3">
                    <li className="list-none bg-black  max-w-[70%] w-fit p-2 rounded-tr-xl rounded-br-xl rounded-tl-xl">
                      <div className="flex flex-col leading-none">
                        <p className="text-xs text-gray-400">John:</p>
                        <p className="text-sm text-gray-300">How Are you ?</p>
                      </div>
                    </li>
                    <li className="list-none bg-black  max-w-[70%] w-fit p-2 rounded-tr-xl rounded-br-xl rounded-tl-xl">
                      <div className="flex flex-col leading-none">
                        <p className="text-xs text-gray-400">Doe:</p>
                        <p className="text-sm text-gray-300">
                          I am fine. How are you ?
                        </p>
                      </div>
                    </li>
                    <li className="list-none bg-black  max-w-[70%] w-fit p-2 rounded-tr-xl rounded-br-xl rounded-tl-xl">
                      <div className="flex flex-col leading-none">
                        <p className="text-xs text-gray-400">John:</p>
                        <p className="text-sm text-gray-300">How Are you ?</p>
                      </div>
                    </li>
                    <li className="list-none bg-black  max-w-[70%] w-fit p-2 rounded-tr-xl rounded-br-xl rounded-tl-xl">
                      <div className="flex flex-col leading-none">
                        <p className="text-xs text-gray-400">John:</p>
                        <p className="text-sm text-gray-300">How Are you ?</p>
                      </div>
                    </li>
                    <li className="list-none bg-black  max-w-[70%] w-fit p-2 rounded-tr-xl rounded-br-xl rounded-tl-xl">
                      <div className="flex flex-col leading-none">
                        <p className="text-xs text-gray-400">John:</p>
                        <p className="text-sm text-gray-300">How Are you ?</p>
                      </div>
                    </li>
                    <li className="list-none bg-black  max-w-[70%] w-fit p-2 rounded-tr-xl rounded-br-xl rounded-tl-xl">
                      <div className="flex flex-col leading-none">
                        <p className="text-xs text-gray-400">John:</p>
                        <p className="text-sm text-gray-300">How Are you ?</p>
                      </div>
                    </li>
                    <li className="list-none bg-black  max-w-[70%] w-fit p-2 rounded-tr-xl rounded-br-xl rounded-tl-xl">
                      <div className="flex flex-col leading-none">
                        <p className="text-xs text-gray-400">John:</p>
                        <p className="text-sm text-gray-300">How Are you ?</p>
                      </div>
                    </li>
                    <li className="list-none bg-black  max-w-[70%] w-fit p-2 rounded-tr-xl rounded-br-xl rounded-tl-xl">
                      <div className="flex flex-col leading-none">
                        <p className="text-xs text-gray-400">John:</p>
                        <p className="text-sm text-gray-300">How Are you ?</p>
                      </div>
                    </li>
                  </div>
                </div>

                <div className="grid grid-cols-12 w-full fixed bottom-5 overflow-hidden">
                  <div className="w-full col-span-9">
                    <input
                      onChange={(e) => setMessage(e.target.value)}
                      className="rounded-full outline-none border border-gray-400 bg-transparent py-2 px-2 text-white w-full"
                      type="text"
                      placeholder="Tap to chat"
                    />
                  </div>
                  {message ? (
                    <div className=" w-full col-span-2 flex items-center justify-center ">
                      <button className="bg-gray-400 rounded-full p-1">
                        {" "}
                        <IoIosSend size={30} />
                      </button>
                    </div>
                  ) : (
                    <button className="text-white w-full col-span-2 flex items-center justify-center">
                      <MdOutlineMoreVert size={30} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
