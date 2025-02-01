import { useEffect } from "react";

const Toast = ({ message, setMessage }) => {
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  }, [message, setMessage]);
  return (
    <div className="pointer-events-none absolute w-full">
      <div
        className="fixed pointer-events-none flex justify-center  w-full max-w-xl animate__animated  text-green 
           animate__fadeIn  "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
          zIndex: "1000",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="flex flex-col items-center px-3 py-2 justify-center  shadow-lg 
              "
        >
          <span className="text-sm lg:text-lg font-medium ">{message}</span>
          <span className="text-xs font-light text-white"></span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
