import { useState } from "react";
import { useGetLiveCasinoThumbnailQuery } from "../../../redux/features/casino/casino.api";
import LiveCasinoAll from "./LiveCasino/LiveCasinoAll";
import LiveCasinoSlider from "./LiveCasino/LiveCasinoSlider";
import { useSelector } from "react-redux";

const FastGames = () => {
  const { token } = useSelector((state) => state.auth);
  const [showAll, setShowAll] = useState(false);
  const { data } = useGetLiveCasinoThumbnailQuery({ id: "fast" });

  const handleNavigate = (casino) => {
    new Audio("/click.mp3").play();
    const formatLink = `${casino?.url}/${token}`;
    window.location.href = formatLink;
  };

  return (
    <>
      {showAll ? (
        <LiveCasinoAll
          title="Fast Games"
          data={data}
          handleNavigate={handleNavigate}
          setShowAll={setShowAll}
        />
      ) : (
        <LiveCasinoSlider
          title="Fast Games"
          data={data}
          handleNavigate={handleNavigate}
          setShowAll={setShowAll}
        />
      )}
    </>
  );
};

export default FastGames;
