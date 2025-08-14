import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "../Components/Loader.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Orders = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.mySlice.token);

  const [productDetails, setproductDetails] = useState(""); //show/ hide prod details
  const [addressDetails, setaddressDetails] = useState(""); //show/ hide address details

  const [loading, setloading] = useState(false);
  const [userOrdersbyAPI, setuserOrdersbyAPI] = useState([]);

  const ordersHandler = async () => {
    setloading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/Orders/myOrders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setuserOrdersbyAPI(response.data.userOrders);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    ordersHandler();
  }, []);

  

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        <div className="w-full min-h-screen p-4 flex flex-col  gap-2 bg-gray-50">
          <Title text1="Your" text2="Orders" />

          {userOrdersbyAPI.length === 0 ? (
            <div className="text-gray-400 text-xl flex justify-center items-center w-full h-full">You don't have place any order yet!</div>

          ) : (
            <div className="w-full h-full flex gap-2 flex-col">
              {[...userOrdersbyAPI]?.reverse().map((order, index) => (
                <div
                  key={index}
                  className={`${
                    order.Status === "Delivered" ? "bg-gray-200" : "bg-white"
                  } flex relative flex-col   pt-11 md:flex-row border-[1px] border-gray-500 justify-around items-start gap-4   rounded-lg p-4 shadow-md `}
                >
                  {/* date */}
                  <h2 className="absolute left-2 flex flex-nowrap  top-2 font-semibold text-gray-300 text-sm">
                    <h2 className="">
                      Order No:
                      <span className="text-gray-500">{index + 1}</span>-{" "}
                    </h2>
                    {new Date(order.date).toLocaleString("en-US", {
                      weekday: "long",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true, // or false for 24-hour format
                    })}
                  </h2>

                  {/* Product Details */}
                  <div className="border-b-2 border-gray-300 md:border-b-0 pb-3">
                    <div className="font-bold mb-1  flex gap-2 justify-center items-center text-black ">
                      <h1>Product Details:</h1>
                      <FaAngleRight
                        onClick={() =>
                          setproductDetails((prev) =>
                            prev === index ? "" : (prev = index)
                          )
                        }
                        className={`${
                          productDetails === index ? "rotate-90" : ""
                        } text-gray-400 transition-all duration-75 cursor-pointer`}
                      />
                    </div>

                    {order.Cart.flat().map((product, i) => (
                      <div
                        key={i}
                        className={`${
                          productDetails === index ? "block" : "hidden"
                        } border-[1px] border-gray-300 rounded-md p-2 mb-2`}
                      >
                        {/* product image*/}
                        <div className="flex justify-center mb-3 items-center ">
                          <img
                            src={`${product.image[0]}`}
                            alt="Payment Logo"
                            className="w-15 sm:w-20 md:w-25 lg:w-30 object-cover rounded-md shadow-md"
                          />
                        </div>

                        <p className="text-sm text-gray-400 font-semibold flex gap-2">
                          Product Name:
                          <h2 className="font-semibold text-black ">
                            {product.name}
                          </h2>
                        </p>

                        <p className="text-sm text-gray-400 font-semibold flex gap-2">
                          Size:
                          <h2 className="font-semibold text-black ">
                            {product.Sizes}
                          </h2>
                        </p>

                        <p className="text-sm text-gray-400 font-semibold flex gap-2">
                          Order Placed on:
                          <h2 className="font-semibold text-black">
                            {new Date(order.date).toLocaleString("en-US", {
                              weekday: "long",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true, // or false for 24-hour format
                            })}
                          </h2>
                        </p>

                        <div className="flex gap-3 justify-start items-center">
                          <p className="text-sm text-gray-400  font-semibold flex gap-2">
                            Price:
                            <h2 className="font-semibold text-black ">
                              {product.price}
                            </h2>
                          </p>
                          <h4 className="text-sm">x</h4>

                          <p className="text-sm text-gray-400 font-semibold flex gap-2">
                            Quantity:
                            <h2 className="font-semibold text-black ">
                              {product.quantity}
                            </h2>
                          </p>

                          <h4 className="text-sm">=</h4>

                          <h2 className="font-semibold text-sm flex justify-center flex-wrap items-center gap-2 text-[var(--main-color)] ">
                            <h3 className="text-sm text-gray-400">Total:</h3>{" "}
                            {product.quantity * product.price}
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Address Details */}
                  <div className=" pb-1 max-h-[60vh] ">
                    <div className="font-bold pb-2 flex justify-center items-center gap-2 text-black">
                      <h1>Address Details:</h1>
                      <FaAngleRight
                        onClick={() =>
                          setaddressDetails((prev) =>
                            prev === index ? "" : (prev = index)
                          )
                        }
                        className={`${
                          addressDetails === index ? "rotate-90" : ""
                        } text-gray-400 transition-all duration-75  cursor-pointer`}
                      />
                    </div>

                    <div
                      className={`${
                        addressDetails === index ? "block" : "hidden"
                      } text-sm text-gray-600 space-y-1 flex flex-col gap-1 `}
                    >
                      <p className="text-gray-400 font-semibold flex gap-2">
                        First Name:
                        <h2 className="text-black font-semibold">
                          {order.Address.FirstName}
                        </h2>
                      </p>

                      <p className="text-gray-400 font-semibold flex gap-2">
                        Last Name:
                        <h2 className="text-black font-semibold">
                          {order.Address.LastName}
                        </h2>
                      </p>

                      <p className="text-gray-400 font-semibold flex gap-2">
                        Email:
                        <h2 className="text-black font-semibold">
                          {order.Address.Email}
                        </h2>
                      </p>

                      <p className="text-gray-400 font-semibold flex gap-2">
                        Street:
                        <h2 className="text-black font-semibold">
                          {order.Address.Street}
                        </h2>
                      </p>

                      <p className="text-gray-400 font-semibold flex gap-2">
                        City:
                        <h2 className="text-black font-semibold">
                          {order.Address.City}
                        </h2>
                      </p>

                      <p className="text-gray-400 font-semibold flex gap-2">
                        Province:
                        <h2 className="text-black font-semibold">punjab</h2>
                      </p>

                      <p className="text-gray-400 font-semibold flex gap-2">
                        Zip Code:
                        <h2 className="text-black font-semibold">
                          {order.Address.ZipCode}
                        </h2>
                      </p>

                      <p className="text-gray-400 font-semibold flex gap-2">
                        Country:
                        <h2 className="text-black font-semibold">Pakistan</h2>
                      </p>

                      <p className="text-gray-400 font-semibold flex gap-2 border-b-1 w-full pb-2">
                        Phone:
                        <h2 className="text-black font-semibold  border-gray-300">
                          {order.Address.Phone}
                        </h2>
                      </p>
                    </div>
                  </div>

                  {/* Price & Track Button */}
                  <div className="rounded-sm h-auto bg-gray-300/20 w-auto flex flex-col p-1  md:p-4">
                    <p className="text-sm text-gray-400 font-semibold flex gap-2">
                      Payment Mehtod:
                      <h2 className="font-semibold text-black ">
                        {order.paymentMethod}
                      </h2>
                    </p>

                    <p className="text-sm text-gray-400 font-semibold flex gap-2">
                      Delivery Fee:
                      <h2 className="font-semibold text-black ">120</h2>
                    </p>

                    <div className="flex justify-start items-center gap-1 md:gap-3 ">
                      <h2 className="font-bold text-black">Total Price:</h2>
                      <p className=" text-base  md:text-xl text-[var(--main-color)] font-bold">
                        {/* {order.GrandTotal} */}
                        Rs.{order.amount}/-
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => navigate(`/TrackOrder/${order._id}`)}
                      className={` ${
                        order.Status === "Delivered"
                          ? "bg-gray-500 text-white px-8 hover:bg-gray-400"
                          : ""
                      } px-4 md:text-base lg:text-lg whitespace-nowrap py-2 cursor-pointer bg-blue-600 active:scale-90 text-white rounded hover:bg-blue-700 transition`}
                    >
                      {order.Status === "Delivered" ? "History" : "Track Order"}
                    </button>
                    <h2
                      className={`${
                        order.Status === "Delivered" ? "block" : "hidden"
                      } md:mt-3 text-green-500 text-sm font-extrabold`}
                    >
                      Order Completed
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
};

export default Orders;
