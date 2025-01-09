import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import LuckySeven from "../pages/LuckySeven/LuckySeven";
import AmarAkbarAnthony from "../pages/AmarAkbarAnthony/AmarAkbarAnthony";
import DragonTiger from "../pages/DragonTiger/DragonTiger";
import TeenPatti2020 from "../pages/TeenPatti2020/TeenPatti2020";
import TeenPattiOneDay from "../pages/TeenPattiOneDay/TeenPattiOneDay";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
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
          element: <TeenPatti2020 />,
        },
        {
          path: "/teen/:eventTypeId/:eventId",
          element: <TeenPattiOneDay />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
