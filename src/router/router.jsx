import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import LuckySeven from "../pages/LuckySeven/LuckySeven";
import AmarAkbarAnthony from "../pages/AmarAkbarAnthony/AmarAkbarAnthony";
import DragonTiger from "../pages/DragonTiger/DragonTiger";
import TeenPatti2020 from "../pages/TeenPatti2020/TeenPatti2020";
import AntMedia from "../components/shared/Antmedia/Antmedia";

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
          path: "/lucky-seven/:eventTypeId/:eventId",
          element: <LuckySeven />,
        },
        {
          path: "/amar-akbar-anthony/:eventTypeId/:eventId",
          element: <AmarAkbarAnthony />,
        },
        {
          path: "/dragon-tiger/:eventTypeId/:eventId",
          element: <DragonTiger />,
        },
        {
          path: "/teen-patti-2020/:eventTypeId/:eventId",
          element: <TeenPatti2020 />,
        },
        {
          path: "/antmedia",
          element: <AntMedia />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
