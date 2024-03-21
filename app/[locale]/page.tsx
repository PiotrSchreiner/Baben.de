"use client";

import History from "@/components/History";
import { SlideShowAlternative } from "@/components/SlideShowAlternative";
import Hero from "../../components/Hero";
import Team from "../../components/Team";

function Home() {
  return (
    <div className=" relative max-h-max">
      <SlideShowAlternative
        images={[
          {
            url: "https://cdn.pixabay.com/photo/2018/11/04/16/28/london-3794348_1280.jpg",
            text: "London",
          },
          {
            url: "https://cdn.pixabay.com/photo/2022/01/03/01/57/airport-6911566_1280.jpg",
            text: "Airport",
          },
          {
            url: "https://cdn.pixabay.com/photo/2019/02/04/01/39/outdoor-3973811_1280.jpg",
            text: "Outdoor",
          },
          {
            url: "https://cdn.pixabay.com/photo/2015/01/01/20/48/advertising-586130_1280.jpg",
            text: "Advertising",
          },
          {
            url: "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg",
            text: "Digital Marketing",
          },
          {
            url: "https://cdn.pixabay.com/photo/2015/01/01/20/51/advertisement-586132_1280.jpg",
            text: "Advertisement",
          },
          {
            url: "https://cdn.pixabay.com/photo/2013/10/14/02/52/paris-195327_1280.jpg",
            text: "Paris",
          },
        ]}
      >
        <textarea name="flughafenExperten" id="flughafen"></textarea>
      </SlideShowAlternative>
      <main className="py-10 lg:py-18 px-2 relative">
        <Hero className="pb-10" />
        <Team />
        <History />
      </main>
    </div>
  );
}

export default Home;
