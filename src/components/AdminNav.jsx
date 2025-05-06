import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import menu from "../assets/menu_icon.svg";
import close from "../assets/close_icon.svg";
import logo from "../assets/Logo.png";

export default function Nav() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    navigate("/login", { replace: true });
  };
  return (
    <div className="w-full sc-500:px-16 px-5  bg-black text-white">
      <nav
        className="w-full flex py-5 sc-1218:text-xl 
    justify-between items-center navbar border-b-2 border-gray-500 border-solid"
      >
        <NavLink to="/admin" className="flex items-center gap-1">
          <div
            className="
          sc-834:w-[40px]
          w-[35px]
          "
          >
            <img
              className="overflow-hidden rounded-3xl sc-1218:rounded-full"
              src={logo}
              alt="Inclusive Insights logo: Four diverse human figures in orange, teal, dark blue, and purple—one using a wheelchair, one walking on an upward path, and two raising arms around a green and blue globe—symbolize inclusion, progress, and global community. All are held within soft blue hands representing care and support. 'InclusiveInsights' appears below in bold dark navy text."
            />
          </div>
          <h1 className="sc-834:3xl text-2xl">
            <span>Inclusive</span>
            <span className="text-[#96FC04]">Insights</span>
          </h1>
        </NavLink>

        <div className="flex gap-5">
          <NavLink
            to="/"
            className={
              "font-poppins border border-gray-500 px-4 py-1 hover:bg-gray-700 transition duration-300 rounded-md"
            }
          >
            User View
          </NavLink>

          <div
            className="border border-gray-500 px-4 py-1 rounded-md font-poppins transition duration-300 hover:bg-gray-700
            cursor-pointer sc-950:mr-5 mr-3"
          >
            <div onClick={handleLogOut}>Logout</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
