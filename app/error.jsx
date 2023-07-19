"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return <div>404 Page not found. Redirecting to homepage...</div>;
};

export default error;
