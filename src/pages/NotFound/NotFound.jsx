import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="popupContainer--140f0 blocking--0ef8a highestPriority--13a6e"
      data-role="popup-container"
    >
      <div className="popupWrapper--f73e8">
        <div
          className="popup--36073 default--5d4ea sm--1a75d hidePointer--3c27e"
          data-role="popup"
          data-popup-id="inactivity"
        >
          <div className="contentWrapper--46f24">
            <div
              className="titleContainer--8de5b flex items-center justify-center "
              data-role="title"
            >
              Not Found
            </div>
            <div className="content--12cc9 mt-3">
              <div className="wrapper--f4eb9" data-role="scrollable-wrapper">
                <div
                  data-role="scrollable"
                  className="scrollable--96151 vertical--99fcf text-white text-center"
                >
                  Sorry, the page you are looking for is not found.
                </div>
                <div
                  data-role="scrollable"
                  className="scrollable--96151 vertical--99fcf text-white flex items-center justify-between mt-10"
                >
                  <button
                    className="bg-[#96fffff7] px-3 py-1 rounded-md text-black"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </button>
                  <button
                    className="bg-[#96fffff7] px-3 py-1 rounded-md text-black"
                    onClick={() => navigate("/")}
                  >
                    Back to home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
