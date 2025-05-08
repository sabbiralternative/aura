import { useNavigate } from "react-router-dom";
import { useGetLiveCasinoThumbnailQuery } from "../../../../redux/features/casino/casino.api";
import LiveCasinoAll from "./LiveCasinoAll";
import LiveCasinoSlider from "./LiveCasinoSlider";
import { useState } from "react";

const LiveCasino = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const { data } = useGetLiveCasinoThumbnailQuery({ id: "casino" });

  const handleNavigate = (casino) => {
    const formatLink = `/event-details/${casino?.slug}/${casino?.eventTypeId}/${casino?.eventId}`;
    new Audio("/click.mp3").play();
    navigate(formatLink);
  };

  return (
    <>
      {showAll ? (
        <LiveCasinoAll
          title="Live Casino"
          data={data}
          handleNavigate={handleNavigate}
          setShowAll={setShowAll}
        />
      ) : (
        <LiveCasinoSlider
          title="Live Casino"
          data={data}
          handleNavigate={handleNavigate}
          setShowAll={setShowAll}
        />
      )}
    </>
  );
};

export default LiveCasino;
