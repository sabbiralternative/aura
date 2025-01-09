import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import LuckySeven from "../pages/LuckySeven/LuckySeven";
import AmarAkbarAnthony from "../pages/AmarAkbarAnthony/AmarAkbarAnthony";
import DragonTiger from "../pages/DragonTiger/DragonTiger";
import TeenPatti2020 from "../pages/TeenPatti2020/TeenPatti2020";

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
          path: "/Lucky7-A/:eventTypeId/:eventId",
          element: <LuckySeven />,
        },
        {
          path: "/AmarAkbarAnthony/:eventTypeId/:eventId",
          element: <AmarAkbarAnthony />,
        },
        {
          path: "/20-20DTL/:eventTypeId/:eventId",
          element: <DragonTiger />,
        },
        {
          path: "/20-20Teenpatti/:eventTypeId/:eventId",
          element: <TeenPatti2020 />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
