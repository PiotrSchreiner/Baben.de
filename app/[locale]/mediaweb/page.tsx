"use client";

import MediaWebDevelopment from "@/components/MediaWebDevelopment";
import React from "react";

function Page() {
  return (
    <div>
      <MediaWebDevelopment onSubmit={console.log} />
    </div>
  );
}

export default Page;
