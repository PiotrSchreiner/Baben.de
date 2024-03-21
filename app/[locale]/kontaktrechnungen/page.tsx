import KontaktRechnungen from "@/components/KontaktRechnungen";
import React from "react";

function page() {
  return (
    <div>
      <KontaktRechnungen onSubmit={console.log} />
    </div>
  );
}

export default page;
