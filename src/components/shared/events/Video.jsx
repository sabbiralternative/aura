const Video = () => {
  return (
    <div className="flex flex-col w-full relative min-h-[40%]">
      <div className="w-full aspect-video w-[100%] lg:scale-[86%] origin-top transition-all duration-1000 ease-in-out scale-[160%]">
        <iframe
          className="w-full h-full"
          src="https://player.fawk.app/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVyYXRvcklkIjoiOTQxNCIsInVzZXJJZCI6IjY5MTA1NTdfOTQxNCIsInVzZXJuYW1lIjoiYjAyLjkxXzgyOTEwMjMyOTciLCJwbGF5ZXJUb2tlbkF0TGF1bmNoIjoiV3lJeU1ESTBMVEV5TFRFMlZERXpPakF4T2pVNUxqRTJOelExTkNJc05qa3hNRFUxTnl3aVFqY3pOalUzTURoR09FRXpORFpETWpjMlJEbEdRamhCT0RFek5UWTJRMEV4T0VaQlF6aEZNek5DTjBKQ1JUUXlNemMxTmpkRVFrWkZRMFZCTkRORE5pSmQiLCJ0b2tlbiI6ImFhYmJjY2RkIiwiYmFsYW5jZSI6NCwiZXhwb3N1cmUiOjAsImN1cnJlbmN5IjoiSU5SIiwibGFuZ3VhZ2UiOiJlbiIsInRpbWVzdGFtcCI6MTczNDMzNTIzNjAwMCwiY2xpZW50SVAiOlsiMSJdLCJWSVAiOiIzIiwiZXJyb3JDb2RlIjowLCJlcnJvckRlc2NyaXB0aW9uIjoib2siLCJpcCI6IjQ5LjM2LjExMS4yNTAsIDEwLjI1LjEuMTAiLCJzeXN0ZW1Vc2VySWQiOiI2NjY3MDU5MDE3YjliNzc0OThhMjExZjIiLCJpYXQiOjE3MzQzMzUyMzYsImV4cCI6MTczNDM0NjAzNn0.slib_xcPTsfsjjO6OfnqBER_ZtfpFvsQscItGas5wvM/98789"
          frameBorder={0}
          allow="autoplay; encrypted-media"
          style={{
            maskImage:
              "linear-gradient(black,black,black,black,black,transparent)",
          }}
        />
      </div>
      <div
        className="h-full absolute pointer-events-none top-0 lg:left-auto lg:right-0 text-xs overflow-y-auto w-fit lg:px-2 transition-all duration-500 ease-in-out left-0"
        style={{
          maskImage:
            "linear-gradient(transparent,black, black, black,black, transparent)",
        }}
      >
        <div style={{ height: "372px" }} />
        <div
          className="text-xl text-white stroke-black"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          Total Win
          <span
            className="text-yellow"
            style={{ textShadow: "black 1px 1px 2px" }}
          >
            <span>₹20,721.00</span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹18,000.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              Coco70
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹10,000.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              Coco70
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹3,750.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              tithnga03
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹1,980.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              tithnga03
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹990.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              tlingaswamy
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹990.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              t810abhi
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹900.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              b02.91_9589598993
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹600.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              RDE:hyd123
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹600.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              George5544
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹594.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              LIZAF27
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹400.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              RDE:ps778
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹400.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              amitoreva
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹396.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              Ranglal
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹375.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              Ranglal
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹360.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              mohan21
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹198.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              G1rohit5352
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹198.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              8260130120@fairplay.club₹fp
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹198.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              7862948tgr3
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹198.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              Manjuh07
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹198.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              8260130120@fairplay.club₹fp
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹198.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              T325Shobhit
            </span>
          </span>
        </div>
        <div
          className="flex pt-1 flex-row-reverse items-center w-full gap-1 lg:flex-row text-yellow drop-shadow-lg"
          style={{ textShadow: "black 1px 1px 2px" }}
        >
          <span>₹198.00</span>
          <span className="flex gap-1 mr-auto text-white lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="w-[70px] truncate ..."
              style={{ textShadow: "black 1px 1px 2px" }}
            >
              gulshan45
            </span>
          </span>
        </div>
        <div style={{ height: "372px" }} />
      </div>
    </div>
  );
};

export default Video;
