import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import menu from "../assets/menu_icon.svg";
import close from "../assets/close_icon.svg";

export default function Nav() {
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    
    navigate("/login", { replace: true });
  }
  return (
    <div className="w-full sc-500:px-20 px-5  bg-black text-white">
      <nav
        className="w-full flex py-6 sc-1218:text-xl 
    justify-between items-center navbar border-b-2 border-gray-500 border-solid"
      >
        <h1 className="sc-1218:text-3xl text-2xl">
          <Link to="/admin">
            <span>Inclusive</span>
            <span className="text-[#96FC04]">Insights</span>
          </Link>
        </h1>

        <div
          className="font-poppins text-xl hover:text-gray-300 
            cursor-pointer sc-950:mr-5 mr-3 text-white"
        >
          <div onClick={handleLogOut}>Logout</div>
        </div>

      </nav>
    </div>
  );
}
