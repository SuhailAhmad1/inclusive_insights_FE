import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout() {
  return (
    <>
        <ToastContainer position="top-right" autoClose={3000} />
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}
