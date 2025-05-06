import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import menu from "../assets/menu_icon.svg";
import close from "../assets/close_icon.svg";
import logo from "../assets/Logo.png";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full fixed top-0 z-50 sc-834:px-16 px-5  bg-black text-white">
      <nav
        className="w-full flex py-5 sc-1218:text-xl 
    justify-self-auto items-center navbar border-b-2 border-gray-500 border-solid"
      >
        <NavLink to="/" className="flex items-center gap-1">
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
        {/* <h1 className="sc-1218:text-3xl text-2xl">
          <NavLink to="/">
            <span>Inclusive</span>
            <span className="text-[#96FC04]">Insights</span>
          </NavLink>
        </h1> */}

        <ul
          className="list-none sc-900:flex hidden  
      justify-end items-center flex-1"
        >
          <li
            className="font-poppins font-normal 
            cursor-pointer sc-950:mr-5 mr-3 px-2 "
          >
            <NavLink
              to="/"
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold transition duration-500" // active
                    : undefined // inactive
              }
            >
              Home
            </NavLink>
          </li>
          <li
            className="font-poppins font-normal 
            cursor-pointer sc-950:mr-5 mr-3"
          >
            <NavLink
              to="/publications"
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold transition duration-500" // active
                    : undefined // inactive
              }
            >
              Our Publications
            </NavLink>
          </li>
          <li
            className="font-poppins font-normal 
            cursor-pointer sc-950:mr-5 mr-3 px-2"
          >
            <NavLink
              to="/submission"
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold transition duration-500" // active
                    : undefined // inactive
              }
            >
              Submission
            </NavLink>
          </li>
          <li
            className="font-poppins font-normal 
            cursor-pointer px-2"
          >
            <NavLink
              to="/consultant"
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold transition duration-500" // active
                    : undefined // inactive
              }
            >
              Consult Us
            </NavLink>
          </li>
        </ul>

        <div
          className="sc-900:hidden flex flex-1
      justify-end items-center"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${toggle ? "flex" : "hidden"} 
        p-6 bg-black-gradient absolute top-20 right-0 
        mx-6 my-2 min-w-[200px] rounded-xl sidebar text-xl
          `}
          >
            <ul
              className="list-none flex flex-col
      justify-end items-center flex-1"
              onClick={() => setToggle((prev) => !prev)}
            >
              <li
                className="font-poppins font-normal 
                cursor-pointer mb-5"
              >
                <NavLink
                  to="/"
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "text-blue-500 font-bold transition duration-500" // active
                        : undefined // inactive
                  }
                >
                  Home
                </NavLink>
              </li>
              <li
                className="font-poppins font-normal 
                cursor-pointer mb-5"
              >
                <NavLink
                  to="/publications"
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "text-blue-500 font-bold transition duration-500" // active
                        : undefined // inactive
                  }
                >
                  Our Publications
                </NavLink>
              </li>
              <li
                className="font-poppins font-normal 
                cursor-pointer mb-5"
              >
                <NavLink
                  to="/submission"
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "text-blue-500 font-bold transition duration-500" // active
                        : undefined // inactive
                  }
                >
                  Submission
                </NavLink>
              </li>
              <li
                className="font-poppins font-normal 
                cursor-pointer"
              >
                <NavLink
                  to="/consultant"
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "text-blue-500 font-bold transition duration-500" // active
                        : undefined // inactive
                  }
                >
                  Consult Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
