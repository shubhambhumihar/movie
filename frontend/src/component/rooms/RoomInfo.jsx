/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import ContentWrapper from "../hoc/ContentWrapper";
import image from "../../img/b.jpg";
import {
  AiOutlineWifi,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FcElectricity, FcCancel } from "react-icons/fc";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import {
  BsKeyboard,
  BsFillHouseAddFill,
  BsArrowUpRightCircle,
} from "react-icons/bs";
import { GiGreenPower } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { FaAmazonPay } from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";
import ContentWrapper from "../../component/hoc/ContentWrapper";
// import { images } from "../../roomdata";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getSingleRoom } from "../../features/rooms/roomSlice";
import Loading from "../Loading";
import Error from "../Error";

const RoomInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [fromDate, setFromDate] = useState(location?.state?.fromDate);
  const [toDate, setToDate] = useState(location?.state?.toDate);
  const navigate = useNavigate();

  const [isOnline, setIsOnline] = useState(navigator.onLine); // Initial online status

  // Function to update online status
  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };

  const getRoomId = location.pathname.split("/")[3];

  const { singleRoom, isLoading, isSuccess, isError } = useSelector(
    (state) => state.room
  );

  const roomData = singleRoom?.room;

  function truncateDescription(description, maxWords) {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return description;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    // Add event listeners for online and offline events
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  useEffect(() => {
    dispatch(getSingleRoom(getRoomId));
  }, [getRoomId]);

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

  function handleClick() {
    if (fromDate.length > 0 && toDate.length > 0) {
      navigate("bookingdetails", { state: { fromDate, toDate } });
    } else {
      console.log("Dates not selected.");
      // You can show a message or take other actions here.
    }
  }
  return (
    <div className="p-8">
      {!isOnline ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : roomData ? (
        <ContentWrapper>
          <div className="flex gap-5 ">
            <div className=" flex-[0.4] mt-4">
              <img
                className="w-full rounded-2xl"
                src={roomData?.images[0]}
                alt=""
              />
              <div className="flex justify-between py-6">
                <div>
                  <h6 className="text-white ">Best Rooms at Best price</h6>
                  <h6 className="text-red-600 font-bold mt-2 flex gap-3 items-center">
                    <span className="text-amber-700 font-bold text-2xl ">
                      <FaAmazonPay />
                    </span>{" "}
                    Pay At Hotel{" "}
                  </h6>
                  <h6 className="text-blue-700 font-bold mt-2 flex gap-3 items-center">
                    <FcCancel />
                    Free Cancellation
                  </h6>
                </div>
                <span className="text-green-600 font-bold mt-2">
                  Total Beds - {roomData?.beds}{" "}
                </span>
              </div>
            </div>

            <div className=" flex-[0.6] p-4">
              <h1 className="text-white font-extrabold text-2xl leading-8">
                {roomData?.title}
              </h1>
              <p className="text-sm text-red-700 my-2">
                71, 3rd Cross Road, Koramangala 2nd Block, Koramangala,
                Bangalore
              </p>
              <h2 className="mt-3 text-white font-extrabold text-2xl ">
                Description
              </h2>
              <p className="text-sm text-gray-200 font-semibold mt-2">
                {truncateDescription(roomData?.desc, 100)}
              </p>
              <h4 className="mt-3 text-white font-extrabold text-2xl ">
                Amenties
              </h4>
              <div className="flex  flex-wrap">
                {" "}
                <div className="mt-3 w-[20%] flex gap-2 items-center">
                  <AiOutlineWifi className="text-orange-600 text-2xl" />{" "}
                  <span className="text-md text-white">WIFI</span>
                </div>
                <div className="mt-3  w-[20%] flex gap-2 items-center">
                  <FcElectricity className="text-2xl" />{" "}
                  <span className="text-md text-white">Electricity</span>
                </div>
                <div className="mt-3  w-[20%] flex gap-2 items-center">
                  <PiTelevisionSimpleBold className="text-pink-600 text-2xl" />{" "}
                  <span className="text-md text-white">TV</span>
                </div>
                <div className="mt-3  w-[20%] flex gap-2 items-center">
                  <BsKeyboard className="text-slate-600 text-2xl" />{" "}
                  <span className="text-md text-white">AC</span>
                </div>
                <div className="mt-3  w-[20%] flex gap-2 items-center">
                  <GiGreenPower className="text-violet-600 text-2xl" />{" "}
                  <span className="text-md text-white">Power Backup</span>
                </div>
                <div className="mt-3  w-[20%] flex gap-2 items-center">
                  <MdOutlineElevator className="text-green-600 text-2xl" />{" "}
                  <span className="text-md text-white">Elevator</span>
                </div>
                <div className="mt-3  w-[20%] flex gap-2 items-center">
                  <BsFillHouseAddFill className="text-orange-600 text-2xl" />{" "}
                  <span className="text-md text-white">In House Guest</span>
                </div>
              </div>

              <div className="flex flex-col mt-6 ">
                <h4 className="text-red-600 font-bold texy-xl">
                  RS/-{roomData?.pricePerNight}{" "}
                  <span className="text-decoration-line-through ml-2 text-sm">
                    5000
                  </span>{" "}
                  <span className="text-sm text-green-800">80% off</span>{" "}
                </h4>
                <p className="text-sm text-gray-500">per room per night</p>
              </div>
              {fromDate?.length > 0 && toDate?.length > 0 ? (
                <div className="mt-10">
                  <button
                    onClick={handleClick}
                    className="px-[40px] py-[8px] flex items-center gap-1 justify-center text-white bg-green-700 rounded-xl text-center font-bold"
                  >
                    Book Now
                    <AiOutlineArrowRight />
                  </button>
                </div>
              ) : (
                <Link
                  to="/"
                  className="px-[40px] py-[8px] mt-10 flex items-center gap-1 justify-center text-white bg-green-700 rounded-xl text-center font-bold"
                >
                  Select the Dates to Book Room
                  <AiOutlineArrowRight />
                </Link>
              )}
            </div>
          </div>

          {/* hotel gallary images */}
          <h1 className="text-gray-900 font-bold text-3xl mt-6">Gallery</h1>
          <div className="flex flex-col items-center gap-9 my-14">
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
                    src={roomData?.images[slideIndex]}
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
              {roomData?.images?.map((image, index) => {
                return (
                  <div className="w-[33%] " key="index">
                    <img
                      onClick={() => handleSlider(index)}
                      className="w-[100%] h-[100%] object-cover rounded-sm"
                      src={image}
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
              <p className="text-sm text-white">
                The COVID19 pandemic has made us all understand the importance
                of sanitization and not take it for granted. Rest assured, we
                have reached out to our partners to uphold the highest standards
                of sanitation and safety.
              </p>
            </div>
            <div>
              {fromDate?.length > 0 && toDate?.length > 0 ? (
                <button
                  onClick={handleClick}
                  className="px-[40px] py-[16px] rounded-lg bg-slate-800 text-white self-start"
                >
                  Book Now
                </button>
              ) : (
                <Link
                  to="/"
                  className="px-[40px] py-[16px] rounded-lg bg-slate-800 text-white self-start"
                >
                  Select the Dates to Book Room
                </Link>
              )}
            </div>
          </div>
        </ContentWrapper>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default RoomInfo;
