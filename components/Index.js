import React from "react";
import DeliveryInfo from "./DeliveryInfo";
import FeaturedProduct from "./FeaturedProduct";
import Footer from "./Footer";
import Shopnow from "./Shopnow";
import Slider from "./Slider";
function Index() {
  return (
    <div className="bg-[#f3f5f6]">
      <Slider />
      <FeaturedProduct />
      <Shopnow />
      <DeliveryInfo />
      <hr />
      <Footer />
    </div>
  );
}

export default Index;
