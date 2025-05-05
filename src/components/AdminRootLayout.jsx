import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <AdminNav />
      <Outlet />
    </>
  );
}
