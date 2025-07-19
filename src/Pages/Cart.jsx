import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  editSize,
  GrandTotalAmount,
  incrementQty,
} from "../Features/ProductSlice.js";
import { decrementQty } from "../Features/ProductSlice.js";
import { LiaLongArrowAltRightSolid } from "react-icons/lia"; // icon
import { MdDelete } from "react-icons/md"; //icon bin
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io"; //icon
import { CiEdit } from "react-icons/ci"; //icon
import { BiArrowBack } from "react-icons/bi"; //icon

const Cart = () => {
  const Cart = useSelector((state) => state.mySlice.Cart);
  const [sizeEditorId, setsizeEditorId] = useState(null);
  const location = useLocation();
  const delideliverFee = useSelector((state) => state.mySlice.deliveryFee);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const TotalItems = Cart.reduce((acc, item) => acc + item.quantity, 0);
  const GrandTotal = Cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deleteHandler = (id) => {
    //delte from cart

    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      dispatch(deleteCartItem(id));
    }
  };

  const checkoutHandler = () => {
    dispatch(GrandTotalAmount(Math.floor(GrandTotal + delideliverFee)));
    navigate("/DeliveryAddress");
  };

  if (Cart.length === 0 || Cart === NaN) {
    return (
      <>
        <div className="relative w-full min-h-dvh text-xl md:text-2xl    lg:flex-row">
          <Link
            to={"/Collections"}
            className="absolute text-xl md:text-2xl  top-[5%] left-2 flex gap-2 justify-center items-center cursor-pointer hover:text-[var(--main-color)]"
          >
            <IoIosArrowRoundBack /> Contine Shopping
          </Link>
          <div className="w-full  h-[70vh] md:h-[90vh]  flex justify-center items-center ">
            <h2 className="text-gray-400">your Cart is empty ☹️</h2>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
         <Link
        to={"/Collections"}
        className="w-full  text-sm  flex flex-nowrap justify-start items-center gap-2 text-gray-500 hover:text-black hover:font-semibold"
      >
        <BiArrowBack /> Continue shopping
      </Link>
        <div className="w-full min-h-dvh  flex flex-col gap-2 lg:flex-row">


          {/* ⬅️ */}
          <div className="left w-full lg:w-3/4 h-full  flex flex-col gap-3">
            <Title text1={"Your"} text2={"Shoping Cart"} />
            <h2 className="text-sm font-[MuckleyBold] tracking-widest text-gray-400">
              Total Items-{" "}
              <span className="font-sans font-semibold"> {TotalItems}</span>
            </h2>

            <div className="w-full p-4 border-t-[1px] border-gray-300"></div>
            {Cart?.map((item, index) => (
              <div
                key={item.id}
                className="relative w-full flex gap-2 items-center justify-around text-base border-b-[1px] border-gray-300 shadow-2xl p-4 rounded-sm"
              >
                {/* img and name */}
                <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                  <img src={item?.image?.[0]} alt="" className="w-25 rounded-sm" />
                  <h1 className="max-w-[130px]">{item.name}</h1>
                </div>

                {/* size, price, buttons */}
                <div className="flex flex-col md:flex-row md:gap-6 lg:gap-20 justify-around items-center ">
                  <h2 className="relative  m-4 min-w-4">
                    {item?.Sizes}
                    <span className="text-xs  text-gray-300 absolute left-[-250%] md:left-[-100%] md:top-[-100%]">
                      Size:
                    </span> 
                    {/* 🖋️ size edit span */}
                    <span className=
                    {`absolute right-[-150%] top-[20%] cursor-pointer text-gray-300 hover:text-gray-700`}>
                      <CiEdit 
                        onClick={()=>setsizeEditorId(prev => prev == null ? item.id : null)}
                      />
                    </span>
                   
                    <div
                      className={`${
                        sizeEditorId === item.id  && location.pathname === "/Cart"
                          ? "block z-1000"
                          : "hidden"
                      } absolute sizeEdit flex gap-2  flex-col justify-center items-center p-2`}
                    >
                      <h3
                        onClick={() => {
                          dispatch(editSize({ id: item.id, size: "S" }));
                          setsizeEditorId(null);
                        }}
                        className={`${
                          item.Sizes === "S"
                            ? "border-[1px] border-[var(--main-color)] text-[var(--main-color)]"
                            : "text-black"
                        } cursor-pointer sizeOpt py-2 px-4 hover:text-[var(--main-color)] text-base rounded-[16px] `}
                      >
                        S
                      </h3>
                      <h3
                        onClick={() => {
                          dispatch(editSize({ id: item.id, size: "M" }));
                          setsizeEditorId(null);
                        }}
                        className={`${
                          item.Sizes === "M"
                            ? "border-[1px] border-[var(--main-color)] text-[var(--main-color)]"
                            : "text-black"
                        } cursor-pointer sizeOpt py-2 px-4 hover:text-[var(--main-color)] text-base rounded-[16px]`}
                      >
                        M
                      </h3>
                      <h3
                        onClick={() => {
                          dispatch(editSize({ id: item.id, size: "L" }));
                          setsizeEditorId(null);
                        }}
                        className={`${
                          item.Sizes === "L"
                            ? "border-[1px] border-[var(--main-color)] text-[var(--main-color)]"
                            : "text-black"
                        } cursor-pointer sizeOpt py-2 px-4 hover:text-[var(--main-color)] text-base rounded-[16px] `}
                      >
                        L
                      </h3>
                      <h3
                        onClick={() => {
                          dispatch(editSize({ id: item.id, size: "XL" }));
                          setsizeEditorId(null);
                        }}
                        className={`${
                          item.Sizes === "XL"
                            ? "border-[1px] border-[var(--main-color)] text-[var(--main-color)]"
                            : "text-black"
                        } cursor-pointer sizeOpt py-2 px-4 hover:text-[var(--main-color)] text-base rounded-[16px] `}
                      >
                        XL
                      </h3>
                    </div>
                  </h2>

                  {/* button + and - */}
                  <div className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() =>
                        dispatch(
                          incrementQty({ id: item.id, Sizes: item.Sizes })
                        )
                      }
                      className="buttonAdd px-4 py-2 rounded-lg hover:rounded-sm transition-all duration-100 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-thin hover:shadow-2xl"
                    >
                      +
                    </button>

                    {/* qty */}
                    <h2>{item.quantity}</h2>

                    <button
                      onClick={() =>
                        dispatch(
                          decrementQty({ id: item.id, Sizes: item.Sizes })
                        )
                      }
                      className="buttonAdd px-4 py-2 rounded-lg hover:rounded-sm transition-all duration-100 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-thin hover:shadow-2xl"
                    >
                      -
                    </button>
                  </div>
                  {/* price */}
                  <h2 className="font-semibold w-[80px] my-4">
                    Rs.{Math.floor(item.price * item.quantity)}/-
                  </h2>
                </div>

                {/* delete x */}
                <button
                  onClick={() => deleteHandler(item.id)}
                  className=" absolute right-5 top-2 lg:top-[40%] text-gray-400 text-xl  md:text-2xl hover:text-[var(--main-color)] cursor-pointer"
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>

          {/* ➡️ */}
          <div className="right w-full lg:w-1/4 h-full  flex gap-3 flex-col px-4">
            <Title text1={"Grand"} text2={"Total"} />

            <div className="bg-white px-6 py-8 h-[50vh] border-t border-gray-300 flex flex-col justify-center items-start gap-5 shadow-inner rounded-t-2xl md:gap-6">
              <div className="w-full flex flex-wrap  lg:flex-row justify-between text-gray-700 text-lg lg:text-xl font-medium">
                <span className="flex flex-nowrap md:flex-wrap lg:flex-row justify-between">
                  Total:
                </span>
                <span>Rs.{Math.floor(GrandTotal)}/-</span>
              </div>

              <div className="w-full flex flex-nowrap md:flex-wrap  lg:flex-row justify-between text-gray-700 text-lg lg:text-xl font-medium">
                <span className="whitespace-nowrap">Delivery Fee:</span>
                <span>Rs.{delideliverFee}/-</span>
              </div>

              <div className="w-full flex  flex-nowrap md:flex-wrap lg:flex-row gap-2 justify-between border-t pt-4 text-black text-xl lg:text-2xl font-bold">
                <span className="whitespace-nowrap">Grand Total:</span>
                <span>Rs.{Math.floor(GrandTotal + delideliverFee)}/-</span>
              </div>
            </div>

            <button
              onClick={() => checkoutHandler()}
              className=" w-full flex justify-center items-center gap-3 md:w-auto px-4 py-2 rounded-sm bg-[var(--main-color)] hover:bg-[var(--main-color)]/90 hover:shadow-2xl active:scale-95 hover:border-2 cursor-pointer text-white "
            >
              Check Out
              <span className="text-3xl">
                <LiaLongArrowAltRightSolid />
              </span>
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
