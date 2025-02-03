import { useSelector } from "react-redux";
import { Status } from "../../const";
import { useOrderMutation } from "../../redux/features/events/events";
import { useEffect } from "react";
import Stake from "../../components/shared/Stake/Stake";
import { CardBack, Lock } from "../../assets/icon";
import { getBackPrice, isRunnerActive } from "../../utils/betSlip";

const BetSlip = ({
  data,
  status,
  setToast,
  setStakeState,
  stakeState,
  initialState,
  setTotalBet,
}) => {
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    const { key, data, dataIndex, runnerIndex, type } = payload;
    const formatData = {
      marketId: data?.[dataIndex]?.id,
      selection_id: data?.[dataIndex]?.runners?.[runnerIndex]?.id,
      runner_name: data?.[dataIndex]?.runners?.[runnerIndex]?.name,
      isback: type === "back" ? 0 : 1,
      event_id: data?.[dataIndex]?.eventId,
      event_type_id: data?.[dataIndex]?.event_type_id,
      price: data?.[dataIndex]?.runners?.[runnerIndex]?.[type]?.[0]?.price,
    };
    setStakeState((prev) => {
      const maxSerial = Math.max(
        0,
        ...Object.values(prev)
          .map((item) => item.serial)
          .filter((serial) => serial !== undefined)
      );

      return {
        ...prev,
        [key]: {
          show: true,
          stake: prev[key].show
            ? prev[key].stake + prev[key].actionBy
            : prev[key].stake,
          marketId: formatData?.marketId,
          selection_id: formatData?.selection_id,
          price: formatData?.price,
          runner_name: formatData?.runner_name,
          isback: formatData?.isback,
          serial: prev[key]?.serial ? prev[key]?.serial : maxSerial + 1,
          actionBy: stake,
          undo: [...(prev[key]?.undo || []), stake],
        },
      };
    });
  };

  // Reset state when status is OPEN
  useEffect(() => {
    if (status === Status.OPEN) {
      setStakeState(initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    setStakeState((prev) => {
      const updatedState = {};
      for (const key in prev) {
        updatedState[key] = {
          ...prev[key],
          stake: prev[key].show ? prev[key].stake : stake,
          actionBy: stake,
        };
      }
      return updatedState;
    });
  }, [stake]); // Runs when stake value changes

  useEffect(() => {
    const filterPlacedBet = Object.values(stakeState).filter((bet) => bet.show);
    let payload = filterPlacedBet.map((bet) => ({
      marketId: bet?.marketId,
      selection_id: bet?.selection_id,
      runner_name: bet?.runner_name,
      stake: bet?.stake,
      isback: bet?.isback,
      price: bet?.price,
    }));

    if (status === Status.SUSPENDED && payload?.length > 0) {
      const handleOrder = async () => {
        const res = await addOrder(payload).unwrap();
        payload = [];
        if (res?.success) {
          let totalBet = 0;
          for (let bet of filterPlacedBet) {
            totalBet += bet?.stake;
          }
          setTotalBet((prev) => prev + totalBet);
          setToast(res?.Message);
        }
      };
      handleOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOrder, status]);

  return (
    <div className=" flex flex-col perspective w-full max-w-xl transition-all ease-in-out duration-1000 items-center justify-center">
      <div
        className={`grid grid-cols-12 grid-row-4 gap-0.5 h-fit w-full max-w-3xl px-2 mx-auto transition-all ease-in-out duration-1000   ${
          status === Status.SUSPENDED ? "applyPerspective" : ""
        }`}
      >
        <div
          onClick={() =>
            handleStakeChange({
              key: "perfectPair",
              data,
              dataIndex: 3,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip rounded flex flex-col items-center p-0.5 justify-center col-span-3 h-20 border-transparent bg-gradient-to-t from-gray/40 to-gray/70   ${
            isRunnerActive(data, 3, 0)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="PERFECT PAIR"
        >
          <div className="absolute flex flex-col items-center gap-2 bottom-1">
            <svg
              width={43}
              height={41}
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="22.2094"
                width={21}
                height={30}
                rx={2}
                transform="rotate(10 22.2094 0)"
                fill="white"
              />
              <path
                d="M31.0836 4.16143L33.1399 4.52401L34.9805 13.3659L32.8415 12.9888L32.4798 11.1703L29.4308 10.6327L28.4689 12.2178L26.3181 11.8385L31.0836 4.16143ZM32.2432 9.47145L31.7284 6.51717L30.2224 9.11513L32.2432 9.47145Z"
                fill="black"
              />
              <path
                d="M30.9269 21.6521C30.5779 21.7137 30.2697 21.859 30.0105 22.0608C30.3524 21.6147 30.5147 21.0355 30.4094 20.4384C30.2107 19.3116 29.1367 18.5559 28.0056 18.7553C26.8787 18.954 26.1229 20.0281 26.3224 21.1591C26.4284 21.7603 26.784 22.2526 27.2662 22.5534C26.9479 22.4448 26.5995 22.4108 26.2421 22.4738C25.1194 22.6718 24.3678 23.7451 24.5658 24.8677C24.7637 25.9903 25.837 26.7418 26.9597 26.5439C27.9773 26.3645 28.6862 25.4678 28.6656 24.4656C28.9645 25.423 28.8691 26.6277 28.3995 27.8247C28.7863 27.7565 29.1774 27.6876 29.5642 27.6194C29.951 27.5511 30.3421 27.4822 30.7289 27.414C29.8782 26.4498 29.3773 25.3546 29.33 24.3485C29.6533 25.2972 30.6263 25.8974 31.6438 25.718C32.7665 25.52 33.5181 24.4467 33.3201 23.3241C33.1222 22.2015 32.0496 21.4542 30.9269 21.6521Z"
                fill="black"
              />
              <g filter="url(#filter0_d_2968_19)">
                <rect
                  x={4}
                  y="3.64661"
                  width={21}
                  height={30}
                  rx={2}
                  transform="rotate(-10 4 3.64661)"
                  fill="white"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M13.9792 5.75172L16.0354 5.38914L20.7891 13.0683L18.6501 13.4455L17.6883 11.8604L14.6393 12.3981L14.2776 14.2165L12.1268 14.5957L13.9792 5.75172ZM16.8849 10.3449L15.3907 7.74488L14.8641 10.7012L16.8849 10.3449Z"
                  fill="black"
                />
                <path
                  d="M20.2517 21.6521C19.9027 21.7137 19.5945 21.859 19.3353 22.0608C19.6772 21.6147 19.8395 21.0355 19.7342 20.4384C19.5355 19.3116 18.4615 18.5559 17.3304 18.7553C16.2035 18.954 15.4477 20.0281 15.6472 21.1591C15.7532 21.7603 16.1088 22.2526 16.591 22.5534C16.2727 22.4448 15.9243 22.4108 15.5669 22.4738C14.4442 22.6718 13.6926 23.7451 13.8906 24.8677C14.0885 25.9903 15.1618 26.7418 16.2845 26.5439C17.3021 26.3645 18.011 25.4678 17.9904 24.4656C18.2893 25.423 18.1939 26.6277 17.7243 27.8247C18.1111 27.7565 18.5022 27.6876 18.889 27.6193C19.2758 27.5511 19.6669 27.4822 20.0537 27.414C19.203 26.4498 18.7021 25.3546 18.6548 24.3485C18.9781 25.2972 19.9511 25.8974 20.9686 25.718C22.0913 25.52 22.8429 24.4467 22.6449 23.3241C22.447 22.2015 21.3744 21.4542 20.2517 21.6521Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2968_19"
                  x={0}
                  y={0}
                  width="33.8904"
                  height="41.1908"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2968_19"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2968_19"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="text-xs font-semibold text-white">PERFECT PAIR</div>
          </div>
          <span className="absolute text-sm font-semibold text-white top-1 hidden">
            PERFECT PAIR
          </span>
          <div className="float z-50">
            <div className="relative w-10 h-10">
              {stakeState?.perfectPair?.show && (
                <Stake stake={stakeState?.perfectPair?.stake} />
              )}
            </div>
          </div>
          {isRunnerActive(data, 3, 0) ? (
            <span className="absolute bottom-0 text-xs font-semibold text-white top-1 left-1">
              {getBackPrice(data, 3, 0)}
            </span>
          ) : (
            <Lock position="top-1 left-1" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "big",
              data,
              dataIndex: 4,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip rounded flex flex-col items-center p-0.5 justify-center col-span-3 h-20 border-transparent bg-gradient-to-b bg-gradient-to-t from-gray/40 to-gray/70 animateWinner ${
            data?.[4]?.status === Status.OPEN &&
            data?.[4]?.runners?.[0]?.status === Status.ACTIVE
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="BIG"
        >
          <div className="absolute flex flex-col items-center gap-2 bottom-1">
            <svg
              width={39}
              height={31}
              viewBox="0 0 39 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.65521 25.4811L10.9699 19.6567L2.43772 18.6563L0.657888 13.1786L17.3114 15.5444L18.5076 19.2262L6.43505 30.9588L4.65521 25.4811Z"
                fill="white"
              />
              <path
                d="M30.1894 19.4017L20.5809 22.5237L19.5111 19.2311L25.0909 2.69161L30.3292 0.989589L34.3654 13.4118L37.3288 12.449L38.6904 16.6396L35.7271 17.6025L37.1276 21.9128L31.59 23.7121L30.1894 19.4017ZM29.636 14.9485L27.6908 8.96189L25.2359 16.3782L29.636 14.9485Z"
                fill="white"
              />
            </svg>
            <div className="text-xs font-semibold text-white">BIG</div>
          </div>
          <span className="absolute text-sm font-semibold text-white top-1 hidden">
            BIG
          </span>
          <div className="float z-50">
            <div className="relative w-10 h-10">
              {stakeState?.big?.show && (
                <Stake stake={stakeState?.big?.stake} />
              )}
            </div>
          </div>
          {data?.[4]?.status === Status.OPEN &&
          data?.[4]?.runners?.[0]?.status ? (
            <span className="absolute bottom-0 text-xs font-semibold text-white top-1 left-1">
              {data?.[4]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="top-1 left-1" />
          )}

          <span className="shimmer" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "small",
              data,
              dataIndex: 5,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip rounded flex flex-col items-center p-0.5 justify-center col-span-3 h-20 border-transparent bg-gradient-to-b bg-gradient-to-t from-gray/40 to-gray/70 ${
            data?.[4]?.status === Status.OPEN &&
            data?.[4]?.runners?.[0]?.status === Status.ACTIVE
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="SMALL"
        >
          <div className="absolute flex flex-col items-center gap-2 bottom-1">
            <svg
              width={46}
              height={36}
              viewBox="0 0 46 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg
                width={37}
                height={27}
                viewBox="0 0 37 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.13974 23.8946L0.943464 20.2128L13.0258 8.51016L14.8056 13.9879L8.49095 19.8123L17.0231 20.8127L18.8029 26.2904L2.13974 23.8946Z"
                  fill="white"
                />
                <path
                  d="M28.1894 19.4017L18.5809 22.5237L17.5111 19.2311L23.0909 2.69161L28.3292 0.989589L32.3654 13.4118L35.3288 12.449L36.6904 16.6396L33.7271 17.6025L35.1276 21.9128L29.59 23.7121L28.1894 19.4017ZM27.636 14.9485L25.6908 8.96189L23.2358 16.3782L27.636 14.9485Z"
                  fill="white"
                />
              </svg>
            </svg>
            <div className="text-xs font-semibold text-white">SMALL</div>
          </div>
          <span className="absolute text-sm font-semibold text-white top-1 hidden">
            SMALL
          </span>
          <div className="float z-50">
            <div className="relative w-10 h-10">
              {stakeState?.small?.show && (
                <Stake stake={stakeState?.small?.stake} />
              )}
            </div>
          </div>
          {data?.[5]?.status === Status.OPEN &&
          data?.[5]?.runners?.[5]?.status ? (
            <span className="absolute bottom-0 text-xs font-semibold text-white top-1 left-1">
              {data?.[5]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="top-1 left-1" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "perfectPair",
              data,
              dataIndex: 6,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip rounded flex flex-col items-center p-0.5 justify-center col-span-3 h-20 border-transparent bg-gradient-to-b bg-gradient-to-t from-gray/40 to-gray/70 ${
            data?.[6]?.status === Status.OPEN &&
            data?.[6]?.runners?.[0]?.status === Status.ACTIVE
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="EITHER PAIR"
        >
          <div className="absolute flex flex-col items-center gap-2 bottom-1">
            <svg
              width={43}
              height={41}
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="22.2094"
                width={21}
                height={30}
                rx={2}
                transform="rotate(10 22.2094 0)"
                fill="white"
              />
              <path
                d="M30.78 5.88363L32.8362 6.24621L34.6768 15.0881L32.5378 14.711L32.1761 12.8925L29.1271 12.3549L28.1653 13.94L26.0144 13.5607L30.78 5.88363ZM31.9395 11.1937L31.4247 8.23937L29.9187 10.8373L31.9395 11.1937Z"
                fill="#DD181F"
              />
              <path
                d="M33.5127 22.2774C33.7318 21.0351 32.9179 19.8552 31.6932 19.6392C30.4685 19.4232 29.3001 20.2537 29.0811 21.496C29.3001 20.2537 28.4863 19.0737 27.2616 18.8578C26.0368 18.6418 24.8685 19.4723 24.6495 20.7146C24.635 20.7963 24.6254 20.8746 24.6198 20.9537C24.6169 20.97 24.6173 20.9912 24.6184 21.0082C24.6164 21.0669 24.6151 21.1214 24.6131 21.18C24.651 23.6979 28.0842 27.1262 28.0842 27.1262C28.0842 27.1262 32.7545 25.0931 33.4563 22.5034C33.4813 22.432 33.499 22.355 33.5127 22.2774Z"
                fill="#DD181F"
              />
              <g filter="url(#filter0_d_2968_19)">
                <rect
                  x={4}
                  y="3.64661"
                  width={21}
                  height={30}
                  rx={2}
                  transform="rotate(-10 4 3.64661)"
                  fill="white"
                  shapeRendering="crispEdges"
                />
                <path
                  d="M13.9792 5.75172L16.0354 5.38914L20.7891 13.0683L18.6501 13.4455L17.6883 11.8604L14.6393 12.3981L14.2776 14.2165L12.1268 14.5957L13.9792 5.75172ZM16.8849 10.3449L15.3907 7.74488L14.8641 10.7012L16.8849 10.3449Z"
                  fill="black"
                />
                <path
                  d="M20.2517 21.6521C19.9027 21.7137 19.5945 21.859 19.3353 22.0608C19.6771 21.6147 19.8395 21.0355 19.7342 20.4384C19.5355 19.3116 18.4615 18.5559 17.3304 18.7553C16.2035 18.954 15.4477 20.0281 15.6472 21.1591C15.7532 21.7603 16.1088 22.2526 16.591 22.5534C16.2727 22.4448 15.9243 22.4108 15.5669 22.4738C14.4442 22.6718 13.6926 23.7451 13.8906 24.8677C14.0885 25.9903 15.1618 26.7418 16.2845 26.5439C17.3021 26.3645 18.011 25.4678 17.9904 24.4656C18.2893 25.423 18.1939 26.6277 17.7243 27.8247C18.1111 27.7565 18.5022 27.6876 18.889 27.6194C19.2758 27.5511 19.6669 27.4822 20.0537 27.414C19.203 26.4498 18.7021 25.3546 18.6548 24.3485C18.9781 25.2972 19.9511 25.8974 20.9686 25.718C22.0913 25.52 22.8429 24.4467 22.6449 23.3241C22.447 22.2015 21.3744 21.4542 20.2517 21.6521Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2968_19"
                  x={0}
                  y={0}
                  width="33.8904"
                  height="41.1908"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2968_19"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2968_19"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="text-xs font-semibold text-white">EITHER PAIR</div>
          </div>
          <span className="absolute text-sm font-semibold text-white top-1 hidden">
            EITHER PAIR
          </span>
          <div className="float z-50">
            <div className="relative w-10 h-10">
              {stakeState?.eitherPlayer?.show && (
                <Stake stake={stakeState?.eitherPlayer?.stake} />
              )}
            </div>
          </div>
          {data?.[6]?.status === Status.OPEN &&
          data?.[6]?.runners?.[0]?.status ? (
            <span className="absolute bottom-0 text-xs font-semibold text-white top-1 left-1">
              {data?.[6]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="top-1 left-1" />
          )}
        </div>

        {/* player */}
        <div
          onClick={() =>
            handleStakeChange({
              key: "player",
              data,
              dataIndex: 0,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip rounded flex flex-col items-center p-0.5 justify-center col-span-5 row-span-2 h-20 bg-gradient-to-b bg-gradient-to-t from-blue to-blue/70 ${
            isRunnerActive(data, 0, 0)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="PLAYER"
        >
          <span className="absolute text-sm font-semibold text-white top-1 left-1">
            PLAYER
          </span>
          <div className="float z-50">
            <div className="relative w-10 h-10">
              {stakeState?.player?.show && (
                <Stake stake={stakeState?.player?.stake} />
              )}
            </div>
          </div>
          {isRunnerActive(data, 0, 0) ? (
            <span className="absolute bottom-0 text-xs font-semibold text-white left-1">
              {getBackPrice(data, 0, 0)}
            </span>
          ) : (
            <Lock position="left-1" />
          )}

          <div className="absolute z-40 flex gap-1 bottom-1 flex-row-reverse right-1">
            <div className>
              <div
                className="h-12 aspect-[5/7] flip-card"
                style={{ zIndex: 999 }}
              >
                {data?.[0]?.runners?.[0]?.card?.length > 0 ? (
                  <img src={`/cards/${data?.[0]?.runners?.[0]?.card?.[0]}.jpg`} />
                ) : (
                  <CardBack />
                )}
              </div>
            </div>
            <div className>
              <div
                className="h-12 aspect-[5/7] flip-card"
                style={{ zIndex: 999 }}
              >
                <div className="h-full w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded relative flip-card-front">
                  {data?.[0]?.runners?.[0]?.card?.length > 1 ? (
                    <img src={`/cards/${data?.[0]?.runners?.[0]?.card[1]}.jpg`} />
                  ) : (
                    <CardBack />
                  )}
                </div>
              </div>
            </div>
            <div className="rotate-90 mx-2">
              <div
                className="h-12 aspect-[5/7] flip-card"
                style={{ zIndex: 999 }}
              >
                <div className="h-full w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded relative flip-card-front">
                  {data?.[0]?.runners?.[0]?.card?.length > 2 ? (
                    <img src={`/cards/${data?.[0]?.runners?.[0]?.card?.[2]}.jpg`} />
                  ) : (
                    <CardBack />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* player */}
        <div
          onClick={() =>
            handleStakeChange({
              key: "tie",
              data,
              dataIndex: 4,
              runnerIndex: 2,
              type: "back",
            })
          }
          className={`relative overflow-clip rounded flex flex-col items-center p-0.5 justify-center col-span-2 row-span-4 bg-gradient-to-b bg-gradient-to-t from-green to-green/70 ${isRunnerActive(
            data,
            0,
            2
          )}`}
          id="TIE"
        >
          <span className="absolute text-sm font-semibold text-white top-1">
            TIE
          </span>
          <div className="float z-50">
            <div className="relative w-10 h-10">
              {stakeState?.tie?.show && (
                <Stake stake={stakeState?.tie?.stake} />
              )}
            </div>
          </div>
          {isRunnerActive(data, 0, 2) ? (
            <span className="absolute bottom-0 text-xs font-semibold text-white">
              {getBackPrice(data, 0, 2)}
            </span>
          ) : (
            <Lock position="" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "perfectPair",
              data,
              dataIndex: 0,
              runnerIndex: 1,
              type: "back",
            })
          }
          className={`relative overflow-clip rounded flex flex-col items-center p-0.5 justify-center col-span-5 row-span-2 h-20 bg-gradient-to-b bg-gradient-to-t from-red to-red/70 animateWinner ${isRunnerActive(
            data,
            0,
            1
          )}`}
          id="BANKER"
        >
          <span className="absolute text-sm font-semibold text-white top-1 right-1">
            BANKER
          </span>
          <div className="float z-50">
            <div className="relative w-10 h-10">
              {stakeState?.banker?.show && (
                <Stake stake={stakeState?.banker?.stake} />
              )}
            </div>
          </div>
          {isRunnerActive(data, 0, 1) ? (
            <span className="absolute bottom-0 text-xs font-semibold text-white right-1">
              {getBackPrice(data, 0, 1)}
            </span>
          ) : (
            <Lock position="right-1" />
          )}
          {/* Banker */}
          <div className="absolute z-40 flex gap-1 bottom-1 flex-row left-1">
            <div className>
              <div
                className="h-12 aspect-[5/7] flip-card"
                style={{ zIndex: 999 }}
              >
                <div className="h-full w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded relative flip-card-front">
                  {data?.[0]?.runners?.[1]?.card?.length > 0 ? (
                    <img src={`/cards/${data?.[0]?.runners?.[1]?.card?.[0]}.jpg`} />
                  ) : (
                    <CardBack />
                  )}
                </div>
              </div>
            </div>
            <div className>
              <div
                className="h-12 aspect-[5/7] flip-card"
                style={{ zIndex: 999 }}
              >
                <div className="h-full w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded relative flip-card-front">
                  {data?.[0]?.runners?.[1]?.card?.length > 1 ? (
                    <img src={`/cards/${data?.[0]?.runners?.[0]?.card?.[1]}.jpg`} />
                  ) : (
                    <CardBack />
                  )}
                </div>
              </div>
            </div>
            <div className="rotate-90 mx-2">
              <div
                className="h-12 aspect-[5/7] flip-card"
                style={{ zIndex: 999 }}
              >
                <div className="h-full w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded relative flip-card-front">
                  {data?.[0]?.runners?.[1]?.card?.length > 2 ? (
                    <img src={`/cards/${data?.[0]?.runners?.[1]?.card?.[2]}.jpg`} />
                  ) : (
                    <CardBack />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Banker */}
          <span className="shimmer" />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "playerPair",
              data,
              dataIndex: 1,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip rounded flex flex-col items-center p-0.5 justify-center col-span-5 h-16 bg-gradient-to-b bg-gradient-to-t from-blue to-blue/70 ${isRunnerActive(
            data,
            1,
            0
          )}`}
          id="PLAYER PAIR"
        >
          <span className="absolute text-sm font-semibold text-white top-1 left-1">
            PLAYER PAIR
          </span>
          <div className="float z-50">
            <div className="relative w-10 h-10">
              {stakeState?.playerPair?.show && (
                <Stake stake={stakeState?.playerPair?.stake} />
              )}
            </div>
          </div>
          {isRunnerActive(data, 1, 0) ? (
            <span className="absolute bottom-0 text-xs font-semibold text-white left-1">
              {getBackPrice(data, 1, 0)}
            </span>
          ) : (
            <Lock position="left-1" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "bankerPrice",
              data,
              dataIndex: 2,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip rounded flex flex-col items-center p-0.5 justify-center col-span-5 h-16 bg-gradient-to-b bg-gradient-to-t from-red to-red/70 ${isRunnerActive(
            data,
            2,
            0
          )}`}
          id="BANKER PAIR"
        >
          <span className="absolute text-sm font-semibold text-white top-1 right-1">
            BANKER PAIR
          </span>
          <div className="float z-50">
            <div className="relative w-10 h-10">
              {stakeState?.bankerPair?.show && (
                <Stake stake={stakeState?.bankerPair?.stake} />
              )}
            </div>
          </div>
          {isRunnerActive(data, 2, 0) ? (
            <span className="absolute bottom-0 text-xs font-semibold text-white right-1">
              {getBackPrice(data, 2, 0)}
            </span>
          ) : (
            <Lock position="right-1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
