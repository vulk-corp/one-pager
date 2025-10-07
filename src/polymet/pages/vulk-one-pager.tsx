import React from "react";
import { VulkHeroSection } from "@/polymet/components/vulk-hero-section";
import { VulkProblemSection } from "@/polymet/components/vulk-problem-section";
import { VulkSolutionSection } from "@/polymet/components/vulk-solution-section";
import { VulkMarketSection } from "@/polymet/components/vulk-market-section";
import { VulkTeamSection } from "@/polymet/components/vulk-team-section";
import { VulkRoadmapSection } from "@/polymet/components/vulk-roadmap-section";
import { VulkFundraisingSection } from "@/polymet/components/vulk-fundraising-section";

export function VulkOnePager() {
  return (
    <div className="min-h-screen">
      <VulkHeroSection />

      <VulkProblemSection />

      <VulkSolutionSection />

      <VulkMarketSection />

      <VulkTeamSection />

      <VulkRoadmapSection />

      <VulkFundraisingSection />
    </div>
  );
}
