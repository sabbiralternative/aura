import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useGetLiveCasinoThumbnailQuery } from "../../../redux/features/casino/casino.api";
import LiveCasinoAll from "./LiveCasino/LiveCasinoAll";
import LiveCasinoSlider from "./LiveCasino/LiveCasinoSlider";

const Originals = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const { data } = useGetLiveCasinoThumbnailQuery({ id: "originals" });

  const handleNavigate = (casino) => {
    const formatLink = `/${casino?.slug}/${casino?.eventTypeId}/${casino?.eventId}`;
    new Audio("/click.mp3").play();
    navigate(formatLink);
  };

  return (
    <>
      {showAll ? (
        <LiveCasinoAll
          title="Originals"
          data={data}
          handleNavigate={handleNavigate}
          setShowAll={setShowAll}
        />
      ) : (
        <LiveCasinoSlider
          title="Originals"
          data={data}
          handleNavigate={handleNavigate}
          setShowAll={setShowAll}
        />
      )}
    </>
  );
};

export default Originals;
