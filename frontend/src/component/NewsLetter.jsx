/* eslint-disable no-unused-vars */
import React from "react";
import ContentWrapper from "./hoc/ContentWrapper";
import em from "../img/gmail.png";
import send from "../img/Send.svg";

import { BsFillSendFill } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="news p-[70px] w-[100%] bg-[#dafeef]  text-white mb-6">
      <ContentWrapper>
        <div
          style={{
            boxShadow: "rgba(0,0,0,0.3) 0px 7px 29px 0px",
            position: "sticky",
          }}
          className="flex bg-[#81f4c3]   w-[80vw] flex-col items-center gap-4 p-5 rounded-xl"
        >
          <h1 className="text-center font-bold text-3xl flex gap-2 items-center ">
            Subscribe Us to get the latest Offer or Service!
            <BsFillSendFill />
          </h1>
          <div className="w-[450px] border gap-3 rounded-2xl flex items-center bg-gray-100 ">
            <img src={em} className="w-[30px] h-[30px] ml-3" alt="" />
            <input
              className="border-none text-lg  w-[100%] outline-none py-3 px-3 rounded-2xl text-black"
              type="text"
              placeholder="Enter Your Email.."
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default NewsLetter;
