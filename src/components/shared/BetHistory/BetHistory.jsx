import DatePicker from "./DatePicker";
import Header from "./Header";
import TotalBet from "./TotalBet";

const BetHistory = ({ setShowBetHistory, setShowSetting }) => {
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
                <DatePicker />
                <TotalBet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetHistory;
