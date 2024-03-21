"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function SlideshowBackground({
  images,
}: {
  images: { url: string; text: string }[];
}) {
  return (
    <>
      <Swiper
        id="background"
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 5000,
        }}
        speed={1000}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {images.map((image: { url: string; text: string }) => (
          <SwiperSlide key={image.url} className="relative cursor-pointer">
            <div
              className="h-screen w-full transform transition-transform duration-1000 relative overflow-hidden"
              style={{
                backgroundImage: `url(${image.url.replace(
                  /_1280\.jpg$/,
                  "_640.jpg"
                )})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            {image.text}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
