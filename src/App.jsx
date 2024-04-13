import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home/Home";
import FeedBack from "./Components/FeedBack/FeedBack";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseAuth/FirbaseAuth";

const App = () => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const Add = () => {
    if (isLoggedIn) {
      toast.success("product added successfully");
    } else {
      toast.error("Please Login");
    }
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        setIsLoggedIn(true);
      } else {
        setUserName("");
        setIsLoggedIn(false);
      }
      return unsubsribe;
    });
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <BrowserRouter>
          <Navbar username={userName} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Service" element={<Service Add={Add} />}></Route>
            <Route path="/FeedBack" element={<FeedBack />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
           
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Footer />
      </div>
    </>
  );
};

export default App;
