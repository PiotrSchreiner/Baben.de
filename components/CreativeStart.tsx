import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Lottie from "lottie-react";
import { Fragment, useState } from "react";
import Creativeanim from "../creativeAnim.json";

const people = [
  { name: "Blow-Up" },
  { name: "Stretch-Up" },
  { name: "City-Star" },
  { name: "City-Light-Poster" },
  { name: "Ganzsäule" },
  { name: "Großfläche" },
  { name: "Mega-Light" },
  { name: "Mega-Light-Select" },
  { name: "Premium-City-Light Poster" },
  { name: "Pylone" },
];

function CreativeStart() {
  const [selected, setSelected] = useState<{ name: string } | null>(null);

  return (
    <div className="bg-transparent mt-10 mx-auto lg:px-40 sm:px-8 max-w-7xl sm:py-22 py-10 z-20">
      <div className=" relative">
        <div className=" absolute m-auto left-0 right-0 h-full w-full bg-pink-800 blur-3xl px-8 py-14" />
        <div className=" relative isolate bg-black/50 px-8 py-14 shadow-2xl sm:rounded-3xl sm:px-40 my-10">
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-5xl uppercase text-center my-10">
            Wähle dein Format
          </h2>
          <div style={{ width: "45%" }} className="mx-auto">
            <Lottie
              className="w-200 h-200 my-10"
              loop={true}
              animationData={Creativeanim}
            />
          </div>
          <div className="m-auto w-72 mb-72">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-black/50 py-2 pl-3 pr-10 text-left shadow-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-lg font-semibold">
                  <span className="block truncate">
                    {selected?.name || "Format wählen"}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-black/50 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default font-semibold select-none py-2 pl-10 pr-4 ${
                            active
                              ? "text-pink-800 text-lg font-semibold"
                              : "text-white text-lg p-2 hover:text-pink-700 font-bold"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-semibold" : "font-semibold"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-pink-800">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
      {selected?.name}
    </div>
  );
}

export default CreativeStart;
