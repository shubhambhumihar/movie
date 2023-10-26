/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Banner from "../../component/Banner";
import Rooms from "../../component/rooms/Rooms";
import NewsLetter from "../../component/NewsLetter";
import Cities from "../../component/cities/Cities";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner />
      <Rooms />
      <Cities />
      <NewsLetter />
    </div>
  );
};

export default Home;
