import KontaktStandort from "@/components/KontaktStandort";
import React from "react";

export default function page() {
  return (
    <div>
      <KontaktStandort onSubmit={console.log} />
    </div>
  );
}
