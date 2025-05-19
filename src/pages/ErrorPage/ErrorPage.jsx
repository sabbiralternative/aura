import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setUser } from "../../redux/features/auth/authSlice";
import { liveCasino } from "../../static";

const ErrorPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  if (pathname.length > 100) {
    const path = pathname.split("/");
    const token = path[1];
    localStorage.setItem("token", token);
    dispatch(setUser({ token }));
    if (path?.length > 2 && path[2] !== "") {
      const route = pathname.split("/")[2];
      const findGameByRoute = liveCasino.find((game) => game.eventId == route);
      if (findGameByRoute) {
        const to = `/event-details/${findGameByRoute?.title}/${findGameByRoute.eventTypeId}/${route}`;
        return <Navigate to={to}></Navigate>;
      } else {
        return <Navigate to="/"></Navigate>;
      }
    }
  }

  return <Navigate to="/"></Navigate>;
};

export default ErrorPage;
