import React, { useState } from "react";
import logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode/DarkMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";
import { auth } from "../../FirebaseAuth/FirbaseAuth";

const Navbar = ({ username }) => {
  const [isOpen, setOpen] = useState(false);
  const ToogleChange = () => {
    isOpen === false ? setOpen(true) : setOpen(false);
  };
  const handleLogout = () => {
    auth
      .signOut(auth)
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 ">
        <div className="container py-3 sm:py-0 mx-auto">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl sm:text-2xl flex gap-2 sm:mr-4">
              <Link to="/">
                <img src={logo} alt="logo" className="w-10 m-auto" />
              </Link>
              Foodie
            </div>
            <div className="flex justify-between items-center gap-3">
              <div>
                <DarkMode />
              </div>

              <ul className="hidden sm:flex items-center gap-4">
                <Link to="/">
                  <li className="inline-block py-4 px-4 hover:text-yellow-500 ">
                    Home
                  </li>
                </Link>

                <Link to="/Service">
                  <li className="inline-block py-4 px-4 hover:text-yellow-500">
                    Services
                  </li>
                </Link>

                <Link to="/FeedBack">
                  <li className="inline-block py-4 px-4 hover:text-yellow-500">
                    FeedBack
                  </li>
                </Link>

                {username ? (
                  <>
                    {" "}
                    <Link to="/Login">
                      <button
                        className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full flex items-center"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </Link>
                    <span className=" bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center">
                      {username}
                    </span>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link to="/Login">
                      <button className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full flex items-center">
                        Login
                      </button>
                    </Link>
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 relative">
                      Order
                      <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                    </button>
                  </>
                )}
              </ul>
              {isOpen ? (
                ""
              ) : (
                <button className="sm:hidden" onClick={ToogleChange}>
                  <GiHamburgerMenu size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div>
          <ul className="flex flex-col sm:gap-10 text-3xl dark:bg-gray-950 dark:text-white top-[75px] left-0 h-screen w-full z-20 bg-white items-center justify-center font-semibold ">
            <Link to="/" onClick={ToogleChange}>
              <li className="mt-5 hover:text-gray-900 cursor-pointer ">Home</li>
            </Link>
            <Link to="/Service" onClick={ToogleChange}>
              <li className="mt-5 hover:text-gray-900 cursor-pointer">
                Service
              </li>
            </Link>
            <Link to="/FeedBack" onClick={ToogleChange}>
              <li className="mt-5 hover:text-gray-900 cursor-pointer ">
                FeedBack
              </li>
            </Link>
          </ul>
          <button
            className="absolute top-[75px] z-10 right-0 text-black dark:text-white py-2 px-4 cursor-pointer"
            onClick={ToogleChange}
          >
            <RxCross1 size={25} />
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
