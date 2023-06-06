import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import AboutMePage from "./Pages/AboutMePage";
import PortfolioPage from "./Pages/PortfolioPage";
import pics1 from "./assests/Rectangle3.png";
import { pics } from "./assests/assets";
import { getProjects } from "./functions";

const details = [
  {
    id: "1",
    title: "Grammercetamol",
    message: "kjfafal;jdkfsafjasfdsd",
    images: pics,
  },
  {
    id: "2",
    title: "Task Interface",
    message: "slfajf;lksa;jfkajjflkajf;ka",
    images: pics,
  },
  {
    id: "3",
    title: "Food App",
    message: "dfja;jflajeifjewoiajf",
    images: pics1,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "services", element: <ServicePage /> },
          { path: "aboutme", element: <AboutMePage /> },
          {
            path: "portfolios",
            id: "portfolio",
            element: <PortfolioPage props={details} images={pics1} />,
            loader: getProjects,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
