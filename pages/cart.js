import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  updateProductQuantity,
  deleteProduct,
} from "../components/redux/actions/productActions";

const calculateProductsTotal = (products) =>
  products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
function cart() {
  const cartProducts = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const getTotal = () => {
    return cartProducts.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.quantity;
    }, 0);
  };

  return (
    <>
      <div className="mx-auto p-12">
        <div className="bg-gray-200">
          <h1 className="text-2xl text-center">Your Cart Details</h1>
        </div>
        {cartProducts.length > 0 && (
          <div class="grid grid-cols-4 gap-4 relative">
            <div class="col-span-3 h-[480px] overflow-y-auto">
              <div class="shadow-md">
                <table class="w-full text-sm text-left">
                  <thead class="uppercase  bg-gray-100 font-semibold text-gray-900 dark:text-white sticky top-0 z-50">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Image
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Product
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Qty
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Price
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Total Price
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((product) => {
                      const totalprice = product.quantity * product.price;
                      return (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="p-4 w-32">
                            <img src={product.image} alt={product.title} />
                          </td>
                          <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {product.title}
                          </td>
                          <td className="py-4 px-6">
                            <div class="flex items-center space-x-3">
                              {/* <button
                      class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button">
                      <span class="sr-only">Quantity button</span>
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </button> */}
                              <div>
                                <input
                                  type="number"
                                  defaultValue={product.quantity}
                                  min="1"
                                  step="1"
                                  className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                                  onChange={(e) => {
                                    dispatch(
                                      updateProductQuantity(
                                        product.id,
                                        e.target.value
                                      )
                                    );
                                  }}
                                  required
                                />
                              </div>
                              {/* <button
                      onClick={() => dispatch(updateProductQuantity())}
                      className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button">
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </button> */}
                            </div>
                          </td>
                          <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            ${product.price}
                          </td>
                          <td className="py-4 px-6">{totalprice}</td>
                          <td className="remove-pr">
                            <a
                              role="button"
                              onClick={dispatch.bind(
                                null,
                                deleteProduct(product.id)
                              )}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 text-red-600">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot className="sticky bottom-0 z-50 bg-gray-200">
                    <tr class="font-semibold text-gray-900 dark:text-white">
                      <th scope="row" class="py-3 px-6 text-base">
                        Total
                      </th>
                      <th> </th>
                      <th class="py-3 px-6 col-span-2"> {getTotal()} </th>
                      <th> </th>
                      <th class="py-3 px-6 col-span-2">
                        {calculateProductsTotal(cartProducts)}
                      </th>
                      <th> </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="">
              <div class="w-full max-w-md  bg-white  shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex items-center justify-between mb-4 ">
                  <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Order Summary
                  </h5>
                </div>
                <div class="flow-root">
                  <ul
                    role="list"
                    class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            SubTotal:
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          ${calculateProductsTotal(cartProducts)}
                        </div>
                      </div>
                    </li>
                    <li class="sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Service Charges:
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          0
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Total:
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          ${calculateProductsTotal(cartProducts)}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {cartProducts.length == 0 && (
          <h4 className="text-center m-8 text-red-600 font-bold">
            No Products in Cart
          </h4>
        )}
      </div>
      <hr />
    </>
  );
}
export default cart;
