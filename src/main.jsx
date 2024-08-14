import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ticket from "./routes/Ticket.jsx";
import Payment from "./components/Payment.jsx";
import DetailCollection from "./routes/DetailCollection.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },

  {
    path: "/ticket",
    element: <Ticket />,
  },
  { path: "/details", element: <DetailCollection /> },
  { path: "/payment", element: <Payment /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </StrictMode>
);
