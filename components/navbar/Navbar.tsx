import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="h-[90px] container flex justify-between items-center z-[100] text-white relative uppercase">
      <div className=" flex items-center gap-2">
        <RiMenu2Line className="text-xl" />
        <span>Menu</span>
      </div>
      <div className=" uppercase">
        <span className="text-xl font-medium">Knee-Hi</span>
      </div>
      <div className="text-xl flex items-center">
        <div className="border-e ">
          <IoIosSearch className="text-2xl me-4" />
        </div>

        <div className=" flex items-center gap-4">
          <FaRegUser className="ms-4" />
          <BsCart3 />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
