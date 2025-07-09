import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import { Link } from "react-router-dom";
import { GiCash } from "react-icons/gi"; //money icon

const DeliveryAddress = () => {
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

  const [Method, setMethod] = useState("COD");


  // useEffect(() => {
  // console.log(formData);
  
  // }, [onChangeHandler])
  



  return (
    <>
      <form
        // onSubmit={onSubmitHandler}
        className="flex flex-col sm:flex-row mb-4 justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
      >
        {/*---------⬅️--⬅️---- Left Side----------------------------------------------- ⬅ */}
        <div className="flex flex-col w-full max-w-[480px]">
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
                className="border border-gray-300 rounded py-1.5  px-3.5 w-full "
                placeholder="First Name"
              />

              <input //LastName
                required
                onChange={(event) => onChangeHandler(event)}
                name="LastName"
                value={formData.LastName}
                type="text"
                className="border border-gray-300 rounded py-1.5  px-3.5 w-full "
                placeholder="Last Name"
              />
            </div>

            <input //Email
              required
              onChange={(event) => onChangeHandler(event)}
              name="Email"
              value={formData.Email}
              type="email"
              className="border border-gray-300 rounded py-1.5  px-3.5 w-full "
              placeholder="Email address"
            />

            <input //street
              required
              onChange={(event) => onChangeHandler(event)}
              name="Street"
              value={formData.Street}
              type="text"
              className="border border-gray-300 rounded py-1.5  px-3.5 w-full "
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
                className="border border-gray-300 rounded py-1.5  px-3.5 w-full "
                placeholder="City"
              />

              <input //Province
                required
                // onChange={(event) => onChangeHandler(event)}
                name="Province"
                // value={formData.State}
                type="text"
                className="border border-gray-300 rounded py-1.5  px-3.5 w-full "
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
                className="border border-gray-300 rounded py-1.5  px-3.5 w-full "
                placeholder="ZipCode"
              />

              <input //Country
                required
                // onChange={(event) => onChangeHandler(event)}
                name="Country"
                // value={formData.Country}
                type="text"
                className="border border-gray-300 rounded py-1.5  px-3.5 w-full "
                placeholder="Country"
              />
            </div>

            <input //Phone
              required
              onChange={(event) => onChangeHandler(event)}
              name="Phone"
              value={formData.Phone}
              type="phone"
              className="border border-gray-300 rounded py-1.5  px-3.5 w-full "
              placeholder="Phone"
            />
          </div>
        </div>

        {/*  ------------------Right Side--➡️--➡️------------------------------------------- */}
        <div className="div mt-8 min-w-80 ">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          {/* Payment Method Selection */}

          {/* Easy Paisa */}
          <div className="flex gap-3 mt-6">
            <div
              onClick={() => setMethod("RazerPay")}
              className="flex cursor-pointer  py-2 items-center w-2/4 h-14 rounded justify-center px-2 gap-1 border border-gray-300 flex-row"
            >
              <p
                className={`${
                  Method === "RazerPay" ? "bg-green-500 " : ""
                } cursor-pointer min-w-3.5 h-3.5 border rounded-full border-gray-300 `}
              ></p>
              <img
                src="/images/Easypaisa_Logo-removebg-preview.png
            "
                alt="easypaisa"
                className="h-full"
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
              } cursor-pointer min-w-3.5 h-3.5 border rounded-full border-gray-300`}
            ></p>
            <h2 className="flex gap-3 justify-center items-center">
              {" "}
              Cash On Delivery <GiCash />
            </h2>
          </div>

          {/* Place Order */}
          <button
            // type="submit"
            className=" w-full my-4 flex justify-center items-center gap-3  px-4 py-2 rounded-sm bg-[var(--main-color)] hover:bg-[var(--main-color)]/90 hover:shadow-2xl active:scale-95 hover:border-2 cursor-pointer text-white "
          >
            Place Order
          </button>
        </div>
      </form>
    </>
  );
};

export default DeliveryAddress;
