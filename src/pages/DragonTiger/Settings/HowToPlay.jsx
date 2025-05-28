import { useState } from "react";
import { playClickSound } from "../../../utils/playClickSound";

const HowToPlay = ({ setShowHowToPlay, setShowSetting }) => {
  const [accordion, setAccordion] = useState(null);
  const accordionTab = {
    gameDescription: "gameDescription",
    howToPlay: "howToPlay",
    main: "main",
    oddEvend: "oddEvend",
    suitd: "suitd",
    oddEvent: "oddEvent",
    suitt: "suitt",
    colort: "colort",
    colord: "colord",
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
      className="scale-y-100 h-[70%] fixed origin-bottom flex   flex-col items-center   bottom-0   w-full  max-w-xl  transition-all ease-in-out "
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col flex-grow w-full bg-black/60 backdrop-blur-md rounded-t-xl ">
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
                        className="text-base font-medium tracking-wider bg-transparent flex items-center justify-between"
                        id="accordion__heading-:ro:"
                        aria-disabled="false"
                        aria-expanded="false"
                        aria-controls="accordion__panel-:ro:"
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
                      id="accordion__panel-:ro:"
                      hidden
                    >
                      <div className="markdown-preview">
                        <p className="mb-4">
                          The objective of Dragon Tiger is simple: predict which
                          side – Dragon or Tiger – will get the higher card. Two
                          cards are dealt by the dealer:
                        </p>
                        <p className="mb-4">One to Dragon</p>
                        <p className="mb-4">One to Tiger</p>
                        <p className="mb-4">
                          Players place bets on which will receive the higher
                          card.
                        </p>
                        <p className="mb-4">
                          Additional side bets are available based on card
                          color, suit, parity (odd/even), and more.
                        </p>
                        <p className="mb-4">
                          The game is played with six decks of cards placed in a
                          shuffling machine.
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
                        className="text-base font-medium tracking-wider bg-transparent flex items-center justify-between"
                        id="accordion__heading-:rp:"
                        aria-disabled="false"
                        aria-expanded="false"
                        aria-controls="accordion__panel-:rp:"
                        role="button"
                        tabIndex={0}
                        data-accordion-component="AccordionItemButton"
                      >
                        How To Play
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
                      id="accordion__panel-:rp:"
                      hidden
                    >
                      <div className="markdown-preview">
                        <p className="mb-4">
                          <img
                            src="https://auraimgs.imgix.net/Dragon%20Tiger%20(1).webp"
                            alt="image"
                          />
                        </p>
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
                      Maximum Profit Win Limit
                      <span className="text-xs text-gray/70 font-normal italic">
                        (For each option)
                      </span>
                    </span>
                    <span>INR 600000</span>
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
                          id="accordion__heading-:rq:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:rq:"
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
                        className={`p-2  ${
                          accordion === accordionTab.main ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:rq:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Dragon</span>
                            <span>x1.98</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Tiger</span>
                            <span>x1.98</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Tie</span>
                            <span>x11</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Suited Tie</span>
                            <span>x50</span>
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
                          handleToggleAccordion(accordionTab.oddEvend)
                        }
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:rr:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:rr:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          oddevend
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.oddEvend
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
                          accordion === accordionTab.oddEvend
                            ? "block"
                            : "hidden"
                        }`}
                        id="accordion__panel-:rr:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Dragon-Even</span>
                            <span>x2.1</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Dragon-Odd</span>
                            <span>x1.8</span>
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
                          handleToggleAccordion(accordionTab.suitd)
                        }
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:rs:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:rs:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          suitd
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.suitd
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
                          accordion === accordionTab.suitd ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:rs:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">suitd</span>
                            <span>x3.75</span>
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
                          handleToggleAccordion(accordionTab.oddEvent)
                        }
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:rt:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:rt:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          oddevent
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.oddEvent
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
                          accordion === accordionTab.oddEvent
                            ? "block"
                            : "hidden"
                        }`}
                        id="accordion__panel-:rt:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Tiger-Even</span>
                            <span>x2.1</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Tiger-Odd</span>
                            <span>x1.8</span>
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
                          handleToggleAccordion(accordionTab.suitt)
                        }
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:ru:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:ru:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          suitt
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.suitt
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
                          accordion === accordionTab.suitt ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:ru:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">suitt</span>
                            <span>x3.75</span>
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
                          handleToggleAccordion(accordionTab.colort)
                        }
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:rv:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:rv:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          colort
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.colort
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
                          accordion === accordionTab.colort ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:rv:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">colort</span>
                            <span>x1.95</span>
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
                          handleToggleAccordion(accordionTab.colord)
                        }
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:r10:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:r10:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          colord
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.colord
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
                          accordion === accordionTab.colord ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:r10:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">colord</span>
                            <span>x1.95</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
