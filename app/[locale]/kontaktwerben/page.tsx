"use client";

import KontaktWerben from "@/components/KontaktWerben";

function page() {
  return (
    <div>
      <KontaktWerben onSubmit={console.log} />
    </div>
  );
}

export default page;
