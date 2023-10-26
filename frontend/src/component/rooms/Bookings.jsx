/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import image from "../../img/b.jpg";
import ContentWrapper from "../hoc/ContentWrapper";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookingsOfUser } from "../../features/bookings/bookingSlice";
import BookingOfUser from "./BookingOfUser";
import no from "../../img/no.png";
import Loading from "../Loading";

const Bookings = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const userInfo = user?.user;
  // console.log(userInfo);
  const { bookingsOfUser, isLoading, isSuccess, isError } = useSelector(
    (state) => state.booking
  );

  // console.log(bookingsOfUser);
  useEffect(() => {
    dispatch(getAllBookingsOfUser(userInfo?._id));
  }, [userInfo?._id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookingsOfUser]);

  return (
    <ContentWrapper>
      <div
        style={{
          boxShadow: "#dfcac9 0px 2px 9px 0px",
          position: "sticky",
        }}
        className="flex flex-col p-10 gap-4 rounded-2xl bg-[#e7e1e1]  my-3 "
      >
        {!isLoading ? (
          bookingsOfUser?.length > 0 ? (
            bookingsOfUser?.map((booking) => {
              return <BookingOfUser key={booking._id} booking={booking} />;
            })
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-bold">No Bookings</h1>
              <img className="w-[300px] h-[300px]" src={no} alt="" />
            </div>
          )
        ) : (
          <Loading />
        )}
      </div>
    </ContentWrapper>
  );
};

export default Bookings;
