import React from "react";
import BrandsArea from "./BrandsArea";
import PromoArea from "./PromoArea";
import Slider from "./Slider";
import WidgetArea from "./WidgetArea";

const HomeMain = () => {
  return (
    <>
      <Slider />
      <PromoArea />
      <BrandsArea />
      <WidgetArea />
    </>
  );
};

export default HomeMain;
