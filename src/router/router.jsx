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
          path: "/lucky7/:eventTypeId/:eventId",
          element: <LuckySeven />,
        },
        {
          path: "/aaa/:eventTypeId/:eventId",
          element: <AmarAkbarAnthony />,
        },
        {
          path: "/dt20/:eventTypeId/:eventId",
          element: <DragonTiger />,
        },
        {
          path: "/teenmuf/:eventTypeId/:eventId",
          element: <Muflis />,
        },
        {
          path: "/teen20/:eventTypeId/:eventId",
          element: <TeenPatti2020 />,
        },
        {
          path: "/teen/:eventTypeId/:eventId",
          element: <TeenPattiOneDay />,
        },
        {
          path: "/btable/:eventTypeId/:eventId",
          element: <Bollywood />,
        },
        {
          path: "/baccarat/:eventTypeId/:eventId",
          element: <Baccarat />,
        },
        {
          path: "/war/:eventTypeId/:eventId",
          element: <War />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
