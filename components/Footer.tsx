"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import XingLogo from "../public/xing-logo-2447.svg";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className=" relative text-white bg-black/50 py-6 text-center left-0 w-full">
      <div className="text-lg mx-auto flex max-w-7xl items-center justify-between px-8 lg:px-8 flex-row sm:flex-row ">
        <div>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 cursor-pointer isolate"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-6 w-6 md:w-14 md:h-14 hover:scale-150" />
          </a>
        </div>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 cursor-pointer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="h-6 w-6 md:w-14 md:h-14 hover:scale-150" />
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
            className="h-4 w-4 md:w-10 md:h-10 hover:scale-150"
          />
        </a>
        <FacebookIcon className="h-6 w-6 md:w-12 md:h-12 hover:scale-150" />
        <a
          href="mailto:info@baben.de"
          className="text-white mx-2 cursor-pointer"
          aria-label="Email"
        >
          <MailOutlineIcon className="h-6 w-6 md:w-12 md:h-12 hover:scale-150" />
        </a>
        <a href="" className="text-white hover:text-gray-300">
          <span className="sr-only">Twitter</span>
          <svg
            className="h-6 w-6 md:h-10 md:w-10 hover:scale-150"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
      </div>
      <div className="flex pt-5 flex-col sm:flex-row ">
        <div className="flex items-center space-x-4 "></div>
        <div className="flex flex-1 flex-col justify-center text-center ">
          <div className="flex items-center justify-center">
            <p>© 2023 Babendererde</p>
          </div>
          <div>
            <Link className="text-white hover:text-gray-500 mr-2" href="/agb">
              {t("conditions")}
            </Link>
            <Link
              className="text-white hover:text-gray-500 mr-2"
              href="/impressum"
            >
              {t("imprint")}
            </Link>
            <Link
              className="text-white hover:text-gray-500"
              href="/datenschutz"
            >
              {t("dataprotection")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
