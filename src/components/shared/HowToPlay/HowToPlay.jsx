import { useState } from "react";
import { playClickSound } from "../../../utils/playClickSound";

const HowToPlay = ({ setShowHowToPlay, setShowSetting }) => {
  const [accordion, setAccordion] = useState(null);
  const accordionTab = {
    gameDescription: "gameDescription",
    howToPlay: "howToPlay",
    main: "main",
    color: "color",
    oddEven: "oddEven",
    suit: "suit",
  };

  const handleToggleAccordion = (ad) => {
    playClickSound();
    if (ad === accordion) {
      setAccordion(null);
    } else {
      setAccordion(ad);
    }
  };
  return (
    <div
      className="scale-y-100 h-[70%] fixed origin-bottom flex   flex-col items-center   bottom-0   w-full  max-w-md  transition-all ease-in-out "
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col flex-grow w-full bg-black/60 backdrop-blur-md rounded-t-xl z-50">
        <div className="flex flex-col h-full overflow-y-scroll ">
          <div className="flex items-center justify-between px-4 pt-4">
            <span
              onClick={() => {
                setShowHowToPlay(false);
                setShowSetting(true);
                playClickSound();
              }}
              className="flex items-center gap-1 text-white cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-6 h-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </span>
            <button
              onClick={() => {
                setShowHowToPlay(false);
                setShowSetting(false);
                playClickSound();
              }}
              className="font-semibold "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-6 h-6 text-slate-100"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="relative flex-grow w-full overflow-hidden">
            <div className="absolute p-4 animate__animated animate__faster overflow-y-auto h-full w-full  top-0 right-0 transition-transform delay-100 ease-in-out  animate__bounceInRight">
              <div className="flex flex-col h-full gap-2 py-1 overflow-y-auto scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-white markdown-preview">
                <div data-accordion-component="Accordion" className="accordion">
                  <div className="flex flex-col gap-2 text-white p-2 mb-1 border-2 border-white/10 rounded-lg   ">
                    <div className="font-medium">RTP 96.00%</div>
                  </div>
                  <div className="flex flex-col gap-2 text-white p-2 border-2 border-white/10 rounded-lg   ">
                    <div className="font-medium">Game version 1.0.0</div>
                  </div>
                  <div
                    data-accordion-component="AccordionItem"
                    className="my-1 text-white border-none"
                  >
                    <div
                      onClick={() =>
                        handleToggleAccordion(accordionTab.gameDescription)
                      }
                      data-accordion-component="AccordionItemHeading"
                      className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                      role="heading"
                      aria-level={3}
                    >
                      <div
                        className="text-base font-medium  tracking-wider bg-transparent flex items-center justify-between"
                        id="accordion__heading-:r0:"
                        aria-disabled="true"
                        aria-expanded="true"
                        aria-controls="accordion__panel-:r0:"
                        role="button"
                        tabIndex={0}
                        data-accordion-component="AccordionItemButton"
                      >
                        Game Description
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          className={`w-5 h-5 ${
                            accordion === accordionTab.gameDescription
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      data-accordion-component="AccordionItemPanel"
                      className={`p-2  ${
                        accordion === accordionTab.gameDescription
                          ? "block"
                          : "hidden"
                      }`}
                      id="accordion__panel-:r0:"
                    >
                      <div className="markdown-preview">
                        <p className="mb-4">
                          Predict whether the next card dealt will be above 7 (7
                          Up), below 7 (7 Down), or 7.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-accordion-component="AccordionItem"
                    className="my-1 text-white border-none"
                  >
                    <div
                      onClick={() =>
                        handleToggleAccordion(accordionTab.howToPlay)
                      }
                      data-accordion-component="AccordionItemHeading"
                      className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                      role="heading"
                      aria-level={3}
                    >
                      <div
                        className="text-base font-medium  tracking-wider bg-transparent flex items-center justify-between"
                        id="accordion__heading-:r1:"
                        aria-disabled="false"
                        aria-expanded="false"
                        aria-controls="accordion__panel-:r1:"
                        role="button"
                        tabIndex={0}
                        data-accordion-component="AccordionItemButton"
                      >
                        How to Play
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          className={`w-5 h-5 ${
                            accordion === accordionTab.howToPlay
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      data-accordion-component="AccordionItemPanel"
                      className={`p-2  ${
                        accordion === accordionTab.howToPlay
                          ? "block"
                          : "hidden"
                      }`}
                      id="accordion__panel-:r1:"
                      hidden
                    >
                      <div className="markdown-preview">
                        <p className="mb-4">
                          To begin a game round after the timer reaches 0, the
                          Dealer deals the card for this round, only one card is
                          dealt per round. Once the card is drawn this is the
                          resulting state and the round ends.
                          <br />
                          <br />
                          Players that bet on the winning side will win the bet
                          based on the payout table below (betting on the other
                          side will result in losing the bet). The game is
                          played with eight decks of cards that are shuffled and
                          placed in a shoe, once the cutting card comes out of
                          the shoe shuffling procedure will start.
                          <br />
                          <br />
                          <strong className="font-bold">Card Ranking</strong>
                          <br />
                          <br />
                          The ranking of cards is, from lowest to highest: Ace,
                          2,3,4,5,6,7,8,9,10, Jack, Queen, King where Ace is 1
                          and King is 13.
                          <br />
                          <br />
                          <strong className="font-bold">
                            Betting Instructions
                          </strong>
                        </p>
                        <ul className="contains-task-list">
                          <li className="task-list-item">
                            <input disabled type="checkbox" /> If a game round
                            is in progress when you enter the game, please wait
                            for the next one, and then, place your bets.
                          </li>
                          <li className="task-list-item">
                            <input disabled type="checkbox" /> After the timer
                            reaches 0, the game round begins.
                          </li>
                          <li className="task-list-item">
                            <input disabled type="checkbox" /> To place a bet,
                            click on the box, enter the stake amount and submit
                            by clicking on Place Bet button.
                          </li>
                          <li className="task-list-item">
                            <input disabled type="checkbox" /> You can place
                            several bets on different runners in different
                            markets simultaneously.
                          </li>
                          <li className="task-list-item">
                            <input disabled type="checkbox" /> The timer shows
                            how much time you have left to place your bets.
                          </li>
                          <li className="task-list-item">
                            <input disabled type="checkbox" /> Winnings are paid
                            for the winning bets at the end of each game round.
                          </li>
                          <li className="task-list-item">
                            <input disabled type="checkbox" /> To skip a turn,
                            simply do not place any bets.
                            <br />
                            <br />
                            <strong className="font-bold">Main Bets</strong>
                            <br />
                            <br />7 Up Down have several betting possibilities:
                          </li>
                          <li className="task-list-item">
                            <input disabled type="checkbox" /> Number
                          </li>
                          <li className="task-list-item">
                            <input disabled type="checkbox" /> 7
                          </li>
                          <li className="task-list-item">
                            <input disabled type="checkbox" /> 7 DOWN
                            <br />
                            <br />
                            <strong className="font-bold">Side Bets</strong>
                            <br />
                            <br />
                            Placing a bet on the side bet does not require
                            placing a bet on main bet (but can be done in
                            addition to the main bet).
                            <br />
                            <br />
                            Red or Black - Predict if the card dealt in the
                            round will be Red or Black.
                            <br />
                            <br />
                            Odd or Even - Predict if the card dealt in the round
                            will be Odd or Even.
                            <br />
                            <br />
                            Club/Diamond/Heart/Spade - Predict the card dealt in
                            the round will be of which suit.
                          </li>
                        </ul>
                        <p className="mb-4">
                          <strong className="font-bold">
                            Auto Play Rules:
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 mb-4">
                          <li className="mb-1">
                            Auto play starts when the user clicks the Start
                            button.
                          </li>
                          <li className="mb-1">
                            Auto bet will start only if the user has placed at
                            least one manual bet.
                          </li>
                          <li className="mb-1">
                            The same bet will be repeated in every round during
                            auto play.
                          </li>
                          <li className="mb-1">
                            The user can choose the number of auto-play rounds:
                            5, 10, or Infinity.
                          </li>
                          <li className="mb-1">
                            Auto play will stop automatically after completing 5
                            or 10 rounds.
                          </li>
                          <li className="mb-1">
                            If set to Infinity, auto play will continue until
                            manually stopped or a stop condition is met.
                          </li>
                          <li className="mb-1">
                            Balance must be sufficient to continue betting.
                          </li>
                          <li className="mb-1">
                            You can pause auto play anytime.
                          </li>
                        </ol>
                        <p className="mb-4">
                          <strong className="font-bold">
                            Please note that any malfunction voids the game
                            round and all eventual payouts for the round bets
                            will be returned.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-white p-2 border-2 border-white/10 rounded-lg mb-1">
                  <div className="font-medium flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      Maximum Win Limit
                      <span className="text-xs text-gray/70 font-normal italic">
                        (For each option)
                      </span>
                    </span>
                    <span>INR 599550</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <span>Minimum Bet Limit</span>
                      <span className="text-xs text-gray/70 font-normal italic">
                        (For each option)
                      </span>
                    </span>
                    <span>INR 100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <span>Maximum Bet Limit</span>
                      <span className="text-xs text-gray/70 font-normal italic">
                        (For each option)
                      </span>
                    </span>
                    <span>INR 200000</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2  text-white ">
                  <div className="text-lg font-semibold">Payouts</div>
                  <div
                    data-accordion-component="Accordion"
                    className="accordion"
                  >
                    <div
                      data-accordion-component="AccordionItem"
                      className="my-1 text-white border-none"
                    >
                      <div
                        onClick={() => handleToggleAccordion(accordionTab.main)}
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:r2:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:r2:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          main
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.main
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        data-accordion-component="AccordionItemPanel"
                        className={`p-2 ${
                          accordion === accordionTab.main ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:r2:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">7</span>
                            <span>x11.5</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">7 Up</span>
                            <span>x2</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">7 Down</span>
                            <span>x2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-accordion-component="AccordionItem"
                      className="my-1 text-white border-none"
                    >
                      <div
                        onClick={() =>
                          handleToggleAccordion(accordionTab.color)
                        }
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:r3:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:r3:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          color
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.color
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        data-accordion-component="AccordionItemPanel"
                        className={`p-2 ${
                          accordion === accordionTab.color ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:r3:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">color</span>
                            <span>x1.98</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-accordion-component="AccordionItem"
                      className="my-1 text-white border-none"
                    >
                      <div
                        onClick={() =>
                          handleToggleAccordion(accordionTab.oddEven)
                        }
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:r4:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:r4:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          oddeven
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.oddEven
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        data-accordion-component="AccordionItemPanel"
                        className={`p-2 ${
                          accordion === accordionTab.oddEven
                            ? "block"
                            : "hidden"
                        }`}
                        id="accordion__panel-:r4:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Odd</span>
                            <span>x1.8</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Even</span>
                            <span>x2.1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-accordion-component="AccordionItem"
                      className="my-1 text-white border-none"
                    >
                      <div
                        onClick={() => handleToggleAccordion(accordionTab.suit)}
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:r5:"
                          aria-disabled="false"
                          aria-expanded="true"
                          aria-controls="accordion__panel-:r5:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          SUIT
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.suit
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        data-accordion-component="AccordionItemPanel"
                        className={`p-2 ${
                          accordion === accordionTab.suit ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:r5:"
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">SUIT</span>
                            <span>x3.75</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute p-4 pb-0  animate__animated animate__faster overflow-y-auto h-full w-full  top-0 right-0 transition-transform delay-100 ease-in-out animate__bounceOutRight">
              <div className="flex flex-col h-full gap-3 pt-2 overflow-y-auto scrollbar-none ">
                <div className="flex text-sm items-center w-full gap-2 p-[2px] text-white">
                  <input
                    id="fromDate"
                    max="2025-05-10"
                    className="flex-grow p-2 rounded-lg bg-controls-idle [&::-webkit-calendar-picker-indicator]:invert"
                    type="date"
                    defaultValue="2025-05-09"
                  />
                  <span>to</span>
                  <input
                    id="toDate"
                    min="2025-05-09"
                    max="2025-05-10"
                    className="flex-grow p-2 border-none rounded-lg text-white bg-controls-idle [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-datetime-edit]:text-white [&::-webkit-datetime-edit-fields-wrapper]:text-white [&::-webkit-datetime-edit-text]:text-white [&::-webkit-datetime-edit-year-field]:text-white [&::-webkit-datetime-edit-month-field]:text-white [&::-webkit-datetime-edit-day-field]:text-white"
                    type="date"
                    defaultValue="2025-05-10"
                  />
                </div>
                <div>
                  <div className="grid w-full grid-cols-2 gap-1">
                    <div className="bg-white text-blue  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center">
                      Today
                    </div>
                    <div className="bg-controls-idle text-white  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center">
                      Last Week
                    </div>
                    <div className="bg-controls-idle text-white  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center">
                      Last Month
                    </div>
                    <div className="bg-controls-idle text-white  px-3 py-1 rounded-lg cursor-pointer text-xs font-medium text-center">
                      Last 3 Months
                    </div>
                  </div>
                </div>
                <div className="flex flex-col-reverse gap-2">
                  <div className="flex items-center justify-center w-full h-full text-white">
                    No bets found.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
