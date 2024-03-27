"use client";

import History from "@/components/History";
import { SlideShowAlternative } from "@/components/SlideShowAlternative";
import Hero from "../../components/Hero";
import Team from "../../components/Team";

function Home() {
  return (
    <div className=" relative max-h-max bg-black/50">
      <SlideShowAlternative
        images={[
          {
            url: "https://cdn.pixabay.com/photo/2013/10/14/02/52/paris-195327_1280.jpg",
            text: "Aussenwerbung",
          },
          {
            url: "https://cdn.pixabay.com/photo/2022/01/03/01/57/airport-6911566_1280.jpg",
            text: "Airport-Advertising",
          },
          {
            url: "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg",
            text: "Zielgruppenanalyse",
          },
          {
            url: "https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg",
            text: "Dialog Marketing",
          },
          {
            url: "https://cdn.pixabay.com/photo/2015/01/01/20/48/advertising-586130_1280.jpg",
            text: "Advertising",
          },
        ]}
        autoplay
      />
      <main className="py-10 lg:py-18 px-4 relative">
        <Hero className="pb-10" />
        <Team />
        <History />
      </main>
    </div>
  );
}

export default Home;
