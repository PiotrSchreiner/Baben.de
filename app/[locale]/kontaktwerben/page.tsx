import KontaktWerben from "@/components/KontaktWerben";
import React from "react";

function page() {
  return (
    <div>
      <KontaktWerben onSubmit={console.log} />
    </div>
  );
}

export default page;
