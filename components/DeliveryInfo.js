import React from "react";
import Image from "next/image";

function DeliveryInfo() {
  return (
    <section className="bg-[#f3f5f6] py-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 max-[639px]:block">
          <div className="bg-white shadow-lg p-5 flex items-center justify-around mb-5 border border-gray-300">
            <div>
              <Image
                src="/img/add4.png"
                width={100}
                height={100}
                className="transition ease-in-out delay-150 hover:-translate-y-5"
              />
            </div>
            <div>
              <h2 className="text-[#00205b] font-medium font-nunito max-[639px]:mb-5 max-[639px]:text-lg">
                Free Delivery Island-wide on orders over £19.99
              </h2>
              <h4 className="text-gray-600">
                Delivered in 1-3 working days. Under £19.99 incurs a £2.50
                charge.
              </h4>
            </div>
          </div>
          <div className="bg-white shadow-lg p-5 flex items-center justify-around mb-5 border border-gray-300">
            <div className="image">
              <Image
                src="/img/add5.png"
                width={100}
                height={100}
                className="transition ease-in-out delay-150 hover:-translate-y-5"
              />
            </div>
            <div className="max-[639px]:p-5">
              <h2 className="text-[#00205b] font-medium font-nunito">
                Free Click & Collect Available
              </h2>
              <h4 className="text-gray-600">Usually ready within 4 hours.</h4>
            </div>
          </div>
        </div>
        {/* 2nd row start*/}
        <div class="flex grid-cols-6 gap-4 my-12">
          <div class="col-start-1 col-end-3 flex items-center mx-auto">
            <div className="mr-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" role="presentation">
                <g stroke-width="1.5" fill="none" fill-rule="evenodd">
                  <path d="M6.5 3.25l12 6" stroke="#000000"></path>
                  <path stroke="#00205b" d="M23 7l-10 5L1 6M13 12v11"></path>
                  <path
                    stroke="#00205b"
                    stroke-linecap="square"
                    d="M23 7v10l-10 6-12-6V6l10-5z"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <h2 className="text-[#00205b] font-medium font-nunito max-[639px]:mb-5 max-[639px]:text-lg">
                Free Delivery Island-wide
              </h2>
              <p className="text-gray-600">On all orders £19.99 or over</p>
            </div>
          </div>
          <div class="col-end-7 col-span-2 flex items-center mx-auto">
            <div className="mr-3">
              <svg className="w-6 h-6" viewBox="0 0 22 24" role="presentation">
                <g stroke-width="1.5" fill="none" fill-rule="evenodd">
                  <path stroke="#000000" d="M9 17h4v6H9z"></path>
                  <path
                    stroke="#00205b"
                    stroke-linecap="square"
                    d="M3 12v11h16V12M21 9c0 2-1.1 3-2.5 3S16 10.9 16 9.5c0 1.4-1.1 2.5-2.5 2.5S11 10.9 11 9.5c0 1.4-1.1 2.5-2.5 2.5S6 10.9 6 9.5C6 10.9 4.9 12 3.5 12S1 11 1 9l4-8h12l4 8z"
                  ></path>
                </g>
              </svg>{" "}
            </div>
            <div>
              <h2 className="text-[#00205b] font-medium font-nunito max-[639px]:mb-5 max-[639px]:text-lg">
                Free Delivery Island-wide
              </h2>
              <p className="text-gray-600">On all orders £19.99 or over</p>
            </div>
          </div>
        </div>
        {/* 2nd row end*/}
      </div>
    </section>
  );
}

export default DeliveryInfo;
