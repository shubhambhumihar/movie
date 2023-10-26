/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ContentWrapper from "../hoc/ContentWrapper";
import { useNavigate } from "react-router-dom";

const BookingOfUser = ({ booking }) => {
  //   console.log(booking);
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/bookings/bookingdetails/${id}`);
  }
  return (
    <div onClick={() => handleClick(booking?._id)} className="cursor-pointer">
      <ContentWrapper>
        <div className="flex justify-between items-center w-[100%] border bg-[rgba(0,0,0,0.8)] text-white py-2 px-10 rounded-2xl">
          <div className="flex flex-col gap-2 w-[30%] ">
            <img
              className="w-[100px] h-[100px] rounded-xl"
              src={booking?.room?.images[1]}
              alt=""
            />
            <p className="text-sm">{booking?.room?.title}</p>
          </div>
          <div className="  w-[70%] flex justify-end ">
            <div className=" w-[70%] h-full p-4">
              <div className="mb-2">
                <h1 className="text-sm">From - {booking?.fromDate} </h1>
                <h1 className="text-sm">To - {booking?.toDate} </h1>
              </div>
              <h2 className=" text-center rounded-md font-bold bg-red-500 inline-block p-2 text-white">
                RS/ {booking?.totalAmount}{" "}
              </h2>
              <br />
              <p className="p-2 mt-2 inline-block text-center rounded-xl bg-green-600">
                {booking?.status}{" "}
              </p>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default BookingOfUser;
