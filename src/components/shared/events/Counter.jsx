import { useEffect, useRef, useState } from "react";

const Counter = ({ firstEvent }) => {
  const initialValue = useRef(firstEvent?.timer);
  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  const timerDuration = firstEvent?.timerDuration;
  const lastUpdateTime = firstEvent?.lastUpdateTime;
  const utcMilliseconds = Date.now();
  const utcSeconds = Math.floor(utcMilliseconds / 1000);

  const timer = timerDuration - (utcSeconds - lastUpdateTime);

  // console.log(timerDuration);

  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [strokeColor, setStrokeColor] = useState("#32d74b");

  useEffect(() => {
    const percentage = (timerDuration / initialValue.current) * 100;
    const offset = circumference - (percentage / 100) * circumference;
    setStrokeDashoffset(offset);

    if (percentage >= 70) {
      setStrokeColor("#32d74b");
    } else if (percentage >= 50) {
      setStrokeColor("#cc980e");
    } else {
      setStrokeColor("#F70000");
    }
    if (timerDuration < 4 && timerDuration > 0) {
      new Audio("/countdown.mp3").play();
    }
  }, [timerDuration, circumference, initialValue]);

  // const istTimestamp = lastUpdateTime; // timestamp in seconds

  // // Convert seconds → milliseconds
  // const date = new Date(istTimestamp * 1000);

  // // Calculate IST manually
  // let hours = date.getUTCHours() + 5; // Add 5 hours for IST
  // let minutes = date.getUTCMinutes() + 30; // Add 30 minutes for IST
  // const seconds = date.getUTCSeconds();

  // // Adjust overflow
  // if (minutes >= 60) {
  //   minutes -= 60;
  //   hours += 1;
  // }
  // if (hours >= 24) {
  //   hours -= 24;
  // }

  // // Format with leading zeros
  // const istTime2 = `${hours.toString().padStart(2, "0")}:${minutes
  //   .toString()
  //   .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // console.log("IST Time:", istTime2);

  // Get current UTC time in milliseconds
  // Current UTC time in milliseconds

  return (
    <div className="absolute z-50 top-[30%] left-1/2 -translate-x-1/2">
      <div className="w-[60px] lg:scale-150 origin-center aspect-square rounded-full flex justify-center items-center relative">
        <div className="border-[6px] h-[83%] w-[83%] rounded-full aspect-square absolute border-white/10 bg-black/10" />

        <svg
          className="absolute top-0 left-0 w-full h-full rounded-full -rotate-90"
          style={{ stroke: strokeColor }}
        >
          <circle
            cx={30}
            cy={30}
            r={radius}
            fill="transparent"
            strokeLinecap="butt"
            stroke={strokeColor}
            strokeWidth={6}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <span className="text-xl drop-shadow-md font-mono font-bold text-white">
          {timer}
        </span>
      </div>
    </div>
  );
};

export default Counter;
