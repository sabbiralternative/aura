import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import LuckySeven from "../pages/LuckySeven/LuckySeven";
import AmarAkbarAnthony from "../pages/AmarAkbarAnthony/AmarAkbarAnthony";
import DragonTiger from "../pages/DragonTiger/DragonTiger";
import TeenPatti2020 from "../pages/TeenPatti2020/TeenPatti2020";
import TeenPattiOneDay from "../pages/TeenPattiOneDay/TeenPattiOneDay";
import Muflis from "../pages/Muflis/Muflis";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Bollywood from "../pages/Bollywood/Bollywood";
import Baccarat from "../pages/Baccarat/Baccarat";
import War from "../pages/War/War";
import BetHistory from "../pages/BetHistory/BetHistory";
import Casino from "../pages/Casino/Casino";
import Originals from "../pages/Originals/Originals";
import FastGames from "../pages/FastGames/FastGames";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/casino",
          element: <Casino />,
        },
        {
          path: "/originals",
          element: <Originals />,
        },
        {
          path: "/fast-games",
          element: <FastGames />,
        },
        {
          path: "/event-details/lucky7/:eventTypeId/:eventId",
          element: <LuckySeven />,
        },
        {
          path: "/event-details/aaa/:eventTypeId/:eventId",
          element: <AmarAkbarAnthony />,
        },
        {
          path: "/event-details/dt20/:eventTypeId/:eventId",
          element: <DragonTiger />,
        },
        {
          path: "/event-details/teenmuf/:eventTypeId/:eventId",
          element: <Muflis />,
        },
        {
          path: "/event-details/teen20/:eventTypeId/:eventId",
          element: <TeenPatti2020 />,
        },
        {
          path: "/event-details/teen/:eventTypeId/:eventId",
          element: <TeenPattiOneDay />,
        },
        {
          path: "/event-details/btable/:eventTypeId/:eventId",
          element: <Bollywood />,
        },
        {
          path: "/event-details/baccarat/:eventTypeId/:eventId",
          element: <Baccarat />,
        },
        {
          path: "/event-details/war/:eventTypeId/:eventId",
          element: <War />,
        },
        {
          path: "/bet-history",
          element: <BetHistory />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
