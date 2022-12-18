import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Navbar() {
  const router = useRouter();
  // it put active class to current page or nav element
  const isActive = (r) => {
    if (r === router.pathname) {
      return " active text-white bg-[#2557D6] px-2 py-1";
    } else {
      return "";
    }
  };

  // it hides the dropdown menu
  const [show, setShow] = useState(true);
  function closeModel() {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }

  return (
    <section>
      <div className="container-fluid">
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 shadow ">
          <div className="max-[639px]:absolute max-[639px]:top-2  flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <button
              id="mega-menu-full-cta-button"
              data-collapse-toggle="mega-menu-full-cta"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-gray-300"
              aria-controls="mega-menu-full-cta"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6 text-white max-[639px]:bg-blue-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="mega-menu-full-cta"
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 bg-white"
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-2 font-nunito-600 text-md">
                <li>
                  <Link
                    href={"/"}
                    className={
                      "hover:text-white hover:bg-[#2557D6] px-2 hover:py-1 " +
                      isActive("/")
                    }
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/products"}
                    className={
                      "hover:text-white hover:bg-[#2557D6] px-2 hover:py-1 " +
                      isActive("/products")
                    }
                    aria-current="page"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <button
                    id="mega-menu-full-cta-dropdown-button"
                    data-collapse-toggle="mega-menu-full-cta-dropdown"
                    data-dropdown-placement="bottom"
                    className="peer flex items-center hover:text-white hover:bg-[#2557D6] px-2 "
                  >
                    Home & Hardware
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button
                    id="mega-menu-full-cta-dropdown-button"
                    data-collapse-toggle="mega-menu-full-cta-dropdown"
                    data-dropdown-placement="bottom"
                    className="show_on_mobile md:hidden items-center hover:text-white hover:bg-[#2557D6] px-2"
                  >
                    Home & Hardware
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  {show ? (
                    <div
                      id="mega-menu-full-cta-dropdown"
                      className="hidden peer-hover:flex hover:block absolute top-30 right-12 mt-0 bg-white border-gray-200 drop-shadow-lg border-y dark:bg-gray-800 dark:border-gray-600 overflow-y-auto h-1/2 mobile:right-3 mobile:left-3 mobile:h-96 mobile:z-50"
                    >
                      <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                        <ul className="space-y-4 sm:mb-4 md:mb-0">
                          <h3 className="font-bold text-xl text-gray-900 text-bold mb-2">
                            Main Category 1
                          </h3>
                          <li onClick={closeModel}>
                            <Link
                              href={"/"}
                              className="text-base capitalize hover:bg-[#2557D6] hover:px-2 hover:py-1 hover:text-white"
                            >
                              category name
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/"}
                              className="text-base capitalize hover:bg-[#2557D6] hover:px-2 hover:py-1 hover:text-white"
                            >
                              category name
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/"}
                              className="text-base capitalize hover:bg-[#2557D6] hover:px-2 hover:py-1 hover:text-white"
                            >
                              category name
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/"}
                              className="text-base capitalize hover:bg-[#2557D6] hover:px-2 hover:py-1 hover:text-white"
                            >
                              category name
                            </Link>
                          </li>
                        </ul>
                        <ul className="mb-4 space-y-4 md:mb-0 sm:block">
                          <h3 className="font-bold text-xl text-gray-900 text-bold mb-2">
                            Main Category 2
                          </h3>
                          <li>
                            <Link
                              href={"/"}
                              className="text-base capitalize hover:bg-[#2557D6] hover:px-2 hover:py-1 hover:text-white"
                            >
                              category name
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/"}
                              className="text-base capitalize hover:bg-[#2557D6] hover:px-2 hover:py-1 hover:text-white"
                            >
                              category name
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/"}
                              className="text-base capitalize hover:bg-[#2557D6] hover:px-2 hover:py-1 hover:text-white"
                            >
                              category name
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/"}
                              className="text-base capitalize hover:bg-[#2557D6] hover:px-2 hover:py-1 hover:text-white"
                            >
                              category name
                            </Link>
                          </li>
                        </ul>
                        <div className="mt-4 md:mt-0">
                          <h3 className="font-bold text-xl text-gray-900 text-bold mb-2">
                            Main Category 3
                          </h3>
                          <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                            At Flowbite, we have a portfolio of brands that
                            cater to a variety of preferences.
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700"
                          >
                            Explore our brands
                            <span className="sr-only">Explore our brands </span>
                            <svg
                              className="ml-1 w-4 h-4"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </li>
                <style jsx>
                  {`
                    @media only screen and (min-width: 320px) and (max-width: 480px) {
                      .show_on_mobile {
                        display: flex;
                      }
                      .peer {
                        display: none;
                      }
                    }
                  `}
                </style>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
