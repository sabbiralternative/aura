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
    under7: "under7",
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
                        id="accordion__heading-:r1a:"
                        aria-disabled="false"
                        aria-expanded="false"
                        aria-controls="accordion__panel-:r1a:"
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
                      id="accordion__panel-:r1a:"
                      hidden
                    >
                      <div className="markdown-preview">
                        <p className="mb-4">
                          The goal in Amar Akbar Anthony is to predict which set
                          (Amar, Akbar, or Anthony) will win based on the card
                          dealt in each game round. The game uses eight decks of
                          cards shuffled together.
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
                        id="accordion__heading-:r1b:"
                        aria-disabled="false"
                        aria-expanded="false"
                        aria-controls="accordion__panel-:r1b:"
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
                      id="accordion__panel-:r1b:"
                      hidden
                    >
                      <div className="markdown-preview">
                        <p className="mb-4">
                          <img
                            src="https://auraimgs.imgix.net/amar_akbar_anthony.webp"
                            alt="image"
                          />
                        </p>
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
                    <span>INR 430000</span>
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
                          id="accordion__heading-:r1c:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:r1c:"
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
                        id="accordion__panel-:r1c:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">AkbarLay</span>
                            <span>3.35</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">AkbarBack</span>
                            <span>3.15</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">AnthonyBack</span>
                            <span>4.15</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">AmarLay</span>
                            <span>2.22</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">AmarBack</span>
                            <span>2.12</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">AnthonyLay</span>
                            <span>4.45</span>
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
                          id="accordion__heading-:r1d:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:r1d:"
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
                        className={`p-2  ${
                          accordion === accordionTab.oddEven
                            ? "block"
                            : "hidden"
                        }`}
                        id="accordion__panel-:r1d:"
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
                        onClick={() =>
                          handleToggleAccordion(accordionTab.under7)
                        }
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:r1e:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:r1e:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          overunder7
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.under7
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
                          accordion === accordionTab.under7 ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:r1e:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">overunder7</span>
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
                          id="accordion__heading-:r1f:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:r1f:"
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
                        className={`p-2  ${
                          accordion === accordionTab.color ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:r1f:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">color</span>
                            <span>x1.97</span>
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
