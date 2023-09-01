"use client";
import  {ArrowSimple}  from "../../../assets/icons";
import { useSwiper } from "swiper/react";

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="w-fit py-1  mt-4 space-x-8">
      <button
        className="bg-transparent border border-primary_blue relative z-10 p-1 rounded-full"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <ArrowSimple className="w-6 h-6 text-primary rotate-90" />
      </button>

      <button
        className="bg-transparent border border-primary_blue relative z-10 p-1 rounded-full"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <ArrowSimple className="w-6 h-6 text-primary rotate-[-90deg]" />
      </button>
    </div>
  );
};

export default SliderButtons;
