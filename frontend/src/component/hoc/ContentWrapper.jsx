/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div
      className="w-[100%] max-w-[1200px] contentWrapper "
      style={{ margin: "0 auto", padding: "0 20px" }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
