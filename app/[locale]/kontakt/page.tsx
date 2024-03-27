"use client";

import Kontakt from "@/components/Kontakt";
import KontaktSuccsess from "@/components/KontaktSuccsess";
import { sendEmail } from "@/lib/serverActions";
import { useState } from "react";

function Page() {
  const [activeComponent, setActiveComponent] = useState("kontakt");

  const changeComponent = (componentName: string) => {
    setActiveComponent(componentName);
    window.scrollTo(0, 0);
  };

  return (
    <div>
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
            await sendEmail({
              ...selectedValue,
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
