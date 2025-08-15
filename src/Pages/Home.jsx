import React, { useEffect, useRef } from "react";
import Title from "../Components/Title";
import BestSeller from "../Components/BestSeller";
import LatestCollection from "../Components/LatestCollection";
import { gsap } from "gsap";

const Home = () => {
  const text = "Best-Clothing-Store.";
  const HeroRef = useRef([]);

  useEffect(() => {
    gsap.from(HeroRef.current, {
      x: -50,
      y:-100,
      duration: 0.5,
      stagger: 0.1,
      opacity: 0,
       ease: "power2.out", 
    });
  }, []);

  return (
    <div className="  py-2 sm:py-4  w-full  px-4  ">
      <div className="HERO h-[70vh]">
        {" "}
        {/* Hero---------------- */}
        {/* ⬅️ left */}
        <div className="left w-full h-1/2 border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-gray-300 select-none sm:w-1/2 sm:h-full flex justify-center items-center flex-col flex-nowrap">
          <h1>
            {text.split("").map((char, index) => (
              <span
                className={`${char === '-'? 'text-transparent': '' } font-[Rockybilly] text-[var(--heading-color)] text-base md:text-2xl lg:text-3xl whitespace-nowrap text-center"`}
                key={index}
                ref={(el) => (HeroRef.current[index] = el)}
                style={{ display: "inline-block" }}
              >
                {char}
              </span>
            ))}
          </h1>

          <h2></h2>
        </div>

        {/* ⬅➡️ right */}
        <div></div>
      </div>

      {/* Latest Collections---------------- */}
      <Title text1="Latest" text2="Collections" />
      <LatestCollection />

      {/* Best Seller---------------- */}
      <Title text1="Best" text2="Seller" />
      <BestSeller />
    </div>
  );
};

export default Home;
