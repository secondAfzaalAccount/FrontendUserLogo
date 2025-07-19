import React, { useState } from "react";
import Title from "../Components/Title";
import { FaAngleRight } from "react-icons/fa6";

const Orders = () => {
  const [productDetails, setproductDetails] = useState(false);
  const [addressDetails, setaddressDetails] = useState(false);

  return (
    <div className="w-full min-h-screen p-4 bg-gray-50">
      <Title text1="Your" text2="Orders" />

      <div className="flex flex-col md:flex-row justify-around gap-4  bg-white rounded-lg p-4 shadow-md">
        {/* product image*/}
        <div className="flex justify-center items-center">
          <img
            src="https://i.pinimg.com/736x/0e/b4/e2/0eb4e20d73f9a6427728d3d0ab762c84.jpg"
            alt="Payment Logo"
            className="w-15 sm:w-40 md:w-48 lg:w-56 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Product Details */}
        <div>
          <div className="font-bold mb-1 flex gap-2 justify-center items-center text-black ">
            <h1>Product Details:</h1>
            <FaAngleRight
              onClick={() => setproductDetails((prev) => !prev)}
              className={`${
                !productDetails ? "" : "rotate-90"
              } text-gray-400 transition-all duration-75 cursor-pointer`}
            />
          </div>

          <div className={`${productDetails ? "block" : "hidden"}`}>
            <p className="text-sm text-black flex gap-2">
              Name:
              <h2 className="font-semibold text-black ">Product Name</h2>
            </p>

            <p className="text-sm text-black flex gap-2">
              Size:
              <h2 className="font-semibold text-black ">M</h2>
            </p>

            <p className="text-sm text-black flex gap-2">
              Quantity:
              <h2 className="font-semibold text-black ">1</h2>
            </p>

            <p className="text-sm text-black flex gap-2">
              Order Placed on:
              <h2 className="font-semibold text-black ">6 july 25</h2>
            </p>
          </div>
        </div>

        {/* Address Details */}
        <div>
          <div className="font-bold mb-1 flex justify-center items-center gap-2 text-black">
            <h1>Address Details:</h1>
            <FaAngleRight
              onClick={() => setaddressDetails((prev) => !prev)}
              className={`${
                !addressDetails ? "" : "rotate-90"
              } text-gray-400 transition-all duration-75  cursor-pointer`}
            />
          </div>

          <div
            className={`${
              addressDetails ? "block" : "hidden"
            } text-sm text-gray-600 space-y-1"`}
          >
            <p className="text-gray-500 flex gap-2">
              First Name:
              <h2 className="text-black font-semibold">waqas</h2>
            </p>

            <p className="text-gray-500 flex gap-2">
              Last Name:
              <h2 className="text-black font-semibold">abbas</h2>
            </p>

            <p className="text-gray-500 flex gap-2">
              Email:
              <h2 className="text-black font-semibold">waqas@gmail.com</h2>
            </p>

            <p className="text-gray-500 flex gap-2">
              Street:
              <h2 className="text-black font-semibold">23</h2>
            </p>

            <p className="text-gray-500 flex gap-2">
              City:
              <h2 className="text-black font-semibold">Islamabad</h2>
            </p>

            <p className="text-gray-500 flex gap-2">
              Province:
              <h2 className="text-black font-semibold">Punjab</h2>
            </p>

            <p className="text-gray-500 flex gap-2">
              Zip Code:
              <h2 className="text-black font-semibold">2343</h2>
            </p>

            <p className="text-gray-500 flex gap-2">
              Country:
              <h2 className="text-black font-semibold">Pakistan</h2>
            </p>

            <p className="text-gray-500 flex gap-2">
              Phone:
              <h2 className="text-black font-semibold">03475447879</h2>
            </p>
          </div>
        </div>

        {/* Price & Track Button */}

        <div className="">
          <h2 className="font-bold text-black">Price</h2>
          <p className="text-xl text-green-600 font-bold">Rs. 3,000</p>
        </div>

        <div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
