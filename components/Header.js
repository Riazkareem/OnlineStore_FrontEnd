import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/router";

function Header() {
  // show login modal
  const [show, setShow] = useState(false);
  // close login model
  const closeModel = () => setShow(false);
  // const router = useRouter();
  // const isActive = (r) => {
  //   if (r === router.pathname) {
  //     return " active";
  //   } else {
  //     return "";
  //   }
  // };
  // className={"nav-link text-white" + isActive("/cart")}
  return (
    <section className="bg-[#1e2d7d]">
      {/* Login Modal Component  */}
      <Modal visible={show} closeModel={closeModel} />
      <div className="container mx-auto py-5 bg-[#1e2d7d]">
        <div className="grid grid-cols-3 gap-4 max-[639px]:block">
          <div className="text-center max-[639px]:mb-5">
            <Link href={"/"}>
              <Image
                src={"/img/logo.webp"}
                width={200}
                height={100}
                alt="logo"
              />
            </Link>
          </div>
          <div className="">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Products ..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex gap-6 justify-evenly items-center text-white font-bold max-[639px]:mt-5">
            <Link href={"/cart"}>
              <div className="flex">
                <button type="button" class="inline-flex relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <div class="inline-flex absolute -top-4 -right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                    10
                  </div>
                </button>
                <span className="ml-1">Cart</span>
              </div>
            </Link>
            <div>
              <button
                type="button"
                class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center rounded-none"
                onClick={() => setShow(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="ml-2">Login/Signup</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
