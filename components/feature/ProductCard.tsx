import Image from "next/image";
import React from "react";
import { PiShoppingCartLight, PiHeartStraightBold } from "react-icons/pi";

interface ProductProps {
  img: any;
  category: string;
  price: string;
  title: string;
  newItem?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  img,
  category,
  price,
  newItem,
  title,
}) => {
  return (
    <div className=" pb-4 group   transition-all delay-150 ease-in-out duration-300">
      <div className="bg-[#F1F2F4] lg:h-[300px] md:h-[250px] h-[200px] flex items-center justify-center relative group">
        <Image src={img} alt="img" className="w-[75%]" />
        {newItem && (
          <div className="z-10 absolute right-0 top-0 m-2 bg-activeColor ">
            <span className="text-white text-sm  px-1 py-1.5 font-medium block border tracking-[1px]   vertical-text">
              New
            </span>
          </div>
        )}

        <div className="z-10 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  items-center justify-center gap-3 hidden group-hover:flex transition-all  ease-in-out duration-500">
          <button className="p-2 rounded-full bg-white hover:bg-activeColor hover:text-white transition-all  ease-in-out duration-300">
            <PiShoppingCartLight />
          </button>
          <button className="p-2 rounded-full bg-white hover:bg-activeColor hover:text-white transition-all  ease-in-out duration-300">
            <PiHeartStraightBold />
          </button>
        </div>
      </div>
      <div className="space-y-1 pt-5 group-hover:px-2 transition-all delay-150 ease-in-out duration-300 group-hover:border-b group-hover:border-x group-hover:border-gray-200">
        <span className="block md:text-sm text-xs text-gray-400">
          {category}
        </span>
        <p className="md:text-2xl text-xl font-medium">{title}</p>
        <span className="block md:text-xl text-base text-activeColor font-medium md:pt-1 pt-px">
          ${price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
