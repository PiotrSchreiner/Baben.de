"use client";

import OutOfHomeMarketing from "@/components/OutOfHomeMarketing";
import React from "react";

function page() {
  return (
    <div>
      <OutOfHomeMarketing onSubmit={console.log} />
    </div>
  );
}

export default page;
