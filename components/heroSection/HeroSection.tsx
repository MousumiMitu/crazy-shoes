"use client";

import { bannerShoeData } from "@/constant/data";
import React, { useEffect, useState } from "react";
import cover from "@/assets/demoB.png";
import Image from "next/image";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { SlideRight } from "@/utili/animation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  const [activeData, setActiveData] = useState(bannerShoeData[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerShoeData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setActiveData(bannerShoeData[currentIndex]);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerShoeData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerShoeData.length);
  };

  return (
    <section className="h-screen -mt-[90px] relative w-full ">
      <Image
        src={cover}
        layout="fill"
        className="object-center object-cover pointer-events-none "
        alt="cover "
      />
      <div className="relative container h-full flex flex-col items-end pt-[13%]">
        <div className="w-[30%] space-y-1">
          <AnimatePresence mode="wait">
            <motion.h5
              key={activeData.id}
              variants={SlideRight(0.2)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-white text-2xl rubik-font"
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
              className="text-white text-[3.5rem] leading-none font-bold "
            >
              {activeData.subTile}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-2/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeInOut, delay: 0 }}
            exit={{ opacity: 0, x: 100 }}
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
              <Image src={activeData.image} alt="shoe" className="w-[90%]" />
            </motion.div>
            {/* <Image src={activeData.image} alt="shoe" className="w-[90%]" /> */}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full flex justify-between px-5">
        <button
          onClick={handlePrevClick}
          className="p-2.5 rounded-full border border-white text-white"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={handleNextClick}
          className="p-2.5 rounded-full border border-white text-white"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
