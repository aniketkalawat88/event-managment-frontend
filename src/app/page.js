"use client"

import React, { useEffect } from "react";
import Events from "./_components/events";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);
  
  return (
    <div>
          <Events />
    </div>
  );
}
