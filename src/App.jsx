import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/error/ErrorPage";
import Consult from "./pages/consult/Consult";
import Submission from "./pages/submission/Submission";
import Publications from "./pages/publications/Publications";
import ViewPublication from "./pages/view_publication/ViewPublication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/consultant",
        element: <Consult />,
      },
      {
        path: "/submission",
        element: <Submission />,
      },
      {
        path: "/publications",
        element: <Publications />,
      },
      {
        path: "/publications/:publicationId",
        element: <ViewPublication />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
