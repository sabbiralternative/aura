import Banner from "../../components/modules/Home/Banner";
// import CrashGames from "../../components/modules/Home/CrashGames";
// import FastBets from "../../components/modules/Home/FastBets";
import IndianCardGames from "../../components/modules/Home/IndianCardGames";
import LiveCasino from "../../components/modules/Home/LiveCasino";
// import RecentBigWin from "../../components/modules/Home/RecentBigWin";
import Navbar from "../../components/shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="relative w-full autoAnimate min-h-full pt-24 text-white">
        <div
          style={{ height: "100vh" }}
          className="relative mx-auto bg-black select-none"
        >
          <Navbar />
          <Banner />
          <div className="z-20 flex flex-col w-full gap-3">
            {/* <RecentBigWin />
            <CrashGames />
            <FastBets /> */}
            <LiveCasino />
            <IndianCardGames />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
