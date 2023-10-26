/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBookingDetails } from "../../features/bookings/bookingSlice";
import ContentWrapper from "../../component/hoc/ContentWrapper";
import avatar from "../../img/user-5.jpg";
import star from "../../img/Star.svg";
import {
  AiOutlineWifi,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { GiGreenPower } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { FaAmazonPay } from "react-icons/fa";
import { FcElectricity, FcCancel } from "react-icons/fc";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import {
  BsKeyboard,
  BsFillHouseAddFill,
  BsArrowUpRightCircle,
} from "react-icons/bs";
import { MdOutlineElevator } from "react-icons/md";

const SingleBookingDetails = () => {
  const location = useLocation();
  const getBookingId = location.pathname.split("/")[3];
  console.log(getBookingId);
  const dispatch = useDispatch();

  const { singleBooking, isLoading, isSuccess, isError } = useSelector(
    (state) => state.booking
  );

  console.log(singleBooking);

  // Check if user exists in localStorage and is not null
  const userString = localStorage.getItem("user");
  let user = null;

  if (userString) {
    user = JSON.parse(userString);
  }

  useEffect(() => {
    dispatch(getSingleBookingDetails(getBookingId));
  }, [getBookingId]);

  return (
    <ContentWrapper>
      <div className="flex justify-between gap-5 p-10">
        <div className="w-[40%]">
          <img
            className="hover:rounded-2xl rounded-sm"
            src={singleBooking?.booking?.room?.images[0]}
            alt=""
          />

          <h2 className="text-xl font-bold text-gray-900 px-4 py-2 mt-5 bg-pink-500 inline-block rounded-xl mb-2 ">
            Amenties
          </h2>
          <div className="flex  flex-wrap justify-between">
            {" "}
            <div className="mt-3 w-[25%] flex gap-2 items-center">
              <AiOutlineWifi className="text-orange-600 text-2xl" />{" "}
              <span className="text-md text-white">WIFI</span>
            </div>
            <div className="mt-3  w-[25%] flex gap-2 items-center">
              <FcElectricity className="text-2xl" />{" "}
              <span className="text-md text-white">Electricity</span>
            </div>
            <div className="mt-3 ml-2 w-[25%] flex gap-2 items-center">
              <PiTelevisionSimpleBold className="text-pink-600 text-2xl" />{" "}
              <span className="text-md text-white">TV</span>
            </div>
            <div className="mt-3  w-[25%] flex gap-2 items-center">
              <BsKeyboard className="text-white text-2xl" />{" "}
              <span className="text-md text-white">AC</span>
            </div>
            <div className="mt-3  w-[25%] flex gap-2 items-center">
              <GiGreenPower className="text-violet-600 text-2xl" />{" "}
              <span className="text-md text-white">Power Backup</span>
            </div>
            <div className="mt-3   w-[25%] flex gap-2 items-center">
              <MdOutlineElevator className="text-green-600 text-2xl" />{" "}
              <span className="text-md text-white">Elevator</span>
            </div>
            <div className="mt-3  w-[40%] flex gap-2 items-center">
              <BsFillHouseAddFill className="text-orange-600 text-2xl" />{" "}
              <span className="text-md text-white">In House Guest</span>
            </div>
          </div>
        </div>
        <div className=" w-[60%] flex gap-2 flex-col ">
          {/* <h1 className="font-bold text-2xl text-gray-800 mb-4">
            Booking Details
          </h1> */}

          <div className="shadow-2xl bg-[rgba(0,0,0,0.8)] flex gap-5 p-6 rounded-2xl">
            <img
              className="hover:rounded-2xl w-[100px] h-[100px]"
              src={avatar}
              alt=""
            />
            <div className="text-white">
              <h1 className="font-semibold">{user?.user?.name} </h1>
              <h1 className="text-sm">{user?.user?.email} </h1>
              <button className="px-4 py-2 mt-4 bg-pink-500 rounded-lg">
                Visit Profile
              </button>
            </div>
          </div>

          <div className="shadow-2xl bg-[rgba(0,0,0,0.8)] text-white rounded-2xl p-10">
            <h1 className="text-xl font-semibold text-white">
              {singleBooking?.booking?.room?.title}{" "}
            </h1>
            <div className="my-2">
              <h2 className="text-xl font-bold text-white">Description</h2>
              <p className="text-sm">{singleBooking?.booking?.room?.desc}</p>
            </div>

            <div className="flex gap-1">
              <div className="my-2 rounded-md bg-[rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-2 w-[30%]">
                <h2 className="text-xl font-bold text-white">Room Type</h2>
                <p className="w-[100px] mt-1 text-center rounded-lg bg-red-500 p-1">
                  {singleBooking?.booking?.room?.roomType}
                </p>
              </div>
              <div className="my-2 rounded-md bg-[rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-2 w-[30%]">
                <h2 className="text-xl font-bold text-white">Beds</h2>
                <p className="w-[40px] mt-1 h-[40px] flex justify-center items-center text-center rounded-full bg-purple-500 p-1">
                  {singleBooking?.booking?.room?.beds}
                </p>
              </div>
              <div className="my-2 rounded-md bg-[rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-2 w-[30%]">
                <h2 className="text-xl font-bold text-white">Max people</h2>
                <p className="w-[40px] mt-1 h-[40px] flex justify-center items-center text-center rounded-full bg-purple-500 p-1">
                  {singleBooking?.booking?.room?.maxPeople}
                </p>
              </div>
            </div>

            <div className="">
              <h2 className="text-xl font-bold text-white">Rating</h2>
              <div className="flex mt-2">
                <p className="w-[30px] mt-1 h-[30px] flex justify-center items-center text-center rounded-full bg-purple-500 p-1">
                  {singleBooking?.booking?.room?.rating}
                </p>
                <span>
                  <img className="w-[10px]" src={star} alt="" />
                </span>
              </div>
            </div>
          </div>

          <div className="shadow-2xl inline-block bg-[rgba(0,0,0,0.8)] flex  justify-between gap-5 p-6 rounded-2xl">
            <div className="text-white flex flex-col items-center gap-2">
              <div className="text-sm italic">
                {singleBooking?.booking?.fromDate}
              </div>
              <h1>TO</h1>

              <div className="text-sm italic">
                {singleBooking?.booking?.toDate}
              </div>
            </div>

            <div className="text-white">
              <h1 className="font-semibold">{} </h1>
              <h1 className="text-sm">
                Total Amount Rs/{singleBooking?.booking?.totalAmount}{" "}
              </h1>
              <div className="flex justify-center items-center mt-2 gap-2">
                <button className="px-4 py-2 mt-1 bg-green-500 rounded-lg">
                  Confirmed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default SingleBookingDetails;
