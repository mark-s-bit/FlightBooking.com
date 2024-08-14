import { Children } from "react";

import Ticket from "./Ticket";
import DetailCollection from "./DetailCollection";
import Payment from "../components/Payment";
import App from "../App";
import HomeIn from "../HomeIn";

const routes = [
  {
    path: "/",
    element: <HomeIn />,
    Children: [
      {
        path: "/ticket",
        element: <Ticket />,
      },
      { path: "/details", element: <DetailCollection /> },
      { path: "payment", element: <Payment /> },
    ],
  },
];

export default routes;
