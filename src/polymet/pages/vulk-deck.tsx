import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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

export function VulkDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hideUI, setHideUI] = useState(false);

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // H key - Hide/show UI
      if (e.key === 'h' || e.key === 'H') {
        setHideUI(prev => !prev);
      }

      // F key - Toggle fullscreen
      if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#F5F1E8]">
      {!hideUI && <ViewSwitcher />}
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Mousewheel]}
        direction="vertical"
        slidesPerView={1}
        navigation={!hideUI}
        pagination={!hideUI ? { clickable: true } : false}
        keyboard={{ enabled: true }}
        mousewheel={{ enabled: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
        style={{
          "--swiper-navigation-color": "#FF5733",
          "--swiper-pagination-color": "#FF5733",
        } as React.CSSProperties}
      >
        <SwiperSlide className="overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center py-12">
            <div className="w-full">
              <VulkHeroSection content={vulkContent.hero} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center py-6">
            <div className="w-full">
              <VulkProblemSection content={vulkContent.problem} viewMode="deck" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center py-6">
            <div className="w-full">
              <VulkSolutionSection content={vulkContent.solution} viewMode="deck" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center py-6">
            <div className="w-full">
              <VulkMarketSection content={vulkContent.market} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center py-6">
            <div className="w-full">
              <VulkGTMSection content={vulkContent.gtm} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center py-6">
            <div className="w-full">
              <VulkCompetitionSection content={vulkContent.competition} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center py-6">
            <div className="w-full">
              <VulkTeamSection content={vulkContent.team} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center py-6">
            <div className="w-full">
              <VulkRoadmapSection content={vulkContent.roadmap} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center py-6">
            <div className="w-full">
              <VulkFundraisingSection content={vulkContent.fundraising} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Slide counter */}
      {!hideUI && (
        <div className="fixed bottom-6 left-6 z-50 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-[#1a1a1a]">
          Slide {activeIndex + 1} / 9
        </div>
      )}
    </div>
  );
}
