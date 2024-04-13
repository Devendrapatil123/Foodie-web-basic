import React, { useState } from "react";
import { db } from "../../FirebaseAuth/FirbaseAuth";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";

function FeedBack() {
  const [UserFeedBack, setUserFeedBack] = useState({
    username: "",
    email: "",
    msg: "",
  });

  const HandlefeedBack = (e) => {
    setUserFeedBack({ ...UserFeedBack, [e.target.name]: e.target.value });
  };
  const handleSubmitFeedBack = async (e) => {
    e.preventDefault();
    if (!UserFeedBack.username || !UserFeedBack.email || !UserFeedBack.msg) {
      return toast.error("All Fields are required");
    } else {
      try {
        await addDoc(collection(db, "FeedBack"), {
          user: UserFeedBack.username,
          email: UserFeedBack.email,
          message: UserFeedBack.msg,
        });
        toast.success(
          `Form submitted successfully! Thank you!${UserFeedBack.username}`
        );
        setUserFeedBack({
          username: "",
          email: "",
          msg: "",
        });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <section className="body-font relative ">
        <div className="container px-5 py-24 mx-auto  mt-2 mb-6">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white ">
              FeedBack
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="name"
                    className="leading-7 text-sm dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={UserFeedBack.username}
                    onChange={HandlefeedBack}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={UserFeedBack.email}
                    onChange={HandlefeedBack}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm dark:text-white "
                  >
                    Message
                  </label>
                  <textarea
                    id="text"
                    type="text"
                    name="msg"
                    value={UserFeedBack.msg}
                    onChange={HandlefeedBack}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={handleSubmitFeedBack}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeedBack;
