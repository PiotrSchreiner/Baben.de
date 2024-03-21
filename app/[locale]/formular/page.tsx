import Kontakt from "@/components/Kontakt";
import React from "react";

function page() {
  return (
    <div>
      <Kontakt onSubmit={console.log} />
    </div>
  );
}

export default page;
