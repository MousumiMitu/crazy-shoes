import Image from "next/image";
import React from "react";
import banner from "@/public/assets/cat1.png";
import banner2 from "@/public/assets/cat2.png";
import AppButton from "../button/AppButton";

const Category = () => {
  return (
    <section className="lg:h-[450px] md:h-[300px]  grid md:grid-cols-2 grid-cols-1 text-white">
      <div className="bg-gradient-45 group from-[#004AAD] to-[#d868f7] relative md:h-full h-[200px]">
        <div
          className={`flex justify-end items-center w-full h-full overflow-hidden md:ms-7`}
        >
          <Image
            src={banner}
            className="md:w-[95%] w-auto h-[150px] md:h-auto object-cover  group-hover:scale-110 ease-in duration-1000"
            alt="cover "
          />
        </div>
        <div className="absolute  top-1/2 -translate-y-1/2 w-[60%] z-10 space-y-3  lg:ps-7 md:ps-5 ps-3">
          <span className="lg:text-xl md:text-lg sm:text-base text-sm  leading-[1] tracking-[1px] block">
            Men&apos;s Originals
          </span>
          <p className="lg:text-[2.5rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1rem] leading-[1.2] font-semibold">
            EQT Cushion ADV Shoes $65
          </p>

          <div className="pt-3">
            <AppButton>More Info</AppButton>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#343645] to-[#4B4D5C] relative md:h-full h-[200px] group">
        <div
          className={`flex justify-end items-center w-full h-full overflow-hidden md:ms-7`}
        >
          <Image
            src={banner2}
            className="md:w-[95%] w-auto h-[150px] md:h-auto object-cover  group-hover:scale-110 ease-in duration-1000"
            alt="cover "
          />
        </div>
        <div className="absolute  top-1/2 -translate-y-1/2 w-[50%] z-10 space-y-3  lg:ps-7 md:ps-5 ps-3">
          <span className="lg:text-xl md:text-lg sm:text-base text-sm  leading-[1] tracking-[1px] block">
            Women&apos;s Tank
          </span>
          <p className="g:text-[2.5rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1rem] leading-[1.2] font-semibold">
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
