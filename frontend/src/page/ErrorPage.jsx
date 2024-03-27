import React from "react";
import errorImg from "../assets/images/404.png";

const ErrorPage = () => {
  return (
    <div className="w-full h-[60vh] md:h-[80vh]">
      <img src={errorImg} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default ErrorPage;
