import React from "react";
import Title from "../Components/Title.jsx";
import { GiRapidshareArrow } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div className="relative  z-10 py-2 sm:py-4 h-[70vh] w-full overflow-hidden flex flex-col  px-4 sm:px-8">
      <div className="w-full h-full flex flex-col md:flex-row ">
        {/* /⬅️ */}
        <div className="relative left w-full md:w-1/2 min-h-1/2 md:h-full flex justify-center items-center">

        <h2 className="absolute z-30 basis-2 bottom-3  right-3 md:left-3  font-[Rockybilly] text-sm text-[var(--heading-color)] flex">Our Team <GiRapidshareArrow className="rotate-180 md:rotate-260 text-xl ml-2"/></h2>

        <div className="relative w-full  h-full">
          <img src="../../public/images/aboutUS/TEAM1.jpg" alt="" className="z-10 border-3 border-[var(--heading-color)] absolute top-20 lg:top-40 left-20 lg:left-50 rotate-70 w-20 md:w-30 lg:w-40 rounded-md"/>

          <img src="../../public/images/aboutUS/team2.jpg" alt="" className="z-0 border-3 border-[var(--heading-color)] absolute top-20 left-30 rotate-5 w-30 md:w-40 lg:w-60 rounded-md" />
        </div>
        </div>









        {/* ➡️ */}
        <div className="right  w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center ">
         <div className=" md:w-full whitespace-nowrap"><Title text1={"Your Online"} text2={"Shopping Buddy"} /></div> 
          <p 
          className="lg:text-2xl text-[var(--heading-color)]">
            <span className="text-[var(--main-color)] font-bold">"</span>
            We make online shopping simple, fun, and reliable. From trendy products to <span className="font-[Rockybilly] text-xs text-[var(--main-color)] tracking-wider">Fast</span>  delivery, our goal is to bring the best deals and experiences straight to your doorstep!
            <span className="text-[var(--main-color)] font-bold">"</span></p>
        </div>
      </div>











      {/* backgroud text  */}
      <marquee
        behavior="scroll"
        direction="left"
        className="select-none absolute top-0 left-0 w-full text-[var(--heading-color)] opacity-[1.5%] font-bolder font-[MuckleyBold] text-[90vh] tracking-tighter leading-none mt-[-10]"
      >
        FROM CONCEPT TO CHECKOUT — WE MAKE IT SEAMLESS
      </marquee>
    </div>
  );
};

export default AboutUs;
