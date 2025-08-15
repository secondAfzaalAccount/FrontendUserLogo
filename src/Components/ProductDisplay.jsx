import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

//product card----------------------

const ProductDisplay = ({
  id,
  name,
  price,
  description,
  category,
  image,
  quantity,
  bestSeller,
}) => {
  return (
    <div className="max-w-sm w-full  rounded-2xl shadow-md overflow-hidden border border-[var(--heading-color)] hover:shadow-lg transition duration-300 p-1 md:p-4">
      <div className="w-full h-48  flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={image[0]}
          alt={name}
          className="h-full rounded-sm hover:scale-[120%] transition-all duration-500 object-cover "
        />
      </div>

      <div className=" mt-0 md:mt-4">
        <div className="flex justify-between items-start">
          <h2 className="text-base font-medium text-[var(--heading-color)] truncate">
            {name}
          </h2>
        </div>

        <div className="mt-0 md:mt-4 flex flex-col md:flex-row gap-2 justify-between  items-center">
          <span className="text-lg font-semibold text-[var(--main-color)] tracking-wide">
            Rs.{Math.floor(price)}/-
          </span>

          <Link
            to={`/DetailProduct/${id}`}
            style={{
            }}
            className="buttonInsideCarD mb-1 md:mx-0  flex hover:font-semibold  cursor-pointer bg-gray-200 text-xs md:text-sm justify-center items-center gap-2 rounded-[22px] whitespace-nowrap py-2 px-4  outline-0 hover:border-gray-500 border-[#ffffff00] border-[1px]  w-full "
          >
            <CiShoppingCart className="hidden md:inline-block" /> Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
