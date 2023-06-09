import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import AboutMePage from "./Pages/AboutMePage";
import PortfolioPage from "./Pages/PortfolioPage";
import pics1 from "./assests/Rectangle3.png";
import { getProjects, getProjectsDetails } from "./functions";
import ContactPage from "./Pages/ContactPage";
import ProjectDetails from "./Pages/ProjectDetails";

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
          { path: "contact", element: <ContactPage /> },
          {
            id: "portfolio",
            path: "portfolios",
            loader: getProjects,
            children: [
              {
                index: true,
                element: <PortfolioPage images={pics1} />,
              },
              {
                path: ":projectname",
                id: "details",
                element: <ProjectDetails />,
                loader: getProjectsDetails,
              },
            ],
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
