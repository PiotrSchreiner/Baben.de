"use client";

import MarketingCommunikation from "@/components/MarketingCommunikation";

function page() {
  return (
    <div>
      <MarketingCommunikation onSubmit={console.log} />
    </div>
  );
}

export default page;
