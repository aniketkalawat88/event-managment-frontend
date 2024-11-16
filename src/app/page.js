"use client"

import React, { useEffect } from "react";
import HeroSection from "./_components/hero-section";
import MainFeature from "./_components/main-feature";
import Analysis from "./_components/analysis";
import DesignPlan from "./_components/design-plan";
import SearchPerformance from "./_components/search-performance";
import Status from "./_components/status";
import Testimonal from "./_components/testimonal";
import Contact from "./_components/contact";
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
          <main className="text-gray-900">
            <HeroSection />
            <Events />
            <MainFeature />
            <Analysis />
            <DesignPlan />
            <SearchPerformance />
            <Status />
            <Testimonal />
            <Contact />
          </main>
    </div>
  );
}
