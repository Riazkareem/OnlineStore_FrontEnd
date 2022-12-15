import React from "react";

function Navbar() {
  return (
    <section>
      <div className="container">
        <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white">
                    Home & Hardware
                  </button>
                  <div
                    className="hidden peer-hover:flex hover:block
flex-col bg-white drop-shadow-lg"
                  >
                    <div
                      role="toggle"
                      class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800"
                    >
                      <div class="flex flex-nowrap justify-between">
                        <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                          <h3 class="font-bold text-xl text-white text-bold mb-2">
                            Heading 1
                          </h3>
                          <li>
                            <a
                              href="#"
                              class="block mb-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                            >
                              Category One Sublink
                            </a>
                          </li>
                        </ul>
                        <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                          <h3 class="font-bold text-xl text-white text-bold mb-2">
                            Heading 2
                          </h3>
                          <li>
                            <a
                              href="#"
                              class="block mb-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                            >
                              Category One Sublink
                            </a>
                          </li>
                        </ul>
                        <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                          <h3 class="font-bold text-xl text-white text-bold mb-2">
                            Heading 3
                          </h3>
                          <li>
                            <a
                              href="#"
                              class="block mb-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                            >
                              Category One Sublink
                            </a>
                          </li>
                        </ul>
                        <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                          <h3 class="font-bold text-xl text-white text-bold mb-2">
                            Heading 4
                          </h3>
                          <li>
                            <a
                              href="#"
                              class="block mb-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                            >
                              Category One Sublink
                            </a>
                          </li>
                        </ul>
                        <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                          <h3 class="font-bold text-xl text-white text-bold mb-2">
                            Heading 5
                          </h3>
                          <li>
                            <a
                              href="#"
                              class="block mb-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                            >
                              Category One Sublink
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
