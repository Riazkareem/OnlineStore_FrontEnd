import React from "react";
import DeliveryInfo from "./DeliveryInfo";
import FeaturedProduct from "./FeaturedProduct";
import Shopnow from "./Shopnow";
import Slider from "./Slider";
function Index() {
  return (
    <div className="">
      <Slider />
      <FeaturedProduct />
      <Shopnow />
      <DeliveryInfo />
    </div>
  );
}

export default Index;
