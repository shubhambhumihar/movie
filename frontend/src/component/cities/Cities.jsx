/* eslint-disable no-unused-vars */
import React from "react";
import ContentWrapper from "../hoc/ContentWrapper";

const Cities = () => {
  return (
    <div>
      <ContentWrapper>
        <h1 className="text-2xl font-bold text-gray-950 pt-6 ml-7">Cities</h1>
        <div className="">
          <div className="w-full flex justify-self-start  gap-6 py-6 flex-wrap mx-8">
            <div className="relative cursor-pointer hover:scale-105 duration-150 w-[22%]">
              <img
                className="rounded-lg opacity-90"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490848679.jpg?k=7b7a14abe28a36753773ad2374334440fc280c79616c5a46943a09306ab3e0d9&o=&hp=1"
                alt=""
              />
              <div className="absolute bottom-[3rem] left-[1rem] text-white">
                <h1 className="font-extrabold text-2xl ">Kolkata</h1>
                <h2 className="font-bold text-sm ">123 properties</h2>
              </div>
            </div>
            <div className="relative cursor-pointer  hover:scale-105 duration-150  w-[22%]">
              <img
                className="rounded-lg opacity-90"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490848621.jpg?k=69db28ece8c2ba4b77e2ca6935a2d847799a3e828bc2e5719fb579b557d589a6&o=&hp=1"
                alt=""
              />
              <div className="absolute bottom-[3rem] left-[1rem] text-white">
                <h1 className="font-extrabold text-2xl ">Mumbai</h1>
                <h2 className="font-bold text-sm">123 properties</h2>
              </div>
            </div>
            <div className="relative cursor-pointer  hover:scale-105 duration-150  w-[22%]">
              <img
                className="rounded-lg opacity-90"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490848620.jpg?k=26f42aec5ae2bdbef8390721e8abc20a456b2e619b76a0036aefc913e7c1ffaa&o=&hp=1"
                alt=""
              />
              <div className="absolute bottom-[3rem] left-[1rem] text-white">
                <h1 className="font-extrabold text-2xl ">Kolkata</h1>
                <h2 className="font-bold text-sm ">123 properties</h2>
              </div>
            </div>
            <div className="relative cursor-pointer  hover:scale-105 duration-150  w-[22%]">
              <img
                className="w-full object-cover rounded-lg opacity-90"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490848679.jpg?k=7b7a14abe28a36753773ad2374334440fc280c79616c5a46943a09306ab3e0d9&o=&hp=1"
                alt=""
              />
              <div className="absolute bottom-[3rem] left-[1rem] text-white">
                <h1 className="font-extrabold text-2xl ">Kolkata</h1>
                <h2 className="font-bold text-sm">123 properties</h2>
              </div>
            </div>
            <div className="relative cursor-pointer  hover:scale-105 duration-150  w-[22%]">
              <img
                className="w-full object-cover rounded-lg opacity-90"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490848679.jpg?k=7b7a14abe28a36753773ad2374334440fc280c79616c5a46943a09306ab3e0d9&o=&hp=1"
                alt=""
              />
              <div className="absolute bottom-[3rem] left-[1rem] text-white">
                <h1 className="font-extrabold text-2xl ">Hyderabad</h1>
                <h2 className="font-bold text-sm">123 properties</h2>
              </div>
            </div>
            <div className="relative cursor-pointer  hover:scale-105 duration-150  w-[22%]">
              <img
                className="w-full object-cover rounded-lg opacity-90"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490848679.jpg?k=7b7a14abe28a36753773ad2374334440fc280c79616c5a46943a09306ab3e0d9&o=&hp=1"
                alt=""
              />
              <div className="absolute bottom-[3rem] left-[1rem] text-white">
                <h1 className="font-extrabold text-2xl ">Banglore</h1>
                <h2 className="font-bold text-sm">123 properties</h2>
              </div>
            </div>
            <div className="relative cursor-pointer  hover:scale-105 duration-150  w-[22%]">
              <img
                className="w-full object-cover rounded-lg opacity-90"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490848679.jpg?k=7b7a14abe28a36753773ad2374334440fc280c79616c5a46943a09306ab3e0d9&o=&hp=1"
                alt=""
              />
              <div className="absolute bottom-[3rem] left-[1rem] text-white">
                <h1 className="font-extrabold text-2xl ">Bengaluru</h1>
                <h2 className="font-bold text-sm">123 properties</h2>
              </div>
            </div>
            <div className="relative cursor-pointer  hover:scale-105 duration-150  w-[22%]">
              <img
                className="w-full object-cover rounded-lg opacity-90"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490848679.jpg?k=7b7a14abe28a36753773ad2374334440fc280c79616c5a46943a09306ab3e0d9&o=&hp=1"
                alt=""
              />
              <div className="absolute bottom-[3rem] left-[1rem] text-white">
                <h1 className="font-extrabold text-2xl ">Karnataka</h1>
                <h2 className="font-bold text-sm">123 properties</h2>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Cities;
