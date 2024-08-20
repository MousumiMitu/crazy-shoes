import Image from "next/image";
import React from "react";
import cover from "@/assets/feature1P.png";
import img1 from "@/assets/fS1.png";
import { featureData } from "@/constant/data";

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
      {featureData.map((feature) => (
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
  key,
  banner,
  bannerText,
  bannerDesc,
  direction,
  featureImg,
  featureText,
  featureDesc,
}) => {
  return (
    <div className="h-[420px]  grid grid-cols-3" key={key}>
      <div
        className={`flex flex-col text-[#222222] justify-center items-center w-full h-full bg-[#F6F6F6] gap-y-5 ${
          direction === "left" ? "order-1" : "order-2"
        }`}
      >
        <Image src={featureImg} alt="img1" className=" h-[180px] w-auto" />
        <div className="space-y-1 text-center">
          <span className="text-xl block ">{featureText}</span>
          <span className="block text-[2.7rem] font-semibold">
            {featureDesc}
          </span>
        </div>
      </div>
      <div
        className={`col-span-2  relative h-full group ${
          direction === "left"
            ? "order-2 bg-gradient-to-r from-[#68b8e7] to-[#40a9ef]"
            : "order-1 bg-gradient-to-r from-[#FFA301] to-[#FFC702]"
        }`}
      >
        <div
          className={`flex  ${
            direction === "left" ? "justify-end" : "justify-start"
          } items-end  w-full h-full overflow-hidden`}
        >
          <Image
            src={banner}
            className="w-[80%] h-[90%] object-cover group-hover:scale-110 ease-in duration-1000"
            alt="cover "
          />
        </div>
        <div
          className={`absolute  top-1/2 -translate-y-1/2  w-[40%]  z-10  text-white space-y-3 ${
            direction === "left" ? "left-0 ps-10" : "right-0 pe-10"
          }`}
        >
          <h2 className="text-[3rem] font-semibold leading-[1] tracking-[1px]">
            {bannerText}
          </h2>
          <p className="text-2xl ">{bannerDesc}</p>

          <button></button>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;
