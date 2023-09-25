import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AllDonations from "../pages/AllDonations/AllDonations";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../components/DonationDetails/DonationDetails";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/donation",
        element: <AllDonations />,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/donations/:id",
        element: <DonationDetails />,
        loader: () => fetch("/donations.json"),
      },
    ],
  },
]);

export default myRouter;
