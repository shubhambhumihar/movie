/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ContentWrapper from "../hoc/ContentWrapper";
import image from "../../img/b.jpg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Room = ({ data }) => {
  const {
    rating,
    roomType,
    beds,
    desc,
    images,
    maxPeople,
    title,
    pricePerNight,
  } = data;
  console.log(rating);
  const bg = rating >= 4 ? "green" : "red";
  return (
    <Link
      to={`rooms/room/${data._id}`}
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
      className="w-[22%] rounded-xl py-2 hover:scale-105 duration-500 cursor-pointer"
    >
      <ContentWrapper>
        <div className="">
          <Col xs={8} md={12}>
            <Image src={images[0]} rounded />
          </Col>

          <div className="py-3 bg-[#effef7] px-2">
            <h1 className="font-extrabold">{title} </h1>
            <h2 className="text-sm leading-4 my-4">{desc}</h2>

            <div className="flex items-center gap-3">
              <div
                className={`border px-3 py-2 ${
                  rating >= 4 ? "bg-green-500" : "bg-red-700"
                } flex justify-center items-center text-white rounded-xl`}
              >
                {rating}*
              </div>
              <p className="text-xs text-violet-600 font-bold">20 Ratings</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <h4 className="font-bold text-red-500 text-[1.2rem]">
                RS/- {pricePerNight}{" "}
              </h4>
              <button className="px-[16px] rounded-xl py-[6px] bg-green-600 text-white text-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </Link>
  );
};

export default Room;
