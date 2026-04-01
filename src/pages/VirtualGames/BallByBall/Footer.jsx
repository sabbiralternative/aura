import { Fragment, useState } from "react";
import img from "../../../assets/img";
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
              <img
                alt="1 Runs"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="w-4 h-4 p-0.5"
                src={img.cricket_ball}
                style={{ color: "transparent" }}
              />
              <span>1 Runs -</span>
              <span className>24%</span>
            </div>
            <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
              <img
                alt="4 Runs"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="w-4 h-4 p-0.5"
                src={img.cricket_ball}
                style={{ color: "transparent" }}
              />
              <span>4 Runs -</span>
              <span className>18%</span>
            </div>
            <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
              <img
                alt="0 Runs"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="w-4 h-4 p-0.5"
                src={img.cricket_ball}
                style={{ color: "transparent" }}
              />
              <span>0 Runs -</span>
              <span className>32%</span>
            </div>
            <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
              <img
                alt="Wicket"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="w-4 h-4 p-0.5"
                src={img.cricket_ball}
                style={{ color: "transparent" }}
              />
              <span>Wicket -</span>
              <span className>10%</span>
            </div>
            <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
              <img
                alt="2 Runs"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="w-4 h-4 p-0.5"
                src={img.cricket_ball}
                style={{ color: "transparent" }}
              />
              <span>2 Runs -</span>
              <span className>10%</span>
            </div>
            <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
              <img
                alt="3 Runs"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="w-4 h-4 p-0.5"
                src={img.cricket_ball}
                style={{ color: "transparent" }}
              />
              <span>3 Runs -</span>
              <span className>2%</span>
            </div>
            <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white ">
              <img
                alt="Extra"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="w-4 h-4 p-0.5"
                src={img.cricket_ball}
                style={{ color: "transparent" }}
              />
              <span>Extra -</span>
              <span className>2%</span>
            </div>
            <div className="flex items-center text-xs whitespace-nowrap justify-center gap-1 py-1 px-2 text-white rounded-r-full">
              <img
                alt="6 Runs"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="w-4 h-4 p-0.5"
                src={img.cricket_ball}
                style={{ color: "transparent" }}
              />
              <span>6 Runs -</span>
              <span className>2%</span>
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
                      backgroundColor: "rgb(99, 102, 241)",
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
