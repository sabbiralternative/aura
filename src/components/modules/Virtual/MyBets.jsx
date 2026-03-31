import { Fragment } from "react";

const MyBets = ({ setShowMyBets, showMyBets }) => {
  return (
    <Fragment>
      <button
        onClick={() => setShowMyBets((prev) => !prev)}
        id="myBetsButton"
        className="absolute top-0 left-1/2 transition-all duration-300 ease-linear -translate-x-1/2 -translate-y-1/2 fabButton"
      >
        {showMyBets ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 animate__faster animate__animated animate__rotateIn"
          >
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 animate__faster animate__animated animate__flipInY"
          >
            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
          </svg>
        )}

        <span
          className="transition-all duration-300 ease-linear absolute px-1.5 text-xs font-semibold bg-green-500 border-2 rounded-full right-0 border-white/20 -top-2"
          style={{ opacity: 0, scale: "0.5" }}
        >
          0
        </span>
      </button>
      {showMyBets && (
        <div
          className="absolute -top-0 transition-all duration-300 ease-in-out origin-top w-[96%] max-w-2xl p-2 border left-1/2 shadow-[0_0_12px_rgba(0,0,0,0.3)] shadow-green-500/40 bg-zinc-900 rounded-xl border-green-600"
          style={{
            transform: "translateY(-100%) translateX(-50%) scale(1)",
            opacity: 1,
            pointerEvents: "auto",
          }}
        >
          <div className="flex flex-col gap-1 justify-center items-center p-3 pb-6">
            <h1 className="text-xl font-bold text-gray-300">No open bets</h1>
            <p className="text-sm font-normal text-center text-gray-500">
              Bets in active rounds will appear here
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MyBets;
