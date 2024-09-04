import Image from "next/image";
import React from "react";

import { FeatureData } from "@/constant/data";
import AppButton from "../button/AppButton";

interface FeatureProps {
  banner: any;
  key: number;
  bannerText: string;
  bannerDesc: string;
  direction: string;
  featureImg: any;
  featureText: string;
  featureDesc: string;
}

const FeatureArea = () => {
  return (
    <section>
      {FeatureData.map((feature) => (
        <FeatureContent
          banner={feature.banner}
          key={feature.id}
          bannerText={feature.bannerText}
          bannerDesc={feature.bannerDesc}
          direction={feature.direction}
          featureImg={feature.featureImg}
          featureText={feature.featureText}
          featureDesc={feature.featureDesc}
        />
      ))}
    </section>
  );
};

const FeatureContent: React.FC<FeatureProps> = ({
  banner,
  bannerText,
  bannerDesc,
  direction,
  featureImg,
  featureText,
  featureDesc,
}) => {
  return (
    <div className="lg:h-[420px] md:h-[280px] sm:h-[230px]  grid sm:grid-cols-3  grid-cols-1">
      <div
        className={`flex flex-col text-[#222222] justify-center items-center w-full h-full bg-[#F6F6F6] sm:py-0 py-5 gap-y-5 ${
          direction === "left" ? "order-1" : "sm:order-2 order-1"
        }`}
      >
        <Image
          src={featureImg}
          alt="img1"
          className=" lg:h-[180px] md:h-[120px] sm:h-[90px] w-auto px-2"
        />
        <div className="space-y-1 text-center ">
          <span className="lg:text-xl md:text-lg sm:text-base text-lg block ">
            {featureText}
          </span>
          <span className="block lg:text-[2.7rem] md:text-[1.8rem] sm:text-[1.2rem] text-[1.4rem] font-semibold">
            {featureDesc}
          </span>
        </div>
      </div>
      <div
        className={`col-span-2  relative sm:h-full min-h-[200px] group ${
          direction === "left"
            ? "order-2 bg-gradient-to-r from-[#68b8e7] to-[#40a9ef]"
            : "sm:order-1 order-2 bg-gradient-to-r from-[#FFA301] to-[#FFC702]"
        }`}
      >
        <div
          className={`flex  ${
            direction === "left" ? "justify-end" : "justify-start"
          } items-end  w-full h-full overflow-hidden`}
        >
          <Image
            src={banner}
            className="w-[80%] lg:h-[90%] h-[95%] object-cover group-hover:scale-110 ease-in duration-1000"
            alt="cover "
          />
        </div>
        <div
          className={`absolute  top-1/2 -translate-y-1/2  lg:w-[40%] w-[35%] z-10  text-white lg:space-y-3 md:space-y-2 space-y-1 ${
            direction === "left"
              ? "left-0 lg:ps-10 ps-5"
              : "right-0 lg:pe-10 pe-5"
          }`}
        >
          <h2 className="xl:text-[3rem] lg:text-[2.8rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1rem] font-semibold lg:leading-[1] leading-none lg:tracking-[1px]">
            {bannerText}
          </h2>
          <p className="lg:text-2xl md:text-base sm:text-base text-sm">
            {bannerDesc}
          </p>

          <div className="pt-2">
            <AppButton>More Info</AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;
