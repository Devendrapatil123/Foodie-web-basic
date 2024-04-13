import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Service({Add}) {
  const [getProductsList, setProductsList] = useState([]);

  useEffect(() => {
    const getRescipes = async () => {
      const res = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setProductsList(res.data.categories);
    };
    getRescipes();
  }, []);


  return (
    <>
      <div className="flex gap-4 flex-wrap justify-around mt-3 mb-3 ">
        {getProductsList.slice(0, 12).map((getrecipe) => (
          <div
            key={getrecipe.idCategory}
            className="  lg:w-1/4 md:w-1/2  p-4 w-full h-full border-2 border-gray-100 border-opacity-60 rounded-lg overflow-hidden shadow-xl transition ease-in-out delay-150  bg-white "
          >
            <Link>
              <img
                className="block relative h-48 rounded overflow-hidden hover:scale-110 hover:transition duration-700"
                src={getrecipe.strCategoryThumb}
                alt="foods"
              />
            </Link>
            <div className="mt-1">
              <h3 className="text-gray-900  font-semibold text-xl  tracking-tight dark:text-black mt-2 text-center">
                Name : {getrecipe.strCategory}
              </h3>
              <div className=" items-center">
                <button
                  className=" text-xl bg-blue-800  hover:bg-blue-800 focus:ring-4 focus:ring-blue-700 dark:focus:ring-blue-800 px-5 py-2.5  font-medium rounded-md text-white ring-1 ring-inset ring-blue mt-3 w-full text-center"
                   onClick={() => Add(getrecipe)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Service;
