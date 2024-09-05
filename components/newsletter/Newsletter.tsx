import Image from "next/image";
import React from "react";
import cover from "@/public/assets/news.jpg";
import { GoMail } from "react-icons/go";

const Newsletter = () => {
  return (
    <section className="lg:h-[500px] md:h-[350px] sm:h-[300px] h-[280px] relative w-full">
      <Image
        src={cover}
        fill
        className="object-center object-cover pointer-events-none w-full h-full opacity-25 "
        alt="cover "
      />

      <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center container ">
        <div className="space-y-1 text-center w-full">
          <h6 className="lg:text-[3.5rem] md:text-[2.8rem] text-[2rem] font-semibold ">
            Newsletter
          </h6>
          <p className="lg:text-lg md:text-base sm:text-sm text-xs">
            Enter your email address for our mailing list to keep your self
            update.asa
          </p>
          <div className="md:w-[65%] w-[80%]  mx-auto  relative ">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-none mt-5 bg-slate-100  md:py-3.5 py-1.5 md:ps-5 ps-3 md:pr-16 pr-12 rounded-3xl w-full md:text-base text-sm focus:outline-none
              "
            />
            <span className="absolute md:right-6 right-4 top-1/2 -translate-y-1/2 mt-2.5 cursor-pointer hover:text-activeColor">
              <GoMail />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
