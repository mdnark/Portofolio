import React from "react";
import { HeroPage } from "./hero-section/components/HeroPage";
import { AboutPage } from "./about-me/components/AboutPage";

export const PortofolioPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeroPage />
      <AboutPage />
      <HeroPage />
    </div>
  );
};
