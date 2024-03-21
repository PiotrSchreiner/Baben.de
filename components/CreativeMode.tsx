"use client";
import NextImage from "next/image";
import Frame from "public/frame.png";
import React, { useState } from "react";

function CreativeMode() {
  const [customerImage, setCustomerImage] = useState<File | undefined>(
    undefined
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedImage = event.target.files?.[0];
    setCustomerImage(uploadedImage);
  };

  return (
    <div className=" relative m-44 ">
      <div className=" absolute m-auto left-0 right-0 h-full w-full bg-pink-800 blur-3xl px-8 py-14 sm:px-40" />
      <div className=" relative m-auto isolate overflow-hidden bg-black/50 px-8 py-14 shadow-2xl sm:rounded-3xl sm:px-20 ">
        <h2 className="text-5xl text-center my-10 font-extrabold tracking-tight text-white sm:text-5xl uppercase">
          CREATIVE MODE
        </h2>
        <div className="relative cursor-pointer w-[380px] mx-auto">
          <input
            className="absolute inset-0 w-[380px] h-full opacity-0 cursor-pointer"
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
          />
          <div className="block w-[380px] text-center bg-black/50 text-lg text-white font-semibold  rounded-lg cursor-pointer mb-10 p-2">
            UPLOAD IMAGE
          </div>
        </div>

        <div className="flex ">
          <div
            className="relative m-22 w-full h-full bg-cover bg-center rounded-3xl filter grayscale transition-smooth duration-700 ease-in-out hover:filter-none hover:grayscale-0 cursor-pointer"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/18/19/13/buildings-1836478_1280.jpg')`,
            }}
          >
            <div className="flex flex-col items-center my-40 relative w-full">
              <div className="relative w-1/2 mx-auto">
                <NextImage
                  src={Frame}
                  alt="Base Image"
                  className="rounded-lg z-10"
                />
                {customerImage && (
                  <NextImage
                    src={URL.createObjectURL(customerImage)}
                    fill
                    alt="Customer Image"
                    className="object-cover xl:p-10 lg:p-8 md:p-2 sm:p-2 "
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeMode;
