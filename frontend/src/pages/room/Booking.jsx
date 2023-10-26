/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../../component/hoc/ContentWrapper";
import Loading from "../../component/Loading";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { getSingleRoom } from "../../features/rooms/roomSlice";
import { bookroom, getAllBookings } from "../../features/bookings/bookingSlice";
import StripeCheckout from "react-stripe-checkout";

const Booking = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getRoomId = location.pathname.split("/")[3];

  useEffect(() => {
    dispatch(getSingleRoom(getRoomId));
  }, [getRoomId]);

  const { singleRoom, isLoading, isSuccess, isError } = useSelector(
    (state) => state.room
  );

  const { user } = useSelector((state) => state.auth);
  const userInfo = user?.user;
  // console.log(userInfo);
  const roomData = singleRoom?.room;

  // !Find total days
  const fromdate = moment(location?.state?.fromDate, "DD-MM-YYYY");
  const todate = moment(location?.state?.toDate, "DD-MM-YYYY"); // Change 'YYYY-MM-DD' to your date format

  const totalDays = todate.diff(fromdate, "days") + 1;
  // console.log(totalDays);

  const fromDate = moment(location?.state?.fromDate, "DD-MM-YYYY").format(
    "DD-MM-YYYY"
  );
  const toDate = moment(location?.state?.toDate, "DD-MM-YYYY").format(
    "DD-MM-YYYY"
  );
  console.log(fromDate, toDate);

  const totalAmount = totalDays * roomData?.pricePerNight;

  async function handleBookRoomClick() {
    // !OBJECT OF BOOKING DETAILS
    const data = {
      room: roomData?._id,
      user: userInfo?._id,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
    };

    try {
      // dispatch(bookroom(data));
    } catch (error) {
      console.log(error.message);
    }
  }

  function truncateDescription(description, maxWords) {
    const words = description?.split(" ");
    if (words?.length > maxWords) {
      return words?.slice(0, maxWords).join(" ") + "...";
    } else {
      return description;
    }
  }

  function onToken(token) {
    console.log(token);
  }

  return (
    <div className="my-12 ">
      {isLoading ? (
        <Loading />
      ) : (
        <ContentWrapper>
          <div className="flex justify-between gap-12">
            <div className=" flex-[0.4] ">
              <img
                className="w-full rounded-2xl"
                src={roomData?.images[0]}
                alt=""
              />
              <h1 className="font-extrabold pb-1 text-xl mt-2 text-gray-200">
                {roomData?.title}{" "}
              </h1>
              <p className="pb-1 text-sm  text-gray-200">
                {truncateDescription(roomData?.desc, 30)}{" "}
              </p>
            </div>

            <div className="flex-[0.5] text-justify flex flex-col gap-1">
              <h1 className="font-extrabold pb-1 text-3xl text-gray-200">
                Booking Details
              </h1>
              <div className="w-[300px] h-[1px] bg-gray-400 "></div>

              <div className="my-2">
                <h1 className="font-bold text-gray-200">
                  Name:-{userInfo.name}{" "}
                </h1>
                <p className="font-bold text-gray-200">
                  {" "}
                  Email:-{userInfo.email}{" "}
                </p>
              </div>

              <div className="w-[200px] h-[1px] bg-gray-200 "></div>

              <p className="mt-1 text-justify text-xs text-white font-semibold">
                From Date -{" "}
                <span className="text-md text-white font-extrabold mr-2">
                  {location.state.fromDate}{" "}
                </span>{" "}
              </p>
              <p className="text-justify text-xs text-white font-semibold">
                To Date -{" "}
                <span className="text-md font-extrabold text-white mr-2">
                  {location.state.toDate}
                </span>{" "}
              </p>
              <div className="w-[200px] h-[1px] bg-gray-800 "></div>

              <h1 className="font-semibold pb-1 text-xs  text-gray-200">
                Total Count - 5
              </h1>
              <div className="w-[200px] h-[1px] bg-gray-800 "></div>

              <div className="my-2">
                <h1 className="font-bold text-gray-300">
                  Total Days -{" "}
                  <span className="text-gray-200">{totalDays}</span>
                </h1>

                <div className="my-3 bg-red-600 w-[40%] rounded-xl p-2">
                  <h1 className="font-bold text-white ">
                    Price Per Day -{" "}
                    <span className="text-white  font-bold">
                      Rs/{roomData?.pricePerNight}{" "}
                    </span>
                  </h1>
                  <h1 className="font-bold mt-1 text-white ">
                    Total Amount-{" "}
                    <span className=" text-white  font-bold">
                      Rs/{totalAmount}{" "}
                    </span>
                  </h1>
                </div>
              </div>
              <div className="w-[200px] mt-3">
                <StripeCheckout
                  token={onToken}
                  amount={totalAmount * 100}
                  currency="INR"
                  panelLabel="Pay"
                  name="Safe & Secure "
                  description="Payments"
                  stripeKey="pk_test_51MVB81SHGJsMiZ6R5FYBjpLo4HG2ujxYdXm6QytDfK8rsjgJJjRIxKy3n6DVyugsT27Rz1MHejKDeu0JiSzulwpt008gT540Yk"
                >
                  <button
                    onClick={handleBookRoomClick}
                    className="px-[20px] rounded-lg w-full py-[10px] bg-red-600 text-white"
                  >
                    Pay Now
                  </button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </ContentWrapper>
      )}
    </div>
  );
};

export default Booking;
