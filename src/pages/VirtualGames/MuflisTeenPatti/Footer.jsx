import { Fragment, useState } from "react";
import RecentResultModal from "./RecentResultModal";
import ClassicViewButton from "../../../components/modules/Virtual/ClassicViewButton";
import MyBets from "../../../components/modules/Virtual/MyBets";
import FooterInfo from "../../../components/modules/Virtual/FooterInfo";
import RecentResultButton from "../../../components/modules/Virtual/RecentResultButton";
const Footer = ({ isClassicView, setIsClassicView, firstEvent }) => {
  const [showRecentResultModal, setShowRecentResultModal] = useState(false);
  const [showMyBets, setShowMyBets] = useState(false);
  return (
    <Fragment>
      {showRecentResultModal && (
        <RecentResultModal
          firstResult={firstEvent}
          setShowRecentResultModal={setShowRecentResultModal}
        />
      )}
      <div className="relative z-50 w-full ">
        <ClassicViewButton
          isClassicView={isClassicView}
          setIsClassicView={setIsClassicView}
        />
        <MyBets setShowMyBets={setShowMyBets} showMyBets={showMyBets} />

        <FooterInfo firstEvent={firstEvent} />
        <div
          className="flex overflow-x-auto relative gap-1 justify-between items-center px-2 py-1 w-full scrollbar-none"
          style={{
            maskImage:
              "linear-gradient(to right, black, black, black, black, black, black, black, black, black, black, black, transparent)",
          }}
        >
          <RecentResultButton
            setShowRecentResultModal={setShowRecentResultModal}
          />
          <div className="flex flex-grow items-center min-w-fit">
            <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white rounded-l-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-circle-filled"
                style={{ color: "rgb(109, 40, 217)" }}
              >
                <path
                  d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </svg>
              <span>B -</span>
              <span className>44%</span>
            </div>
            <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white rounded-r-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-circle-filled"
                style={{ color: "rgb(67, 56, 202)" }}
              >
                <path
                  d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </svg>
              <span>A -</span>
              <span className>56%</span>
            </div>
          </div>{" "}
          <div className="flex items-center gap-0.5 pointer-events-none">
            {firstEvent?.recent_winner?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-1 w-full justify-center"
                >
                  <div
                    className="flex items-center active:scale-[98%]   justify-center gap-1 py-1 px-2 text-white border-[1px] rounded-full cursor-pointer
            w-full
            border-white/20"
                    style={{
                      backgroundColor:
                        item?.winner === "A"
                          ? "rgb(67, 56, 202)"
                          : item?.winner === "B"
                            ? "rgb(109, 40, 217)"
                            : "",
                    }}
                  >
                    <span className="text-xs whitespace-nowrap  text-white/50">
                      {item?.winner}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      </div>
    </Fragment>
  );
};

export default Footer;
