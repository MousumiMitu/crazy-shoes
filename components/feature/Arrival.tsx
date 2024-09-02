import React from "react";
import ProductCard from "./ProductCard";
import { productData } from "@/constant/data";

const Arrival = () => {
  return (
    <div className="py-20 space-y-4 container">
      <h3 className="text-center text-[3.5rem] font-semibold"> New Arrival</h3>
      <div className="grid grid-cols-4 gap-7">
        {productData.map((card: any) => (
          <div key={card.id}>
            <ProductCard
              img={card.img}
              title={card.title}
              price={card.price}
              category={card.category}
              newItem={card.newItem}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrival;
