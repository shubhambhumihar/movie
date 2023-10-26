/* eslint-disable no-unused-vars */
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import RoomInfo from "./component/rooms/RoomInfo";
import SignUp from "./component/auth/SignUp";
import Login from "./component/auth/Login";
import Profile from "./component/auth/Profile";
import Bookings from "./component/rooms/Bookings";
import Home from "./pages/home/Home";
// import Hotels from "./pages/hotel/hotels";
import Hotel from "./pages/hotel/Hotel";
import Footer from "./component/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbars from "./component/Navbars";
import Rooms from "./pages/room/Rooms";
import BookingDetails from "./pages/booking/BookingDetails";
import { AiOutlineArrowUp } from "react-icons/ai";
import Booking from "./pages/room/Booking";
import SingleBookingDetails from "./pages/booking/SingleBookingDetails";

function App() {
  const location = useLocation();

  // console.log(location.pathname);

  const showNavbar =
    location.pathname !== "/signup" && location.pathname !== "/login";
  const showfooter =
    location.pathname !== "/signup" && location.pathname !== "/login";
  function goTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      {showNavbar && <Navbars />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/rooms" element={<Hotels />} /> */}
        <Route path="/rooms" element={<Rooms />} />
        {/* <Route path="/hotel/:id" element={<Hotel />} /> */}

        <Route path="/rooms/room/:id" element={<RoomInfo />} />

        <Route path="/rooms/room/:id/bookingdetails" element={<Booking />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route
          path="/bookings/bookingdetails/:id"
          element={<SingleBookingDetails />}
        />
      </Routes>
      {showfooter && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />

      <div
        onClick={goTop}
        className="fixed cursor-pointer  w-[50px] h-[50px] rounded-full bottom-10 right-10  bg-[#0fa968] text-white flex justify-center items-center"
      >
        <AiOutlineArrowUp />
      </div>
    </>
  );
}

export default App;
