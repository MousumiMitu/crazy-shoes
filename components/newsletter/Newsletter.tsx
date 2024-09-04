import Image from "next/image";
import React from "react";
import cover from "@/public/assets/news.jpg";
import { GoMail } from "react-icons/go";

const Newsletter = () => {
  return (
    <section className="h-[500px] relative w-full">
      <Image
        src={cover}
        fill
        className="object-center object-cover pointer-events-none w-full h-full opacity-25 "
        alt="cover "
      />

      <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center container ">
        <div className="space-y-1 text-center w-full">
          <h6 className="text-[3.5rem] font-semibold ">Newsletter</h6>
          <p className="text-lg ">
            Enter your email address for our mailing list to keep your self
            update.asa
          </p>
          <div className="w-[65%]  mx-auto  relative ">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-none mt-5 bg-slate-100  py-3.5 ps-5 pr-16 rounded-3xl w-full focus:outline-none
              "
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 mt-2.5 cursor-pointer hover:text-activeColor">
              <GoMail />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
