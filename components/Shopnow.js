import React from "react";
import Image from "next/image";

function Shopnow() {
  return (
    <section>
      <div className="container mx-auto mb-14">
        <div className="grid grid-cols-3 gap-12   max-[639px]:block">
          <div className="bg-[#55c3c3] p-7 relative h-[270px] rounded-md shadow overflow-hidden mb-4">
            <h1 className="font-nunito leading-10 font-medium text-white text-[23px]">
              NEW Squishmallows!
            </h1>
            <p className="text-white font-nunito text-sm pt-3">
              Unique super-soft collectable plush with a marshmallow like
              texture
            </p>
            <button className="bg-white px-8 py-3 font-nunito mt-12">
              Shop now
            </button>
            <Image
              src="/img/add1.webp"
              width={170}
              height={170}
              className="absolute right-0 -bottom-5  transition ease-in-out delay-150 hover:-translate-y-5"
            />
          </div>
          <div className="bg-[#9c9c9e] p-8 relative h-[270px] rounded-md overflow-hidden shadow mb-4">
            <h1 className="font-nunito leading-10 font-medium text-white text-[23px]">
              EUGY - Best Seller
            </h1>
            <p className="text-white font-nunito text-sm pt-3">
              Build your own beautifully detailed 3D Unique collectable.
            </p>
            <button className="bg-white px-8 py-3 font-nunito mt-12">
              Shop now
            </button>
            <Image
              src="/img/add2.webp"
              width={170}
              height={170}
              className="absolute right-0 -bottom-8  transition ease-in-out delay-150 hover:-translate-y-5"
            />
          </div>
          <div className="bg-white p-8 relative h-[270px] rounded-md  overflow-hidden shadow mb-4">
            <h1 className="font-nunito leading-10 font-medium text-black text-[23px]">
              Baby Safety
            </h1>
            <p className="text-black font-nunito text-sm pt-3">
              Make you home safe for your baby.
            </p>
            <button className="bg-black px-8 py-3 font-nunito mt-12 text-white">
              Shop now
            </button>
            <Image
              src="/img/add3.webp"
              width={170}
              height={170}
              className="absolute right-0 -bottom-5  transition ease-in-out delay-150 hover:-translate-y-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shopnow;
