import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import RecentWinner from "../../components/modules/LuckySeven/RecentWinner";
import AmountSection from "../../components/modules/LuckySeven/AmountSection";
import ActionButton from "../../components/modules/LuckySeven/ActionButton";
import BetSlip from "../../components/modules/LuckySeven/BetSlip";
import NoCard from "../../components/modules/LuckySeven/NoCard";
import SuspendedBetSlip from "../../components/modules/LuckySeven/SuspendedBetSlip";
// import Setting from "../../components/modules/LuckySeven/Setting";
import Card from "../../components/modules/LuckySeven/Card";
import Video from "../../components/modules/LuckySeven/Video";
import Counter from "../../components/modules/LuckySeven/Counter";
import TopHeader from "../../components/modules/LuckySeven/TopHeader";

const LuckySeven = () => {
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    { pollingInterval: 1000 }
  );

  const firstEvent = data?.result?.[0];
  // console.log(data);

  return (
    <main
      className="max-w-md relative flex gap-2 lg:aspect-video mx-auto flex-col overflow-x-hidden justify-between items-center bg-gradient-to-b from-[#79272d] via-[#79272d]"
      id="7updownParent"
      style={{ height: "929px", width: "1023px" }}
    >
      {/* Not Using */}
      {/* <div
        className="items-center absolute top-10 right-0 z-50 bg-black/80 rounded-bl-lg border-l border-y border-white/30 w-52 transition-all duration-500 ease-in-out translate-x-full"
        style={{ zIndex: 1000 }}
      >
        <span className="flex flex-col justify-center items-center p-2 gap-2 relative">
          <span className="absolute -top-[1px] -left-[34px] border-l border-y rounded-l-full p-1 border-white/30 bg-black/80 hidden opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 transition-all duration-500 ease-in-out text-white rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="w-full text-center text-white">Auto Play </span>
          <span className="text-white/90 text-[10px] border-b border-gray/40">
            Auto Play will repeat your last bet
          </span>
          <div className="grid grid-cols-3 gap-1 w-full">
            <div className="border-yellow/80 p-2 w-full bg-black/80 border to-black/40 rounded-lg flex flex-col justify-center items-center">
              <span className="text-yellow">5</span>
              <span className="text-[10px] text-white">ROUNDS</span>
            </div>
            <div className="border-white/30 p-2 w-full bg-black/80 border to-black/40 rounded-lg flex flex-col justify-center items-center">
              <span className="text-white">10</span>
              <span className="text-[10px] text-white">ROUNDS</span>
            </div>
            <div className="border-white/30 p-2 w-full bg-black/80 border to-black/40 rounded-lg flex flex-col justify-center items-center">
              <span className="text-white">∞</span>
              <span className="text-[10px] text-white">ROUNDS</span>
            </div>
          </div>
          <div className="rounded-full py-1 w-fit px-4 flex items-center justify-center gap-0.5 border text-sm font-semibold bg-white text-black">
            Start
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
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </span>
      </div> */}
      {/* Not Using */}
      <TopHeader />
      {firstEvent?.status !== "SUSPENDED" && firstEvent?.timer > 0 && (
        <Counter timer={firstEvent?.timer} />
      )}

      <Video />
      <div className="lg:absolute transition-all duration-1000 ease-in-out bottom-48 lg:left-8 lg:bottom-46">
        {firstEvent?.status === "SUSPENDED" ? <NoCard /> : <Card />}
      </div>
      {firstEvent?.status === "SUSPENDED" ? <SuspendedBetSlip /> : <BetSlip />}

      <div className="lg:absolute bottom-0 flex flex-col w-full gap-2 px-1">
        <ActionButton />
        <AmountSection />
        <RecentWinner recentWinner={firstEvent?.recent_winner} />
      </div>
      {/* <Setting />; */}
      {/* <div
        className="scale-y-0 h-[70%] fixed origin-bottom flex flex-col items-center bottom-0 w-full max-w-xl transition-all ease-in-out"
        style={{ zIndex: 1000 }}
      />
      <div
        className="scale-y-0 h-fit fixed origin-bottom flex flex-col items-center bottom-0 w-full max-w-xl transition-all ease-in-out"
        style={{ zIndex: 1000 }}
      >
        0
      </div>
      <div className="place-bets absolute w-full left-1/2 top-[40%] -translate-x-1/2 z-50 text-center text-white">
        PLACE YOUR BETS
      </div> */}
      {firstEvent?.status !== "SUSPENDED" && firstEvent?.timer > 0 && (
        <div className="place-bets absolute w-full left-1/2 top-[40%] -translate-x-1/2 z-50 text-center text-white">
          PLACE YOUR BETS
        </div>
      )}
    </main>
  );
};

export default LuckySeven;
