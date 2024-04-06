/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

function Impressum() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const fadeInFromRight = {
    hidden: { x: 500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 40 },
    },
  };

  return (
    <div className="relative sm:py-42 py-12 overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-8 bg-black/50">
      <div className="text-center text-lg max-w-prose mx-auto col-span-full sm:mt-10">
        <h1 className="text-5xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
          Impressum
        </h1>
      </div>
      <div className="col-span-1 px-8 sm:px-6 lg:px-12">
        <div className="prose mt-10 prose-indigo prose-lg text-white mx-auto">
          <h2 className="text-3xl my-10 font-bold leading-8 text-white">
            Anschrift:
          </h2>
          <p>
            Babendererde GmbH & Co. KG
            <br />
            Hallerstr. 1c
            <br />
            D-20146 Hamburg
          </p>
          <h2 className="text-lg font-bold leading-8 text-white mt-2">
            Telefon:
          </h2>
          <p>+49 4104/69 08-20</p>
          <h2 className="text-lg font-bold leading-8 text-white">E-Mail:</h2>
          <p>info@baben.de</p>
          <h2 className="my-10 text-3xl font-bold leading-8 text-white">
            Geschäftsführer:
          </h2>
          <p>
            Pierro Babendererde
            <br />
            Baben der erde GmbH & Co. KG
            <br />
            Sitz: Wohltorf
            <br />
            USt.ID-Nr.: DE135333741
            <br />
            St.-Nr.: 2728311507
            <br />
            HR Lübeck HRA 5623
          </p>
        </div>
      </div>
      <motion.div
        animate={controls}
        initial="hidden"
        variants={fadeInFromRight}
        className="col-span-2 lg:col-span-2 lg:mt-0 mx-20 sm:w-200"
      >
        <Image
          src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
          alt="Collaboration"
          width={800}
          height={267}
          className="rounded-3xl lg:mt-48 sm:w-200"
        />
      </motion.div>
      <div className=" col-span-full prose prose-indigo prose-lg text-white mx-auto">
        <h2 className="my-10 text-3xl font-bold leading-8 text-white m-10">
          Rechtsform:
        </h2>
        <p className="ml-10">
          Die "Baben"-Werbung GmbH distanziert sich hiermit ausdrücklich von
          Inhalten anderer Internet- Präsenzen, die mittels Hyperlinks auf ihre
          Internetseite verweist bzw. von ihrer verlinkt wird. Für eine solche
          Verbindung wird keinerlei Haftung oder Garantie auf Inhalt und auf
          Gestaltung übernommen.
        </p>
      </div>
    </div>
  );
}

export default Impressum;
