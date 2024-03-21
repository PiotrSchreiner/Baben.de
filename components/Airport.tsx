"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useAnimation, useInView } from "framer-motion";
//import Lottie from "lottie-react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
//import Airplane from "../Airplane.json";

export default function Airport() {
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
    <div id="airport">
      <div className="relative">
        <div className="relative isolate overflow-hidden bg-black/50  sm:py-14  rounded-3xl mt-32 mb-10">
          <div
            ref={ref}
            className=" text-5xl lg:text-5xl font-bold tracking-tight text-white sm:text-5xl text-center lg:mt-0 mt-10 rounded-xl"
          >
            {isshowing ? (
              <TypeAnimation
                sequence={["FLUGHAFEN WERBUNG", 1000]}
                wrapper="span"
                cursor={false}
                style={{ fontWeight: "800" }}
                repeat={Infinity}
                speed={2}
              />
            ) : null}
          </div>
          {/*    <div style={{ width: "30%" }} className="mx-auto rounded-xl">
            <Lottie
              className="w-200 h-200 bg-transparent mt-6 rounded-lg"
              loop={true}
              animationData={Airplane}
            />
          </div> */}
          <div className="my-10 text-2xl tracking-tight text-white text-center px-4 sm:px-44 font-medium rounded-3xl">
            <div className="mt-2 text-2xl lg:text-2xl bg-black/50 p-5 rounded-3xl">
              Willkommen bei BABEN, Ihrem Partner für maßgeschneiderte
              Werbelösungen auf Flughäfen weltweit. Seit 1986 bieten wir
              hochwertige Werbemöglichkeiten an Flughäfen an. Spezialisiert auf
              Deutschland und Osteuropa, liefern wir kurzfristige Promotions
              sowie langfristige Imagewerbung. Weltweite Präsenz ist auf Anfrage
              möglich!
              <br />
              <div className="relative group ">
                <div className="absolute bg-blue-500 rounded-md top-0 left-0 right-0 w-[380px] h-[50px] mx-auto px-3 leading-6 block  opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <Link
                  href="/angebot"
                  className="mt-5 block w-[380px] mx-auto rounded-md bg-gradient-to-tr from-purple-800 to-blue-500 px-5 py-2.5 text-center text-lg font-semibold text-white shadow-md shadow-black hover:text-blue-300 isolate "
                >
                  Zu unseren Angeboten
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
