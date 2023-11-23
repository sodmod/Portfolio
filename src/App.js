import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
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
          { path: "contact", element: <ContactPage /> },
          {
            id: "portfolio",
            path: "portfolios",
            loader: getProjects,
            children: [
              {
                index: true,
                element: <PortfolioPage />,
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
