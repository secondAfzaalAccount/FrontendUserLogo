import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import { useNavigate } from "react-router-dom";
import { GiCash } from "react-icons/gi"; //money icon
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader.jsx";
import axios from "axios";
import CustomToast from "../Components/CustomToast.jsx";
import {clearCart} from "../Features/ProductSlice.js";

// will handle form with react form Hook   TODO:

const DeliveryAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.mySlice.token);
  const Cart = useSelector((state) => state.mySlice.Cart);

  const amount = useSelector((state) => state.mySlice.GrandTotalAmount);
  const [Method, setMethod] = useState("COD");
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false);

  const [formData, setformData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Street: "",
    City: "",
    ZipCode: "",
    Phone: "",
  });

  const onChangeHandler = (event) => {
    const Name = event.target.name;
    const value = event.target.value;
    setformData((prev) => ({ ...prev, [Name]: value }));
  };

  const onSubmitHandler = async (e) => {
    
    e.preventDefault();
    if (!token) {
      // no token mean not logedin. user login first
      toast.info("🔒 Please log in to complete your order 😊");
      setTimeout(() => {
        navigate("/login", { state: "checkingOut" });
      }, 3500);
    } else {
      setloading(true);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_API}/api/Orders/add`,
          { Cart, amount, Address: formData, paymentMethod: Method },
          { headers: { token } }
        );

        if (response.data.success) {
          console.log("successfully placed order.✅");
          
          dispatch(clearCart());

          setsuccess(true); //success notification
          setTimeout(() => {
            setsuccess(false);
            navigate("/Orders");
          }, 5000);
        }
      } catch (error) {
        toast.error(error.message);
        console.log(error.message); //delete
      } finally {
        setloading(false);
      }
    }
  };

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        <form
          noValidate
          onSubmit={(e) => onSubmitHandler(e)}
          className="flex relative flex-col w-full sm:flex-row mb-4  justify-around gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
        >
          <div className={`${success ? "block" : "hidden"}`}>
            <CustomToast />
          </div>
          {/*---------⬅️--⬅️---- Left Side----------------------------------------------- ⬅ */}
          <div className="flex flex-col w-full flex-1/2 md:border-r-2 md:pr-18 border-gray-300">
            <div className=" text-xl sm:text-2xl my-3">
              <Title text1={"YOUR"} text2={"DELIVERY ADDRESS"} />
            </div>

            {/* ------------Form--------- */}
            <div className="flex  flex-col gap-3  ">
              <div className=" flex gap-3">
                <input //FirstName
                  required
                  onChange={(event) => onChangeHandler(event)}
                  name="FirstName"
                  value={formData.FirstName}
                  type="text"
                  className="border border-gray-300 rounded py-1.5  px-3.5 w-full text-[var(--heading-color)] placeholder:text-gray-500"
                  placeholder="First Name"
                />

                <input //LastName
                  required
                  onChange={(event) => onChangeHandler(event)}
                  name="LastName"
                  value={formData.LastName}
                  type="text"
                  className="border border-gray-300 rounded py-1.5  px-3.5 w-full text-[var(--heading-color)] placeholder:text-gray-500 "
                  placeholder="Last Name"
                />
              </div>

              <input //Email
                required
                onChange={(event) => onChangeHandler(event)}
                name="Email"
                value={formData.Email}
                type="email"
                className="border border-gray-300 rounded py-1.5  px-3.5 w-full text-[var(--heading-color)] placeholder:text-gray-500"
                placeholder="Email address"
              />

              <input //street
                required
                onChange={(event) => onChangeHandler(event)}
                name="Street"
                value={formData.Street}
                type="text"
                className="border border-gray-300 rounded py-1.5  px-3.5 w-full text-[var(--heading-color)] placeholder:text-gray-500"
                placeholder="Street"
              />

              {/* city */}
              <div className=" flex gap-3">
                <input
                  required
                  onChange={(event) => onChangeHandler(event)}
                  name="City"
                  value={formData.City}
                  type="text"
                  className="border border-gray-300 rounded py-1.5  px-3.5 w-full text-[var(--heading-color)] placeholder:text-gray-500"
                  placeholder="City"
                />

                <input //Province
                  required
                  // onChange={(event) => onChangeHandler(event)}
                  name="Province"
                  // value={formData.State}
                  type="text"
                  className="border border-gray-300 rounded py-1.5  px-3.5 w-full text-[var(--heading-color)] placeholder:text-gray-500"
                  placeholder="Province"
                />
              </div>

              {/* zipCode */}
              <div className=" flex gap-3">
                <input
                  required
                  onChange={(event) => onChangeHandler(event)}
                  name="ZipCode"
                  value={formData.ZipCode}
                  type="number"
                  className="border border-gray-300 rounded py-1.5  px-3.5 w-full text-[var(--heading-color)] placeholder:text-gray-500"
                  placeholder="ZipCode"
                />

                <input //Country
                  required
                  // onChange={(event) => onChangeHandler(event)}
                  name="Country"
                  // value={formData.Country}
                  type="text"
                  className="border border-gray-300 rounded py-1.5  px-3.5 w-full text-[var(--heading-color)] placeholder:text-gray-500"
                  placeholder="Country"
                />
              </div>

              <input //Phone
                required
                onChange={(event) => onChangeHandler(event)}
                name="Phone"
                value={formData.Phone}
                type="phone"
                className="border border-gray-300 rounded py-1.5  px-3.5 w-full text-[var(--heading-color)] placeholder:text-gray-500"
                placeholder="Phone"
              />
            </div>
          </div>

          {/*  ------------------Right Side--➡️--➡️------------------------------------------- */}
          <div className="div mt-8 min-w-80 flex-1/4 ">
            <Title text1={"PAYMENT"} text2={"METHOD"} />

            {/* Payment Method Selection */}

            {/* Easy Paisa //TODO:*/} 
            <div className=" gap-3 mt-6 hidden">
              <div
                onClick={() => setMethod("easyPaisa")}
                className="flex cursor-pointer  py-2 items-center w-2/4 h-14 rounded justify-center px-2 gap-1 border border-gray-300 flex-row"
              >
                <p
                  className={`${
                    Method === "easyPaisa" ? "bg-green-500 " : ""
                  } cursor-pointer min-w-3.5 h-3.5 border rounded-full border-gray-300 `}
                ></p>
                <img
                  src="/images/Easypaisa_Logo-removebg-preview.png
            "
                  alt="easypaisa"
                  className="h-full bg-[#edf2f4] rounded-md"
                />
              </div>
            </div>

            {/* COD */}
            <div
              onClick={() => setMethod("COD")}
              className="flex cursor-pointer py-2 mt-6 items-center w-full rounded justify-center px-2 gap-1 border border-gray-300 flex-row"
            >
              <p
                className={`${
                  Method === "COD" ? "bg-green-500 " : ""
                } ] cursor-pointer min-w-3.5 h-3.5 border rounded-full border-gray-300`}
              ></p>
              <h2 className="flex gap-3 justify-center items-center text-[var(--heading-color)]">
              
                Cash On Delivery <GiCash className="text-[var(--heading-color)]"/>
              </h2>
            </div>

            {/* Place Order */}
            <button
              type="submit"
              className=" w-full my-4 flex justify-center items-center gap-3  px-4 py-2 rounded-sm bg-[var(--main-color)] hover:bg-[var(--main-color)]/90 hover:shadow-2xl active:scale-95 hover:border-2 cursor-pointer text-white "
            >
              Place Order
            </button>
          </div>
        </form>
      </>
    );
  }
};

export default DeliveryAddress;
