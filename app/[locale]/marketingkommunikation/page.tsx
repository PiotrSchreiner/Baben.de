import MarketingCommunikation from "@/components/MarketingCommunikation";
import React from "react";

function page() {
  return (
    <div>
      <MarketingCommunikation onSubmit={console.log} />
    </div>
  );
}

export default page;
