import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <section>
      <div className="container-fluid mx-auto">
        <div className="grid grid-cols-4 gap-12 mb-10 px-5 max-[639px]:block">
          <div className="col-span-2">
            <h1 className="text-[#00205b] font-bold text-lg font-nunito max-[639px]:mb-5 max-[639px]:text-lg uppercase">
              about us
            </h1>
            <p className="font-nunito text-sm pt-3 text-gray-600 leading-7">
              Family run department stores trading in the Isle of Man.
              Specialising in the retail of Toys, Household & Hardware Goods,
              Baby & Nursery Goods and Fishing Tackle.
            </p>
          </div>
          <div>
            <h1 className="text-[#00205b] font-bold text-lg font-nunito max-[639px]:mb-5 max-[639px]:text-lg uppercase">
              footer
            </h1>
            <p className="font-nunito text-sm pt-3 text-gray-600 leading-7">
              Home
            </p>
          </div>
          <div>
            <h1 className="text-[#00205b] font-bold text-lg font-nunito max-[639px]:mb-5 max-[639px]:text-lg uppercase">
              NEWSLETTER
            </h1>
            <p className="font-nunito text-sm pt-3 text-gray-600 leading-7">
              Subscribe to receive emails from us showcasing our latest products
              and offers!
            </p>
            <div className="mt-5">
              <form>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full"
                />

                <button
                  type="button"
                  className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 font-medium text-sm px-3 py-2 text-center inline-flex items-center mt-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                  <span className="ml-2 font-bold"> Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* social icon  */}
        <div className="grid grid-flow-row max-[639px]:mb-5">
          <footer className=" bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022
              <Link href="" className="hover:underline">
                ouremail@gmail.com
              </Link>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Footer;
