import { playClickSound } from "../../../utils/playClickSound";

const Header = ({ setShowBetHistory, setShowSetting }) => {
  return (
    <div className="flex items-center justify-between px-4 pt-4">
      <span
        onClick={() => {
          setShowBetHistory(false);
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
      <button
        onClick={() => {
          setShowBetHistory(false);
          setShowSetting(false);
          playClickSound(false);
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
  );
};

export default Header;
