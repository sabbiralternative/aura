import { useState } from "react";
import { usePNL } from "../../../hooks/pnl";
import DatePicker from "./DatePicker";
import Header from "./Header";
import TotalBet from "./TotalBet";
import { useParams } from "react-router-dom";

const BetHistory = ({ setShowBetHistory, setShowSetting }) => {
  const { eventId } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const payload = {
    from_date: startDate.toISOString().split("T")[0],
    to_date: endDate.toISOString().split("T")[0],
    event_id: eventId,
    page: 1,
  };

  const { data } = usePNL(payload);

  // const meta = data?.pagination;
  const betHistories = data?.result;

  return (
    <div
      className="scale-y-100 h-[70%] fixed origin-bottom flex   flex-col items-center   bottom-0   w-full  max-w-md  transition-all ease-in-out "
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col flex-grow w-full bg-black/60 backdrop-blur-md rounded-t-xl ">
        <div className="flex flex-col h-full overflow-y-scroll ">
          <Header
            setShowBetHistory={setShowBetHistory}
            setShowSetting={setShowSetting}
          />
          <div className="relative flex-grow w-full overflow-hidden">
            <div className="absolute p-4 pb-0  animate__animated animate__faster overflow-y-auto h-full w-full  top-0 right-0 transition-transform delay-100 ease-in-out  animate__bounceInRight">
              <div className="flex flex-col h-full gap-3 pt-2 overflow-y-auto scrollbar-none ">
                <DatePicker
                  endDate={endDate}
                  startDate={startDate}
                  setEndDate={setEndDate}
                  setStartDate={setStartDate}
                />
                <TotalBet betHistories={betHistories} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetHistory;
