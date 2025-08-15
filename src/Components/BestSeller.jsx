import React from "react";
import { useSelector } from "react-redux";
import ProductDisplay from "./ProductDisplay";

const BestSeller = () => {
  const allProducts = useSelector((state) => state.mySlice.allProducts);

  const filterProducts = allProducts.filter((item) => item.bestseller);
  console.log(filterProducts);

  return (
    <div className="w-full py-2 sm:py-6 px-2 ">
      <div className="BestSellerProducts grid gap-4 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
        {filterProducts?.slice(0, 5).map((item, index) => (
          <ProductDisplay
            key={item._id}
            id={item._id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
