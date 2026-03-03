import React from "react";
import { HeroPage } from "./hero-section/components/HeroPage";
import { AboutPage } from "./about-me/components/AboutPage";
import { ServicesPage } from "./services/components/ServicesPage";

export const PortofolioPage = () => {
  return (
    <div className="flex flex-col gap-16">
      <HeroPage />
      <AboutPage />
      <ServicesPage/>
    </div>
  );
};
