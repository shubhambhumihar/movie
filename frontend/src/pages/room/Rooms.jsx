/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cities from "../../component/cities/Cities";
import ContentWrapper from "../../component/hoc/ContentWrapper";
import Filter from "../../component/Filter";
import { FaWheelchair } from "react-icons/fa";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { useLocation } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the CSS file for Calendar
import { DatePicker, Space } from "antd";
import moment from "moment";
import { AiOutlineHome } from "react-icons/ai";
import { BsAirplaneEngines } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SearchPageResult from "./SearchPageResult";
import { useDispatch, useSelector } from "react-redux";
import { filterRooms, getAllRooms } from "../../features/rooms/roomSlice";
import Loading from "../../component/Loading";

const { RangePicker } = DatePicker;

const Rooms = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location);
  const [openOption, setOpenOption] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [fromDate, setFromDate] = useState(location.state.fromDate);
  const [toDate, setToDate] = useState(location.state.toDate);
  // const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  // console.log(destination);
  // console.log(date);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { rooms, isLoading, isSuccess, isError } = useSelector(
    (state) => state.room
  );

  const roomData = rooms?.rooms;

  // console.log(roomData);

  // console.log(fromDate);

  useEffect(() => {
    dispatch(filterRooms());
  }, []);

  // Handle date range selection
  const handleDateRangeChange = (dates, dateStrings) => {
    if (dateStrings) {
      const startDate = moment(dateStrings[0], "DD-MM-YYYY").format(
        "DD-MM-YYYY"
      );

      const endDate = moment(dateStrings[1], "DD-MM-YYYY").format("DD-MM-YYYY");
      setFromDate(startDate);
      setToDate(endDate);
    }
  };
  return (
    <div className="my-6 ">
      <ContentWrapper>
        <div>
          <div>
            <div
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                alignSelf: "start",
              }}
              className="flex rounded-xl  self-start p-8 gap-3 mb-6"
            >
              <div className=" flex-[0.5] border-spacing-1 border-2 self-start  rounded-lg">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <BsAirplaneEngines />{" "}
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Where To go"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="flex flex-[0.2] bg-white gap-1 items-center self-start  flex-col">
                <div
                  onClick={() => setOpenDate(!openDate)}
                  className=" border-spacing-1 border-2 py-2 px-2 text-gray-400 border-gray-300 text-sm w-[300px]  rounded-lg"
                >
                  <label>Check In Date</label>
                  <span> {`${fromDate} to ${toDate}`}</span>
                </div>
                {openDate && (
                  <div className="w-[100%]">
                    <RangePicker
                      open={true}
                      format="DD-MM-YYYY"
                      onChange={handleDateRangeChange}
                    />
                  </div>
                )}
              </div>

              <div className="headerSearchOption flex flex-[0.9] gap-2 py-1 px-2   border-spacing-1 border-1 self-start  rounded-lg ">
                <div className=" flex w-[25%]  items-center flex-col  gap-1">
                  <span className="text-xs text-white">Price(min)</span>
                  <input
                    className=" border w-[100%] pl-1 outline-none"
                    type="number"
                  />
                </div>
                <div className=" flex w-[25%]  items-center flex-col  gap-1">
                  <span className="text-xs text-white">Price(max)</span>
                  <input
                    className=" border w-[100%]  pl-1 outline-none"
                    type="number"
                  />
                </div>
                <div className=" flex w-[25%] items-center flex-col  gap-1">
                  <span className="text-xs text-white">Adult</span>
                  <input
                    min={1}
                    className=" border w-[100%] pl-1 outline-none"
                    type="number"
                  />
                </div>
                <div className=" flex w-[25%] items-center flex-col  gap-1">
                  <span className="text-xs text-white">Children</span>
                  <input
                    min={0}
                    className=" border w-[100%] pl-1 outline-none"
                    type="number"
                  />
                </div>
                <div className=" flex w-[25%] items-center flex-col  gap-1">
                  <span className="text-xs text-white">Room</span>
                  <input
                    min={1}
                    className=" border w-[100%] bg-transparent text-white pl-1 outline-none"
                    type="number"
                  />
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <button
                  // onClick={handleSearch}
                  className="px-[30px] ml-6  self-start py-[10px] bg-orange-600 text-white rounded-2xl hover:bg-violet-600 hover:scale-105 duration-300"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            roomData?.map((room) => {
              return (
                <SearchPageResult
                  key={room._id}
                  room={room}
                  fromDate={fromDate}
                  toDate={toDate}
                />
              );
            })
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Rooms;
