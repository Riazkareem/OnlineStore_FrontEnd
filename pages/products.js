import React from "react";
import Checkbox from "../components/Checkbox";
import FeaturedProductItem from "../components/FeaturedProductItem";

function products() {
  return (
    <section className="bg-bg_body p-8 max-[639px]:p-0">
      <div className="py-8">
        <div className="grid grid-cols-5 gap-4 max-[639px]:block max-[639px]:gap-0">
          <div className="filter bg-white p-5 max-[639px]:hidden">
            <div>
              <h1 className="font-nunito font-bold text-2xl text-[#00205b]">
                Filter
              </h1>
              <hr />
              <Checkbox />
            </div>
          </div>
          <div className="col-span-4 bg-white p-5">
            <div>
              <h1 className="font-nunito font-bold text-2xl text-[#00205b]">
                All Products
              </h1>
              <hr />
              <div className="grid grid-cols-4 gap-1 py-2 max-[639px]:grid-cols-2">
                <FeaturedProductItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default products;
