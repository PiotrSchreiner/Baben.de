"use client";

import KontaktStandort from "@/components/KontaktStandort";

export default function page() {
  return (
    <div>
      <KontaktStandort onSubmit={console.log} />
    </div>
  );
}
