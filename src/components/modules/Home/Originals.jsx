import { useState } from "react";
import { useGetLiveCasinoThumbnailQuery } from "../../../redux/features/casino/casino.api";
import LiveCasinoAll from "./LiveCasino/LiveCasinoAll";
import LiveCasinoSlider from "./LiveCasino/LiveCasinoSlider";
import { useSelector } from "react-redux";

const Originals = () => {
  const { token } = useSelector((state) => state.auth);
  const [showAll, setShowAll] = useState(false);
  const { data } = useGetLiveCasinoThumbnailQuery({ id: "originals" });

  const handleNavigate = (casino) => {
    new Audio("/click.mp3").play();
    const formatLink = `${casino?.url}/${token}`;
    window.location.href = formatLink;
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
