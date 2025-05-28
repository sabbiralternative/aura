import { useState } from "react";
import { playClickSound } from "../../../utils/playClickSound";

const HowToPlay = ({ setShowSetting, setShowHowToPlay }) => {
  const [accordion, setAccordion] = useState(null);
  const accordionTab = {
    gameDescription: "gameDescription",
    howToPlay: "howToPlay",
    main: "main",
    single: "single",
    pair: "pair",
    color: "color",
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
                    <div className="font-medium">RTP 97.50%</div>
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
                        id="accordion__heading-:r6:"
                        aria-disabled="false"
                        aria-expanded="false"
                        aria-controls="accordion__panel-:r6:"
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
                      id="accordion__panel-:r6:"
                      hidden
                    >
                      <div className="markdown-preview">
                        <p className="mb-4">
                          Bollywood Casino is a one-card game where players must
                          predict which section the dealt card will belong to.
                          The sections are named after popular Bollywood movies
                          and characters.
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
                        id="accordion__heading-:r7:"
                        aria-disabled="false"
                        aria-expanded="false"
                        aria-controls="accordion__panel-:r7:"
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
                      id="accordion__panel-:r7:"
                      hidden
                    >
                      <div className="markdown-preview">
                        <p className="mb-4">
                          <img
                            src="https://auraimgs.imgix.net/BOLLYWOOD%20CASINO.png"
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
                    <span>INR 1500000</span>
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
                    <span>INR 75000</span>
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
                          id="accordion__heading-:r8:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:r8:"
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
                        id="accordion__panel-:r8:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">
                              KisKisoPyaarKaroon Back
                            </span>
                            <span>3.85</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">
                              AmarAkbarAnthony Lay
                            </span>
                            <span>5.5</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">
                              SahibBibiAurGulam Lay
                            </span>
                            <span>5.5</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">DharamVeer Back</span>
                            <span>7.65</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">
                              AmarAkbarAnthony Back
                            </span>
                            <span>5.15</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Don Lay</span>
                            <span>21</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Ghulam Back</span>
                            <span>5.15</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">
                              KisKisoPyaarKaroon Lay
                            </span>
                            <span>4.15</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Ghulam Lay</span>
                            <span>5.5</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">DharamVeer Lay</span>
                            <span>8.35</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">Don Back</span>
                            <span>15</span>
                          </div>
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">
                              SahibBibiAurGulam Back
                            </span>
                            <span>5.15</span>
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
                          handleToggleAccordion(accordionTab.single)
                        }
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:r9:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:r9:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          single
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.single
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
                          accordion === accordionTab.single ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:r9:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">single</span>
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
                        onClick={() => handleToggleAccordion(accordionTab.pair)}
                        data-accordion-component="AccordionItemHeading"
                        className="p-2 bg-transparent border-2 rounded-lg border-white/10"
                        role="heading"
                        aria-level={3}
                      >
                        <div
                          className="text-base font-medium tracking-wider bg-transparent capitalize flex items-center justify-between"
                          id="accordion__heading-:ra:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:ra:"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          pair
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`w-5 h-5 ${
                              accordion === accordionTab.pair
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
                          accordion === accordionTab.pair ? "block" : "hidden"
                        }`}
                        id="accordion__panel-:ra:"
                        hidden
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/10">
                          <div className="flex items-center justify-between gap-2 px-4 py-1 text-sm">
                            <span className="capitalize">pair</span>
                            <span>x1.97</span>
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
                          id="accordion__heading-:rb:"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-:rb:"
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
                        id="accordion__panel-:rb:"
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
