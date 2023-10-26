/* eslint-disable no-unused-vars */
import React from "react";
import ContentWrapper from "./hoc/ContentWrapper";

const Footer = () => {
  return (
    <div className="footer pt-[60px] px-[100px] pb-4 bg-[rgba(0,0,0,0.9)] text-white text-sm font-thin">
      <ContentWrapper>
        <div className="flex justify-around">
          <div>
            <ul className="flex flex-col gap-3">
              <li className="font-bold text-gray-300">Location</li>
              <li>Home</li>
              <li>Rooms</li>
              <li>Bookings</li>
              <li>City</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="font-bold text-gray-300">Location</li>
              <li>Contact</li>
              <li>Signup</li>
              <li>Login</li>
              <li>City</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="font-bold text-gray-300">Location</li>
              <li>Home</li>
              <li>Rooms</li>
              <li>Bookings</li>
              <li>City</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="font-bold text-gray-300">Location</li>
              <li className="">Home</li>
              <li>Rooms</li>
              <li>Bookings</li>
              <li>City</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-center font-extrabold  mt-5">
            Copyright @BookNow.com 2023
          </h2>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
