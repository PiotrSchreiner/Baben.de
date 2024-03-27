import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef, useState } from "react";

export default function DropDownMenu() {
  const t = useTranslations("DropDownMenu");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const solutions = [
    { text: t("planAndBook"), href: "/#pricing" },
    { text: t("ourTeam"), href: "/teambaben" },
    { text: t("aboutUs"), href: "/#history" },
    { text: t("contact"), href: "/kontakt" },
  ];

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="group text-white inline-flex p-4 items-center gap-x-3 text-2xl font-semibold leading-3 hover:text-blue-300 relative w-32 h-12 bg-gradient-to-tr from-purple-800 to-blue-500 rounded-md shadow-md shadow-black"
      >
        <div className="absolute top-0 left-0 w-32 h-12 bg-blue-700 rounded-sm blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        <span>Menu</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          className="fixed w-screen top-0 flex flex-col z-50 h-screen bg-gradient-to-tr from-purple-800 to-blue-800 text-3xl md:text-6xl text-darkgreen-500 dark:text-custom-200 uppercase tracking-widest transition-all duration-500 ease-in-out right-0 opacity-100"
          ref={ref}
        >
          <div className="max-w-screen-2xl mx-auto  w-full pt-6 md:pt-16 grid grid-cols-12 gap-6 md:gap-16  transition-all duration-500">
            <div className="col-start-2 col-span-10 flex items-center justify-between ">
              <Link href="/">
                <span className="sr-only">Baben</span>
              </Link>
              <div className="relative  cursor-pointer">
                <div className="group relative">
                  <Link href="/">
                    <h1 className=" mr-5tracking-widest isolate font-extrabold text-7xl text-center text-white z-10  lg:my-0 my-5">
                      BABEN
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="flex space-x-4 md:space-x-10  ">
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="h-8 w-8 md:h-12 md:w-12"
                >
                  <XMarkIcon
                    className="group text-white dark:text-custom-200 hover:text-custom-400"
                    aria-label="Close Menu"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around items-center md:flex-2 mt-10 md:mt-20">
            {solutions.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="flex justify-center text-center p-8 hover:text-custom-400 font-raleway tracking-widest"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
