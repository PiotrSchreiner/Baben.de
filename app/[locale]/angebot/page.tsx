"use client";

import AngebotStart from "@/components/AngebotStart";
import Kontakt from "@/components/Kontakt";
import KontaktSuccsess from "@/components/KontaktSuccsess";
import MarketingCommunikation from "@/components/MarketingCommunikation";
import MediaWebDevelopment from "@/components/MediaWebDevelopment";
import OutOfHomeMarketing from "@/components/OutOfHomeMarketing";
import { sendEmail } from "@/lib/serverActions";
import { useState } from "react";

function Page() {
  const [activeComponent, setActiveComponent] = useState("angebot");
  const [angebotValue, setangebotValue] = useState({
    name: "",
    description: "",
    step: "",
  });
  const [oohValue, setoohValue] = useState("");
  const [mediaValue, setmediaValue] = useState("");
  const [communikationValue, setcommunikationValue] = useState("");

  const [kontaktValue, setKontaktValue] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    message: "",
  });

  const changeComponent = (componentName: string) => {
    setActiveComponent(componentName);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {activeComponent === "angebot" && (
        <AngebotStart
          onSubmit={(selectedValue) => {
            setangebotValue(selectedValue);
            changeComponent(selectedValue.step);
          }}
        />
      )}
      {activeComponent === "oohMarketing" && (
        <OutOfHomeMarketing
          onSubmit={async (selectedValue) => {
            setoohValue(selectedValue);
            changeComponent("kontakt");
          }}
        />
      )}
      {activeComponent === "mediaWebDevelopment" && (
        <MediaWebDevelopment
          onSubmit={(selectedValue) => {
            setmediaValue(selectedValue);
            changeComponent("kontakt");
          }}
        />
      )}
      {activeComponent === "marketingCommunikation" && (
        <MarketingCommunikation
          onSubmit={(selectedValue) => {
            setcommunikationValue(selectedValue);
            changeComponent("kontakt");
          }}
        />
      )}
      {activeComponent === "kontakt" && (
        <Kontakt
          onSubmit={async (selectedValue: {
            email: string;
            firstName: string;
            lastName: string;
            company: string;
            phone: string;
            message: string;
          }) => {
            setKontaktValue(selectedValue);
            await sendEmail({
              ...selectedValue,
              formular: "",
              werben: "",
              rechnungen: "",
              standort: "",
              sonstiges: "",
              outOfHome: oohValue,
              webDev: mediaValue,
              markComun: communikationValue,
            });
            changeComponent("succsess");
          }}
        />
      )}

      {activeComponent === "succsess" && <KontaktSuccsess />}
    </div>
  );
}

export default Page;
