/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaWheelchair } from "react-icons/fa";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchPageResult = ({ room, fromDate, toDate }) => {
  const {
    desc,
    rating,
    pricePerNight,
    title,
    maxPeople,
    images,
    amenties,
    beds,
    roomType,
  } = room;
  const navigate = useNavigate();

  function truncateDescription(description, maxWords) {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return description;
    }
  }

  // console.log(fromDate);
  return (
    <div
      onClick={() =>
        navigate(`room/${room._id}`, { state: { fromDate, toDate } })
      }
    >
      {" "}
      <div
        style={{
          boxShadow: "rgba(1, 100, 111, 0.6) 2px 7px 9px 2px",
          position: "sticky",
        }}
        className="rounded-2xl cursor-pointer mb-3"
      >
        <div className="flex p-10 gap-5">
          <div className="flex-[2]">
            <img className="w-[100%] rounded-xl" src={images[0]} alt="" />
          </div>
          <div className="flex-[3] flex flex-col gap-2">
            <h1 className="text-2xl font-extrabold text-gray-200">{title}</h1>
            <p className="text-sm font-semibold leading-3 italic text-gray-400">
              Plot No 58/9, Road Number 4, Block C, Mahipalpur Extension,
              Mahipalpur, New Delhi, Delhi 110037, Mahipalpur, 110037 New Delhi,
              India – Great location - show map
            </p>

            <p className="text-sm text-white">
              {truncateDescription(desc, 100)}
            </p>

            <div className="flex items-center gap-2 my-2">
              <p className="px-[10px] py-[8px] bg-teal-300 rounded-md text-white">
                {rating} *
              </p>{" "}
              <span className="text-sm font-semibold text-gray-200">
                (30) ratings
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <FaWheelchair className="text-orange-600 text-2xl" />
                <p className="text-xs text-white"> Hair Dryer</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <AiFillCar className="text-orange-600 text-2xl" />
                <p className="text-xs text-white">Free parking</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <AiOutlineWifi className="text-orange-600 text-2xl" />
                <p className="text-xs text-white">FREE WIFI</p>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-green-500">
                {roomType}
              </span>
              <p className="text-sm font-bold text-red-500">Cancel AnyTime</p>
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-col ">
                <h4 className="text-red-600 font-bold texy-xl">
                  RS/-{pricePerNight}{" "}
                  <span className="text-decoration-line-through ml-2 text-sm">
                    5000
                  </span>{" "}
                  <span className="text-sm text-green-800">80% off</span>{" "}
                </h4>
                <p className="text-sm text-gray-200">per room per night</p>
              </div>
              <div className="flex gap-2 ">
                <button className="px-[30px] py-[8px] bg-red-600 text-white rounded-lg">
                  View Details
                </button>
                {fromDate.length > 0 && toDate.length > 0 && (
                  <button className="px-[30px] py-[8px] bg-green-600 text-white rounded-lg">
                    Book Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPageResult;
