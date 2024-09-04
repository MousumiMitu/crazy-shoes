import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="lg:h-[90px] md:h-[75px] h-[60px] bg-white lg:bg-transparent px-3 lg:container flex justify-between items-center z-[100] lg:text-white text-darkColor relative uppercase">
      <div className=" flex items-center gap-2">
        <RiMenu2Line className="text-xl" />
        <span className="hidden lg:block">Menu</span>
      </div>
      <div className="text-center uppercase">
        <span className="text-xl font-medium">Knee-Hi</span>
      </div>
      <div className="text-xl flex items-center">
        <div className="lg:border-e ">
          <IoIosSearch className="text-2xl lg:me-4 me-2" />
        </div>

        <div className=" flex items-center lg:gap-4 md:gap-3 gap-3">
          <FaRegUser className="ms-4 hidden lg:block" />
          <BsCart3 />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
