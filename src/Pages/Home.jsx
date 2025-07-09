import React from "react";
import Title from "../Components/Title";
import BestSeller from "../Components/BestSeller";
import LatestCollection from "../Components/LatestCollection";

const Home = () => {
  return (
    <div className=" py-2 sm:py-4  w-full  px-4  ">
      <div className="HERO h-[70vh]">        {/* Hero---------------- */}
        {/* ⬅️ left */}
        <div className="left w-full h-1/2 border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-gray-300 select-none sm:w-1/2 sm:h-full flex justify-center items-center flex-col flex-nowrap">
          <h1 className="font-[Rockybilly] text-base md:text-2xl lg:text-3xl whitespace-nowrap text-center">
            Best Clothing Store.
          </h1>
          <h2></h2>
        </div>
        {/* ⬅➡️ right */}
        <div></div>
      </div>

      {/* Latest Collections---------------- */}
      <Title text1="Latest" text2="Collections" />
      <LatestCollection/>
     
      {/* Best Seller---------------- */}
      <Title text1="Best" text2="Seller"  />
      <BestSeller />
    </div>
  );
};

export default Home;
