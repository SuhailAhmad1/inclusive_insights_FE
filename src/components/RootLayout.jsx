import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
export default function RootLayout() {
  return (
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}
