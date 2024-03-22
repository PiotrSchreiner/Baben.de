"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useAnimation, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function History() {
  const t = useTranslations("History");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [isshowing, setisShowing] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setisShowing(true);
    }
  }, [controls, isInView]);

  return (
    <div>
      <div className="relative">
        <div
          id="history"
          className="relative isolate overflow-hidden py-8 rounded-3xl"
        >
          <div
            ref={ref}
            className="font-raleway font-light text-center text-white dark:text-custom-200 tracking-wider mx-4 text-4xl sm:text-5xl md:text-6xl"
          >
            {isshowing ? (
              <TypeAnimation
                sequence={[t("historyOfBabendererde"), 1000]}
                wrapper="span"
                cursor={false}
                style={{ fontWeight: "200" }}
                repeat={Infinity}
                speed={2}
              />
            ) : null}
          </div>
          <div className="mt-20 text-2xl tracking-wide text-white text-center px-4 sm:px-44 ">
            {isshowing ? (
              <p className="bg-gradient-to-tr from-purple-800 to-blue-500 rounded-3xl mx-auto md:mx-56 p-4 md:p-12 tracking-wider leading-8 text-xl shadow-lg shadow-blue-400 text-left">
                {t("history")}
              </p>
            ) : null}
          </div>
          <div className="mt-24 text-xl md:text-3xl font-extrabold tracking-widest text-white text-center uppercase">
            {isshowing ? (
              <TypeAnimation
                sequence={[t("swipe"), 1000]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                speed={2}
              />
            ) : null}
          </div>
          <div className="flex justify-center ">
            <div
              onClick={() =>
                document
                  ?.getElementById("swiper")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white hover:text-blue-300  cursor-pointer"
            >
              <KeyboardDoubleArrowDownIcon className="w-16 h-16 mt-10" />
            </div>
          </div>
          <div className=" md:w-[800px] md:h-full w-[320px] h-[160px] md:my-20 my-12  rounded-3xl justify-center  items-center mx-auto shadow-lg shadow-blue-400">
            <Swiper
              id="swiper"
              rel="swiper"
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
            >
              <SwiperSlide>
                <Image
                  alt="Hamburg Bild"
                  className="w-full h-full rounded-3xl object-cover"
                  src="https://cdn.pixabay.com/photo/2018/02/07/09/47/travel-3136679_1280.jpg"
                  height={720}
                  width={1080}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="City skyline"
                  className="w-full h-full rounded-3xl object-cover"
                  src="https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg"
                  height={720}
                  width={1080}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="hamburg"
                  className="w-full h-full rounded-3xl object-cover"
                  src="https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525_1280.jpg"
                  height={720}
                  width={1080}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="Babndererde History1"
                  className="w-full h-[400px] rounded-3xl object-cover"
                  src="http://www.babendererde.de/willkommen/image/01_photo_02.jpg"
                  height={720}
                  width={1080}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="Babndererde History2"
                  className="w-full h-[400px] rounded-3xl object-cover"
                  src="http://www.babendererde.de/willkommen/image/02_photo_03.jpg"
                  height={720}
                  width={1080}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="Babndererde History3"
                  className="w-full h-[400px] rounded-3xl"
                  src="http://www.babendererde.de/willkommen/image/03_photo_02.jpg"
                  height={720}
                  width={1080}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
