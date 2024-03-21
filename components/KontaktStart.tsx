import Lottie from "lottie-react";
import { useTranslations } from "next-intl";
import ContactAnimation from "../animAGB.json";

function KontaktStart({ onSubmit }: { onSubmit: () => void }) {
  const t = useTranslations("Kontaktstart");

  return (
    <div className="bg-transparent md:mt-10 mx-auto lg:px-40 sm:px-8 max-w-7xl  md:pb-32">
      <div className="py-4 lg:px-32 "></div>

      <div className="relative">
        <div className="isolate px-2 md:py-10 pb-10 md:pb-0 sm:py-22 lg:px-8 sm:rounded-3xl text-center">
          <p className="font-raleway font-light text-white tracking-wider mx-4 text-3xl sm:text-5xl md:text-6xl text-left">
            {t("contactForm")}
          </p>
          <div style={{ width: "35%" }} className="mx-auto">
            <Lottie
              className="w-200 h-200"
              loop={true}
              animationData={ContactAnimation}
            />
          </div>
          <div className="mt-8 text-center text-white">
            <p className="tracking-wider text-lg sm:text-2xl px-6 md:px-20 text-center">
              {t("kontaktText")}
            </p>
          </div>
          <div className="flex justify-center group">
            <div className="relative group">
              <button
                type="submit"
                onClick={onSubmit}
                className="mt-10 block md:w-[380px] rounded-md bg-gradient-to-tr from-purple-800 to-blue-500 px-3.5 py-2.5 text-center text-2xl font-semibold text-white shadow-md shadow-black hover:text-blue-300 isolate tracking-widest"
              >
                {t("continue")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KontaktStart;
