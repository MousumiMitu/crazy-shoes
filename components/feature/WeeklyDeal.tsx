import Image from "next/image";
import React from "react";
import feature from "@/public/assets/featureB.png";
import AppButton from "../button/AppButton";

const WeeklyDeal = () => {
  return (
    <section className="container py-14 space-y-8">
      <h6 className="text-center text-[3rem] font-semibold">
        Deal of the Week
      </h6>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-6">
          <span className="block text-3xl leading-none">
            Hot Deal of the Week
          </span>
          <div className="space-y-3">
            <span className="block text-[4rem] font-semibold leading-none ">
              Crazy Byw Lvl X
            </span>
            <span className="block text-[3rem] font-semibold  leading-none text-activeColor">
              $200
            </span>
          </div>

          <AppButton>Order Now</AppButton>
        </div>
        <div className="w-full">
          <Image
            src={feature}
            alt="feature"
            className="h-[600px] w-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WeeklyDeal;
