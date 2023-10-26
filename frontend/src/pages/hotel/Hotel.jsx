/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import ContentWrapper from "../hoc/ContentWrapper";
import image from "../../img/b.jpg";
import {
  AiOutlineWifi,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FcElectricity } from "react-icons/fc";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BsKeyboard, BsFillHouseAddFill } from "react-icons/bs";
import { GiGreenPower } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { MdOutlineElevator } from "react-icons/md";
import ContentWrapper from "../../component/hoc/ContentWrapper";
import { images } from "../../roomdata";

const Hotel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);

  const handleSlider = (index) => {
    setSlideIndex(index);
    setOpenSlide(true);
  };

  const handleSlideMove = (dir) => {
    let idx;
    if (dir === "l") {
      idx = slideIndex == 0 ? 8 : slideIndex;
      setSlideIndex(idx - 1);
    } else if (dir === "r") {
      idx = slideIndex == 8 ? 0 : slideIndex;
      setSlideIndex(idx + 1);
    }
  };
  return (
    <div className="p-8">
      <ContentWrapper>
        <div className="flex gap-5 ">
          <div className=" flex-[0.4] mt-4">
            <img className="w-full rounded-2xl" src={image} alt="" />
            <h6 className="text-gray-600 mt-3">Best Rooms at Best price</h6>
            <h6 className="text-red-600 font-bold mt-2">Pay At Hotel</h6>
            <h6 className="text-red-600 font-bold mt-2">Free Cancellation</h6>
          </div>

          <div className=" flex-[0.6] p-4">
            <h1 className="text-gray-800 font-extrabold text-2xl leading-8">
              Townhouse OAK SRK White Inn Near Ragigudda Sri Prasanna
              Anjaneyaswamy Temple
            </h1>
            <p className="text-sm text-red-700 my-2">
              71, 3rd Cross Road, Koramangala 2nd Block, Koramangala, Bangalore
            </p>
            <h2 className="mt-3 text-gray-800 font-extrabold text-2xl ">
              Description
            </h2>
            <p className="text-sm text-gray-500 font-semibold mt-2">
              Featuring a range of amenities, from CCTV Cameras to In-house
              restaurant, Townhouse OAK White Inn is the perfect spot for you to
              spend your next vacation. With an affordable price tag and
              exceeding guest expectations with every stay, this is the only
              place you need to go.
            </p>
            <h4 className="mt-3 text-gray-800 font-extrabold text-2xl ">
              Amenties
            </h4>
            <div className="flex  flex-wrap">
              {" "}
              <div className="mt-3 w-[20%] flex gap-2 items-center">
                <AiOutlineWifi className="text-orange-600 text-2xl" />{" "}
                <span className="text-md">WIFI</span>
              </div>
              <div className="mt-3  w-[20%] flex gap-2 items-center">
                <FcElectricity className="text-2xl" />{" "}
                <span className="text-md">Electricity</span>
              </div>
              <div className="mt-3  w-[20%] flex gap-2 items-center">
                <PiTelevisionSimpleBold className="text-pink-600 text-2xl" />{" "}
                <span className="text-md">TV</span>
              </div>
              <div className="mt-3  w-[20%] flex gap-2 items-center">
                <BsKeyboard className="text-slate-600 text-2xl" />{" "}
                <span className="text-md">AC</span>
              </div>
              <div className="mt-3  w-[20%] flex gap-2 items-center">
                <GiGreenPower className="text-violet-600 text-2xl" />{" "}
                <span className="text-md">Power Backup</span>
              </div>
              <div className="mt-3  w-[20%] flex gap-2 items-center">
                <MdOutlineElevator className="text-green-600 text-2xl" />{" "}
                <span className="text-md">Elevator</span>
              </div>
              <div className="mt-3  w-[20%] flex gap-2 items-center">
                <BsFillHouseAddFill className="text-orange-600 text-2xl" />{" "}
                <span className="text-md">In House Guest</span>
              </div>
            </div>

            <div className="mt-10">
              <button className="px-[40px] py-[8px] text-white bg-green-700 rounded-xl text-center font-bold">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* hotel gallary images */}
        <div className="flex flex-col items-center gap-9">
          {openSlide && (
            <div className="sticky top-0 left-0 w-[96vw] h-[100vh] z-[999] flex items-center bg-slate-200">
              <GiCancel
                onClick={() => setOpenSlide(false)}
                className="absolute top-[20px] right-[100px] text-2xl cursor-pointer"
              />
              <AiOutlineArrowLeft
                className="ml-10 text-2xl cursor-pointer"
                onClick={() => handleSlideMove("l")}
              />
              <div className="slider w-[100%] h-[100%] flex justify-center items-center">
                <img
                  className="w-[80%] h-[80vh] "
                  src={images[slideIndex].src}
                  alt=""
                />
              </div>
              <AiOutlineArrowRight
                className="mr-10 text-2xl cursor-pointer"
                onClick={() => handleSlideMove("r")}
              />
            </div>
          )}
          <div className="flex flex-wrap">
            {images?.map((image, index) => {
              return (
                <div className="w-[33%] " key="index">
                  <img
                    onClick={() => handleSlider(index)}
                    className="w-[100%] h-[100%] object-cover"
                    src={image.src}
                    alt="hi"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-around my-6 items-center">
          <div className="flex-[0.6]">
            <h1 className="font-bold text-gray-900 pt-5 mb-2">
              Stay in the Finest Hotel
            </h1>
            <p className="text-sm ">
              The COVID19 pandemic has made us all understand the importance of
              sanitization and not take it for granted. Rest assured, we have
              reached out to our partners to uphold the highest standards of
              sanitation and safety.
            </p>
          </div>
          <div>
            <button className="px-[40px] py-[16px] rounded-lg bg-slate-800 text-white self-start">
              Book Now
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Hotel;
