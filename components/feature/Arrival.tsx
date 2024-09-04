import React from "react";
import ProductCard from "./ProductCard";
import { ProductData } from "@/constant/data";

const Arrival = () => {
  return (
    <div className="lg:py-20 md:py-16 py-10 space-y-4 container">
      <h3 className="text-center lg:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] font-semibold">
        {" "}
        New Arrival
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
        {ProductData.map((card: any) => (
          <ProductCard
            key={card.id}
            img={card.img}
            title={card.title}
            price={card.price}
            category={card.category}
            newItem={card.newItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Arrival;
