import KontaktSonstiges from "@/components/KontaktSonstiges";
import React from "react";

function page() {
  return (
    <div>
      <KontaktSonstiges onSubmit={console.log} />
    </div>
  );
}

export default page;
