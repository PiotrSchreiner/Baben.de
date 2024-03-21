import KontaktStart from "@/components/KontaktStart";
import React from "react";

function page() {
  return (
    <div>
      <KontaktStart onSubmit={console.log} />
    </div>
  );
}

export default page;
