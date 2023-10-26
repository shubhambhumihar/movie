/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ContentWrapper from "./hoc/ContentWrapper";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "react-calendar/dist/Calendar.css"; // Import the CSS file for Calendar
import { DatePicker, Space } from "antd";
import moment from "moment";
import { AiOutlineHome } from "react-icons/ai";
import { BsAirplaneEngines } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import "antd/dist/antd.css";

const { RangePicker } = DatePicker;

const Filter = (props) => {
  const navigate = useNavigate();
  // const [dateRange, setDateRange] = useState([]);
  const [fromDate, setFromDate] = useState([]);
  const [toDate, setToDate] = useState([]);
  const [destination, setDestination] = useState("");

  // const [date, setDate] = useState([
  //   {
  //     fromDate: new Date(),
  //     toDate: new Date(),
  //   },
  // ]);

  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

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

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation == "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/rooms", { state: { destination, fromDate, toDate, options } });
  };

  return (
    <div className="p-4 relative" ref={props.r}>
      <ContentWrapper>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          className="flex rounded-xl justify-center items-center p-6 gap-3 bg-[#e15252]"
        >
          <div className=" border-spacing-1 border-2 border-gray-300 rounded-lg">
            <InputGroup>
              <InputGroup.Text
                style={{ backgroundColor: "#f5acac", color: "black" }}
                id="basic-addon1"
              >
                <BsAirplaneEngines style={{ backgroundColor: "#f5acac" }} />{" "}
              </InputGroup.Text>
              <Form.Control
                style={{ backgroundColor: "#f5acac", color: "black" }}
                placeholder="Where To go"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setDestination(e.target.value)}
              />
            </InputGroup>
          </div>
          <div
            style={{ backgroundColor: "#f5acac", color: "black" }}
            className=" border-spacing-1 border-2 border-gray-300  rounded-lg"
          >
            <RangePicker
              style={{ backgroundColor: "#f5acac", color: "black" }}
              className=" "
              format="DD-MM-YYYY"
              onChange={handleDateRangeChange}
            />{" "}
            {/* //use moment js to get date in desired format */}
          </div>
          <div
            style={{ backgroundColor: "#f5acac" }}
            className="headerSearchOption  border-spacing-1 border-2 border-gray-300 rounded-lg  flex gap-2  items-center  py-2 px-2 "
          >
            <BsFillPersonFill />
            <span
              onClick={() => setOpenOption(!openOption)}
              className="text-sm text-black cursor-pointer"
            >
              {`${options.adult} adult . ${options.children} children . ${options.room} room `}{" "}
            </span>
            {openOption && (
              <div
                style={{ backgroundColor: "#f5acac" }}
                className="options absolute top-[160px]  bg-white flex flex-col gap-3 p-10 z-[1000] shadow-xl shadow-blue-100 rounded-xl"
              >
                <div
                  style={{ backgroundColor: "#f5acac" }}
                  className="w-[200px] flex justify-between items-center"
                >
                  <span className="font-bold text-pink-600">Adult</span>
                  <div className="flex gap-3 items-center">
                    <button
                      disabled={options.adult <= 1}
                      onClick={() => handleOption("adult", "d")}
                      className="w-[30px] h-[30px] bg-yellow-600 text-white text-center rounded-md  disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                    <span className="font-bold text-white text-xl">
                      {options.adult}{" "}
                    </span>
                    <button
                      onClick={() => handleOption("adult", "i")}
                      className="w-[30px] h-[30px] bg-yellow-600 text-white text-center rounded-md text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="w-[200px] flex justify-between items-center">
                  <span className="font-bold text-pink-600">Children</span>
                  <div className="flex gap-3 items-center">
                    <button
                      disabled={options.children <= 1}
                      onClick={() => handleOption("children", "d")}
                      className="w-[30px] h-[30px] bg-yellow-600 text-white text-center rounded-md disabled:cursor-not-allowed "
                    >
                      -
                    </button>
                    <span className="font-bold text-gray-950 text-xl">
                      {options.children}{" "}
                    </span>
                    <button
                      onClick={() => handleOption("children", "i")}
                      className="w-[30px] h-[30px] bg-yellow-600 text-white text-center rounded-md text-sm "
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="w-[200px] flex justify-between items-center">
                  <span className="font-bold text-pink-600">Room</span>
                  <div className="flex gap-3 items-center">
                    <button
                      disabled={options.room <= 1}
                      onClick={() => handleOption("room", "d")}
                      className="w-[30px] h-[30px] bg-yellow-600 text-white text-center rounded-md disabled:cursor-not-allowed "
                    >
                      -
                    </button>
                    <span className="font-bold text-gray-950 text-xl">
                      {options.room}{" "}
                    </span>
                    <button
                      onClick={() => handleOption("room", "i")}
                      className="w-[30px] h-[30px] bg-yellow-600 text-white text-center rounded-md text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={handleSearch}
            className="px-[30px] ml-6  my-4 py-[10px] bg-purple-600 text-white rounded-2xl hover:bg-violet-600 hover:scale-105 duration-300"
          >
            Search
          </button>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Filter;
