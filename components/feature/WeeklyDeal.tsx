import Image from "next/image";
import React from "react";
import feature from "@/public/assets/featureB.png";
import AppButton from "../button/AppButton";

const WeeklyDeal = () => {
  return (
    <section className="container py-14 space-y-8">
      <h6 className="text-center lg:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] font-semibold">
        Deal of the Week
      </h6>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div className="lg:space-y-6 md:space-y-4 space-y-3">
          <span className="block lg:text-3xl md:text-xl text-base leading-none">
            Hot Deal of the Week
          </span>
          <div className="lg:space-y-3 md:space-y-2 space-y-1">
            <span className="block lg:text-[4rem] md:text-[3rem] text-[2rem] font-semibold leading-none ">
              Crazy Byw Lvl X
            </span>
            <span className="block lg:text-[3rem] md:text-[2rem] text-[1.5rem] font-semibold  leading-none text-activeColor">
              $200
            </span>
          </div>

          <AppButton>Order Now</AppButton>
        </div>
        <div className="w-full">
          <Image
            src={feature}
            alt="feature"
            className="lg:h-[600px] md:h-[450px] sm:h-[300px] h-[250px] w-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WeeklyDeal;
