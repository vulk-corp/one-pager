import React from "react";
import { VulkHeroSection } from "@/polymet/components/vulk-hero-section";
import { VulkProblemSection } from "@/polymet/components/vulk-problem-section";
import { VulkSolutionSection } from "@/polymet/components/vulk-solution-section";
import { VulkMarketSection } from "@/polymet/components/vulk-market-section";
import { VulkGTMSection } from "@/polymet/components/vulk-gtm-section";
import { VulkCompetitionSection } from "@/polymet/components/vulk-competition-section";
import { VulkTeamSection } from "@/polymet/components/vulk-team-section";
import { VulkRoadmapSection } from "@/polymet/components/vulk-roadmap-section";
import { VulkFundraisingSection } from "@/polymet/components/vulk-fundraising-section";
import { ViewSwitcher } from "@/polymet/components/view-switcher";
import { vulkContent } from "@/polymet/data/vulk-content";

export function VulkOnePager() {
  return (
    <div className="min-h-screen">
      <ViewSwitcher />

      <VulkHeroSection content={vulkContent.hero} />

      <VulkProblemSection content={vulkContent.problem} />

      <VulkSolutionSection content={vulkContent.solution} />

      <VulkMarketSection content={vulkContent.market} />

      <VulkGTMSection content={vulkContent.gtm} />

      <VulkCompetitionSection content={vulkContent.competition} />

      <VulkTeamSection content={vulkContent.team} />

      <VulkRoadmapSection content={vulkContent.roadmap} />

      <VulkFundraisingSection content={vulkContent.fundraising} />
    </div>
  );
}
