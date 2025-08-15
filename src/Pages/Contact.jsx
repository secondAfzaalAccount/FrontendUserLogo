import React from "react";
import Title from "../Components/Title";
import { MdEmail } from "react-icons/md"; //icon
import { FaPhoneAlt } from "react-icons/fa"; //icon

const Contact = () => {
  return (
    <div className=" bg-[var(--bg-color)] min-h-[70vh] w-full py-2 sm:py-4 overflow-hidden flex flex-col md:flex-row px-4 sm:px-8">
      {/* Left ⬅️ */}

      <div className="w-full md:w-1/2 h-1/2 md:h-full border-b-1 md:border-b-0 p-4 border-gray-300 md:border-r-1 flex flex-col gap-2">
        <Title text1={"Our"} text2={"Contacts"} />
        <div>
          <h3 className="text-gray-400 text-xs md:text-sm font-semibold">
            WE ARE HERE TO HELP YOU.
          </h3>
          <h2 className="my-8 md:my-6 text-xl font-semibold md:font-thin md:text-3xl lg:text-6xl text-[var(--heading-color)] "><span className="text-base md:text-xl text-[var(--main-color)] font-semibold  font-[Rockybilly] tracking-widest  ">Any Questions?</span> Our Inbox<br /> Loves  Company!</h2>


<div className="flex flex-col gap-6 mt-6 lg:mt-12">
   {/* email */}
          <div className="flex gap-3 justify-start items-center">
            <MdEmail className="text-xl md:text-4xl text-[var(--heading-color)]"/>
            <div>
              <h4 className="text-gray-400 text-base">Email</h4>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com"
                target="_blank"
                className="text-[var(--heading-color)]"
              >
                Admin@gmail.com
              </a>
            </div>
          </div>

          {/* phone */}
          <div className=" flex gap-3 justify-start items-center">
            <FaPhoneAlt className="text-xl md:text-4xl text-[var(--heading-color)]" />
            <div >
              <h4 className="text-gray-400 text-base">Phone No</h4>
              <a href="tel:+923475447879" className="text-[var(--heading-color)]">0347-5447879</a>
            </div>
          </div>
</div>
       
        </div>
      </div>

      {/* ---------------------------------Right ➡️ */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-2">
        <Title text1={"Our"} text2={"Location"} />

        <div className="group relative overflow-hidden">
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen=""
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13287.0!2d73.07283!3d33.63055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM3JzU1LjgiTiA3M8KwMDQnMzcuNiJF!5e0!3m2!1sen!2s!4v1692062345678"
          ></iframe>

          <span className="mapImage absolute bg-[var(--bg-color)] hidden md:block  group-hover:scale-0 origin-top  w-full h-full transition-all ease-in-out duration-300 top-0 left-0 ">
            <img
              src="../../public/images/ChatGPT Image Aug 15, 2025, 11_16_25 AM.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
