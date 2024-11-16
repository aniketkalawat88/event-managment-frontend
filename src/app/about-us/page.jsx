import React from "react";
import HeroSection from "../_components/hero-section";
import MainFeature from "../_components/main-feature";
import Testimonial from "../_components/testimonal";

export default function page() {
  return (
    <main className="text-gray-900">
      <HeroSection />
      <MainFeature />
      <Testimonial />
    </main>
  );
}
