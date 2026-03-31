import { Fragment, useState } from "react";
import { ModalsName } from "../../../static";
import HowToPlay from "./HowToPlay";
import Settings from "./Settings";
import MyBets from "./MyBets";
import MoreGames from "./MoreGames";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [modal, setModal] = useState({ name: "" });
  return (
    <Fragment>
      {modal?.name === ModalsName.howToPlay && (
        <HowToPlay setModal={setModal} />
      )}
      {modal?.name === ModalsName.settings && <Settings setModal={setModal} />}
      {modal?.name === ModalsName.myBets && <MyBets setModal={setModal} />}
      {modal?.name === ModalsName.moreGames && (
        <MoreGames setModal={setModal} />
      )}

      <div className="flex absolute top-0 right-0 z-50 gap-1">
        <div className="relative flex flex-col items-end gap-0.5 pt-2 pb-1">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="mr-1 iconButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out  ${showMenu ? "opacity-100 rotate-90" : "opacity-0"}`}
            >
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out  ${showMenu ? "opacity-0 rotate-90" : "opacity-100"}`}
            >
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
            <div className="w-4 h-4" />
          </button>
          <div
            className={`absolute bottom-0 right-0 origin-right translate-y-full w-64 grid grid-cols-2  gap-0.5 p-1 bg-zinc-900/40 backdrop-blur-sm border-[0.5px] border-r-0 border-white/20 rounded-l-lg transition-all duration-300 ease-in-out  ${showMenu ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          >
            <button
              onClick={() => setModal({ name: ModalsName.howToPlay })}
              className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
              </svg>
              <span className="text-xs font-medium whitespace-nowrap">
                How to play
              </span>
            </button>
            <button
              onClick={() => setModal({ name: ModalsName.settings })}
              className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              </svg>
              <span className="text-xs font-medium whitespace-nowrap">
                Settings
              </span>
            </button>
            <button
              onClick={() => setModal({ name: ModalsName.myBets })}
              className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
              </svg>
              <span className="text-xs font-medium whitespace-nowrap">
                My Bets
              </span>
            </button>
            <button
              onClick={() => setModal({ name: ModalsName.moreGames })}
              className="flex flex-col gap-1 justify-start items-center p-2 text-white rounded bg-black/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                <path d="M8 6h.01" />
                <path d="M16 18h.01" />
                <path d="M12 16l-3 -4l3 -4l3 4z" />
              </svg>
              <span className="text-xs font-medium whitespace-nowrap">
                More Games
              </span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
