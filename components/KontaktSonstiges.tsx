"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const labels = [
  { name: "Out of Home Marketing", value: null },
  { name: "Media & Web-Development", value: null },
  { name: "Marketing Kommunikation", value: null },
  { name: "Andere", value: null },
];

export default function KontaktSonstiges({
  onSubmit,
}: {
  onSubmit: (selectedValue: string) => void;
}) {
  const t = useTranslations("KontaktSonstiges");

  const [selected, setSelected] = useState(labels[0]);

  return (
    <div className="bg-transparent md:mt-16 mx-auto lg:px-40 sm:px-8 max-w-7xl md:pb-16">
      <div className="relative">
        <div className=" isolate px-8 md:py-16 sm:px-40 my-10">
          <div className="mx-auto max-w-xl text-center mb-8">
            <h2 className="lg:text-6xl tracking-widest flex justify-center text-white sm:text-5xl py-8">
              IHRE NACHRICHT
            </h2>
            <p className="text-2xl tracking-wider leading-8 text-white">
              Sagen Sie uns worum es Ihnen geht
            </p>
          </div>
          <form action="#" className="relative ">
            <div className="py-8 overflow-hidden rounded-3xl bg-black/50 border border-[#0e0c2f] shadow-sm ">
              <label htmlFor="title" className="sr-only">
                Titel
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0 px-2 py-2"
                placeholder="Titel"
              />
              <label htmlFor="description" className="sr-only">
                Beschreibung
              </label>
              <textarea
                rows={2}
                name="description"
                id="description"
                className="block w-full resize-none border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 h-60 px-2 py-2"
                placeholder="Schreibe deine Nachricht..."
                defaultValue={""}
              />

              <div aria-hidden="true">
                <div className="py-4">
                  <div className="h-5" />
                </div>
                <div className="h-px" />
                <div className="py-2">
                  <div className="py-px">
                    <div className="h-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-px bottom-0">
              <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3"></div>
              <div className="flex items-center justify-between space-x-3 px-2 py-4 sm:px-3"></div>
            </div>
          </form>
          <div className="my-10 ">
            <div className="relative group ">
              <button
                onClick={() => {
                  onSubmit(selected.name);
                }}
                type="submit"
                className="block md:w-[380px] mx-auto rounded-md bg-gradient-to-tr from-purple-800 to-blue-500 px-5 py-2.5 text-center text-2xl font-semibold text-white shadow-md shadow-black hover:text-blue-300 isolate tracking-widest"
              >
                WEITER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
