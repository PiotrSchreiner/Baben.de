"use client";

import LanguageIcon from "@mui/icons-material/Language";
import { usePathname, useRouter } from "next-intl/client";
import Link from "next-intl/link";
import { useState } from "react";
import spacebobImage from "../public/Pictures/spacebob.jpeg";
import DropDownMenu from "./DropDownMenu";

export default function Example({ locale }: { locale: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const image = spacebobImage;

  return (
    <header
      id="header"
      className=" z-20 top-0 w-full px-8 h-328 md:h-[272px] lg:h-[176px] bg-black/50"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-10 lg:px-8 flex-col lg:flex-row"
        aria-label="Global"
      >
        {/* <div className="flex justify-between relative px-5">
          <div className=" opacity-50 isolate invisible md:visible md:h-12 md:w-12  rounded-lg bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-400 shadow-md mr-5 cursor-pointer shadow-black "></div>
          <div className=" opacity-50 isolate invisible md:visible md:h-12 md:w-12 rounded-lg bg-gradient-to-b from-green-400 via-green-600 to-green-400 shadow-md mr-5 cursor-pointer shadow-black"></div>
          <div className=" opacity-50 isolate invisible md:visible md:h-12 md:w-12 rounded-lg bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900 shadow-md cursor-pointer shadow-black"></div>
        </div> */}
        <div className="relative  cursor-pointer">
          <div className="group relative">
            {/*             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse "></div>
             */}{" "}
            <Link href="/" locale={locale}>
              <h1 className="tracking-widest isolate font-extrabold text-7xl text-center text-white z-10 mb-8 border-4 border-white rounded-lg p-2 ">
                BABEN MEDIA
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="hidden  lg:flex lg:gap-x-12"></div>
          <div className="flex lg:hidden"></div>
        </div>
        <div className="flex justify-end z-10 md:mb-8">
          <button
            onClick={() => {
              router.replace(pathName, {
                locale: locale === "de" ? "en" : "de",
              });
            }}
            className="relative group text-white hover:text-blue-300 cursor-pointer text-center w-32 h-12 bg-gradient-to-tr from-purple-800 to-blue-500 rounded-md"
          >
            <div className="absolute top-0 left-0 w-32 h-12 bg-blue-700 rounded-sm blur-lg opacity-0 group-hover:opacity-100 transition-opacity flex -z-10 ring-1 ring-purple-800" />
            {locale === "de" ? "EN" : "DE"}
            <LanguageIcon className="h-8 w-8 md:w-10 md:h-10 z-10" />
          </button>

          <div className="flex flex-1 items-center z-10 pl-4 md:pl-14">
            <DropDownMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
