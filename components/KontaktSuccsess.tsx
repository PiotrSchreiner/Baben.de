import { useTranslations } from "next-intl";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function KontaktSuccsess() {
  const t = useTranslations("KontaktSuccess");

  const { width, height } = useWindowSize();
  return (
    <div className="bg-transparent ">
      <div className="relative mx-auto max-w-7xl px-8 sm:px-6 bg-black/50 lg:px-60 sm:py-42 md:py-32 py-6 ">
        <div className="relative w-full">
          <div className="relative isolate overflow-hidden bg-black/50 px-4 py-14 rounded-3xl sm:px-20 pt-24 my-10 shadow-lg shadow-blue-400 border-purple-600 border">
            <Confetti width={width} height={height} />
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-raleway font-light text-center text-white dark:text-custom-200 tracking-wider mx-4 text-4xl sm:text-5xl md:text-6xl">
                {t("thankRequest")}
              </h2>
              <p className="mt-2 text-2xl font-semibold tracking-wider leading-8 text-white py-8">
                {t("contactRequest")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KontaktSuccsess;
