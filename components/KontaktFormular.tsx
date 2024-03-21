"use client";

import { RadioGroup } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Kontakt({
  onSubmit,
}: {
  onSubmit: (step: string | undefined, selectedValue: string) => void;
}) {
  const t = useTranslations("KontaktFormular");
  const settings = useMemo(
    () => [
      {
        name: t("advertisementWithBaben"),
        description: t("questionAdvertisement"),
        step: "werben",
      },
      {
        name: t("rentalOffer"),
        description: t("rentalQuestion"),
        step: "standort",
      },
      {
        name: t("offerWebsite"),
        description: t("iWantToMarketMyWebsite"),
        step: "kontakt",
      },
      {
        name: t("bills"),
        description: t("billQuestion"),
        step: "rechnungen",
      },
      {
        name: t("reclamation"),
        description: t("defectAdvert"),
        step: "kontakt",
      },
      {
        name: t("press"),
        description: t("pressQuetion"),
        step: "kontakt",
      },
      {
        name: t("privacyPolicy"),
        description: t("privacyQuestion"),
        step: "kontakt",
      },
      {
        name: t("other"),
        description: t("otherQuestion"),
        step: "sonstiges",
      },
    ],
    [t]
  );
  const [selected, setSelected] = useState(settings[0]);

  return (
    <div className="md:mt-16 mx-auto lg:px-40 sm:px-8 max-w-7xl md:pb-12">
      <div className=" relative">
        <div className=" relative isolate overflow-hidden px-8 md:py-10 sm:px-40 md:my-10">
          <RadioGroup value={selected} onChange={setSelected}>
            <div className="mx-auto max-w-xl text-center mb-8">
              <h2 className="text-3xl lg:text-6xl tracking-widest justify-center flex font-raleway text-white sm:text-5xl py-8">
                {t("contactForm")}
              </h2>
              <p className="leading-8 text-white font-semibold text-2xl tracking-wider">
                {t("whatIsYourConcern")}
              </p>
            </div>
            <RadioGroup.Label className="sr-only"></RadioGroup.Label>
            <div className="overflow-hidden -space-y-px rounded-3xl bg-black/50 tracking-widest">
              {settings.map((setting, settingIdx) => (
                <RadioGroup.Option
                  key={setting.name}
                  value={setting}
                  className={({ checked }) =>
                    classNames(
                      checked
                        ? "z-0 border-transparent hover:text-blue-300 bg-gradient-to-tr from-purple-800 to-blue-500"
                        : "border-transparent",
                      "relative flex cursor-pointer border p-4 focus:outline-none"
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <span
                        className={classNames(
                          checked
                            ? "bg-[#0e0c2f] border-transparent"
                            : "bg-white border-[#0e0c2f]",
                          active ? "ring-2 ring-offset-2 ring-[#0e0c2f]" : "",
                          "mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"
                        )}
                        aria-hidden="true"
                      >
                        <span className="rounded-full bg-white w-1.5 h-1.5" />
                      </span>
                      <span className="ml-3 flex flex-col">
                        <RadioGroup.Label
                          as="span"
                          className={classNames(
                            checked
                              ? "text-white font-bold text-2xl"
                              : "text-white font-bold text-2xl",
                            "block font-bold text-lg"
                          )}
                        >
                          {setting.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={classNames(
                            checked
                              ? "text-white font-semibold"
                              : "text-gray-400 font-semibold",
                            "block text-sm font-semibold"
                          )}
                        >
                          {setting.description}
                        </RadioGroup.Description>
                      </span>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
          <div className="flex justify-center">
            <div className="relative group">
              <button
                onClick={() => {
                  onSubmit(selected.step, selected.name);
                }}
                type="submit"
                className="my-10 block md:w-[380px] rounded-md bg-gradient-to-tr from-purple-800 to-blue-500 px-3.5 py-2.5 text-center text-2xl font-semibold text-white shadow-md shadow-black hover:text-blue-300 isolate tracking-widest"
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
