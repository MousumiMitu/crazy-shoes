import { FooterData } from "@/constant/data";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";

import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkColor    w-full  text-white">
      <div className="lg:h-[60vh] py-3 flex items-center p-[2%]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 w-full ">
          {FooterData.map((data) => (
            <div key={data.id} className="lg:space-y-5 md:space-y-3 space-y-2">
              <h5 className="lg:text-2xl md:text-lg  capitalize font-semibold">
                {data.title}
              </h5>
              <ul className=" space-y-2">
                {data.children.map((child: any, index) => (
                  <li
                    key={index}
                    className="lg:text-[1.1rem] md:text-[1rem] text-sm capitalize flex items-center gap-3 text-gray-400 hover:text-activeColor hover:font-medium"
                  >
                    {/* {child.iconImg && <span>{child.iconImg}</span>} */}
                    {child.text || child}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#111111] lg:py-8 md:py-5 py-4 p-[2%] text-center">
        <div className="flex justify-center items-center gap-4 text-gray-300">
          <span className="lg:text-xl md:text-base text-sm  ">Follow me:</span>
          <div className="gap-x-4 md:text-lg text-base flex justify-center items-center">
            <FaFacebookF /> <FaPinterestP /> <BsTwitterX /> <ImYoutube2 />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
