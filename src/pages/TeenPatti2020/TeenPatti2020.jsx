import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import AmountSection from "../../components/shared/events/AmountSection";
// import Setting from "../../components/modules/LuckySeven/Setting";
import Video from "../../components/shared/events/Video";
import Counter from "../../components/shared/events/Counter";
import TopHeader from "../../components/shared/events/TopHeader";
import { Status } from "../../const";
import ActionButton from "../../components/modules/AmarAkbarAnthony/ActionButton";

import RecentWinner from "../../components/modules/DragonTiger/RecentWinner";
import Card from "../../components/modules/TeenPatti2020/Card";
import BetSlip from "../../components/modules/TeenPatti2020/BetSlip";

const TeenPatti2020 = () => {
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    { pollingInterval: 1000 }
  );

  const firstEvent = data?.result?.[0];
  console.log(firstEvent);
  return (
    <div className="flex items-center justify-center lg:h-screen">
      <main
        className="max-w-md relative flex lg:aspect-video mx-auto flex-col overflow-x-hidden items-center justify-between bg-gradient-to-b from-[#1d184b] via-[#1d184b]"
        id="7updownParent"
        style={{ minHeight: "100vw", width: "430px" }}
      >
        {/* Not Using */}
        {/* <div
        className="items-center absolute top-10 right-0 z-50 bg-black/80 rounded-bl-lg border-l border-y border-white/30 w-52 transition-all duration-500 ease-in-out translate-x-full"
        style={{ zIndex: 1000 }}
      >
        <span className="flex flex-col justify-center items-center p-2 gap-2 relative">
          <span className="absolute -top-[1px] -left-[34px] border-l border-y rounded-l-full p-1 border-white/30 bg-black/80 hidden opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 transition-all duration-500 ease-in-out text-white rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="w-full text-center text-white">Auto Play </span>
          <span className="text-white/90 text-[10px] border-b border-gray/40">
            Auto Play will repeat your last bet
          </span>
          <div className="grid grid-cols-3 gap-1 w-full">
            <div className="border-yellow/80 p-2 w-full bg-black/80 border to-black/40 rounded-lg flex flex-col justify-center items-center">
              <span className="text-yellow">5</span>
              <span className="text-[10px] text-white">ROUNDS</span>
            </div>
            <div className="border-white/30 p-2 w-full bg-black/80 border to-black/40 rounded-lg flex flex-col justify-center items-center">
              <span className="text-white">10</span>
              <span className="text-[10px] text-white">ROUNDS</span>
            </div>
            <div className="border-white/30 p-2 w-full bg-black/80 border to-black/40 rounded-lg flex flex-col justify-center items-center">
              <span className="text-white">∞</span>
              <span className="text-[10px] text-white">ROUNDS</span>
            </div>
          </div>
          <div className="rounded-full py-1 w-fit px-4 flex items-center justify-center gap-0.5 border text-sm font-semibold bg-white text-black">
            Start
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </span>
      </div> */}
        {/* Not Using */}
        <TopHeader />
        {firstEvent?.status === Status.OPEN && firstEvent?.timer > 0 && (
          <Counter timer={firstEvent?.timer} />
        )}

        <div className="relative w-full lg:h-full h-[20%]">
          <div className="w-full aspect-video w-[100%]  origin-top  transition-all duration-1000 ease-in-out scale-[140%]">
            <iframe
              className="w-full h-full"
              src="https://player.fawk.app/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVyYXRvcklkIjoiOTU1MSIsInVzZXJJZCI6IjU2Mjk3MSIsInVzZXJuYW1lIjoidXNlcjU2Mjk3MSIsInBsYXllclRva2VuQXRMYXVuY2giOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdFpXMWlaWEpEYjJSbElqb2lOR1UwTkRjMVkyWXROREpsTmkweE1XVm1MVGhpTTJRdE1EWXhPVFkxTldGbU1EY3lJaXdpYkdGemRGTjBZWFIxYzBOb1pXTnJJam94TENKdVltWWlPakUzTXpVeE9USTRPVFVzSW14dloybHVUbUZ0WlNJNklqZzRPRGc0T0RRd01EQWlMQ0poYkd4dmQwSmxkSFJwYm1jaU9uUnlkV1VzSW1WNGNDSTZNVGN6TlRJM09USTVOU3dpYVdGMElqb3hOek0xTVRreU9EazFMQ0pwY0NJNklqRXdNeTR4T0RJdU1UTXdMakl4T0NJc0ltSXlZeUk2TVN3aWJXVnRZbVZ5U1dRaU9pSTFOakk1TnpFaUxDSmljbUZ1WTJoTmIySnBiR1VpT2lJNU1Ea3dOemN6TXprd0lpd2lZM1Z5Y21WdVkza2lPaUpwYm5JaUxDSmpZWE5wYm05RGRYSnlaVzVqZVNJNkltbHVjaUlzSW0xaGMzUmxja2xrSWpvaU5qQWlMQ0p6ZFhCbGNrMWhjM1JsY2tsa0lqb2lNQ0lzSW1oNWNHVnlUV0Z6ZEdWeVNXUWlPaUl5TkNJc0ltRmtiV2x1VFdGemRHVnlTV1FpT2lJMElpd2ljM1Z3WlhKQlpHMXBiazFoYzNSbGNrbGtJam9pTWlJc0luQnlaWE5sZEZOMFlXdGxVMlYwZEdsdVozTWlPbnNpYjI1bFEyeHBZMnRUWlhSMGFXNW5jeUk2ZXlKaFkzUnBkbVVpT21aaGJITmxMQ0p6Wld4bFkzUmxaQ0k2Wm1Gc2MyVXNJbk5sZEhScGJtZHpJanBiTUN3d0xEQmRmU3dpY0hKbGMyVjBVM1JoYTJWVFpYUjBhVzVuY3lJNmV5SnpaWFIwYVc1bmN5STZXekV3TURBc01qQXdNQ3cxTURBd0xERXdNREF3TERJd01EQXdMRFV3TURBd1hTd2liVzlpYVd4bFUzUmhhMlZ6UlhoamFHRnVaMlZIWVcxbFUyVjBkR2x1WjNNaU9sc3lNREF3TERVd01EQXNNVEF3TUYwc0ltMXZZbWxzWlZOMFlXdGxjMU5sZEhScGJtZHpJanBiTWpBd01DdzFNREF3TERFd01EQXdYWDE5TENKcGMwSnZiblZ6UVhaaGFXeGhZbXhsSWpvd0xDSmlkWFIwYjI1V1lXeDFaU0k2ZXlKbllXMWxJanBiZXlKc1lXSmxiQ0k2TVRBd0xDSjJZV3gxWlNJNklqRXdNQ0o5TEhzaWJHRmlaV3dpT2pFd01Dd2lkbUZzZFdVaU9pSXlNREFpZlN4N0lteGhZbVZzSWpveE1EQXNJblpoYkhWbElqb2lNekF3SW4wc2V5SnNZV0psYkNJNk1UQXdMQ0oyWVd4MVpTSTZJalV3TUNKOUxIc2liR0ZpWld3aU9qRXdNQ3dpZG1Gc2RXVWlPaUl4TURBd0luMHNleUpzWVdKbGJDSTZNVEF3TENKMllXeDFaU0k2SWpJd01EQWlmU3g3SW14aFltVnNJam94TURBc0luWmhiSFZsSWpvaU5UQXdNQ0o5TEhzaWJHRmlaV3dpT2pFd01Dd2lkbUZzZFdVaU9pSXhNREF3TUNKOVhYMTkuNzB5NldkTDRfZ3FGSlAzWW5EQkx6MGVPdEllMjQ0emhTck9UT1doSGRNQSIsInRva2VuIjoiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnRaVzFpWlhKRGIyUmxJam9pTkdVME5EYzFZMll0TkRKbE5pMHhNV1ZtTFRoaU0yUXRNRFl4T1RZMU5XRm1NRGN5SWl3aWJHRnpkRk4wWVhSMWMwTm9aV05ySWpveExDSnVZbVlpT2pFM016VXhPVEk0T1RVc0lteHZaMmx1VG1GdFpTSTZJamc0T0RnNE9EUXdNREFpTENKaGJHeHZkMEpsZEhScGJtY2lPblJ5ZFdVc0ltVjRjQ0k2TVRjek5USTNPVEk1TlN3aWFXRjBJam94TnpNMU1Ua3lPRGsxTENKcGNDSTZJakV3TXk0eE9ESXVNVE13TGpJeE9DSXNJbUl5WXlJNk1Td2liV1Z0WW1WeVNXUWlPaUkxTmpJNU56RWlMQ0ppY21GdVkyaE5iMkpwYkdVaU9pSTVNRGt3Tnpjek16a3dJaXdpWTNWeWNtVnVZM2tpT2lKcGJuSWlMQ0pqWVhOcGJtOURkWEp5Wlc1amVTSTZJbWx1Y2lJc0ltMWhjM1JsY2tsa0lqb2lOakFpTENKemRYQmxjazFoYzNSbGNrbGtJam9pTUNJc0ltaDVjR1Z5VFdGemRHVnlTV1FpT2lJeU5DSXNJbUZrYldsdVRXRnpkR1Z5U1dRaU9pSTBJaXdpYzNWd1pYSkJaRzFwYmsxaGMzUmxja2xrSWpvaU1pSXNJbkJ5WlhObGRGTjBZV3RsVTJWMGRHbHVaM01pT25zaWIyNWxRMnhwWTJ0VFpYUjBhVzVuY3lJNmV5SmhZM1JwZG1VaU9tWmhiSE5sTENKelpXeGxZM1JsWkNJNlptRnNjMlVzSW5ObGRIUnBibWR6SWpwYk1Dd3dMREJkZlN3aWNISmxjMlYwVTNSaGEyVlRaWFIwYVc1bmN5STZleUp6WlhSMGFXNW5jeUk2V3pFd01EQXNNakF3TUN3MU1EQXdMREV3TURBd0xESXdNREF3TERVd01EQXdYU3dpYlc5aWFXeGxVM1JoYTJWelJYaGphR0Z1WjJWSFlXMWxVMlYwZEdsdVozTWlPbHN5TURBd0xEVXdNREFzTVRBd01GMHNJbTF2WW1sc1pWTjBZV3RsYzFObGRIUnBibWR6SWpwYk1qQXdNQ3cxTURBd0xERXdNREF3WFgxOUxDSnBjMEp2Ym5WelFYWmhhV3hoWW14bElqb3dMQ0ppZFhSMGIyNVdZV3gxWlNJNmV5Sm5ZVzFsSWpwYmV5SnNZV0psYkNJNk1UQXdMQ0oyWVd4MVpTSTZJakV3TUNKOUxIc2liR0ZpWld3aU9qRXdNQ3dpZG1Gc2RXVWlPaUl5TURBaWZTeDdJbXhoWW1Wc0lqb3hNREFzSW5aaGJIVmxJam9pTXpBd0luMHNleUpzWVdKbGJDSTZNVEF3TENKMllXeDFaU0k2SWpVd01DSjlMSHNpYkdGaVpXd2lPakV3TUN3aWRtRnNkV1VpT2lJeE1EQXdJbjBzZXlKc1lXSmxiQ0k2TVRBd0xDSjJZV3gxWlNJNklqSXdNREFpZlN4N0lteGhZbVZzSWpveE1EQXNJblpoYkhWbElqb2lOVEF3TUNKOUxIc2liR0ZpWld3aU9qRXdNQ3dpZG1Gc2RXVWlPaUl4TURBd01DSjlYWDE5LjcweTZXZEw0X2dxRkpQM1luREJMejBlT3RJZTI0NHpoU3JPVE9XaEhkTUEiLCJiYWxhbmNlIjowLCJleHBvc3VyZSI6MCwiY3VycmVuY3kiOiJJTlIiLCJsYW5ndWFnZSI6ImVuIiwidGltZXN0YW1wIjoxNzM1MjAyMzY2LCJjbGllbnRJUCI6WyIxIl0sIlZJUCI6IjMiLCJlcnJvckNvZGUiOjAsImVycm9yRGVzY3JpcHRpb24iOiJvayIsImlwIjoiMTAzLjE4Mi4xMzAuMjE4LCAxMC4yNS4xLjY3Iiwic3lzdGVtVXNlcklkIjoiNjZiOWIyMzMwZjczOGQ2ODFlMjkyM2FhIiwiaWF0IjoxNzM1MjAyMzY2LCJleHAiOjE3MzUyMTMxNjZ9.LHQukHDGCQ7d1vC0zKOFlS5IGKxp_RLvv7hPsdkyUgw/56768"
              frameBorder={0}
              allow="autoplay; encrypted-media"
              style={{
                maskImage:
                  "linear-gradient(black, black, black, black,black, transparent )",
              }}
            />
          </div>
          <div
            className="h-full absolute pointer-events-none top-0 lg:left-auto lg:right-0 text-xs overflow-y-auto w-fit lg:px-2 transition-all duration-500 ease-in-out opacity-0 left-0"
            style={{
              maskImage:
                "linear-gradient(transparent,black,black, black,black,transparent)",
            }}
          >
            <div style={{ height: "186px" }} />
            <div
              className="text-xl text-white stroke-black"
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              Total Win
              <span
                className="text-yellow"
                style={{ textShadow: "black 1px 1px 2px" }}
              >
                0
              </span>
            </div>
            <div style={{ height: "186px" }} />
          </div>
        </div>
        <div className="bottom-0 flex flex-col w-full gap-4 px-1">
          {firstEvent?.status === Status.SUSPENDED && (
            <Card data={firstEvent} />
          )}
          <BetSlip data={data?.result} status={firstEvent?.status} />

          <div className="relative flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-2 text-white">
              <div>
                <button className="text-text-primary glass p-2 text-sm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                    <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </button>
              </div>
              <div className="rounded-full relative glass p-1 text-sm border border-white/20 w-fit">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-2 h-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <span className="absolute z-50 -translate-x-1/2 left-1/2 transition-all duration-1000 ease-in-out">
              <div>
                <button className="text-text-primary glass p-1 text-xm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200">
                  <span className="px-2 text-xs text-white/70 glass">
                    Insufficient Balance
                  </span>
                </button>
              </div>{" "}
            </span>
            <span className="z-50 flex flex-col items-end gap-0.5">
              <button className="text-text-primary glass p-2 text-sm border border-white/20 h-fit w-fit flex items-center gap-1 rounded-full transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </div>
          <div>
            <div className="flex items-end justify-between w-full">
              <div className="z-10 flex flex-col text-xs font-normal capitalize text-text-primary">
                <span className="flex items-center gap-1">
                  Total Bet<span className="text-yellow">0</span>
                </span>
                <span className="flex items-center gap-1">
                  Balance
                  <span className="text-yellow">
                    <span>₹0.00</span>
                  </span>
                </span>
              </div>
              <div className="z-10 flex flex-col items-end font-normal text-xs tracking-wide capitalize text-text-primary">
                <span className="flex gap-0.5 items-center text-white/50">
                  #107488826
                </span>
                <span className="whitespace-nowrap">
                  Teenpatti T20
                  <span className="text-yellow">
                    <span>₹100.00</span> - <span>₹2,00,000.00</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="flex justify-start w-full gap-1 p-1 overflow-x-scroll">
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-600">
                    <span className="text-xs font-medium">A</span>
                  </div>
                </div>{" "}
              </span>
              <span>
                <div className="bounceInAnimation text-text-primary uppercase flex items-center justify-center gap-1">
                  <div className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md bg-slate-500">
                    <span className="text-xs font-medium">B</span>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        {/* <Setting />; */}
        {/* <div
        className="scale-y-0 h-[70%] fixed origin-bottom flex flex-col items-center bottom-0 w-full max-w-xl transition-all ease-in-out"
        style={{ zIndex: 1000 }}
      />
      <div
        className="scale-y-0 h-fit fixed origin-bottom flex flex-col items-center bottom-0 w-full max-w-xl transition-all ease-in-out"
        style={{ zIndex: 1000 }}
      >
        0
      </div>
      */}
        {firstEvent?.status === Status.OPEN && (
          <div className="place-bets absolute w-full left-1/2 top-[40%] -translate-x-1/2 z-50 text-center text-white">
            PLACE YOUR BETS
          </div>
        )}
      </main>
    </div>
  );
};

export default TeenPatti2020;
