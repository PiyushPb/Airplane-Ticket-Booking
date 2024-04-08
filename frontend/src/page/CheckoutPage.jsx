import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const CheckoutPage = () => {
  return (
    <div className="bg-white h-[65vh] flex justify-center items-center">
      <div className="bg-white p-6 md:mx-auto">
        <FaCheck className="text-6xl text-green-500 text-center w-full" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thankyou for completing your secure online payment. Your payment has
            been successfully submitted.
          </p>
          <p>Have a nice day!</p>
          <div className="py-10 text-center">
            <Link
              to={"/"}
              className="px-12 bg-primaryColor rounded-md text-white font-semibold py-3"
            >
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
