import React from "react";
import { EmailTemplate } from "@/components/EmailTemplate";

function page() {
  return (
    <div>
      <EmailTemplate
        firstName="peter"
        lastName="lustig"
        company="Banausen GmbH"
        email="banausen@freenet.de"
        phone="+4917654455442"
        message="lorum ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
        outOfHome=""
        webDev=""
        markComun="Test"
        werben=""
        rechnungen=""
        standort=""
        formular="Test"
        sonstiges=""
      />
    </div>
  );
}

export default page;
