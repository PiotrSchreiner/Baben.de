// @ts-nocheck

"use client";
import { clsx } from "clsx"; // Make sure to import clsx
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { twMerge } from "tailwind-merge";

const Leaf1 = () => (
  <svg
    fill="none"
    height="20"
    viewBox="0 0 96 96"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M14.6824 74.4907C-4.84625 29.8647 45.5328 13.4284 74.7908 7.75781L74.0694 7.83897L72.7186 8.00967C72.1823 8.08012 71.6333 8.15539 71.0723 8.23562L69.3538 8.49133C67.8926 8.71705 66.3605 8.97465 64.768 9.2663C56.5506 10.7713 48.3483 12.8718 40.6374 15.6982C26.7474 20.7895 15.8645 27.6767 9.17986 37.1505C5.70818 42.0707 3.57295 47.4353 2.8158 53.1481C2.4866 54.6791 2.22344 56.1347 2.14182 57.1741C1.86813 60.6595 1.883 66.4895 3.17739 69.7258C4.47177 72.9621 8.35532 82.0237 17.4171 86.5545C26.4788 91.0853 46.8411 92.3146 57.9185 83.5952C65.8924 77.3187 71.3733 68.2759 76.1966 55.6273L76.8221 53.957C76.9258 53.6752 77.0293 53.3917 77.1324 53.1064L77.6396 51.6799L78.3676 49.5332L79.5436 45.9578L80.6771 42.413C71.1785 68.6769 56.078 96.2172 18.7546 79.4937C19.3945 78.4875 20.014 77.5084 20.6192 76.552C30.2066 61.3991 36.1946 51.9351 62.9524 30.7715C33.5104 46.6964 24.3994 60.1481 15.9686 72.5954L15.9683 72.5959C15.5387 73.23 15.111 73.8616 14.6824 74.4907Z"
        fill="#0E5B62"
      />
      <path
        d="M14.6822 74.4901C-12.2787 12.8813 93.9999 5 93.9999 5C93.9999 5 92.0508 9.10853 87.5744 22.0202C86.7258 24.4669 85.8646 27.082 84.9682 29.8039C75.5303 58.4614 62.1938 98.9565 18.7545 79.4927C19.3944 78.4868 20.0137 77.5078 20.6188 76.5516C30.2062 61.3986 36.1942 51.9346 62.952 30.7711C33.51 46.696 24.399 60.1476 15.9682 72.5949C15.5386 73.2292 15.1108 73.8608 14.6822 74.4901Z"
        fill="#3AC48F"
      />
    </g>
  </svg>
);

const tiers = [
  {
    name: "Out of Home Marketing",
    href: "/angebot",
    className:
      "bg-gradient-to-tr from-yellow-300 via-yellow-500 to-yellow-700 rounded-3xl lg:mt-8 ",
    description:
      "Unsere Dienstleistungen umfassen die Planung und Umsetzung von Außenwerbungskampagnen, die Entwicklung eines konsistenten Corporate Designs, fortschrittliche Data-Analytics-Techniken und gezieltes Geo-Targeting für optimierte Werbekampagnen.",
    features: [
      "Aussenwerbung",
      "Coorporate Design",
      "Data Analytics",
      "Geo-Targeting für Werbekampgnen",
    ],
  },
  {
    name: "Airport Advertising",
    href: "/angebot",
    className:
      "bg-gradient-to-tr from-green-300 via-green-500 to-green-700 rounded-3xl ",
    description:
      "Seit 1986 bieten wir hochwertige Werbemöglichkeiten an Flughäfen an. Spezialisiert auf Deutschland und Osteuropa, liefern wir kurzfristige Promotions sowie langfristige Imagewerbung. Weltweite Präsenz ist auf Anfrage möglich!",
    features: ["", "", "", "", "", ""],
  },
  {
    name: "Marketing Communikation",
    href: "/angebot",
    className:
      "bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-700 rounded-3xl lg:mt-8",
    description:
      "Mit unserer präzisen Zielgruppenanalyse und innovativen Methoden im Marketing-Automation und CRM unterstützen wir Sie dabei, Ihre Kunden zu verstehen und Ihre Marke zu stärken.",
    features: [
      "Event-Marketing",
      "Werbekampagnen-planung",
      "Content-Marketing",
      "Zielgruppenanalyse",
      "Marketing-Automation & Customer Relationship Management (CRM)",
    ],
  },
];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  borderRadius = "0.375rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden group",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-80 bg-[radial-gradient(var(--white)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative backdrop-blur-xl flex items-center justify-center w-full h-full text-md antialiased max-w-min uppercase shadow px-4 py-2 text-gray-50 font-medium rounded-md bg-teal-800 hover:bg-turquoise-500 tracking-widest	hover:text-darkgreen-500 font-opensans",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export function Hero({ className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      id="pricing"
      className={`${className} flex flex-col items-center mx-auto text-darkgreen-500 rounded-3xl`}
    >
      <div className="flex items-center justify-center pb-6 md:pb-12">
        <div className="font-raleway font-light text-center text-white dark:text-custom-200 tracking-wider text-4xl sm:text-5xl md:text-6xl md:pt-16 mx-12">
          <TypeAnimation
            sequence={["PLANEN UND BUCHEN", 1000]}
            wrapper="span"
            style={{ fontWeight: "200" }}
            cursor={false}
            repeat={Infinity}
            speed={1}
          />
        </div>
      </div>
      <div className="isolate overflow-hidden py-4 md:py-8">
        <div className="mx-auto grid grid-cols-1 lg:max-w-7xl lg:grid-cols-2 xl:grid-cols-3 ">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className="relative group p-2"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-700 block rounded-[32px] "
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div
                div
                className="flex flex-col justify-between h-full rounded-3xl bg-gradient-to-tr from-purple-800 to-blue-500 sm:p-10 p-6 relative z-20 border-purple-600 border shadow-lg shadow-blue-400"
              >
                <div className="flex items-baseline gap-x-2 ">
                  <h2
                    className="text-2xl md:text-5xl tracking-tight text-gray-50 font-raleway [word-break:break-word] hyphens-auto"
                    dangerouslySetInnerHTML={{ __html: tier.name }}
                  />
                </div>
                <p className="mt-6 md:text-base text-sm leading-7 text-gray-50 font-opensans flex-1">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-10 space-y-4 text-sm leading-6 text-gray-50 font-opensans tracking-wide"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-purple-600 text-white shadow-md shadow-black hover:text-blue-300 z-10 isolate"
                      : "bg-purple-600 text-white shadow-md shadow-black hover:text-blue-300 z-10 isolate",
                    "mt-8 block rounded-lg px-3.5 py-2.5 text-center text-2xl uppercase tracking-wider leading-6 z-10 isolate"
                  )}
                >
                  Angebot anfordern{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Hero;
