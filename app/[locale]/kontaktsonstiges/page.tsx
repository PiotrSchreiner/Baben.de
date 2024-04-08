"use client";

import KontaktSonstiges from "@/components/KontaktSonstiges";

function page() {
  return (
    <div>
      <KontaktSonstiges onSubmit={console.log} />
    </div>
  );
}

export default page;
