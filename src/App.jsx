import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./components/RootLayout";
import AdminRootLayout from "./components/AdminRootLayout"
import ErrorPage from "./pages/error/ErrorPage";
import Consult from "./pages/consult/Consult";
import Submission from "./pages/submission/Submission";
import Publications from "./pages/publications/Publications";
import ViewPublication from "./pages/view_publication/ViewPublication";
import Login from "./pages/login/Login";
import AdminDashboard from "./pages/admin_dashboard/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";
import ViewSubmission from "./pages/admin_dashboard/view_submissions/ViewSubmission"

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
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/admin',
    element: (
      <PrivateRoute>
        <AdminRootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminDashboard />
      },
      {
        path: "/admin/view_submission/:submissionId",
        element: <ViewSubmission />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
