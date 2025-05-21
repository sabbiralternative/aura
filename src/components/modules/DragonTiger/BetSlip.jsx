import { useSelector } from "react-redux";
import { CardBack, Lock } from "../../../assets/icon";
import { Status } from "../../../const";
import { useOrderMutation } from "../../../redux/features/events/events";
import { useEffect, useState } from "react";
import Stake from "../../shared/Stake/Stake";
import { isRunnerActive } from "../../../utils/betSlip";
import NextGame from "../../shared/NextGame/NextGame";

const BetSlip = ({
  data,
  status,
  setToast,
  setStakeState,
  stakeState,
  initialState,
  setTotalBet,
}) => {
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const firstData = data?.[0];
  const card1 = firstData?.runners?.[0]?.card?.[0];
  const card2 = firstData?.runners?.[1]?.card?.[0];

  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);

  // Generic function to update stake state
  const handleStakeChange = (payload) => {
    const { key, data, dataIndex, runnerIndex, type } = payload;
    const formatData = {
      roundId: data?.[dataIndex]?.roundId,
      name: data?.[dataIndex]?.name,
      eventId: data?.[dataIndex]?.eventId,
      eventName: data?.[dataIndex]?.eventName,
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
          roundId: formatData?.roundId,
          name: formatData?.name,
          eventId: formatData?.eventId,
          eventName: formatData?.eventName,
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
    if (showSuspendedWarning) {
      setTimeout(() => {
        setShowSuspendedWarning(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, showSuspendedWarning]);

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
      roundId: bet?.roundId,
      name: bet?.name,
      eventId: bet?.eventId,
      eventName: bet?.eventName,
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

  const handleShowSuspendedStatus = () => {
    if (status === Status.SUSPENDED) {
      setShowSuspendedWarning(true);
    }
  };

  return (
    <div
      onClick={handleShowSuspendedStatus}
      className={` flex flex-col gap-1 perspective w-full transition-all ease-in-out duration-1000 items-center justify-center  `}
    >
      <div
        className={`grid grid-cols-8  gap-0.5 h-fit w-full mx-auto max-w-3xl px-2 transition-all ease-in-out duration-1000 backdrop-blur-sm ${
          status === Status.SUSPENDED ? "applyPerspective" : ""
        }`}
      >
        {showSuspendedWarning && <NextGame />}
        <div
          onClick={() =>
            handleStakeChange({
              key: "dragonEven",
              data,
              dataIndex: 2,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer col-span-2  false false rounded-tl-md false false false bg-gradient-to-l from-red to-red/70 ${
            isRunnerActive(data, 2, 0)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="dragonEven"
        >
          <span className="absolute z-10 h-4 text-xs font-semibold text-white top-1 left-1">
            DragonEven
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.dragonEven?.show && (
                <Stake stake={stakeState?.dragonEven?.stake} />
              )}
            </div>
          </div>
          {data?.[2]?.status === "OPEN" &&
          data?.[2]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white left-0.5">
              {data?.[2]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 right-0.5" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "dragonOdd",
              data,
              dataIndex: 2,
              runnerIndex: 1,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer col-span-2  false false false false false false bg-gradient-to-l from-red to-red/70 ${
            isRunnerActive(data, 2, 1)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="dragonOdd"
        >
          <span className="absolute z-10 h-4 text-xs font-semibold text-white top-1 left-1">
            DragonOdd
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.dragonOdd?.show && (
                <Stake stake={stakeState?.dragonOdd?.stake} />
              )}
            </div>
          </div>
          {data?.[2]?.status === "OPEN" &&
          data?.[2]?.runners?.[1]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white left-0.5">
              {data?.[2]?.runners?.[0]?.back[1]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 right-0.5" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "tigerEven",
              data,
              dataIndex: 3,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer col-span-2  false false false false false false bg-gradient-to-l from-orange to-orange/70 ${
            isRunnerActive(data, 3, 0)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="tigerEven"
        >
          <span className="absolute z-10 h-4 text-xs font-semibold text-white top-1 left-1">
            TigerEven
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.tigerEven?.show && (
                <Stake stake={stakeState?.tigerEven?.stake} />
              )}
            </div>
          </div>
          {data?.[3]?.status === "OPEN" &&
          data?.[3]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white left-0.5">
              {data?.[3]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 right-0.5" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "tigerOdd",
              data,
              dataIndex: 3,
              runnerIndex: 1,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer col-span-2  false false false rounded-tr-md false false bg-gradient-to-l from-orange to-orange/70 ${
            isRunnerActive(data, 3, 1)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="tigerOdd"
        >
          <span className="absolute z-10 h-4 text-xs font-semibold text-white top-1 left-1">
            TigerOdd
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.tigerOdd?.show && (
                <Stake stake={stakeState?.tigerOdd?.stake} />
              )}
            </div>
          </div>
          {data?.[3]?.status === "OPEN" &&
          data?.[3]?.runners?.[1]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white left-0.5">
              {data?.[3]?.runners?.[1]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 right-0.5" />
          )}
        </div>

        {/* Dragon */}
        <div
          onClick={() =>
            handleStakeChange({
              key: "dragon",
              data,
              dataIndex: 0,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer false false false false false false false bg-gradient-to-r from-red to-red/80 col-span-3  row-span-2 h-[130px] perspective ${
            isRunnerActive(data, 0, 0)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="dragon"
        >
          <span className="absolute z-10 h-4 text-xs font-semibold text-white top-1 left-1">
            Dragon
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.dragon?.show && (
                <Stake stake={stakeState?.dragon?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === "OPEN" &&
          data?.[0]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white right-0.5">
              {data?.[0]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="right-0.5 bottom-1" />
          )}

          <div className="absolute z-40 h-14 applyPerspective bottom-1 left-1">
            <div
              className={`h-full aspect-[5/7] flip-card  ${
                card1 ? "flip-card" : "cardFadeInAnimation"
              }`}
              style={{ zIndex: 999 }}
            >
              <div className="h-full w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-front">
                <img src={`/cards/${card1}.jpg`} alt="" />
              </div>

              <div
                className={`transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative  overflow-hidden  flip-card-back`}
              >
                <CardBack />
              </div>
            </div>
          </div>
          <svg
            className="absolute w-full h-full p-2 left-0 opacity-50"
            width={870}
            height={876}
            viewBox="0 0 870 876"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2960_18)">
              <path
                d="M383.42 499.31C366.83 469.09 361.1 427.15 380.44 399.46C381.62 397.74 382.91 396.08 384.31 394.48C381.7 395.17 379.23 396.08 376.9 397.23C352.27 409.2 342.83 444.65 346.17 467.68C338.05 457.37 329.48 447.18 316.62 440.21C298.79 430.57 282.49 430.18 261.32 429.62C295.92 446.11 251.25 489.88 300.29 507.14C329.84 517.53 361.77 500.58 375.5 530.35C378.6 556.42 354.05 587.27 383.78 608.14C382.54 587.44 391.92 579.44 396.02 560.6C400.86 538.48 393.79 518.16 383.42 499.32V499.31ZM306.97 487.58C293.42 480.04 285.4 461.69 295.18 449.25C301.78 447.99 305.92 454.74 311.3 458.87C317.96 463.97 325.26 467.7 332.55 472.12C340.27 476.8 355.93 491.26 357.26 500.6C341.2 493.89 321.81 495.84 306.98 487.59L306.97 487.58Z"
                fill="black"
              />
              <path
                d="M607.77 428.57C586.6 429.12 570.31 429.52 552.47 439.18C539.59 446.13 531.04 456.32 522.91 466.63C526.37 442.83 516.18 405.8 489.73 395.08C488.15 394.43 486.49 393.9 484.79 393.44C485.68 394.47 486.53 395.51 487.3 396.58C508.23 424.21 502.65 467.38 485.66 498.27C475.31 517.11 468.24 537.45 473.08 559.55C477.19 578.39 486.55 586.39 485.32 607.09C515.04 586.21 490.47 555.37 493.6 529.3C507.33 499.54 539.26 516.48 568.81 506.09C617.85 488.83 573.17 445.06 607.78 428.57H607.77ZM562.13 486.54C547.3 494.8 527.9 492.86 511.85 499.55C513.17 490.21 528.83 475.75 536.56 471.07C543.85 466.65 551.15 462.91 557.81 457.82C563.18 453.69 567.33 446.94 573.93 448.2C583.71 460.64 575.67 478.99 562.14 486.53L562.13 486.54Z"
                fill="black"
              />
              <path
                d="M434.55 592.9C421.61 592.9 412.63 585.67 407.26 581.32C401.32 576.51 391.99 576.59 398.67 570.14C406.51 562.56 419.3 556.84 434.55 556.84C449.8 556.84 462.59 562.56 470.43 570.14C477.1 576.59 467.77 576.51 461.84 581.32C456.47 585.67 447.49 592.9 434.55 592.9Z"
                fill="#070707"
              />
              <path
                d="M541.81 634.67C583.87 647.73 648.41 688.03 678.1 703.58C715.93 723.39 788.44 722.39 831.13 683.46C871.45 646.68 876.03 600.57 857 555.1C839.43 513.11 805.26 462.02 789.44 427.7C767.67 380.5 773.74 351.28 786.4 329.59C796.07 313.03 811.49 294.25 814.71 271.87C817.63 251.6 811.92 225.83 789.43 203.49C806.2 229.95 810.35 253.86 805.17 271.8C798.1 296.26 780.85 315.92 772.79 327.84C753.52 356.31 756.15 393.6 773.26 432.74C788.48 467.57 818.94 521.19 834.16 557.85C849.39 594.51 842.55 633.76 815.46 660.44C785.86 689.6 722.59 693.14 680.96 668.75C643.04 646.53 576.76 601.39 545.36 590.39C552.97 601.39 544.23 614.38 536.02 622.12C530.34 627.47 533.67 632.15 541.81 634.68V634.67Z"
                fill="#070707"
              />
              <path
                d="M327.32 634.67C285.26 647.73 220.72 688.03 191.03 703.58C153.2 723.39 80.69 722.39 38 683.46C-2.31997 646.68 -6.89997 600.57 12.13 555.1C29.7 513.11 63.87 462.02 79.69 427.7C101.46 380.5 95.39 351.28 82.73 329.59C73.06 313.03 57.64 294.25 54.42 271.87C51.5 251.6 57.21 225.83 79.7 203.49C62.93 229.95 58.78 253.86 63.96 271.8C71.03 296.26 88.28 315.92 96.34 327.84C115.61 356.31 112.98 393.6 95.87 432.74C80.65 467.57 50.19 521.19 34.97 557.85C19.74 594.51 26.58 633.76 53.67 660.44C83.27 689.6 146.54 693.14 188.17 668.75C226.09 646.53 292.37 601.39 323.77 590.39C316.16 601.39 324.9 614.38 333.11 622.12C338.79 627.47 335.47 632.15 327.32 634.68V634.67Z"
                fill="#070707"
              />
              <path
                d="M440.52 633.28C457.36 628.01 470.54 604.53 482.57 593.53C491.65 585.23 506.79 583.76 515.34 591.7C524.96 600.64 525.71 612.57 524.68 621.59C523.69 630.29 518.54 637.62 512.66 643.06C517.37 634.09 517.34 626.73 515.89 620.42C514.71 615.27 510.33 610.77 505.74 609.39C501.16 608.02 494.71 608.8 485.6 614.54C477.59 619.58 472.49 624.51 465.96 628.24C459.54 631.91 451.98 633.28 440.53 633.28H440.52Z"
                fill="#070707"
              />
              <path
                d="M501.73 623.92C507.04 626.95 508.25 635.34 504.22 639.56C500.53 643.43 493.57 642.48 487.72 643C483.49 643.37 477.15 645.41 473.71 648.16C470.27 650.91 466.08 649.75 471.05 642.06C475.6 635.01 480.67 629.17 486.95 625.48C492.34 622.3 497.52 621.53 501.73 623.93V623.92Z"
                fill="#070707"
              />
              <path
                d="M529.52 684.57C532 696.48 530.06 715.69 522.67 725.22C517.78 731.53 515.03 730.95 514.5 723.42C513.99 716.08 511.38 702.86 505.2 695.19C503.23 692.74 503.91 690.71 506.65 689.64C511.93 687.58 520.41 683.61 523.74 681.87C527.06 680.14 528.82 681.15 529.53 684.57H529.52Z"
                fill="#070707"
              />
              <path
                d="M526.7 780.02C528.45 772.42 525.07 755.37 521.45 747.77C517.79 740.08 515.25 740.4 512.87 749.73C509.73 762.02 503.08 773.08 491.73 782.08C489.53 783.83 490 786.53 493.79 788.08C497.45 789.58 504.67 790.14 510.67 789.58C516.83 789 519.97 787.37 521.92 786.39C524.73 784.98 526.14 782.45 526.7 780.01V780.02Z"
                fill="#070707"
              />
              <path
                d="M491.2 697.22C490.09 704.46 486.94 711.65 482.71 716.38C478.99 720.53 476.02 720.05 473.54 715.75C470.64 710.73 466.93 705.52 464.03 702.04C463.15 700.99 463.61 698.59 466.17 698.32C470.79 697.84 481.74 696.15 487.15 694.59C490.16 693.72 491.56 694.89 491.2 697.21V697.22Z"
                fill="#070707"
              />
              <path
                d="M476.45 778.71C476.87 769.71 475.45 762.33 473.78 758.79C471.72 754.43 469.06 753.92 465.95 759.26C463.14 764.09 459.2 769.43 454.23 774.03C451.02 777 451.4 779.59 455.17 780.03C459.15 780.5 466.56 781.58 469.98 782.28C473.12 782.93 476.28 782.32 476.45 778.72V778.71Z"
                fill="#070707"
              />
              <path
                d="M339.61 684.57C337.13 696.48 339.07 715.69 346.46 725.22C351.35 731.53 354.1 730.95 354.63 723.42C355.14 716.08 357.75 702.86 363.93 695.19C365.9 692.74 365.22 690.71 362.48 689.64C357.2 687.58 348.72 683.61 345.39 681.87C342.07 680.14 340.31 681.15 339.6 684.57H339.61Z"
                fill="#070707"
              />
              <path
                d="M342.43 780.02C340.68 772.42 344.06 755.37 347.68 747.77C351.34 740.08 353.88 740.4 356.26 749.73C359.4 762.02 366.05 773.08 377.4 782.08C379.6 783.83 379.13 786.53 375.34 788.08C371.68 789.58 364.46 790.14 358.46 789.58C352.3 789 349.16 787.37 347.21 786.39C344.4 784.98 342.99 782.45 342.43 780.01V780.02Z"
                fill="#070707"
              />
              <path
                d="M377.93 697.22C379.04 704.46 382.19 711.65 386.42 716.38C390.14 720.53 393.11 720.05 395.59 715.75C398.49 710.73 402.2 705.52 405.1 702.04C405.98 700.99 405.52 698.59 402.96 698.32C398.34 697.84 387.39 696.15 381.98 694.59C378.97 693.72 377.57 694.89 377.93 697.21V697.22Z"
                fill="#070707"
              />
              <path
                d="M392.68 778.71C392.26 769.71 393.68 762.33 395.35 758.79C397.41 754.43 400.07 753.92 403.18 759.26C405.99 764.09 409.93 769.43 414.9 774.03C418.11 777 417.73 779.59 413.96 780.03C409.98 780.5 402.57 781.58 399.15 782.28C396.01 782.93 392.85 782.32 392.68 778.72V778.71Z"
                fill="#070707"
              />
              <path
                d="M476.21 433.59C489.19 427.48 501.26 423.73 515.68 419.56C534.3 414.18 556.39 403.02 564.71 392.98C577.77 377.23 581.04 357.46 579.83 341.2C589.63 350.94 600.45 377.17 600.45 391.61C600.45 401.41 595.29 418.53 575.25 423.69C550.49 430.06 535.44 429.76 514.99 439.27C500.21 446.14 495.46 451.82 486 461.09C479.56 467.41 468.21 482.92 460.82 495.46C456.19 503.33 452.2 502.92 453.86 495.35C455.46 488.02 456.04 482.9 456.35 479.22C456.87 473.21 455.75 469.34 451.33 465.73C446.78 462.02 445.33 457.81 450.14 452.31C454.95 446.81 464.52 439.09 476.2 433.59H476.21Z"
                fill="#070707"
              />
              <path
                d="M588.77 598.51C601.32 606.25 606.87 609.97 619.7 617.99C624.86 605.27 642.87 602.12 659.11 593.24C672.39 585.98 693.64 571.32 707.22 548.69C716.78 532.76 718.97 511.2 716.49 487.92C712.07 513.07 702.74 529.75 688.01 541.6C663.06 561.67 634.67 561.18 615.91 571.24C660.25 541.68 697.27 467.57 697.6 438.34C697.98 404.21 687.3 368.17 668.17 334.35C667.12 361.06 657.38 378.53 630.35 400.07C614.34 412.83 609.8 430.51 607.59 453.23C606.76 461.72 604.8 474.31 599.53 485.08C642.38 463.08 657.94 434.9 672.03 370.22C677.89 403.74 677.89 420.92 665.98 447.5C657.68 466.02 628.4 493.22 607.32 510.28C627.94 500.2 655.44 481.87 675.37 459.87C661.97 495.96 626.56 529.98 593.57 546.02C574.95 555.07 536.29 559.31 545.45 577.18C555.42 581.3 577.99 591.84 588.76 598.49L588.77 598.51Z"
                fill="#070707"
              />
              <path
                d="M280.36 598.51C267.81 606.25 262.26 609.97 249.43 617.99C244.27 605.27 226.26 602.12 210.02 593.24C196.74 585.98 175.49 571.32 161.91 548.69C152.35 532.76 150.16 511.2 152.64 487.92C157.06 513.07 166.39 529.75 181.12 541.6C206.07 561.67 234.46 561.18 253.22 571.24C208.88 541.68 171.86 467.57 171.53 438.34C171.15 404.21 181.83 368.17 200.96 334.35C202.01 361.06 211.75 378.53 238.78 400.07C254.79 412.83 259.33 430.51 261.54 453.23C262.37 461.72 264.33 474.31 269.6 485.08C226.75 463.08 211.19 434.9 197.1 370.22C191.24 403.74 191.24 420.92 203.15 447.5C211.45 466.02 240.73 493.22 261.81 510.28C241.19 500.2 213.69 481.87 193.76 459.87C207.16 495.96 242.57 529.98 275.56 546.02C294.18 555.07 332.84 559.31 323.68 577.18C313.71 581.3 291.14 591.84 280.37 598.49L280.36 598.51Z"
                fill="#070707"
              />
              <path
                d="M505.12 549.6C495.47 542.78 489.61 528.21 499.18 528.17C512.64 528.11 526.05 527.43 540.65 525.11C559.6 522.1 578.26 512.56 587.43 505.23C578.42 526.29 566.55 536.89 553.71 546.97C540.88 557.05 524.32 563.18 505.12 549.61V549.6Z"
                fill="#070707"
              />
              <path
                d="M364.01 549.6C373.66 542.78 379.52 528.21 369.95 528.17C356.49 528.11 343.08 527.43 328.48 525.11C309.53 522.1 290.87 512.56 281.7 505.23C290.71 526.29 302.58 536.89 315.42 546.97C328.25 557.05 344.81 563.18 364.01 549.61V549.6Z"
                fill="#070707"
              />
              <path
                d="M668.16 180.26C665.12 225.05 645.48 249.26 632.25 261.92C630.7 243.19 623.78 222.18 619.36 210.37C611.97 190.61 613.02 181.87 624.06 169.36C635.17 156.76 643.97 139.82 642.89 118.87C641.24 86.89 626.89 48.55 570.77 0.0200195C602.71 41.41 626.58 92.97 618.52 124.26C615.01 137.89 606.36 147.45 593.93 158.02C588 163.07 582.74 169.02 579.43 175.95C564.33 165.57 543 146.65 532.8 103.15C534.7 146.39 551.84 174.52 574.05 199.77C575.4 201.3 576.56 202.87 577.7 204.76C579.26 207.34 581.23 210.45 582.74 213.3C597.81 241.69 599.24 265.34 594.14 284.04C590.02 299.16 585.32 307.76 589.9 318.3C595.65 331.52 611.9 357.71 615.1 381.55C629.78 368.25 636.04 341.29 636.99 312.03C657.61 280.93 681.38 236.01 668.14 180.28L668.16 180.26Z"
                fill="#070707"
              />
              <path
                d="M560.76 291.18C566.6 328.99 546.74 363.18 526.22 377.39C510.75 388.1 479.13 399.1 468.48 418.35C491.68 403.57 525.17 400.28 544.09 384.72C568.84 364.38 579.49 322.8 560.76 291.18Z"
                fill="#070707"
              />
              <path
                d="M434.57 536.96C417.42 536.96 403.98 540.55 395.7 546.5C389.48 550.97 384.72 547.53 388.76 539.97C396.12 526.18 417.99 515.65 434.57 515.65C451.15 515.65 473.02 526.18 480.38 539.97C484.42 547.53 479.65 550.97 473.44 546.5C465.16 540.55 451.72 536.96 434.57 536.96Z"
                fill="#070707"
              />
              <path
                d="M428.61 633.28C411.77 628.01 398.59 604.53 386.56 593.53C377.48 585.23 362.34 583.76 353.79 591.7C344.17 600.64 343.42 612.57 344.45 621.59C345.44 630.29 350.59 637.62 356.47 643.06C351.76 634.09 351.79 626.73 353.24 620.42C354.42 615.27 358.8 610.77 363.39 609.39C367.97 608.02 374.42 608.8 383.53 614.54C391.54 619.58 396.64 624.51 403.17 628.24C409.59 631.91 417.15 633.28 428.6 633.28H428.61Z"
                fill="#070707"
              />
              <path
                d="M367.4 623.92C362.09 626.95 360.88 635.34 364.91 639.56C368.6 643.43 375.56 642.48 381.41 643C385.65 643.37 391.98 645.41 395.42 648.16C398.86 650.91 403.05 649.75 398.08 642.06C393.53 635.01 388.46 629.17 382.18 625.48C376.79 622.3 371.61 621.53 367.4 623.93V623.92Z"
                fill="#070707"
              />
              <path
                d="M434.57 687.41C421.28 687.41 411.54 689.7 402.72 689.3C375.91 688.1 347.46 680.58 331.92 660.04C329.4 656.71 326.88 653.62 323.67 647.77C328.94 646.4 336.84 641.68 339.88 637.71C342.36 634.48 345.21 634.84 346.3 640.08C348.68 651.43 355.28 662.44 367.2 667.02C379.11 671.6 394.92 670 407.07 662.9C415.56 657.93 427.63 654.65 434.57 654.65C441.51 654.65 453.57 657.93 462.07 662.9C474.21 670 490.02 671.61 501.94 667.02C513.86 662.44 520.46 651.42 522.84 640.08C523.94 634.84 526.79 634.48 529.26 637.71C532.3 641.68 540.2 646.4 545.47 647.77C542.26 653.61 539.74 656.71 537.22 660.04C521.68 680.58 493.23 688.1 466.42 689.3C457.6 689.7 447.86 687.41 434.57 687.41Z"
                fill="#070707"
              />
              <path
                d="M392.92 433.59C379.94 427.48 367.87 423.73 353.45 419.56C334.83 414.18 312.74 403.02 304.42 392.98C291.36 377.23 288.09 357.46 289.3 341.2C279.5 350.94 268.68 377.17 268.68 391.61C268.68 401.41 273.84 418.53 293.88 423.69C318.64 430.06 333.7 429.76 354.14 439.27C368.92 446.14 373.67 451.82 383.13 461.09C389.57 467.41 400.92 482.92 408.31 495.46C412.95 503.33 416.93 502.92 415.27 495.35C413.67 488.02 413.09 482.9 412.78 479.22C412.26 473.21 413.38 469.34 417.8 465.73C422.35 462.02 423.8 457.81 418.99 452.31C414.18 446.81 404.61 439.09 392.93 433.59H392.92Z"
                fill="#070707"
              />
              <path
                d="M434.57 416.58C419.3 416.58 405.01 388.86 384.16 378.49C370.1 371.5 346.36 357.26 341.54 332.61C335.35 300.99 352.8 276.88 366.63 250.47C379.63 225.63 390.37 195.49 391.03 174.17C399.34 203.46 387.94 240.85 374.19 269.37C365.46 287.48 359.75 304.77 368 320.93C373.46 331.62 378.69 332.74 385.53 325.23C394.12 315.78 402.72 296.19 404.09 280.03C408.78 295.97 407.27 311.49 402.28 322.28C397.73 332.1 393.44 344.82 397.91 353.93C403.47 365.26 421.28 371.12 434.57 371.12C447.86 371.12 465.67 365.26 471.23 353.93C475.7 344.82 471.4 332.11 466.86 322.28C461.86 311.49 460.36 295.97 465.05 280.03C466.42 296.18 475.02 315.77 483.61 325.23C490.44 332.75 495.68 331.63 501.14 320.93C509.39 304.78 503.68 287.48 494.95 269.37C481.2 240.84 469.8 203.46 478.11 174.17C478.78 195.49 489.51 225.63 502.51 250.47C516.34 276.89 533.79 300.99 527.6 332.61C522.78 357.26 499 371.44 484.98 378.49C465.27 388.4 449.84 416.58 434.57 416.58Z"
                fill="#070707"
              />
              <path
                d="M434.57 875.08C412.06 875.08 384.28 866.64 370.53 858.93C347.85 846.21 327.22 853.09 318.98 873.37C315.31 853.21 317.72 836.71 322.3 826.63C309.47 829.84 295.49 842.21 291.83 851.83C287.48 824.33 294.42 807.99 301.8 795.69C310.05 781.94 311.75 760.47 308.9 746.53C305.81 731.41 299.46 716.07 287.02 705.97C274.88 696.12 269.83 685.81 266.17 677.56C278.31 669.31 295.3 660.97 309.02 654.19C305.12 670.69 308.53 682.06 312.69 688.45C338.02 727.4 326.44 754.45 329.19 773.7C331.94 792.95 356.46 801.37 380.52 792.03C396.89 785.68 419.01 784.7 434.6 784.7C450.19 784.7 472.3 785.68 488.68 792.03C512.74 801.37 537.26 792.95 540.01 773.7C542.76 754.45 531.17 727.41 556.51 688.45C560.66 682.07 564.07 670.69 560.18 654.19C573.9 660.97 590.88 669.31 603.03 677.56C599.36 685.81 594.32 696.12 582.18 705.97C569.74 716.06 563.39 731.4 560.3 746.53C557.45 760.47 559.15 781.94 567.4 795.69C574.78 807.99 581.72 824.33 577.37 851.83C573.7 842.21 559.73 829.83 546.9 826.63C551.48 836.71 553.89 853.21 550.22 873.37C541.97 853.09 521.35 846.22 498.67 858.93C484.92 866.64 457.14 875.08 434.63 875.08H434.57ZM481.17 827.3C498.27 830.05 513.95 826.2 523.59 818.94C531.04 813.33 535.65 804.28 536.3 790.18C533.01 798.08 528.35 804.1 520.3 808.97C511.97 814.01 497.61 816.82 481.17 811.15C467.72 806.51 456.45 803.94 434.59 803.94C412.73 803.94 401.46 806.51 388.01 811.15C371.57 816.82 357.21 814.01 348.88 808.97C340.83 804.1 336.17 798.09 332.88 790.18C333.54 804.27 338.14 813.32 345.59 818.94C355.23 826.2 370.91 830.05 388.01 827.3C405.11 824.55 417.49 823.87 434.59 823.87C451.69 823.87 464.07 824.55 481.17 827.3Z"
                fill="#070707"
              />
              <path
                d="M200.97 180.26C204.01 225.05 223.65 249.26 236.88 261.92C238.43 243.19 245.35 222.18 249.77 210.37C257.16 190.61 256.11 181.87 245.07 169.36C233.96 156.76 225.16 139.82 226.24 118.87C227.89 86.89 242.24 48.55 298.36 0.0200195C266.42 41.41 242.55 92.97 250.61 124.26C254.12 137.89 262.77 147.45 275.2 158.02C281.13 163.07 286.39 169.02 289.7 175.95C304.8 165.57 326.12 146.65 336.33 103.15C334.43 146.39 317.29 174.52 295.08 199.77C293.73 201.3 292.57 202.87 291.43 204.76C289.87 207.34 287.9 210.45 286.39 213.3C271.32 241.69 269.89 265.34 274.99 284.04C279.11 299.16 283.81 307.76 279.23 318.3C273.48 331.52 257.23 357.71 254.03 381.55C239.35 368.25 233.09 341.29 232.14 312.03C211.52 280.93 187.75 236.01 200.99 180.28L200.97 180.26Z"
                fill="#070707"
              />
              <path
                d="M308.37 291.18C302.53 328.99 322.39 363.18 342.91 377.39C358.38 388.1 390 399.1 400.65 418.35C377.45 403.57 343.96 400.28 325.04 384.72C300.29 364.38 289.64 322.8 308.37 291.18Z"
                fill="#070707"
              />
              <path
                d="M552.63 477.11C552.63 482.66 551.18 487.74 548.77 491.66C546.68 487.54 545.46 482.52 545.46 477.11C545.46 471.7 546.68 466.67 548.77 462.56C551.17 466.48 552.63 471.56 552.63 477.11Z"
                fill="black"
              />
              <path
                d="M320.08 477.11C320.08 482.66 318.63 487.74 316.22 491.66C314.13 487.54 312.91 482.52 312.91 477.11C312.91 471.7 314.13 466.67 316.22 462.56C318.62 466.48 320.08 471.56 320.08 477.11Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_2960_18">
                <rect width="869.13" height="875.08" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div
          onClick={() =>
            handleStakeChange({
              key: "tie",
              data,
              dataIndex: 0,
              runnerIndex: 2,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer false false false false false false false bg-gradient-to-t from-green to-green/80 col-span-2 ${
            isRunnerActive(data, 0, 2)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="tie"
        >
          <span className="absolute z-10 h-4 text-xs font-semibold text-white top-1 left-1">
            Tie
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.tie?.show && (
                <Stake stake={stakeState?.tie?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === "OPEN" &&
          data?.[0]?.runners?.[2]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white left-0.5">
              {data?.[0]?.runners?.[2]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
        </div>

        {/* Tiger */}
        <div
          onClick={() =>
            handleStakeChange({
              key: "tiger",
              data,
              dataIndex: 0,
              runnerIndex: 2,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer false false false false false false false bg-gradient-to-l from-orange to-orange/80 col-span-3 row-span-2 h-[130px] ${
            isRunnerActive(data, 0, 2)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="tiger"
        >
          <span className="absolute z-10 h-4 text-xs font-semibold text-white top-1 left-1">
            Tiger
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.tiger?.show && (
                <Stake stake={stakeState?.tiger?.stake} />
              )}
            </div>
          </div>
          {data?.[0]?.status === "OPEN" &&
          data?.[0]?.runners?.[2]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white left-0.5">
              {data?.[0]?.runners?.[2]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-1 left-0.5" />
          )}
          <div className="absolute z-40 h-14 applyPerspective bottom-1 right-1">
            <div
              className={`h-full aspect-[5/7] ${
                card2 ? "flip-card" : "cardFadeInAnimation"
              }`}
              style={{ zIndex: 999 }}
            >
              <div className="h-full w-full transition-transform ease-in-out bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative flip-card-front">
                <img src={`/cards/${card2}.jpg`} alt="" />
              </div>
              <div
                className={`transition-transform ease-in-out h-full w-full bg-gradient-to-l from-slate-50 to-slate-300 rounded-sm relative  overflow-hidden flip-card-back`}
              >
                <CardBack />
              </div>
            </div>
          </div>
          <svg
            className="absolute w-full h-full p-2 left-0 opacity-50"
            width={831}
            height={876}
            viewBox="0 0 831 876"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M530.39 427.33C517.82 418.45 510.18 399.45 522.65 399.4C540.19 399.33 557.66 398.43 576.69 395.41C601.38 391.49 625.7 379.05 637.64 369.5C625.89 396.94 610.43 410.75 593.71 423.89C576.99 437.03 555.42 445.01 530.39 427.34V427.33Z"
              fill="#090909"
            />
            <path
              d="M309.59 434.47C322.16 425.59 329.8 406.59 317.33 406.54C299.79 406.47 282.32 405.57 263.29 402.55C238.6 398.63 214.28 386.19 202.34 376.64C214.09 404.08 229.55 417.89 246.27 431.03C262.99 444.17 284.56 452.15 309.59 434.48V434.47Z"
              fill="#090909"
            />
            <path
              d="M641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM453.42 526.05C443.77 524.89 433.45 524.35 422.92 524.2L423.15 529.84C419.57 530.43 416.2 531.72 413.01 533.6L413.63 524.18C398.03 524.26 382.34 525.05 368.08 525.9C347.03 522.07 325.41 514.63 325.85 500.29C325.03 511.02 328.48 520.59 336.66 528.42C345.98 537.32 354.83 535.27 364.27 540C372.27 544.01 377.27 550.6 381.36 557.83C381.41 557.86 381.44 557.91 381.49 557.93C381.75 558.14 382 558.34 382.24 558.57C384.63 562.28 387.44 565.88 390.58 568.99C392.61 571.02 394.83 572.88 397.17 574.42C406.67 580.8 418.56 582.68 432.38 574.45C432.95 574.12 433.51 573.76 434.05 573.37C436.47 571.72 438.63 569.77 440.59 567.63C444.42 563.44 447.54 558.49 450.58 553.48C450.91 553.22 451.3 552.99 451.69 552.79C451.84 552.71 451.97 552.64 452.13 552.61C455.76 546.92 460.34 541.93 466.85 538.64C476.29 533.9 485.17 535.96 494.49 527.06C502.67 519.24 506.1 509.66 505.27 498.93C505.78 515.48 476.88 522.86 453.44 526.05H453.42ZM709.15 161.23C740.93 153.95 745.64 129.09 757.4 104.33C734.24 122.63 707.65 132.84 678.68 137.63C675.93 135.73 673.25 133.92 670.57 132.15C681.12 73.99 780.69 55.25 780.69 55.25C826.34 122.52 756.6 201.96 756.6 201.96L778.37 217.58C897.39 94.95 773.92 -0.0100098 773.92 -0.0100098L645.86 66.72C645.81 66.49 645.71 66.28 645.47 66.1C640.4 62.5 497.13 15.61 444.43 18L414.58 38.79L386.68 19.36C333.97 16.97 190.68 63.86 185.64 67.46C185.38 67.64 185.28 67.85 185.25 68.08L57.21 1.33999C57.21 1.33999 -66.27 96.33 52.76 218.95L74.53 203.33C74.53 203.33 4.79 123.89 50.44 56.62C50.44 56.62 150.01 75.35 160.56 133.52C157.88 135.27 155.18 137.1 152.45 139C123.47 134.21 96.89 124 73.73 105.7C85.47 130.46 90.2 155.32 121.98 162.6C87.5 191.89 49.41 233.14 9.24 291.09L41.51 295.9C41.51 295.9 -5.02 416.13 46.22 497.87L74.53 464.21C74.53 464.21 55.05 518.3 209.38 650.56C209.38 650.56 201.53 567.62 250.17 574.82L278.56 650.56L272.13 664.48C269.79 667.18 266.83 669.63 262.99 671.74C251.87 677.89 236.77 676.99 226.76 671.56C225.45 717.01 221.56 783.82 267.7 815.86C265.02 808.47 265.28 799.16 269.24 792.39C287.56 848.47 353.29 876.36 414.38 875.05C446.81 874.38 495.73 864.01 520.18 843.78C534.67 831.76 540.28 812.69 548.75 796.94C554.93 803.19 550.42 814.93 548.13 822.26C580.89 802.16 594.66 772.44 598.54 737.88C600.91 716.57 606.75 688.11 598.08 667.39C598.65 677.76 584.11 678.82 575.41 676.24C569.05 674.39 563.86 670.01 559.81 664.84L552.58 649.19L580.94 573.45C629.6 566.24 621.76 649.19 621.76 649.19C776.09 516.96 756.61 462.84 756.61 462.84L784.92 496.5C836.13 414.77 789.63 294.53 789.63 294.53L821.88 289.72C781.73 231.77 743.65 190.51 709.16 161.23H709.15ZM285.32 54.25L266.4 84.31C320.37 54.05 394.69 83.56 413.35 91.88V92.57C413.35 92.57 413.63 92.42 414.1 92.21C416.47 93.27 417.78 93.93 417.78 93.93V90.51C436.44 82.2 510.76 52.68 564.73 82.94L545.81 52.88L607.86 86.54L593.06 96.34C557.37 87.15 536.34 92.56 536.34 92.56C479.95 97.3 431.55 120.04 413.58 129.44C386.4 116.47 340.52 97.76 294.76 93.93C294.76 93.93 273.76 88.53 238.07 97.71L223.27 87.91L285.32 54.25ZM545.06 751.15C536 780.28 515.77 793.23 491.79 811.16C491.3 800.15 492.12 786.79 486.95 776.57C477.76 796.75 473.23 816 449.74 827.81C431.42 837.05 408.44 836.69 387.72 834.86C360.44 832.44 329.51 820.04 310.82 801.97C301.25 792.71 292.27 782.26 285.75 771.17C281.79 764.43 278.57 749.35 271.18 746.77C268.37 752.71 267.55 759.35 267.11 765.76C254.86 749.03 249.33 710.22 257.85 690.77C266.39 691.57 272.36 699.13 282.12 697.69C283.54 692.11 284.87 687.04 285.75 681.68C296.61 692.39 296.4 715.29 308.91 729.73C325.69 749.11 332.1 754.26 359.09 754.74C388.3 755.25 419.93 754.15 463.73 754.74C506.71 755.33 529.2 707.54 537.59 685.33C548.45 692.43 548.22 740.99 545.05 751.13L545.06 751.15ZM323.31 644.58C342.66 701.38 373.62 700.5 414.36 701.79C455.46 703.1 474.99 695.07 501.32 644.58C501.24 676.7 505.72 717.62 449.16 722.33C342.41 731.23 340.64 708.41 331.89 696.8C325.51 688.36 312.59 653.02 323.32 644.58H323.31ZM769.39 422.08C755.21 418.76 724.41 403.94 714.88 393.49C717.07 449.77 689.25 504.2 656.72 552.04C653.97 549.85 649.87 545.5 644.88 540.07C650.44 522.96 642.77 498.25 650.49 481.34C659.21 462.22 679.34 453.29 691.61 437.2C721.02 398.62 689.94 348.29 693.87 306.11C690.83 326.11 706.58 398.29 673.44 436.07C659.75 451.69 636.72 457.35 627.22 475.14C619.45 489.65 616.87 501.52 618.21 512.2C612.03 506.36 605.7 501.03 599.55 497.09C599.58 496.58 599.6 496.01 599.63 495.44C601.23 466.23 606.12 454.29 628.5 434.81C656.89 410.1 667.05 396.21 666.51 360.2C666.12 335.01 664.19 296.69 654.36 278.65C654.28 325.08 662.54 382.82 617.84 414.3C599.23 427.4 574.25 429.38 565.98 452.03C560.63 466.78 559.86 497.12 559.93 517.19V517.24C556.35 524.81 552.44 531.96 548.04 535.43C527.94 551.26 512.14 552.23 487.46 552.65C490.29 584.92 489.42 608.11 465.82 644.83C470.04 629.23 472.72 596.83 466.28 580.96C462.39 586.21 457.53 590.76 450.68 593.72C436.71 599.74 421.08 599.28 413.34 589.27C400.45 599.46 377.7 597.61 365.55 585.28C364.88 584.59 364.26 583.89 363.67 583.2C355.38 599.62 351.75 631.84 356.18 644.58C334.61 615.81 328.13 576.18 342.8 555.07C343.06 554.71 343.31 554.35 343.57 554.01C342.59 553.98 341.64 553.98 340.69 553.96C317.66 553.5 302.32 552 282.99 536.79C278.59 533.29 274.68 526.19 271.07 518.62C271.1 518.59 271.07 518.57 271.07 518.57C271.17 498.47 270.43 468.13 265.05 453.38C256.81 430.73 231.83 428.75 213.19 415.65C168.51 384.18 176.75 326.43 176.7 280C166.87 298.01 164.94 336.36 164.55 361.55C163.98 397.55 174.15 411.45 202.56 436.16C224.92 455.62 229.81 467.58 231.43 496.79C231.46 497.36 231.48 497.9 231.51 498.41V498.44C225.36 502.38 219 507.7 212.8 513.55C214.16 502.87 211.62 491.01 203.84 476.49C194.32 458.71 171.29 453.05 157.59 437.42C124.47 399.62 140.19 327.45 137.16 307.46C141.1 349.64 110.04 399.98 139.45 438.55C151.73 454.63 171.82 463.56 180.55 482.69C188.27 499.6 180.6 524.3 186.16 541.42C181.17 546.85 177.08 551.2 174.32 553.39C141.79 505.55 113.97 451.12 116.16 394.84C106.66 405.29 75.83 420.11 61.68 423.43C51.18 368.36 101.26 313.77 136.85 275.61C107.41 266.71 77.71 268.22 97.14 233.07C107.51 214.33 136.72 198.77 156.92 191.15C204.86 173.06 249.82 179.75 300.47 180.47C279.78 169.56 268.46 150.59 244.37 142.25C282.48 143.07 370.39 150.51 405.57 182.83C405.78 184.86 405.98 186.77 405.85 188.13C391.62 180.87 362.07 170.09 346.48 174.7C372.65 181.08 399.24 201.36 409.09 223.39C412.1 219.99 413 212.89 420.44 203.65C426.41 196.24 433.13 190.86 442.55 187.31C451.63 183.86 469.49 175.57 478.99 176.3C467.74 171.59 446.38 170.12 432.23 175.97C470.88 148.3 550.79 141.67 586.61 140.89C562.55 149.25 551.2 168.19 530.53 179.11C581.15 178.39 626.14 171.7 674.05 189.79C694.28 197.41 723.49 212.98 733.83 231.71C753.26 266.86 723.59 265.35 694.15 274.25C729.72 312.41 779.82 367.02 769.32 422.07L769.39 422.08ZM530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15C613.69 276.87 592.46 277.39 569.22 289.97C552.44 299.03 541.3 312.31 530.69 325.74L530.7 325.75ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM597.18 301.74C609.92 317.95 599.44 341.86 581.82 351.69C562.49 362.45 537.22 359.93 516.3 368.65C518.02 356.48 538.43 337.64 548.49 331.54C557.99 325.78 567.51 320.91 576.18 314.27C583.18 308.89 588.58 300.09 597.18 301.74ZM453.42 526.05C443.77 524.89 433.45 524.35 422.92 524.2L423.15 529.84C419.57 530.43 416.2 531.72 413.01 533.6L413.63 524.18C398.03 524.26 382.34 525.05 368.08 525.9C347.03 522.07 325.41 514.63 325.85 500.29C325.03 511.02 328.48 520.59 336.66 528.42C345.98 537.32 354.83 535.27 364.27 540C372.27 544.01 377.27 550.6 381.36 557.83C381.41 557.86 381.44 557.91 381.49 557.93C381.75 558.14 382 558.34 382.24 558.57C384.63 562.28 387.44 565.88 390.58 568.99C392.61 571.02 394.83 572.88 397.17 574.42C406.67 580.8 418.56 582.68 432.38 574.45C432.95 574.12 433.51 573.76 434.05 573.37C436.47 571.72 438.63 569.77 440.59 567.63C444.42 563.44 447.54 558.49 450.58 553.48C450.91 553.22 451.3 552.99 451.69 552.79C451.84 552.71 451.97 552.64 452.13 552.61C455.76 546.92 460.34 541.93 466.85 538.64C476.29 533.9 485.17 535.96 494.49 527.06C502.67 519.24 506.1 509.66 505.27 498.93C505.78 515.48 476.88 522.86 453.44 526.05H453.42ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM505.25 498.92C505.76 515.47 476.86 522.85 453.42 526.04C443.77 524.88 433.45 524.34 422.92 524.19L423.15 529.83C419.57 530.42 416.2 531.71 413.01 533.59L413.63 524.17C398.03 524.25 382.34 525.04 368.08 525.89C347.03 522.06 325.41 514.62 325.85 500.28C325.03 511.01 328.48 520.58 336.66 528.41C345.98 537.31 354.83 535.26 364.27 539.99C372.27 544 377.27 550.59 381.36 557.82C381.41 557.85 381.44 557.9 381.49 557.92C381.75 558.13 382 558.33 382.24 558.56C384.63 562.27 387.44 565.87 390.58 568.98C392.61 571.01 394.83 572.87 397.17 574.41C406.67 580.79 418.56 582.67 432.38 574.44C432.95 574.11 433.51 573.75 434.05 573.36C436.47 571.71 438.63 569.76 440.59 567.62C444.42 563.43 447.54 558.48 450.58 553.47C450.91 553.21 451.3 552.98 451.69 552.78C451.84 552.7 451.97 552.63 452.13 552.6C455.76 546.91 460.34 541.92 466.85 538.63C476.29 533.89 485.17 535.95 494.49 527.05C502.67 519.23 506.1 509.65 505.27 498.92H505.25ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69ZM641.29 276.16C613.7 276.88 592.47 277.4 569.23 289.98C552.45 299.04 541.31 312.32 530.7 325.75C535.2 294.74 521.92 246.49 487.47 232.51C494.47 228.42 501.91 225.59 509.68 224.61C545.86 220.06 596.12 216.5 623.74 193.06C577.37 200.68 517.76 187.71 478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C308.36 250.91 296.06 297.1 300.41 327.11C289.83 313.68 278.66 300.4 261.91 291.31C238.67 278.75 217.44 278.24 189.85 277.52C234.94 299.01 176.73 356.04 240.62 378.53C279.12 392.07 320.73 369.99 338.62 408.77C342.66 442.74 310.67 482.94 349.4 510.14C347.78 483.17 360 472.75 365.36 448.2C371.67 419.38 362.45 392.9 348.94 368.34C327.32 328.97 319.86 274.3 345.05 238.22C362.63 249.9 377.45 265.86 388.41 282.77C391.11 289.87 394.64 297.08 396.75 302.02C402.64 315.92 409.72 329.32 416.26 343.04C419.97 333 422.57 322.37 423.77 311.59C428.32 303.38 451.46 255.72 484.3 234.46C511.58 270.46 504.3 326.72 482.16 366.97C468.67 391.52 459.46 418.03 465.77 446.83C471.12 471.38 483.32 481.8 481.73 508.77C520.46 481.57 488.45 441.37 492.51 407.4C510.4 368.62 552.01 390.7 590.51 377.16C654.41 354.67 596.2 297.64 641.28 276.15L641.29 276.16ZM249.32 353.06C231.67 343.23 221.22 319.32 233.96 303.11C242.56 301.46 247.96 310.26 254.96 315.64C263.63 322.28 273.15 327.14 282.65 332.91C292.71 339.01 313.12 357.85 314.84 370.02C293.92 361.27 268.65 363.82 249.32 353.06ZM581.81 351.69C562.48 362.45 537.21 359.93 516.29 368.65C518.01 356.48 538.42 337.64 548.48 331.54C557.98 325.78 567.5 320.91 576.17 314.27C583.17 308.89 588.57 300.09 597.17 301.74C609.91 317.95 599.43 341.86 581.81 351.69Z"
              fill="#010101"
            />
            <path
              d="M397.96 568.66C397.93 569.48 397.86 570.26 397.78 571.03C397.63 572.24 397.42 573.37 397.16 574.43C394.82 572.89 392.6 571.03 390.57 569C387.43 565.89 384.63 562.28 382.23 558.58C382 558.35 381.74 558.14 381.48 557.94C381.43 557.91 381.4 557.86 381.35 557.84C377.26 550.61 372.27 544.02 364.26 540.01C354.82 535.27 345.96 537.33 336.65 528.43C328.47 520.61 325.02 511.03 325.84 500.3C325.4 514.63 347.02 522.07 368.07 525.91C379.08 527.89 389.92 528.9 397.36 529.38C393.91 538.13 398.65 556.02 397.95 568.68L397.96 568.66Z"
              fill="#010101"
            />
            <path
              d="M494.47 527.05C485.15 535.95 476.28 533.9 466.83 538.63C460.32 541.92 455.74 546.92 452.11 552.6C451.96 552.63 451.83 552.7 451.67 552.78C451.28 552.99 450.9 553.22 450.56 553.47C447.52 558.49 444.41 563.43 440.57 567.62C438.61 569.76 436.45 571.71 434.03 573.36C433.98 573.13 433.93 572.9 433.88 572.67C433.62 571.67 433.44 570.59 433.31 569.45C431.89 556.74 437.38 537.26 433.75 527.99C439 527.66 445.92 527.06 453.41 526.03C476.85 522.84 505.75 515.45 505.24 498.91C506.06 509.64 502.64 519.21 494.46 527.04L494.47 527.05Z"
              fill="#010101"
            />
            <path
              d="M343.61 554.02C343.35 554.35 343.1 554.71 342.84 555.08C342.17 554.67 341.48 554.31 340.73 553.97C341.68 554 342.63 554 343.61 554.02Z"
              fill="#010101"
            />
            <path
              d="M450.56 553.48C447.52 558.5 444.41 563.44 440.57 567.63C438.61 569.77 436.45 571.72 434.03 573.37C433.49 573.76 432.92 574.12 432.36 574.45C418.54 582.69 406.65 580.81 397.15 574.42C394.81 572.88 392.59 571.02 390.56 568.99C387.42 565.88 384.62 562.27 382.22 558.57C386.52 562.15 390.25 565.65 394.47 568.76C395.53 569.53 396.63 570.3 397.76 571.02C401.18 573.21 405.04 575.11 409.78 576.66C418.74 576.92 427.51 575.55 433.84 572.67H433.87C436.47 571.49 438.5 569.68 440.18 567.6C444.22 562.71 446.48 556.41 450.55 553.47L450.56 553.48Z"
              fill="#010101"
            />
            <path
              d="M479.05 176.31C469.55 175.59 451.69 183.88 442.61 187.32C433.19 190.87 426.47 196.25 420.5 203.66C413.06 212.9 412.16 220 409.15 223.4C399.29 201.37 372.71 181.09 346.54 174.71C362.14 170.1 391.68 180.89 405.91 188.14C406.04 186.78 405.83 184.87 405.63 182.84C405.32 179.29 404.96 175.4 406.2 173.4C409.57 168.02 426.07 163.8 432.37 160.33C431.13 166.69 427.02 175.51 423.44 181.66C425.78 179.29 428.82 177.41 432.29 175.97C446.44 170.13 467.8 171.6 479.05 176.3V176.31Z"
              fill="#010101"
            />
            <path
              d="M478 214.14C491.54 212.6 490.61 215.5 487.37 217.46C474.91 219.42 465.16 226.49 452.83 229.45C453.42 219.62 456.66 209.45 463.59 202.07C452.76 209.38 440.79 215.68 430.96 224.25C424.58 229.83 415.96 237.94 409.6 246.72C400.54 231.28 387.85 216.87 373.98 211.77C381.03 217.05 385.77 224.95 388.75 232.13C370.94 232 359.52 221.27 343.77 218.82C340.53 216.86 339.6 213.96 353.14 215.5C313.38 189.07 253.78 202.04 207.4 194.42C235.01 217.84 287.85 213.15 321.46 225.97C328.07 228.49 334.4 231.63 340.45 235.31C341.99 236.24 343.54 237.19 345.06 238.22C362.64 249.9 377.46 265.86 388.42 282.77C391.12 289.87 394.65 297.08 396.76 302.02C402.65 315.92 409.73 329.32 416.27 343.04C419.98 333 422.58 322.37 423.78 311.59C428.33 303.38 451.47 255.72 484.31 234.46C485.34 233.79 486.39 233.12 487.48 232.5C494.48 228.41 501.92 225.58 509.69 224.6C545.87 220.05 596.13 216.49 623.75 193.05C577.38 200.67 517.77 187.7 478.01 214.13L478 214.14Z"
              fill="#010101"
            />
            <path
              d="M470.9 529.03C461.48 534.85 456.1 544.32 450.57 553.48C447.53 558.5 444.42 563.44 440.58 567.63C438.62 569.77 436.46 571.72 434.04 573.37C433.5 573.76 432.93 574.12 432.37 574.45C418.55 582.69 406.66 580.81 397.16 574.42C394.82 572.88 392.6 571.02 390.57 568.99C387.43 565.88 384.63 562.27 382.23 558.57C380.53 555.87 379.01 553.11 377.73 550.41C378.17 550.18 363.81 531.62 356.22 526.61C360.03 526.38 363.99 526.12 368.08 525.89C382.34 525.04 398.04 524.24 413.63 524.17C416.74 524.12 419.83 524.14 422.92 524.2C433.45 524.35 443.77 524.89 453.42 526.05C459.57 526.77 465.44 527.75 470.89 529.04L470.9 529.03Z"
              fill="#010101"
            />
            <path
              d="M267.68 339.59C267.68 346.82 265.79 353.45 262.66 358.55C259.94 353.19 258.34 346.65 258.34 339.59C258.34 332.53 259.94 325.99 262.66 320.63C265.79 325.74 267.68 332.36 267.68 339.59Z"
              fill="#010101"
            />
            <path
              d="M568.89 339.59C568.89 346.82 567 353.45 563.87 358.55C561.15 353.19 559.55 346.65 559.55 339.59C559.55 332.53 561.15 325.99 563.87 320.63C567 325.74 568.89 332.36 568.89 339.59Z"
              fill="#010101"
            />
          </svg>
        </div>

        <div
          onClick={() =>
            handleStakeChange({
              key: "suitedTie",
              data,
              dataIndex: 1,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer false false false false false false false bg-gradient-to-b from-blue to-blue/80 col-span-2 ${
            isRunnerActive(data, 1, 0)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="suitedTie"
        >
          <span className="absolute z-10 h-4 text-xs font-semibold text-white top-1 left-1">
            SuitedTie
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.suitedTie?.show && (
                <Stake stake={stakeState?.suitedTie?.stake} />
              )}
            </div>
          </div>
          {data?.[1]?.status === "OPEN" &&
          data?.[1]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white right-0.5">
              {data?.[1]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="right-0.5 bottom-1" />
          )}
        </div>

        <div
          onClick={() =>
            handleStakeChange({
              key: "dragonRed",
              data,
              dataIndex: 4,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer false col-span-2  false false false false false bg-gradient-to-l from-red to-red/70 ${
            isRunnerActive(data, 4, 0)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="dragonRed"
        >
          <span className="absolute flex w-8 h-5 p-1 text-xs rounded top-1 bg-black/20 left-1">
            <svg
              width={198}
              height={260}
              viewBox="0 0 198 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                fill="#DD181F"
              />
            </svg>
            <svg
              width={220}
              height={194}
              viewBox="0 0 220 194"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                id="Vector"
                d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                fill="#DD181F"
              />
            </svg>
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.dragonRed?.show && (
                <Stake stake={stakeState?.dragonRed?.stake} />
              )}
            </div>
          </div>
          {data?.[4]?.status === "OPEN" &&
          data?.[4]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white right-0.5">
              {data?.[4]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="right-0.5 bottom-1" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "dragonBlack",
              data,
              dataIndex: 4,
              runnerIndex: 1,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer false col-span-2  false false false false false bg-gradient-to-l from-red to-red/70 ${
            isRunnerActive(data, 4, 1)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="dragonBlack"
        >
          <span className="absolute flex w-8 h-5 p-1 text-xs rounded top-1 bg-black/20 left-1">
            <svg
              width={209}
              height={211}
              viewBox="0 0 209 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                id="Vector"
                d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                fill="black"
              />
            </svg>
            <svg
              width={209}
              height={235}
              viewBox="0 0 209 235"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                id="Vector"
                d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                fill="black"
              />
            </svg>
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.dragonBlack?.show && (
                <Stake stake={stakeState?.dragonBlack?.stake} />
              )}
            </div>
          </div>
          {data?.[4]?.status === "OPEN" &&
          data?.[4]?.runners?.[1]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white right-0.5">
              {data?.[4]?.runners?.[1]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="right-0.5 bottom-1" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "tigerRed",
              data,
              dataIndex: 5,
              runnerIndex: 0,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer false col-span-2  false false false false false bg-gradient-to-l from-orange to-orange/70 ${
            isRunnerActive(data, 5, 0)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="tigerRed"
        >
          <span className="absolute flex w-8 h-5 p-1 text-xs rounded top-1 bg-black/20 left-1">
            <svg
              width={198}
              height={260}
              viewBox="0 0 198 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                fill="#DD181F"
              />
            </svg>
            <svg
              width={220}
              height={194}
              viewBox="0 0 220 194"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                id="Vector"
                d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                fill="#DD181F"
              />
            </svg>
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.tigerRed?.show && (
                <Stake stake={stakeState?.tigerRed?.stake} />
              )}
            </div>
          </div>
          {data?.[5]?.status === "OPEN" &&
          data?.[5]?.runners?.[0]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white right-0.5">
              {data?.[5]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="right-0.5 bottom-1" />
          )}
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "tigerBlack",
              data,
              dataIndex: 5,
              runnerIndex: 1,
              type: "back",
            })
          }
          className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer false col-span-2  false false false false false bg-gradient-to-l from-orange to-orange/70 ${
            isRunnerActive(data, 5, 1)
              ? "cursor-pointer"
              : " cursor-not-allowed pointer-events-none"
          }`}
          id="tigerBlack"
        >
          <span className="absolute flex w-8 h-5 p-1 text-xs rounded top-1 bg-black/20 left-1">
            <svg
              width={209}
              height={211}
              viewBox="0 0 209 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                id="Vector"
                d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                fill="black"
              />
            </svg>
            <svg
              width={209}
              height={235}
              viewBox="0 0 209 235"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                id="Vector"
                d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                fill="black"
              />
            </svg>
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10">
              {stakeState?.tigerBlack?.show && (
                <Stake stake={stakeState?.tigerBlack?.stake} />
              )}
            </div>
          </div>
          {data?.[5]?.status === "OPEN" &&
          data?.[5]?.runners?.[1]?.status === "ACTIVE" ? (
            <span className="absolute bottom-1 text-[10px] text-white right-0.5">
              {data?.[5]?.runners?.[1]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="right-0.5 bottom-1" />
          )}
        </div>
        {data?.[6]?.runners?.slice(0, 4)?.map((runner, i) => {
          return (
            <div
              onClick={() =>
                handleStakeChange({
                  key: `dragon${runner?.name}`,
                  data,
                  dataIndex: 6,
                  runnerIndex: i,
                  type: "back",
                })
              }
              key={runner?.id}
              className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer false false col-span-1 h-10   false false rounded-bl-md false bg-gradient-to-l from-red to-red/70 ${
                isRunnerActive(data, 6, i)
                  ? "cursor-pointer"
                  : " cursor-not-allowed pointer-events-none"
              }`}
              id="dragonDiamond"
            >
              <span className="absolute w-4 h-5 p-1 rounded top-1 bg-black/20 left-1">
                <svg
                  width={198}
                  height={260}
                  viewBox="0 0 198 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                    fill="#DD181F"
                  />
                </svg>
              </span>
              <div className="z-50">
                <div className="relative w-10 h-10">
                  {stakeState?.[`dragon${runner?.name}`]?.show && (
                    <Stake
                      stake={stakeState?.[`dragon${runner?.name}`]?.stake}
                    />
                  )}
                </div>
              </div>
              {data?.[6]?.status === "OPEN" && runner?.status === "ACTIVE" ? (
                <span className="absolute bottom-1 text-[10px] text-white right-0.5">
                  {runner?.back?.[0]?.price}
                </span>
              ) : (
                <Lock position="right-0.5 bottom-1" />
              )}
            </div>
          );
        })}
        {data?.[7]?.runners?.slice(0, 4)?.map((runner, i) => {
          return (
            <div
              onClick={() =>
                handleStakeChange({
                  key: `tiger${runner?.name}`,
                  data,
                  dataIndex: 7,
                  runnerIndex: i,
                  type: "back",
                })
              }
              key={runner?.id}
              className={`relative overflow-clip h-16 flex flex-col items-center justify-center cursor-pointer false false col-span-1 h-10   false false false false bg-gradient-to-l from-orange to-orange/70 ${
                isRunnerActive(data, 7, i)
                  ? "cursor-pointer"
                  : " cursor-not-allowed pointer-events-none"
              }`}
              id="tigerDiamond"
            >
              <span className="absolute w-4 h-5 p-1 rounded top-1 bg-black/20 left-1">
                <svg
                  width={198}
                  height={260}
                  viewBox="0 0 198 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                    fill="#DD181F"
                  />
                </svg>
              </span>
              <div className="z-50">
                <div className="relative w-10 h-10">
                  {stakeState?.[`tiger${runner?.name}`]?.show && (
                    <Stake
                      stake={stakeState?.[`tiger${runner?.name}`]?.stake}
                    />
                  )}
                </div>
              </div>
              {data?.[7]?.status === "OPEN" && runner?.status === "ACTIVE" ? (
                <span className="absolute bottom-1 text-[10px] text-white right-0.5">
                  {runner?.back?.[0]?.price}
                </span>
              ) : (
                <Lock position="right-0.5 bottom-1" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BetSlip;
