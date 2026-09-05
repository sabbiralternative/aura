import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "../api";
import { logout, setUser } from "../redux/features/auth/authSlice";
import { liveCasino } from "../static";
import { setLobby } from "../redux/features/stateSlice";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const launchToken = params.get("token");
  const eventId = params.get("eventId");
  const lobby = params.get("lobby");
  const storedLobby = sessionStorage.getItem("lobby");

  useEffect(() => {
    if (launchToken) {
      localStorage.setItem("token", launchToken);
      const handleAuth = async () => {
        const { data } = await axios.post(
          API.auth,
          { token: launchToken },
          {
            headers: {
              Authorization: `Bearer ${launchToken}`,
            },
          },
        );

        if (data?.success) {
          sessionStorage.removeItem("errorMessage");
          const result = {
            operatorId: data?.result?.operatorId,
            userId: data?.result?.userId,
            username: data?.result?.username,
            playerTokenAtLaunch: data?.result?.playerTokenAtLaunch,
            token: data?.result?.token,
            balance: data?.result?.balance,
            exposure: data?.result?.exposure,
            currency: data?.result?.currency,
            language: data?.result?.language,
            timestamp: data?.result?.timestamp,
          };

          dispatch(setUser({ ...result }));

          if (lobby) {
            sessionStorage.setItem("lobby", lobby);
            dispatch(setLobby(true));
          }

          if (eventId) {
            const findEvent = liveCasino.find(
              (item) => item.eventId == eventId,
            );
            if (findEvent.isVirtual) {
              navigate(
                `/virtual/${findEvent?.title}/1000/${findEvent?.eventId}`,
              );
            } else {
              navigate(
                `/event-details/${findEvent?.title}/1000/${findEvent?.eventId}`,
              );
            }
          }
        } else {
          sessionStorage.setItem("errorMessage", data?.result?.message);
          dispatch(logout());
        }
      };
      handleAuth();
    }
  }, [launchToken, dispatch, navigate, eventId, lobby]);

  useEffect(() => {
    if (storedLobby) {
      dispatch(setLobby(true));
    }
  }, [storedLobby, dispatch]);

  return token ? (
    children
  ) : (
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
              SESSION EXPIRED
            </div>
            <div className="content--12cc9 mt-3">
              <div className="wrapper--f4eb9" data-role="scrollable-wrapper">
                <div
                  data-role="scrollable"
                  className="scrollable--96151 vertical--99fcf text-white text-center"
                >
                  Your session has expired because you were inactive for too
                  long. Please return to the site to log in again.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute;
