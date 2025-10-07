import React from "react";
import { CheckCircle2Icon, CircleIcon, CircleDotIcon } from "lucide-react";

export function VulkRoadmapSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-10">Roadmap</h2>

        <div className="space-y-6">
          {/* Phase 1 - Complete */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 mt-1">
              <CheckCircle2Icon className="w-8 h-8 text-[#22c55e]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-[#1a1a1a]">
                  Phase 1 - Foundation
                </h3>
                <span className="px-3 py-1 bg-[#22c55e] text-white text-xs font-semibold rounded-full">
                  LIVE
                </span>
              </div>
              <p className="text-[#4a4a4a]">
                Branded profile builder + salary benchmarking + first users
              </p>
            </div>
          </div>

          {/* Phase 2 - In Progress */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 mt-1">
              <CircleDotIcon className="w-8 h-8 text-[#FF5733]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-[#1a1a1a]">
                  Phase 2 - Proof of Value
                </h3>
                <span className="px-3 py-1 bg-[#FF5733] text-white text-xs font-semibold rounded-full">
                  IN PROGRESS
                </span>
              </div>
              <p className="text-[#4a4a4a]">
                Vulk command center + weekly plan + initial proactive actions catalog + reaching 1,000 users
              </p>
            </div>
          </div>

          {/* Phase 3 - Planned */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 mt-1">
              <CircleIcon className="w-8 h-8 text-[#9ca3af]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-[#1a1a1a]">
                  Phase 3 - Expansion
                </h3>
                <span className="px-3 py-1 bg-[#e5e7eb] text-[#4a4a4a] text-xs font-semibold rounded-full">
                  PLANNED
                </span>
              </div>
              <p className="text-[#4a4a4a]">
                Full proactive AI agent with compounding actions across
                visibility, skills, income streams, and network building.
                Professionals continuously increase their resilience and market
                value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
