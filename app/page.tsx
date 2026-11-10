import React from "react";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="w-full min-h-[100svh] flex flex-col justify-center items-center overflow-x-hidden">
      <HeroSection />
    </div>
  );
}
