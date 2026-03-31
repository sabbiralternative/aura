const RecentResultButton = ({ setShowRecentResultModal }) => {
  return (
    <div
      onClick={() => setShowRecentResultModal(true)}
      className="flex items-center justify-center gap-1 p-1 text-white border-[1px] rounded-full cursor-pointer bg-zinc-900/40 border-white/20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="tabler-icon tabler-icon-history"
      >
        <path d="M12 8l0 4l2 2" />
        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={8}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-1 text-white/50"
      >
        <path
          d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z"
          fill="currentColor"
          strokeWidth={0}
        />
      </svg>
    </div>
  );
};

export default RecentResultButton;
