import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/error/ErrorPage";
import Consult from "./pages/consult/Consult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/consultant",
        element: <Consult />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
