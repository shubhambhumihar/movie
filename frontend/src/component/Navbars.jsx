/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const Navbars = () => {
  const { user, isLoading, isSuccess, isError } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  // console.log(user);
  return (
    <div
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        position: "sticky",
      }}
      className="h-[10vh] flex bg-[rgba(0,0,0,0.9)]   justify-between px-10 items-center sticky top-0 left-0 z-[1000]"
    >
      <Link to="/" className="text-violet-500 font-extrabold text-2xl">
        BookNow
      </Link>
      <div className="flex gap-6 items-center ">
        {user && (
          <p className="p-[10px] rounded-lg text-sm text-white bg-gray-800">
            {" "}
            {user?.user?.name}{" "}
          </p>
        )}
        <Dropdown as={ButtonGroup}>
          {!user && (
            <Link to="/signup">
              <Button variant="success" className="bg-violet-600">
                Sign Up
              </Button>
            </Link>
          )}

          <Dropdown.Toggle
            split
            variant="success"
            id="dropdown-split-basic"
            className="bg-violet-600"
          />

          <Dropdown.Menu>
            <Dropdown.Item>
              {" "}
              <Link to="/profile">Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/bookings">Bookings</Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(logoutUser())}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbars;
