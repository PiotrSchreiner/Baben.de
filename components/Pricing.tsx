import { CheckIcon } from "@heroicons/react/20/solid";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
//import planAnimation from "../teamAnim.json";

const fadeInFromLeft = {
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 40 },
  },
};

const fadeInFromRight = {
  hidden: { x: 500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 40 },
  },
};

const fadeInFromBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 40 },
  },
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const t = useTranslations("pricing");
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

  const tiers = [
    {
      name: "Out of Home Marketing",
      id: "marketing",
      href: "/angebot",
      description: "",
      features: [
        t("outdoorAdvertising"),
        "Coorporate Design",
        "Data Analytics",
        t("geoTargeting"),
        "Airport-Advertising",
      ],
      mostPopular: false,
      className:
        "bg-gradient-to-tr from-yellow-300 via-yellow-500 to-yellow-700 rounded-3xl lg:mt-8 ",
      style: { opacity: 0 },
      styleIsInView: { opacity: 1 },
      variants: fadeInFromLeft,
    },
    {
      name: "Media & Web-Development",
      id: "tier-startup",
      href: "/angebot",
      description: "",
      features: [
        "Responsive Web Development",
        t("seo"),
        t("content"),
        t("e-commerce"),
        "Social-Media-Managment",
      ],
      mostPopular: true,
      className:
        "bg-gradient-to-tr from-green-300 via-green-500 to-green-700 rounded-3xl ",
      style: { opacity: 0 },
      styleIsInView: { opacity: 1 },
      variants: fadeInFromBottom,
    },
    {
      name: "Marketing Kommunikation",
      id: "tier-enterprise",
      href: "/angebot",
      features: [
        "Event-Marketing",
        t("advertising"),
        "Content-Marketing",
        t("targetGroupAnalysis"),
        "Marketing-Automation & Customer Relationship Management (CRM)",
      ],
      mostPopular: false,
      className:
        "bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-700 rounded-3xl lg:mt-8",
      variants: fadeInFromRight,
      style: { opacity: 0 },
      styleIsInView: { opacity: 1 },
    },
  ];

  return (
    <div>
      <div className="relative">
        <div
          id="pricing"
          className="bg-black/50 py-14 lg:py-26 rounded-3xl isolate px-auto"
        >
          <div className="mx-auto max-w-7xl px-2 lg:px-8" ref={ref}>
            <div className="text-5xl lg:text-5xl font-bold tracking-tight text-white sm:text-5xl text-center">
              <TypeAnimation
                sequence={[t("planAndBook"), 1000]}
                wrapper="span"
                style={{ fontWeight: "800", fontSize: "3rem" }}
                cursor={false}
                repeat={Infinity}
                speed={1}
              />
            </div>
            {/*  <div style={{ width: "28%" }} className="mx-auto">
              <Lottie
                className="w-200 h-200 bg-transparent"
                loop={true}
                animationData={planAnimation}
              />
            </div> */}
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 sm:mt-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier, tierIdx) => (
                <motion.div
                  style={isInView ? tier.styleIsInView : tier.style}
                  initial="hidden"
                  animate={controls}
                  variants={tier.variants}
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                    tier.className,
                    "flex flex-col justify-between p-4 xl:p-10 shadow-lg"
                  )}
                >
                  <div>
                    <div className="flex items-center text-center justify-between gap-x-4">
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.mostPopular ? "text-white" : "text-white",
                          "lg:text-4xl text-3xl font-extrabold leading-8"
                        )}
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white">
                      {tier.description}
                    </p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900"></span>
                    </p>
                    <ul
                      role="list"
                      className="mt-8 space-y-3 text-md leading-6 text-gray-100 font-semibold"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-pink-500"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative group">
                    <Link
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={classNames(
                        tier.mostPopular
                          ? "bg-gradient-to-tr from-purple-800 to-blue-500 text-white shadow-md shadow-black hover:text-blue-300 z-10 isolate"
                          : "bg-gradient-to-tr from-purple-800 to-blue-500 text-white shadow-md shadow-black hover:text-blue-300 z-10 isolate",
                        "mt-8 block rounded-md py-2 px-3 text-center text-lg font-semibold leading-6 z-10 isolate"
                      )}
                    >
                      {t("requestOffer")}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
