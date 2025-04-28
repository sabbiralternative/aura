import { useState } from "react";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tab, setTab] = useState("today");

  const handleSetDate = (type) => {
    setTab(type);
    const today = new Date();
    let start, end;

    switch (type) {
      case "today":
        start = today;
        end = today;
        break;
      case "lastWeek":
        start = new Date();
        start.setDate(today.getDate() - 7);
        end = today;
        break;
      case "lastMonth":
        start = new Date();
        start.setMonth(today.getMonth() - 1);
        end = today;
        break;
      case "lastThreeMonth":
        start = new Date();
        start.setMonth(today.getMonth() - 3);
        end = today;
        break;
      default:
        start = today;
        end = today;
    }

    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <div className="flex text-sm items-center w-full gap-2 p-[2px] text-white">
        <input
          id="fromDate"
          className="flex-grow p-2 rounded-lg bg-controls-idle"
          type="date"
          value={startDate.toISOString().split("T")[0]}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
        <span>to</span>
        <input
          className="flex-grow p-2 border-none rounded-lg bg-controls-idle"
          type="date"
          value={endDate.toISOString().split("T")[0]}
          onChange={(e) => setEndDate(new Date(e.target.value))}
        />
      </div>
      <div>
        <div className="grid w-full grid-cols-2 gap-1">
          <div
            onClick={() => handleSetDate("today")}
            className={`  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center ${
              tab === "today"
                ? "bg-white text-blue"
                : "bg-controls-idle text-white"
            }`}
          >
            Today
          </div>
          <div
            onClick={() => handleSetDate("lastWeek")}
            className={`  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center ${
              tab === "lastWeek"
                ? "bg-white text-blue"
                : "bg-controls-idle text-white"
            }`}
          >
            Last Week
          </div>
          <div
            onClick={() => handleSetDate("lastMonth")}
            className={`  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center ${
              tab === "lastMonth"
                ? "bg-white text-blue"
                : "bg-controls-idle text-white"
            }`}
          >
            Last Month
          </div>
          <div
            onClick={() => handleSetDate("lastThreeMonth")}
            className={`  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center ${
              tab === "lastThreeMonth"
                ? "bg-white text-blue"
                : "bg-controls-idle text-white"
            }`}
          >
            Last 3 Months
          </div>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
