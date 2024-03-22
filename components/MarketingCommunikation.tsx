"use client";

import { RadioGroup } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const settings = [
  {
    name: "Event-Marketing",
    description: "Ich habe eine allgemeine Anfrage zum Bereich Event-Marketing",
    step: "Event-Marketing",
  },
  {
    name: "Werbekampagnenplanung",
    description:
      "Ich suche nach Experten, die mir bei der Planung einer effektiven Werbekampagne helfen können",
    step: "Werbekampagnenplanung",
  },
  {
    name: "Content-Marketing",
    description:
      "Ich benötige professionelle Unterstützung im Bereich Content-Marketing, um unsere Botschaft gezielt zu kommunizieren",
    step: "Content-Marketing",
  },
  {
    name: "Zielgruppenanalyse",
    description:
      "Ich brauche hilfe bei einer gründlichen Zielgruppenanalyse, um unsere Marketingstrategie zu optimieren.",
    step: "Zielgruppenanalyse",
  },
  {
    name: "CMR (Customer Relationship Management)",
    description:
      "Ich suche nach Lösungen im Bereich Marketing-Automation und Customer Relationship Management (CRM), um unsere Kundenbeziehungen zu stärken und zu automatisieren",
    step: "CMR",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function MarketingCommunikation({
  onSubmit,
}: {
  onSubmit: (selectedValue: string) => void;
}) {
  const t = useTranslations("KontaktFormular");
  const [selected, setSelected] = useState(settings[0]);

  return (
    <div
      id="marketing"
      className="bg-transparent mt-10 mx-auto lg:px-40 sm:px-8 max-w-7xl  md:pb-20"
    >
      <div className=" relative">
        <div className=" relative isolate overflow-hidden px-8 md:py-14 sm:px-40 my-10">
          <RadioGroup value={selected} onChange={setSelected}>
            <div className="mx-auto max-w-xl text-center mb-8">
              <h2 className="text-4xl lg:text-6xl flex justify-center tracking-widest text-white sm:text-5xl uppercase py-8">
                Marketing Kommunikation
              </h2>
              <p className="text-2xl font-semibold leading-8 text-white">
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
