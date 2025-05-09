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
        <div className="min-h-screen sc-1450:w-[1450px] mx-auto">
          <Outlet />
        </div>
        <Footer />
    </>
  );
}
