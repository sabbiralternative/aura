import Banner from "../../components/modules/Home/Banner";
import CrashGames from "../../components/modules/Home/CrashGames";
import FastBets from "../../components/modules/Home/FastBets";
import IndianCardGames from "../../components/modules/Home/IndianCardGames";
import LiveCasino from "../../components/modules/Home/LiveCasino";
import RecentBigWin from "../../components/modules/Home/RecentBigWin";
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
          {/* <Banner /> */}
          <div className="z-20 flex flex-col w-full gap-3">
            <RecentBigWin />
            <CrashGames />
            <FastBets />
            <LiveCasino />
            <IndianCardGames />
          </div>
        </div>
      </div>
      {/* right menu start */}
      {/* <div class="scale-x-100 origin-right transition-all ease-in-out duration-300 fixed top-0 bottom-0 right-0 w-2/3 max-w-lg bg-black backdrop-blur-3xl text-text-primary flex flex-col border-l-[1px]  border-white/10" style="z-index: 999;"><span class="relative flex items-center justify-between p-3 text-xl font-bold ">Menu<span class=" cursor-pointer "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6 "><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg></span></span><div class="flex items-center w-full gap-1 px-3 py-3 text-sm cursor-pointer bg-white/20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-10 h-10"><path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd"></path></svg><div class="flex flex-col"><span class="">b02.91_8291023297</span><span class=" text-yellow"><span>₹4.00</span></span></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6 ml-auto opacity-50 cursor-pointer active:animate-spin"><path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd"></path></svg></div><div class="flex items-center justify-start gap-2 px-3 py-3 hover:bg-white/20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6 opacity-50"><path fill-rule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd"></path></svg><span class="font-medium ">Bet History</span></div></div> */}
      {/* right menu end */}
    </>
  );
};

export default Home;
