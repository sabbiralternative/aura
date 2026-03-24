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

const BollywoodCasino = () => {
  const [modal, setModal] = useState({ name: "" });
  const [showBetSlip, setShowBetSlip] = useState(false);
  const [isClassicView, setIsClassicView] = useState(true);

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
          <GameContainer setModal={setModal} />
          {isClassicView ? (
            <ClassicBetOptions setShowBetSlip={setShowBetSlip} />
          ) : (
            <BetOptions setShowBetSlip={setShowBetSlip} />
          )}

          <Footer
            isClassicView={isClassicView}
            setIsClassicView={setIsClassicView}
          />
          {showBetSlip && <BetSlip setShowBetSlip={setShowBetSlip} />}
        </main>
      </main>
    </Fragment>
  );
};

export default BollywoodCasino;
