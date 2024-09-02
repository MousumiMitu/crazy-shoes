import Image from "next/image";
import React from "react";
import banner from "@/assets/cat1.png";
import banner2 from "@/assets/cat2.png";
import AppButton from "../button/AppButton";

const Category = () => {
  return (
    <section className="h-[450px] grid grid-cols-2 text-white">
      <div className="bg-gradient-45 group from-[#004AAD] to-[#d868f7] relative ">
        <div
          className={`flex justify-end items-center w-full h-full overflow-hidden ms-7`}
        >
          <Image
            src={banner}
            className="w-[95%] object-cover  group-hover:scale-110 ease-in duration-1000"
            alt="cover "
          />
        </div>
        <div className="absolute  top-1/2 -translate-y-1/2 w-[60%] z-10 space-y-3  ps-7">
          <span className="text-xl  leading-[1] tracking-[1px] block">
            Men&apos;s Originals
          </span>
          <p className="text-[2.5rem] leading-[1.2] font-semibold">
            EQT Cushion ADV Shoes $65
          </p>

          <div className="pt-3">
            <AppButton>More Info</AppButton>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#343645] to-[#4B4D5C] relative  group">
        <div
          className={`flex justify-end items-center w-full h-full overflow-hidden ms-7`}
        >
          <Image
            src={banner2}
            className="w-full object-cover  group-hover:scale-110 ease-in duration-1000"
            alt="cover "
          />
        </div>
        <div className="absolute  top-1/2 -translate-y-1/2 w-[50%] z-10 space-y-3  ps-7">
          <span className="text-xl  leading-[1] tracking-[1px] block">
            Women&apos;s Tank
          </span>
          <p className="text-[2.5rem] leading-[1.2] font-semibold">
            Nike Pro HyperCool
          </p>

          <div className="pt-3">
            <AppButton>More Info</AppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
