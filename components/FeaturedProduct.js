import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturedProductItem from "./FeaturedProductItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
// import required modules
import { Navigation } from "swiper";
import "swiper/css";

import axios from "axios";
import {
  setProducts,
  addToCart,
} from "../components/redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
function FeaturedProduct() {
  const product = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("error", error);
      });
    //console.log(response);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  //console.log(product);
  SwiperCore.use([Autoplay]);
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="font-nunito font-bold text-2xl text-[#00205b] pt-10">
          Featured Products
        </h1>
        <div className="py-8 mb-5">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 5,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 5,
                slidesPerGroup: 1,
              },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false, // stop on hover
              pauseOnMouseEnter: true, // start after hover
            }}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            // slidesPerView={5}
            // spaceBetween={20}
            // slidesPerGroup={1}
            loop={true}
            className="mySwiper">
            {product.map((item, index) => {
              return (
                <SwiperSlide>
                  {/* <FeaturedProductItem key={index} {...item} /> */}
                  <div>
                    <div
                      key={item.id}
                      className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 shadow relative">
                      <div className="py-5 h-60">
                        <Link href={`/cart/${item.id}`}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            // layout="fill" // required
                            width={130} // required
                            height={130} // required
                            className="mx-auto hover:animate-pulse"
                          />
                        </Link>
                      </div>
                      <div className="px-5 mt-2">
                        <Link href={`/cart/${item.id}`}>
                          <h3 className="text-md font-nunito font-medium text-[#00205b]">
                            {item.title.substring(0, 18)}
                          </h3>
                        </Link>
                      </div>
                      <div className="price flex justify-center p-2">
                        <div className="newPrice text-red-600 font-extrabold">
                          <span> ${item.price}</span>
                        </div>
                        <div className="oldPrice ml-2 text-gray-500 line-through">
                          <span>$29.99</span>
                        </div>
                      </div>
                      <div className="Instock flex items-center p-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div>
                          <span className="text-green-500  px-2">In Stock</span>
                        </div>
                      </div>
                      <div className="cartBtn">
                        <button
                          onClick={() => dispatch(addToCart(item))}
                          className="text-white bg-[#2557D6] hover:bg-[#2557D6]/80  font-medium text-sm px-5 py-2.5 inline-flex items-center justify-center w-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>

                          <span className="ml-2">Add to cart </span>
                        </button>
                      </div>
                      <div className="save  inline">
                        <span className="text-white p-0.5 font-nunito text-sm absolute top-1 left-1 bg-red-500 rounded-sm">
                          save $5
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;
