import { useNavigate } from "react-router-dom";
import Counter from "../../../components/shared/events/Counter";
import Menu from "../../../components/modules/Virtual/Menu";
import { Status } from "../../../const";
import { useSelector } from "react-redux";

const GameContainer = ({ firstEvent }) => {
  const navigate = useNavigate();
  const { lobby } = useSelector((state) => state.global);

  return (
    <div id="game-container" className="relative w-full aspect-video ">
      <div className="w-full h-auto flex justify-center items-center aspect-video relative">
        {firstEvent?.status === Status.OPEN && (
          <div className="absolute bottom-10 right-1/2 translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2  w-fit h-fit text-xl text-white z-50 flex justify-center items-center flex">
            <span className="text-white text-xl font-bold">Place Your Bet</span>
          </div>
        )}

        <div className="w-full h-full  justify-center items-center absolute top-0 left-0 flex">
          {/* {firstEvent?.status === Status.OPEN && ( */}
          <video
            // controls
            className="w-full h-full object-contain"
            src={firstEvent?.video_link}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={firstEvent?.video_link} type="video/mp4" />
          </video>
          {/* // )} */}
        </div>
      </div>
      <div className="flex absolute top-0 left-0 z-50 flex-col gap-0.5 py-2 px-1">
        {lobby && (
          <button onClick={() => navigate("/")} className=" iconButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
              <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
            </svg>
          </button>
        )}
      </div>
      <div className="flex absolute top-12 left-16 z-50 gap-1">
        {firstEvent?.status === Status.OPEN && (
          <Counter firstEvent={firstEvent} />
        )}
      </div>
      <Menu />
    </div>
  );
};

export default GameContainer;
