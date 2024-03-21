"use client";

import { Switch } from "@headlessui/react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fragment, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const isValidPhoneNumber = (phoneNumber: string) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
};

export default function Kontakt({
  onSubmit,
}: {
  onSubmit: (selectedValue: {
    email: string;
    firstName: string;
    lastName: string;
    company: string;
    phone: string;
    message: string;
  }) => void;
}) {
  const t = useTranslations("Kontakt");

  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setAttachedFile(file);
    }
  };

  const handleAttachFileClick = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div id="kontakt" className="bg-black/50">
      <div className="bg-transparent md:mt-16 mx-auto lg:px-40 sm:px-8 max-w-7xl md:pb-32">
        <div className="mx-auto max-w-xl text-center mb-8">
          <h2 className="text-4xl lg:text-6xl justify-center flex tracking-widest text-white sm:text-5xl py-8">
            {t("almostdone")}
          </h2>
          <p className="text-2xl leading-8 text-white tracking-wider">
            {t("weNeedSomeInformationFromYou")}
          </p>
        </div>
        <div className="relative">
          <div className="isolate px-6 py-6 sm:py-22 lg:px-8 sm:rounded-3xl max-w-lg z-10 m-auto">
            <form
              className="mx-auto max-w-xl"
              action={async (formData) => {
                await onSubmit({
                  email: formData?.get("email") as string,
                  firstName: formData?.get("first-name") as string,
                  lastName: formData?.get("last-name") as string,
                  company: formData?.get("company") as string,
                  phone: formData?.get("phone") as string,
                  message: formData?.get("message") as string,
                });
              }}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 tracking-wider">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-lg font-semibold leading-6 text-white"
                  >
                    {t("firstName")}
                  </label>
                  <div className="mt-2.5">
                    <input
                      required={true}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-semibold leading-6 text-white"
                  >
                    {t("lastName")}
                  </label>
                  <div className="mt-2.5">
                    <input
                      required={true}
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-lg font-semibold leading-6 text-white"
                  >
                    {t("company")}
                  </label>
                  <div className="mt-2.5">
                    <input
                      required={true}
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold leading-6 text-white"
                  >
                    E-mail
                  </label>
                  <div className="mt-2.5">
                    <input
                      required={true}
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-lg font-semibold leading-6 text-white"
                  >
                    {t("phone")}
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      required={true}
                      type="tel"
                      name="phone"
                      id="phone"
                      pattern="\d+"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold leading-6 text-white"
                  >
                    {t("message")}
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      required={true}
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    onClick={handleAttachFileClick}
                    id="file-input"
                    className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-white"
                  >
                    <PaperClipIcon
                      className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500 font-bold"
                      aria-hidden="true"
                    />
                    <span className="text-md italic text-white group-hover:text-gray-600">
                      Dadei anhängen
                    </span>
                  </button>
                  <input
                    type="file"
                    id="file-input"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                </div>
                <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      defaultChecked={false}
                      name="terms-switch"
                      as={Fragment}
                    >
                      {({ checked }) => (
                        <div
                          className={classNames(
                            checked ? "bg-black/50" : "bg-gray-200",
                            "relative flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          )}
                        >
                          <span className="sr-only">AGB zustimmen</span>
                          <span
                            className={classNames(
                              checked ? "translate-x-3.5" : "translate-x-0",
                              "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                            )}
                          />
                          <input
                            className="-z-10 absolute top-2 left-4 w-1 h-1"
                            checked={checked}
                            onChange={() => {}}
                            name="terms"
                            type="checkbox"
                            required
                          />
                        </div>
                      )}
                    </Switch>
                  </div>

                  <Switch.Label className="text-sm leading-6 text-white">
                    Hiermit stimmen Sie den{" "}
                    <Link href="/agb" className="font-bold text-[#584562]">
                      AGB&nbsp;
                    </Link>
                    zu.
                  </Switch.Label>
                </Switch.Group>
              </div>
              <div className="mt-10 flex justify-center">
                <div className="relative group">
                  <button
                    type="submit"
                    className="max-w-sm mx-auto block md:w-[380px] rounded-md bg-gradient-to-tr from-purple-800 to-blue-500  px-3.5 py-2.5 text-center text-2xl font-semibold text-white hover:text-blue-300 shadow-md shadow-black isolate tracking-widest"
                  >
                    {t("submit")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
