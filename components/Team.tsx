import { motion, useAnimation, useInView } from "framer-motion";
import Lottie from "lottie-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import teamAnimation from "../animTeam.json";

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [isshowing, setisShowing] = useState(false);
  const t = useTranslations("Team");
  const router = useRouter();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setisShowing(true);
    }
  }, [controls, isInView]);

  const fadeInFromLeft = {
    hidden: { x: -500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 50 },
    },
  };

  const fadeInFromRight = {
    hidden: { x: 500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 50 },
    },
  };

  return (
    <div id="team">
      <div className="relative">
        <div className="overflow-hidde p-4 rounded-3xl isolate ">
          <h2 className="font-raleway font-light text-center text-white dark:text-custom-200 tracking-wider text-4xl sm:text-5xl md:text-6xl md:pt-16">
            {isshowing ? (
              <TypeAnimation
                sequence={[t("ourTeam"), 1000]}
                wrapper="span"
                style={{ fontWeight: "200" }}
                cursor={false}
                repeat={Infinity}
                speed={2}
              />
            ) : null}
          </h2>
          <div>
            <Lottie
              className="w-200 h-200 bg-transparent md:w-[35%] w-[65%] mx-auto"
              loop={true}
              animationData={teamAnimation}
            />
          </div>
          <div
            style={{
              marginBottom: "50px",
            }}
            className="mx-auto max-w-7xl lg:flex lg:px-4"
          >
            <div
              ref={ref}
              className="mx-auto grid grid-cols-1 gap-x-12 gap-y-16 md:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8 "
            >
              <motion.div
                style={{ opacity: isInView ? 1 : 0 }}
                initial="hidden"
                animate={controls}
                variants={fadeInFromLeft}
                className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 bg-gradient-to-tr from-purple-800 to-blue-500 rounded-3xl mt-10 border-transparent border-purple-600 border shadow-lg shadow-blue-400"
              >
                <div className="my-10 text-3xl sm:text-4xl font-raleway font-light text-center text-white dark:text-custom-200 tracking-widest mx-4 ">
                  <h2>{t("applyNow")}</h2>
                </div>
                <p className="mt-2 mb-6 lg:text-xl text-lg leading-8 text-white p-4  tracking-wider [word-break:break-word] hyphens-auto">
                  {t("ourAgency")}
                </p>
                <p className="mt-2 mb-6 lg:text-xl text-lg leading-8 text-white p-4  tracking-wider [word-break:break-word] hyphens-auto">
                  {t("agencyGoals")}
                </p>
                <div className=" mb-10 flex justify-center p-6">
                  <div className="relative group">
                    <button
                      onClick={() => router.push("/teambaben")}
                      className="isolate rounded-md bg-purple-600 px-3.5 py-2.5  text-2xl tracking-wider uppercase text-white shadow-md shadow-black text-center hover:text-blue-300 z-10"
                    >
                      {t("teamPart")}
                    </button>
                  </div>
                </div>
              </motion.div>
              <div className="flex-wrap items-start justify-end gap-6 sm:gap-8 sm:flex lg:contents hidden rounded-2xl ">
                <motion.div
                  style={{ opacity: isInView ? 1 : 0 }}
                  initial="hidden"
                  animate={controls}
                  variants={fadeInFromRight}
                  className="flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end mb-40 shadow-lg shadow-blue-400 rounded-2xl border-purple-600 border"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                    alt="Our team"
                    className="aspect-[7/5] w-[37rem] max-w-none bg-gray-50 object-cover rounded-2xl "
                    width={1152}
                    height={768}
                  />
                </motion.div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <motion.div
                    style={{ opacity: isInView ? 1 : 0 }}
                    initial="hidden"
                    animate={controls}
                    variants={fadeInFromLeft}
                    className="order-first flex w-64 flex-none justify-end self-end lg:w-auto mt-32 "
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      alt="Our team2"
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl asbg-gray-50 object-cover mt-20 shadow-lg shadow-blue-400 border-purple-600 border "
                      width={768}
                      height={604}
                    />
                  </motion.div>
                  <motion.div
                    style={{ opacity: isInView ? 1 : 0 }}
                    initial="hidden"
                    animate={controls}
                    variants={fadeInFromLeft}
                    className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                      alt="Our team3"
                      className="aspect-[7/5] w-[30rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover mt-20 shadow-lg shadow-blue-400 border-purple-600 border"
                      width={1152}
                      height={842}
                    />
                  </motion.div>
                  <motion.div
                    style={{ opacity: isInView ? 1 : 0 }}
                    initial="hidden"
                    animate={controls}
                    variants={fadeInFromRight}
                    className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none mb-10"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      alt="Our team4"
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover mb-40 shadow-lg shadow-blue-400 border-purple-600 border"
                      width={768}
                      height={604}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
