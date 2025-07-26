import React, { useEffect, useState } from "react";
import { FaGift } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md"; //icon
import Title from "./../Components/Title.jsx";
import { FaHeadphonesAlt } from "react-icons/fa"; //icon
import { BiArrowBack } from "react-icons/bi"; //icon
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Loader.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const TrackOrder = () => {
  const token = useSelector((state) => state.mySlice.token);
  const { id } = useParams();
  const [loading, setloading] = useState(false);

  const [nanoID, setnanoID] = useState(null); // currect nano id
  const [status, setstatus] = useState(""); // currect order details
  console.log(status);

  const TrackerHandler = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/Orders/track`,
        { OrderId: id },
        { headers: { token } }
      );

      if (response.data.success) {
        console.log("yes", response.data.OrderStatus); //delete
        const nanoId = response.data.OrderStatus.nanoId;
        const Status = response.data.OrderStatus.Status;
        setnanoID(nanoId);
        setstatus(Status);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    TrackerHandler();
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
        <Link
          to={"/Orders"}
          className="w-full  text-sm my-2 flex flex-nowrap justify-start items-center gap-2 text-gray-500 hover:text-black hover:font-semibold"
        >
          <BiArrowBack /> Home
        </Link>

        <Title text1={"Track"} text2={"Order"} />
        <p className="m-1 md:m-4 font-semibold">
          Your Order No: <span className="text-gray-400">{nanoID}</span>{" "}
        </p>

        <div className=" w-full h-[80vh]  m-4 mt-0 justify-start gap-5 flex lg:justify-around items-start flex-col xl:flex-row ">
          {/*✅ Order Placed */}
          <div
            className={`${
              status === "Order Placed" ||
              status === "Out for Delivery" ||
              status === "Delivered"
                ? ""
                : "opacity-30"
            } justify-center items-center m-1 lg:min-h-32 h-40 md:m-4 p-4 w-full xl:w-1/3  rounded-md border-2  flex gap-6 `}
          >
            <span
              className={`${
                status === "Order Placed" || "Out for Delivery"
                  ? "bg-[var(--main-color)] text-white"
                  : "opacity-30"
              } rounded-[50%] w-7 h-7 text-sm md:text-base flex justify-center items-center text-gray-400 border-[2px] border-[var(--main-color)]`}
            >
              {status === "Order Placed" || "Out for Delivery" ? (
                <MdOutlineDone />
              ) : (
                1
              )}
            </span>
            <div className="text-4xl md:text-8xl flex justify-center items-center">
              <FaGift className="w-full h-full" />
            </div>

            <div className="w-[60%] flex flex-col justify-start items-start">
              <h2 className="text-lg md:text-xl font-bold text-gray-700 whitespace-nowrap">
                ORDER PLACED
              </h2>
              <h3 className=" w-full text-gray-400 text-sm leading-4 my-2">
                Your order placed successfully.
              </h3>
              <h3 className="flex text-gray-700 font-semibold text-base whitespace-nowrap">
                Estimate Time: 6 days.
              </h3>
            </div>
          </div>

          {/* 📦 Out for Delivery */}
          <div
            className={`${
              status === "Out for Delivery" || status === "Delivered"
                ? ""
                : "opacity-30 select-none"
            } justify-center items-center  m-1 lg:min-h-32 h-40 md:m-4 p-4 w-full xl:w-1/3 rounded-md border-2  flex gap-6`}
          >
            <span
              className={`${
                status === "Order Placed" || "Out for Delivery"
                  ? "bg-[var(--main-color)] text-white"
                  : "opacity-30"
              } rounded-[50%] w-7 h-7 text-sm md:text-base flex justify-center items-center text-gray-400 border-[2px] border-[var(--main-color)]`}
            >
              {status === "Order Placed" || "Out for Delivery" ? (
                <MdOutlineDone />
              ) : (
                1
              )}
            </span>

            <div className="text-4xl md:text-8xl flex justify-center items-center">
              <FaTruckFast className="w-full h-full" />
            </div>
            <div className="w-[60%] flex flex-col justify-start items-start">
              <h2 className="text-lg md:text-xl font-bold text-gray-700  whitespace-nowrap">
                OUT FOR DELIVERY
              </h2>
              <h3 className="  w-full gap-2 text-gray-400 text-sm leading-4 my-2">
                Your order is one the way and will be delivered shortly.
              </h3>
              <h3 className="flex text-gray-700 font-semibold text-base">
                Estimate Time: 3 days.
              </h3>
            </div>
          </div>

          {/* 📬 Delivered */}
          <div
            className={`${
              status === "Delivered" ? "" : "opacity-30 select-none"
            } justify-center items-center  w-full h-40 lg:min-h-32 xl:w-1/3 m-1 md:m-4 p-4 rounded-md border-2  flex gap-6`}
          >
            <span
              className={`${
                status === "Order Placed" || "Out for Delivery"
                  ? "bg-[var(--main-color)] text-white"
                  : "opacity-30"
              } rounded-[50%] w-7 h-7 text-sm md:text-base flex justify-center items-center text-gray-400 border-[2px] border-[var(--main-color)]`}
            >
              {status === "Order Placed" || "Out for Delivery" ? (
                <MdOutlineDone />
              ) : (
                1
              )}
            </span>

            <div className="text-4xl md:text-8xl flex justify-center items-center">
              <FaBoxOpen className="w-full h-full" />
            </div>

            <div className="w-[60%] flex flex-col justify-start items-start">
              <h2 className="text-lg md:text-xl font-bold text-gray-700 whitespace-nowrap">
                PRODUCT DELIVERED
              </h2>
              <h3 className=" text-gray-400 text-sm leading-4 my-2">
                Your order has been delivered.
              </h3>
              <h3 className="flex text-gray-700 font-semibold text-base">
                Estimate Time: 6 days.
              </h3>
            </div>
          </div>
        </div>

        <a
          href="tel:03475447879"
          className="flex gap-3 justify-center items-center w-full text-center  text-sm font-semibold text-gray-600 hover:text-white hover:bg-[var(--main-color)] transition-all duration-300 py-2 rounded-md  "
        >
          <FaHeadphonesAlt /> Help Line: 0347-5447879
        </a>
      </>
    );
  }
};

export default TrackOrder;
