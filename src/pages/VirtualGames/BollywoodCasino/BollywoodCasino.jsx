import { useState } from "react";
import BetOptions from "./BetOptions";
import Footer from "./Footer";
import GameContainer from "./GameContainer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import ClassicBetOptions from "../../../components/modules/Virtual/ClassicBetOptions";
import BetSlip from "../../../components/modules/Virtual/BetSlip";

const BollywoodCasino = () => {
  const { placeBetValues } = useSelector((state) => state?.event);
  const [isClassicView, setIsClassicView] = useState(true);
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    { pollingInterval: 1000 },
  );

  return (
    <main className="w-full h-full max-w-xl mx-auto ">
      <main
        id="card-games-container"
        className="__className_575e37 relative flex  flex-col w-full h-dvh overflow-y-auto scrollbar-none"
      >
        <GameContainer firstEvent={data?.result?.[0]} />
        {isClassicView ? (
          <ClassicBetOptions data={data?.result} />
        ) : (
          <BetOptions data={data?.result} />
        )}

        <Footer
          firstEvent={data?.result?.[0]}
          isClassicView={isClassicView}
          setIsClassicView={setIsClassicView}
        />
        {placeBetValues && <BetSlip />}
      </main>
    </main>
  );
};

export default BollywoodCasino;
