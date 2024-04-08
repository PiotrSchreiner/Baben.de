"use client";

import KontaktStart from "@/components/KontaktStart";

function page() {
  return (
    <div>
      <KontaktStart onSubmit={console.log} />
    </div>
  );
}

export default page;
