"use client";

import Kontakt from "@/components/Kontakt";

function page() {
  return (
    <div>
      <Kontakt onSubmit={console.log} />
    </div>
  );
}

export default page;
