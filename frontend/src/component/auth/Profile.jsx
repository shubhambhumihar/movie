/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ContentWrapper from "../hoc/ContentWrapper";
import RoomInfo from "../rooms/RoomInfo";
import image from "../../img/user-5.jpg";
import em from "../../img/gmail.png";
import Bookings from "../rooms/Bookings";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPersonFill } from "react-icons/bs";
import { getAllBookingsOfUser } from "../../features/bookings/bookingSlice";
import Loading from "../Loading";
import no from "../../img/no.png";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError } = useSelector(
    (state) => state.auth
  );
  const { bookingsOfUser } = useSelector((state) => state.booking);

  const profileUser = user?.user;

  useEffect(() => {
    dispatch(getAllBookingsOfUser(profileUser?._id));
  }, [profileUser?._id]);
  // console.log(profileUser);

  return (
    <ContentWrapper>
      <div className="p-6 flex   ">
        <div className=" shadow-2xl flex-[0.3] h-[70vh] sticky top-[5rem] left-0  mt-20 border p-10 bg-[#edefd8] rounded-xl">
          <img src={image} className="w-[200px] h-[200px] rounded-3xl" alt="" />
          <h1 className="flex gap-2 items-center text-xl text-green-600 mt-4 ">
            <BsFillPersonFill /> {profileUser?.name}
          </h1>
          <h1 className="flex items-center text-xl  gap-2 text-green-600 ">
            <img src={em} className="w-[15px] h-[15px] text-green-600" alt="" />
            {profileUser?.email}
          </h1>

          <button className="bg-[#3c4225] text-white px-[20px] py-[8px] mt-3 rounded-lg">
            Logout
          </button>
        </div>
        <div className="flex-[0.7] my-6">
          <h1 className="font-extrabold text-2xl pl-10 text-[#356169] mb-6">
            My Booking
          </h1>
          {!isLoading ? (
            bookingsOfUser?.length > 0 ? (
              bookingsOfUser?.map((booking) => {
                return <Bookings key={booking._id} booking={booking} />;
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
      </div>
    </ContentWrapper>
  );
};

export default Profile;
