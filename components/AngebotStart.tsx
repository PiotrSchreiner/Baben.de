"use client";

import { RadioGroup } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const settings = [
  {
    name: "Out-of-Home-Marketing",
    description: "Ich habe eine Anfrage zum Bereich Out-of-Home-Marketing",
    step: "oohMarketing",
  },
  {
    name: "Media & Web-Development",
    description: "Ich habe eine Anfrage zum Bereich Media & Web-Development",
    step: "mediaWebDevelopment",
  },
  {
    name: "Marketing Kommunikation",
    description: "Ich habe eine Anfrage zum Bereich Marketing Kommunikation",
    step: "marketingCommunikation",
  },
];

export default function AngebotStart({
  onSubmit,
}: {
  onSubmit: (selectedValue: {
    name: string;
    step: string;
    description: string;
  }) => void;
}) {
  const t = useTranslations("KontaktFormular");

  const [selected, setSelected] = useState(settings[0]);

  return (
    <div
      id="angebot"
      className="bg-transparent mt-10 mx-auto lg:px-40 sm:px-8 max-w-7xl pb-32 "
    >
      <div className=" relative">
        <div className=" relative isolate overflow-hidden px-8 py-14 sm:px-40 my-10">
          <RadioGroup value={selected} onChange={setSelected}>
            <div className="mx-auto max-w-xl text-center mb-8">
              <h2 className="text-5xl lg:text-6xl tracking-widest text-white sm:text-5xl uppercase py-8">
                Planen und Buchen
              </h2>
              {/*   <div style={{ width: "75%" }} className="mx-auto">
                <Lottie
                  className="w-200 h-200 bg-transparent"
                  loop={true}
                  animationData={planAnimation}
                />
              </div> */}
              <p className="mt-2 text-2xl font-semibold tracking-wider leading-8 text-white ">
                {t("whatIsYourConcern")}
              </p>
            </div>
            <RadioGroup.Label className="sr-only"></RadioGroup.Label>
            <div className="overflow-hidden -space-y-px rounded-3xl bg-black/50">
              {settings.map((setting, settingIdx) => (
                <RadioGroup.Option
                  key={setting.name}
                  value={setting}
                  className={({ checked }) =>
                    classNames(
                      checked
                        ? "z-0 border-transparent bg-gradient-to-tr from-purple-800 to-blue-500"
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
              <div className="absolute bg-blue-500 rounded-md top-0 left-0 right-0 w-full h-[50px]  px-3 leading-6 block mt-10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl  " />
              <button
                onClick={() => {
                  onSubmit(selected);
                }}
                type="submit"
                className="mt-10 block w-[380px] rounded-md bg-gradient-to-tr from-purple-800 to-blue-500 px-3.5 py-2.5 text-center text-2xl font-semibold text-white shadow-md shadow-black hover:text-blue-300 isolate tracking-widest"
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
