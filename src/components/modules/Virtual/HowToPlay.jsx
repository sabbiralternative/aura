const HowToPlay = ({ setModal }) => {
  const closeModal = () => {
    setModal({ name: "" });
  };
  return (
    <div
      className="fixed top-0 left-0 flex flex-col items-center  w-full p-2 h-dvh bg-black/70 backdrop-blur-sm justify-center"
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col w-full max-h-full max-w-lg p-2 border rounded-lg bg-zinc-900 border-zinc-800 scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-white/10 modal-slide-up h-full">
        <div className="flex items-center w-full max-w-lg mb-2 text-white " />
        <div className="flex-grow overflow-y-auto">
          <div className="flex flex-col gap-2 p-1 h-full __className_575e37">
            <div className="flex justify-between text-zinc-300">
              <h1 className="text-xl font-semibold text-zinc-200">
                Ball by Ball Cricket
              </h1>
              <button onClick={closeModal}>
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
                  className="w-6 h-6"
                >
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div
              className="overflow-y-auto flex-grow py-8 space-y-2 w-full"
              style={{
                maskImage:
                  "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, black, black, black, transparent)",
              }}
            >
              <div className="grid grid-cols-2 gap-1 mt-2">
                <div className="flex justify-between items-center px-2 py-1 font-medium rounded bg-zinc-800">
                  <span className="flex flex-col justify-between text-sm text-zinc-300">
                    <span className="text-[10px] text-zinc-500">RTP</span>96.50%
                  </span>
                </div>
                <div className="flex justify-between items-center px-2 py-1 font-medium rounded bg-zinc-800">
                  <span className="flex flex-col justify-between text-sm text-zinc-300">
                    <span className="text-[10px] text-zinc-500">VERSION</span>
                    1.0.0
                  </span>
                </div>
              </div>{" "}
              <div className="flex gap-0.5 w-full rounded-lg p-0.5 border border-zinc-700">
                <div className="flex justify-center items-center p-2 w-full text-sm rounded font-medium text-zinc-700 bg-zinc-200 ">
                  Game Details
                </div>
                <div className="flex justify-center items-center p-2 w-full text-sm rounded font-medium text-zinc-100 ">
                  Payouts and Limits
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="flex-grow h-0.5 rounded-full bg-gradient-to-r from-transparent to-zinc-500" />
                <div className="w-2 h-2 rounded-sm rotate-45 bg-zinc-500" />
                <h2 className="px-2 text-xl font-semibold text-center text-zinc-200">
                  Game Details
                </h2>
                <div className="w-2 h-2 rounded-sm rotate-45 bg-zinc-500" />
                <div className="flex-grow h-0.5 rounded-full bg-gradient-to-r from-zinc-500 to-transparent" />
              </div>
              <div className="h-fit markdown text-zinc-400">
                <p>
                  <strong>What is Ball By Ball ?</strong>
                </p>
                <p>
                  Ball By Ball is a live cricket-based betting game where users
                  place bets on the outcome of each individual ball delivered in
                  a match. Players can bet on specific ball results such as runs
                  scored, wickets taken, or extras. Results are declared based
                  on the official broadcast video display.
                </p>
                <p>
                  <strong>Game Rules:</strong>
                </p>
                <ol>
                  <li>Click on your desired betting option.</li>
                  <li>
                    A bet slip will open showing:
                    <ul>
                      <li>The name of the selected option.</li>
                      <li>The odds for that option.</li>
                      <li>An input field to enter your bet amount.</li>
                      <li>
                        The PNL (Possible Profit or Loss) based on your input.
                      </li>
                    </ul>
                  </li>
                  <li>
                    You can discard the bet slip by clicking the 🗑️ trash icon.
                  </li>
                  <li>
                    Once you&apos;re ready, click &quot;Place Bet&quot; to
                    confirm.
                  </li>
                  <li>
                    You can place bets on:
                    <ul>
                      <li>Runs scored on the ball (1, 2, 3, 4, 6)</li>
                      <li>Dot Ball (0 run)</li>
                      <li>Wicket</li>
                      <li>Extras (No Ball, Wide, Bye, Leg Bye)</li>
                    </ul>
                  </li>
                  <li>
                    Make sure your bet amount is within minimum and maximum
                    limits.
                  </li>
                  <li>
                    Once bets are placed, the ball is delivered and the result
                    is declared.
                  </li>
                  <li>
                    Winnings will be distributed after the result is confirmed.
                  </li>
                  <li>
                    In case of technical issues, the round will be voided and
                    bets refunded.
                  </li>
                </ol>
                <p>
                  <strong>Run Section Rules:</strong>
                </p>
                <ul>
                  <li>
                    Only 1, 2, 3, 4, or 6 runs will be considered valid run
                    outcomes.
                  </li>
                  <li>
                    If 0 runs are scored, only the Dot Ball option will be
                    considered valid.
                  </li>
                  <li>
                    Wickets or extras that occur along with runs will NOT be
                    considered in this section.
                  </li>
                  <li>Only clean bat runs are counted for Run bets.</li>
                </ul>
                <p>
                  <strong>Wicket Section Rules:</strong>
                </p>
                <p>Only the following dismissals are considered valid:</p>
                <ul>
                  <li>
                    <p>Caught</p>
                  </li>
                  <li>
                    <p>Bowled</p>
                  </li>
                  <li>
                    <p>Run Out</p>
                  </li>
                  <li>
                    <p>LBW (Leg Before Wicket)</p>
                  </li>
                  <li>
                    <p>Stumped</p>
                  </li>
                  <li>
                    <p>Any Other Wicket</p>
                  </li>
                  <li>
                    <p>
                      Any runs scored along with a wicket will NOT be considered
                      in this section.
                    </p>
                  </li>
                  <li>
                    <p>Only the wicket outcome will be considered valid.</p>
                  </li>
                </ul>
                <p>
                  <strong>Extra Section Rules:</strong>
                </p>
                <p>Only the following extras are considered:</p>
                <ul>
                  <li>
                    <p>No Ball</p>
                  </li>
                  <li>
                    <p>Wide</p>
                  </li>
                  <li>
                    <p>Bye</p>
                  </li>
                  <li>
                    <p>Leg Bye</p>
                  </li>
                  <li>
                    <p>Any Extras</p>
                  </li>
                  <li>
                    <p>
                      In case of No Ball with Run Out, the result will be
                      considered as No Ball.
                    </p>
                  </li>
                  <li>
                    <p>
                      Any runs or wickets occurring on extra balls will NOT be
                      considered in this section.
                    </p>
                  </li>
                </ul>
                <p>
                  <strong>Disclaimer:</strong>
                </p>
                <ul>
                  <li>
                    Video feeds may come from different broadcasters; in such
                    cases, the scoreboard may update late.
                  </li>
                  <li>
                    Results will be declared based only on the video display.
                  </li>
                  <li>
                    If there is any difference between the video result and the
                    display result, the display result will be treated as final.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
