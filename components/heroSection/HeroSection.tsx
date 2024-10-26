"use client";

import { BannerShoeData } from "@/constant/data";
import React, { useEffect, useState } from "react";
import cover from "@/public/assets/demoB.png";
import Image from "next/image";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { SlideRight } from "@/utili/animation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import AppButton from "../button/AppButton";

const HeroSection = () => {
  const [activeData, setActiveData] = useState(BannerShoeData[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BannerShoeData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setActiveData(BannerShoeData[currentIndex]);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BannerShoeData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BannerShoeData.length);
  };

  return (
    <section className="lg:h-screen sm:h-[80vh] min-h-[50vh] lg:-mt-[90px] relative w-full ">
      <Image
        src={cover}
        fill
        className="object-center object-cover pointer-events-none w-full h-full z-0"
        alt="cover "
      />
      <div className="absolute w-full right-0 top-0 pe-5 lg:pe-0 container h-full flex flex-col lg:justify-normal sm:justify-center justify-end pb-[6%] sm:pb-0 sm:items-end items-start lg:pt-[13%] z-10">
        <div className="lg:w-[30%] sm:w-[35%] w-[55%] space-y-1">
          <AnimatePresence mode="wait">
            <motion.h5
              key={activeData.id}
              variants={SlideRight(0.2)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-white xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm rubik-font"
            >
              {activeData.title}
            </motion.h5>
          </AnimatePresence>{" "}
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeData.id}
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-white xl:text-[3.5rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] leading-none font-bold "
            >
              {activeData.subTile}
            </motion.h1>
          </AnimatePresence>
          {/* <div className="block sm:hidden">
            <AppButton>More Info</AppButton>
          </div> */}
        </div>
      </div>

      <div className="absolute w-full sm:w-auto lg:left-1/2 sm:left-[7%] left-1/2 lg:top-2/3 sm:top-1/2 top-[10%] lg:-translate-x-1/2 sm:translate-x-0 -translate-x-1/2 lg:-translate-y-2/3 sm:-translate-y-1/2 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeInOut, delay: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className=" flex justify-center"
          >
            <motion.div
              key={activeData.id}
              initial={{ x: -10 }}
              animate={{ x: 10 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.1,
              }}
            >
              <Image
                src={activeData.image}
                alt="shoe"
                className=" lg:w-[90%] md:w-[55%] sm:w-[50%] w-[280px] lg:mx-auto md:ms-5 ms-0 lg:ms-0 sm:mx-0 mx-auto "
                // sizes="(max-width: 768px) 80%, (max-width: 1200px) 90%, 50%"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full sm:flex justify-between px-5 z-20 hidden ">
        <button
          onClick={handlePrevClick}
          className="p-2.5 rounded-full border border-white text-white z-20"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={handleNextClick}
          className="p-2.5 rounded-full border border-white text-white z-20"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
