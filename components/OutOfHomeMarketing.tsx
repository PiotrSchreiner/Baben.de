"use client";

import { RadioGroup } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const settings = [
  {
    name: "Out of Home Marketing Kampagne",
    description:
      "Ich plane, eine Out-of-Home-Marketingkampagne zu starten und suche nach Expertise in Außenwerbung",
    step: "OOH-Marketing",
  },
  {
    name: "Corporate Designs",
    description:
      "Ich habe eine Frage bezüglich unseres Corporate Designs und benötige Unterstützung, um sicherzustellen, dass unser Auftritt einheitlich ist",
    step: "Corporate Designs",
  },
  {
    name: "Data Analytics",
    description:
      "Ich suche nach professioneller Hilfe im Bereich Data Analytics, um fundierte Entscheidungen auf Grundlage von Daten zu treffen",
    step: "Data Analytics",
  },
  {
    name: "Geotargeting",
    description:
      "Ich interessiere mich für Geotargeting-Möglichkeiten, um meine Werbekampagne zielgerichteter zu gestalten.",
    step: "Geotargeting",
  },
  {
    name: "Airport-Advertising",
    description:
      "Entdecken Sie gezielte Werbemöglichkeiten am Flughafen mit unseren ausgewählten Spezialisten für Airport-Advertising-Kampagnen.",
    step: "Airoport-Advertising",
  },
];

export default function OutOfHomeMarketing({
  onSubmit,
}: {
  onSubmit: (selectedValue: string) => void;
}) {
  const t = useTranslations("KontaktFormular");
  const [selected, setSelected] = useState(settings[0]);

  return (
    <div
      id="outofhomemarketing"
      className="bg-transparent mt-10 mx-auto lg:px-40 sm:px-8 max-w-7xl  md:pb-20"
    >
      <div className=" relative">
        <div className=" relative isolate overflow-hidden px-8 md:py-14 sm:px-40 my-10">
          <RadioGroup value={selected} onChange={setSelected}>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-5xl lg:text-6xl flex justify-center tracking-widest text-white sm:text-5xl uppercase">
                Out Of Home Marketing
              </h2>
              <p className="mt-2 text-2xl font-semibold tracking-wider leading-8 text-white py-8">
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
                  onSubmit(selected.name);
                }}
                type="submit"
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
