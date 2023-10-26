/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import ContentWrapper from "./hoc/ContentWrapper";
import image from "../img/b.jpg";
import Filter from "./Filter";
import {
  AiOutlineWifi,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Banner = () => {
  // Create a ref for the section you want to scroll to
  const sectionRef = useRef(null);

  // Event handler for the button click
  const handleButtonClick = () => {
    // Use scrollIntoView to scroll to the section
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <ContentWrapper>
        <div className="flex justify-between  items-center p-6 h-[80vh] ">
          <div className="w-[50%] p-6     ">
            <h1
              style={{ lineHeight: "0.9" }}
              className="text-[3rem]  font-extrabold text-gray-800 "
            >
              <span className="text-violet-700  italic ">Discover</span> <br />{" "}
              <span className="text-[#847222]">
                {" "}
                the Beautiful Place with us!
              </span>{" "}
            </h1>
            <p className="mt-4 text-sm text-gray-300 font-semibold">
              Whether you're planning a romantic getaway, a family vacation, or
              a business trip, we've got the perfect lodging options to cater to
              your unique needs. With our easy-to-use booking platform, you can
              secure your ideal stay in just a few clicks.
            </p>

            <button
              onClick={handleButtonClick}
              className="px-[70px]  my-4 py-3 bg-[#1acd81] text-xl text-white rounded-2xl hover:bg-violet-400 hover:scale-105 duration-300 flex items-center justify-center gap-1 text-center"
            >
              Explore <AiOutlineArrowRight className=" mt-1" />
            </button>
          </div>
          <div className="w-[50%]  flex justify-center ">
            <div className="w-[100%] flex justify-center">
              <dotlottie-player
                src="https://lottie.host/174a52f8-5f97-42fc-8e6b-46cab99ed194/sIZhSj7FEu.json"
                background="transparent"
                speed="1"
                style={{ width: "400px", height: "300px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
        </div>
        <Filter r={sectionRef} />
      </ContentWrapper>
    </>
  );
};

export default Banner;
