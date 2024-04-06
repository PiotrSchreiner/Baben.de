"use client";

import { cn } from "@/utils/cn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import XingLogo from "../public/xing-logo-2447.svg";

const people = [
  {
    name: "Pierro Babendererde",
    role: "CEO & Head of Marketing",
    imageUrl: "/Pictures/Pierro.jpeg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Moira Babendererde",
    role: "Media & WerbeDesign",
    imageUrl: "/Pictures/Moira.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Piotr Jerzy Schreiner",
    role: "Frontend Web-Developer",
    imageUrl: "/Pictures/Pioti.jpeg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  /* {
    name: "Jack Fressalot",
    role: "Head of Barketing",
    imageUrl: "/Pictures/Jack.jpeg",
    twitterUrl: "#",
    linkedinUrl: "#",
  }, */
];

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        id="teamBaben"
        className={cn(
          "py-10 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

function TeamBaben() {
  return (
    <div id="/teambaben" className=" sm:py-22 md:py-10 bg-black/50">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-raleway font-light text-center text-white dark:text-custom-200 tracking-wider mx-4 text-4xl sm:text-5xl md:text-6xl py-16">
            UNSER TEAM
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-6"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-black/70 px-8 py-2 border-white border"
            >
              <CardContainer>
                <CardItem>
                  <img
                    className="mx-auto h-72 w-72 rounded-2xl md:h-80 md:w-80 shadow-blue-400 shadow-lg hover:scale-105 transition-all"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-12 font-semibold leading-7 tracking-wider text-white text-2xl">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-100 mt-6">
                    {person.role}
                  </p>
                  <div className="text-lg mx-auto flex max-w-7xl items-center justify-between px-8 lg:px-8 flex-row sm:flex-row ">
                    <div>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-2 cursor-pointer isolate"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="h-6 w-6 md:w-6 md:h-6 hover:scale-150" />
                      </a>
                    </div>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white mx-2 cursor-pointer"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="h-6 w-6 md:w-7 md:h-7 hover:scale-150" />
                    </a>

                    <a
                      href="https://www.xing.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white mx-2 cursor-pointer"
                      aria-label="Xing"
                    >
                      <Image
                        alt="Xing Logo"
                        src={XingLogo}
                        className="h-4 w-4 md:w-4 md:h-4 hover:scale-150"
                      />
                    </a>
                    <FacebookIcon className="h-6 w-6 md:w-6 md:h-6 hover:scale-150" />
                    <a
                      href="mailto:info@baben.de"
                      className="text-white mx-2 cursor-pointer"
                      aria-label="Email"
                    >
                      <MailOutlineIcon className="h-6 w-6 md:w-6 md:h-6 hover:scale-150" />
                    </a>
                    <a href="" className="text-white hover:text-gray-300">
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6 md:h-4 md:w-4 hover:scale-150"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </CardItem>
              </CardContainer>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeamBaben;
