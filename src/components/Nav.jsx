import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import menu from "../assets/menu_icon.svg";
import close from "../assets/close_icon.svg";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full overflow-hidden  sc-500:px-20 px-5  bg-black text-white">
      <nav
        className="w-full flex py-6 sc-1218:text-xl 
    justify-self-auto items-center navbar border-b-2 border-gray-500 border-solid"
      >
        <h1 className="sc-1218:text-3xl text-2xl">
          <Link to="/">
            <span>Inclusive</span>
            <span className="text-[#96FC04]">Insights</span>
          </Link>
        </h1>

        <ul
          className="list-none sc-900:flex hidden  
      justify-end items-center flex-1"
        >
          <li
            className="font-poppins font-normal 
            cursor-pointer sc-950:mr-5 mr-3"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="font-poppins font-normal 
            cursor-pointer sc-950:mr-5 mr-3"
          >
            <Link to="/publications">Our Publications</Link>
          </li>
          <li
            className="font-poppins font-normal 
            cursor-pointer sc-950:mr-5 mr-3"
          >
            <Link to="/submission">Submission</Link>
          </li>
          <li
            className="font-poppins font-normal 
            cursor-pointer sc-950:mr-5 mr-3"
          >
            <Link to="/consultant">Consult Us</Link>
          </li>
          <li
            className="font-poppins font-normal 
            cursor-pointer sc-950:pl-10 pl-3"
          >
            <button className="border-2 border-gray-400 border-solid px-4 py-2 rounded-xl">
              <a href="/contact">Contact Us</a>
            </button>
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
                <Link to="/">Home</Link>
              </li>
              <li
                className="font-poppins font-normal 
                cursor-pointer mb-5"
              >
                <Link to="/publications">Our Publications</Link>
              </li>
              <li
                className="font-poppins font-normal 
                cursor-pointer mb-5"
              >
                <Link to="/submission">Submission</Link>
              </li>
              <li
                className="font-poppins font-normal 
                cursor-pointer mb-5"
              >
                <Link to="/consultant">Consult Us</Link>
              </li>
              <li
                className="font-poppins font-normal 
                cursor-pointer my-5"
              >
                <button className="border-2 border-gray-400 border-solid px-4 py-2 rounded-xl">
                  <a href="/contact">Contact Us</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
