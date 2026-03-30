import { Fragment, useState } from "react";
import ClassicBetOptions from "./ClassicBetOptions";
import BetOptions from "./BetOptions";
import Footer from "./Footer";
import GameContainer from "./GameContainer";
import BetSlip from "./BetSlip";
import { ModalsName } from "../../../static";
import HowToPlay from "./HowToPlay";
import Settings from "./Settings";
import MyBets from "./MyBets";
import MoreGames from "./MoreGames";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SevenUpDown = () => {
  const [modal, setModal] = useState({ name: "" });
  const { placeBetValues } = useSelector((state) => state?.event);
  const [isClassicView, setIsClassicView] = useState(true);
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    { pollingInterval: 1000 },
  );

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
      <main className="w-full h-full max-w-xl mx-auto ">
        <main
          id="card-games-container"
          className="__className_575e37 relative flex  flex-col w-full h-dvh overflow-y-auto scrollbar-none"
        >
          <GameContainer firstEvent={data?.result?.[0]} setModal={setModal} />
          {isClassicView ? (
            <ClassicBetOptions data={data?.result} />
          ) : (
            <BetOptions data={data?.result} />
          )}

          <Footer
            data={data?.result?.[0]}
            isClassicView={isClassicView}
            setIsClassicView={setIsClassicView}
          />
          {placeBetValues && <BetSlip />}
        </main>
      </main>
    </Fragment>
  );
};

export default SevenUpDown;
