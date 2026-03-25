import { useState } from "react";
import { useGetLiveCasinoThumbnailQuery } from "../../../redux/features/casino/casino.api";
import LiveCasinoAll from "./LiveCasino/LiveCasinoAll";
import LiveCasinoSlider from "./LiveCasino/LiveCasinoSlider";
import { useNavigate } from "react-router-dom";

const FastGames = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const { data } = useGetLiveCasinoThumbnailQuery({ id: "virtual" });

  const handleNavigate = (casino) => {
    new Audio("/click.mp3").play();
    const formatLink = `/virtual/${casino?.slug}/${casino?.eventTypeId}/${casino?.eventId}`;
    navigate(formatLink);
  };

  return (
    <>
      {showAll ? (
        <LiveCasinoAll
          title="Virtual Games"
          data={data}
          handleNavigate={handleNavigate}
          setShowAll={setShowAll}
        />
      ) : (
        <LiveCasinoSlider
          title="Virtual Games"
          data={data}
          handleNavigate={handleNavigate}
          setShowAll={setShowAll}
        />
      )}
    </>
  );
};

export default FastGames;
