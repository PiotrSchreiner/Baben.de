"use client";

import React, { useState } from "react";
import Kontakt from "@/components/Kontakt";
import KontaktFormular from "@/components/KontaktFormular";
import KontaktRechnungen from "@/components/KontaktRechnungen";
import KontaktSonstiges from "@/components/KontaktSonstiges";
import KontaktStandort from "@/components/KontaktStandort";
import KontaktStart from "@/components/KontaktStart";
import KontaktWerben from "@/components/KontaktWerben";
import KontaktSuccsess from "@/components/KontaktSuccsess";
import { sendEmail } from "@/lib/serverActions";

function Page() {
  // Define a state variable to track the active component
  const [activeComponent, setActiveComponent] = useState("start");
  const [formularValue, setFormularValue] = useState("");
  const [werbenValue, setWerbenValue] = useState("");
  const [rechnungsValue, setRechnungsValue] = useState("");
  const [standortValue, setStandortValue] = useState("");
  const [kontaktValue, setKontaktValue] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
  });
  const [sonstigesValue, setSonstigesValue] = useState("");

  // Define a function to switch between components
  const changeComponent = (componentName: string) => {
    setActiveComponent(componentName);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Render components conditionally based on the activeComponent state */}
      {activeComponent === "start" && (
        <KontaktStart onSubmit={() => changeComponent("formular")} />
      )}
      {activeComponent === "formular" && (
        <KontaktFormular
          onSubmit={(step: string | undefined, selectedValue: string) => {
            setFormularValue(selectedValue);
            changeComponent(step || "kontakt");
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
              formular: formularValue,
              werben: werbenValue,
              rechnungen: rechnungsValue,
              standort: standortValue,
              sonstiges: sonstigesValue,
              outOfHome: "",
              webDev: "",
              markComun: "",
            });
            changeComponent("succsess");
          }}
        />
      )}
      {activeComponent === "werben" && (
        <KontaktWerben
          onSubmit={(step: string | undefined, selectedValue: string) => {
            setWerbenValue(selectedValue);
            changeComponent(step || "werben");
          }}
        />
      )}
      {activeComponent === "standort" && (
        <KontaktStandort
          onSubmit={(selectedValue: string) => {
            setStandortValue(selectedValue);
            changeComponent("kontakt");
          }}
        />
      )}
      {activeComponent === "rechnungen" && (
        <KontaktRechnungen
          onSubmit={(selectedValue: string) => {
            setRechnungsValue(selectedValue);
            changeComponent("kontakt");
          }}
        />
      )}
      {activeComponent === "sonstiges" && (
        <KontaktSonstiges
          onSubmit={(selectedValue: string) => {
            setSonstigesValue(selectedValue);
            changeComponent("kontakt");
          }}
        />
      )}
      {activeComponent === "succsess" && <KontaktSuccsess />}
    </div>
  );
}

export default Page;
