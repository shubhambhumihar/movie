/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ContentWrapper from "../hoc/ContentWrapper";
import { data } from "../../roomdata";
import Room from "./Room";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../../features/rooms/roomSlice";

// console.log(data);

const Rooms = () => {
  const dispatch = useDispatch();

  const { rooms, isLoading, isSuccess, isError } = useSelector(
    (state) => state.room
  );

  const roomData = rooms?.rooms;

  // Use slice to limit the number of rooms to 4
  const limitedRoomData = roomData ? roomData.slice(0, 4) : [];
  // console.log(roomData);

  useEffect(() => {
    dispatch(getAllRooms());
  }, []);

  return (
    <div className=" ">
      <ContentWrapper>
        <h1 className="font-bold text-3xl underline underline-offset-4 text-gray-900 pl-10 mt-2">
          Our Luxuary Rooms
        </h1>
        <div className="flex my-10 justify-center flex-wrap gap-4 ">
          {limitedRoomData?.map((room) => {
            return <Room key={room._id} data={room} />;
          })}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Rooms;
