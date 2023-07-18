"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // Navigate to thank you
      router.push(`/`);
    }, 3000);
  });
  return (
    <div>
      Thank you for sending qoutation, Our agent will send you response as soon
      as possible.
    </div>
  );
};

export default page;
