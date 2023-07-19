"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const error = () => {
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return <div>Error...</div>;
};

export default error;
