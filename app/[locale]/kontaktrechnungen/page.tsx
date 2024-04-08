"use client";

import KontaktRechnungen from "@/components/KontaktRechnungen";

function page() {
  return (
    <div>
      <KontaktRechnungen onSubmit={console.log} />
    </div>
  );
}

export default page;
