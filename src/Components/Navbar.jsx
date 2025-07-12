import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci"; //icon
import { CiUser } from "react-icons/ci"; // icon
import { CiShoppingCart } from "react-icons/ci"; //icon
import { CiMenuFries } from "react-icons/ci"; //icon
import { RiCloseLargeFill } from "react-icons/ri"; //Icon
import { IoLogOutOutline } from "react-icons/io5"; //icon
import { TfiClose } from "react-icons/tfi"; //icon
import { CgProfile } from "react-icons/cg"; //icon
import { CiBoxList } from "react-icons/ci"; //icon
import { TbLogin } from "react-icons/tb"; //icon
import { PiCardsThin } from "react-icons/pi"; //icon
import { IoHomeOutline } from "react-icons/io5"; //icon 
import { BsCreditCard2Front } from "react-icons/bs"; //icon
import { PiPhoneTransferThin } from "react-icons/pi";//icon
import { useDispatch, useSelector } from "react-redux";
import { SEARCHINPUT } from "../Features/ProductSlice";

const Navbar = () => {
  const Cart = useSelector((state) => state.mySlice.Cart);
  const location = useLocation();
  const [menu, setmenu] = useState(false);
  const [profileOptions, setprofileOptions] = useState(false);
  const [openSearchBar, setopenSearchBar] = useState(false);
  const [searchInput, setsearchInput] = useState();

  const dispatch = useDispatch();

  const TotalItems = Cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <div className="Navebar text-gray-500  w-full flex justify-between border-b-[1px] border-gray-300 pb-3">
          <div className="div1 font-[logoFont]  text-2xl">Logo.</div>

          <div className="hidden md:flex gap-6 cursor-pointer font-family-[Poppins]">
            <Link
              to={"/"}
              className={`${
                location.pathname === "/" ? "text-[var(--main-color)]" : ""
              }  hover:-translate-y-2 transition-all duration-200`}
            >
              Home
            </Link>
            <Link
              to={"/Collections"}
              className={`${
                location.pathname === "/Collections"
                  ? "text-[var(--main-color)]"
                  : ""
              } hover:-translate-y-2 transition-all duration-200`}
            >
              Collections
            </Link>
            <Link
              to={"/About"}
              className={`${
                location.pathname === "/About" ? "text-[var(--main-color)]" : ""
              }  hover:-translate-y-2 transition-all duration-200`}
            >
              About
            </Link>
            <Link
              to={"/Contact"}
              className={`${
                location.pathname === "/Contact"
                  ? "text-[var(--main-color)]"
                  : ""
              }  hover:-translate-y-2 transition-all duration-200`}
            >
              Contact Us
            </Link>
          </div>

          <div className="flex cursor-pointer items-center justify-between gap-2 sm:gap-6">
            <CiSearch
              onClick={() => setopenSearchBar((prev) => !prev)}
              className={` ${
                location.pathname === "/Collections" ? "block" : "hidden"
              } text-xl sm:text-2xl cursor-pointer transition-all duration-200 hover:text-black hover:scale-110`}
            />

            {/* ------------------------------USER 👮----------- */}
            <div title="User Options" className="relative">
              <CiUser
                onClick={() => setprofileOptions((prev) => !prev)}
                className={`${
                  profileOptions ? "text-[var(--main-color)]" : ""
                } text-xl sm:text-2xl cursor-pointer transition-all duration-200 hover:text-black hover:scale-110"`}
              />

              {/* profile, orders, login */}
              <span
                className={`${
                  profileOptions ? "absolute z-50" : "hidden"
                } profileOptions text-xl font-semibold md:font-medium div py-4 px-4 rounded-sm flex flex-col gap-2 absolute top-[30%] right-[100%]  `}
              >
                <Link
                  onClick={() => setprofileOptions((prev) => !prev)}
                  className={` options px-3 py-2 flex gap-4  justify-start items-center rounded-sm pointer-coarse text-balance hover:text-[var(--main-color)]`}
                >
                  <CgProfile /> Profile
                </Link>

                <Link
                  to={"/Orders"}
                  onClick={() => setprofileOptions((prev) => !prev)}
                  className={`${
                    location.pathname === "/Orders"
                      ? "text-[var(--main-color)]"
                      : ""
                  } options px-3 py-2 flex gap-4 justify-start items-center  pointer-coarse rounded-sm text-balance hover:text-[var(--main-color)]`}
                >
                  <CiBoxList /> Orders
                </Link>
                <Link
                  to={"/login"}
                  onClick={() => setprofileOptions((prev) => !prev)}
                  className={`${
                    location.pathname === "/login"
                      ? "text-[var(--main-color)]"
                      : ""
                  } options px-3 py-2 flex gap-4 justify-start items-center  pointer-coarse text-balance rounded-sm hover:text-[var(--main-color)]`}
                >
                  <TbLogin /> Login
                </Link>
              </span>
            </div>

            {/*🛒 */}
            <div className="relative">
              <Link to={"/Cart"}>
                <CiShoppingCart className="text-xl sm:text-2xl cursor-pointer transition-all duration-200 hover:text-black hover:scale-110" />
                <h2 className={`${TotalItems === 0 ? 'hidden' : 'block'} absolute top-[-50%] right-[-40%] bg-black text-white text-[10px] font-semibold w-3 md:w-5 h-3 md:h-5 flex items-center justify-center rounded-full`}>
                  {TotalItems}
                </h2>
              </Link>
            </div>

            <span className="h-full md:hidden w-[1px] bg-gray-300 "></span>
            {/* LOGOUT */}
            <button className="md:bg-red-500 text-xl  hover:shadow-2xl cursor-pointer hover:scale-105 text-gray-500  md:text-white rounded-md px-4 py-2  text-balance flex justify-center items-center gap-2">
              <h1 className="hidden md:block">Logout</h1>{" "}
              <IoLogOutOutline className="md:text-2xl" />{" "}
            </button>

            <div
              onClick={() => setmenu((prev) => !prev)}
              className="div3  cursor-pointer hover:text-black hover:scale-105"
            >
              <CiMenuFries className="md:hidden" />
            </div>
          </div>

          {/* MENU for Mobile Screen------------------- */}

          <div
            className={`${
              menu ? "fixed" : "hidden"
            }  w-full h-screen py-4 px-2  absolute top-0 ring-0 bg-[var(--bg-color)] z-1000`}
          >
            <h1 className="text-4xl font-bold text-gray-400 w-full pb-3 border-b-[1px] border-gray-300">MENU</h1>
            <div className="flex flex-col  w-full  ">
              <div className="flex justify-end items-end w-full px-10 py-4 ">
                <RiCloseLargeFill
                  onClick={() => setmenu((prev) => !prev)}
                  className="mb-4 text-2xl"
                />
              </div>

              {/* LINKS------ */}
              <div className="Links flex flex-col gap-4 justify-center items-start px-auto text-xl mx-auto">
                <Link
                  to={"/"}
                  onClick={() => setmenu((prev) => !prev)}
                  className={`${
                    location.pathname === "/" ? "text-[var(--main-color)] text-3xl"
                      : "text-2xl"
                  } hover:text-black  flex gap-6 justify-center items-center  `}
                >
                 <IoHomeOutline /><span>Home</span> 
                </Link>
                <Link
                  onClick={() => setmenu((prev) => !prev)}
                  to={"/Collections"}
                  className={`${
                    location.pathname === "/Collections"
                      ? "text-[var(--main-color)] text-3xl"
                      : "text-2xl"
                  } hover:text-black flex gap-6 justify-center items-center   `}
                >
                 <PiCardsThin /> <span>Collections</span>  
                </Link>
                <Link
                  onClick={() => setmenu((prev) => !prev)}
                  to={"/About"}
                  className={`${
                    location.pathname === "/About"
                      ? "text-[var(--main-color)] text-3xl"
                      : "text-2xl"
                  } hover:text-black flex gap-6 justify-center items-center `}
                >
                  <BsCreditCard2Front /><span>About</span> 
                </Link>
                <Link
                  onClick={() => setmenu((prev) => !prev)}
                  to={"/Contact"}
                  className={`${
                    location.pathname === "/Contact"
                      ? "text-[var(--main-color)] text-3xl"
                      : "text-2xl"
                  } hover:text-black  flex gap-6 justify-center items-center  `}
                >
                 <PiPhoneTransferThin /> <span>Contact</span> 
                </Link>
              </div>
              
            </div>
          </div>
        </div>

        {/* Search Bar 🔍*/}
        <div
          className={` ${openSearchBar ? "block" : "hidden"} ${
            location.pathname === "/Collections" ? " " : "hidden"
          } searchBar flex flex-nowrap gap-3 justify-center px-6 items-center w-full py-2"`}
        >
          <CiSearch className="text-2xl" />
          <input
            onChange={(e) => {
              setsearchInput(e.target.value);
              dispatch(SEARCHINPUT(e.target.value));
            }}
            value={searchInput}
            type="text"
            className="flex-3/4  outline-none border-[1px] border-gray-500 px-4 py-2 rounded-3xl placeholder:text-md"
            placeholder="Type here to search..."
          />
          <TfiClose
            onClick={() => {
              setopenSearchBar((prev) => !prev);
              dispatch(SEARCHINPUT(""));
            }}
            className={` hover:text-[var(--main-color)] cursor-pointer`}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
