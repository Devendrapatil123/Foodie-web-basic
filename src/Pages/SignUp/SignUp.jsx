import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast"
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../FirebaseAuth/FirbaseAuth.js"

const SignUp = () => {
  const LoginNavigate = useNavigate();
  const [UserSignup, setUserSignup] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserSignup({ ...UserSignup, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!UserSignup.username || !UserSignup.email || !UserSignup.password) {
       return toast.error("All fields are required")
    } else {
      createUserWithEmailAndPassword(
        auth,
        UserSignup.email,
        UserSignup.password
      )
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: UserSignup.username,
          });
          LoginNavigate("/Login");
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <>
      <div>
        <section className="relative body-font ">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div
              className="mx-auto border  bg-opacity-50 rounded-lg p-8 flex flex-col
            md:w-1/2 w-full "
            >
              <h2 className="dark:text-white text-4xl text-center font-medium title-font mb-5 sm:w-2/3 w-full mx-auto">
                Sign Up
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="username"
                  className="leading-7 text-sm dark:text-white"
                >
                  Name
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  id="username"
                  name="username"
                  value={UserSignup.username}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 focus:bg-transparent focus:ring-2 focus:ring-indigo-500 rounded border border-gray-300 focus:border-indigo-200 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter your name"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm dark:text-white"
                >
                  Email
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  id="email"
                  name="email"
                  value={UserSignup.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 focus:bg-transparent focus:ring-2 focus:ring-indigo-500 rounded border border-gray-300 focus:border-indigo-200 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter your email"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={UserSignup.password}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 focus:bg-transparent focus:ring-2 focus:ring-indigo-500 rounded border border-gray-300 focus:border-indigo-200 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter your password"
                />
              </div>

              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={HandleSubmit}
                >
                  SignUp
                </button>
                <p className="text-md text-center mt-3">
                  Do you have an Account?{" "}
                  <Link to="/Login">
                    <button className="cursor-pointer hover:text-blue-400">
                      Login
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
