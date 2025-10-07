import React from "react";
import { CheckCircle2Icon, CircleIcon, CircleDotIcon } from "lucide-react";
import { RoadmapContent } from "@/polymet/data/vulk-content";

interface VulkRoadmapSectionProps {
  content: RoadmapContent;
}

const statusConfig = {
  completed: {
    icon: CheckCircle2Icon,
    iconColor: "text-[#22c55e]",
    badgeColor: "bg-[#22c55e] text-white",
  },
  "in-progress": {
    icon: CircleDotIcon,
    iconColor: "text-[#FF5733]",
    badgeColor: "bg-[#FF5733] text-white",
  },
  planned: {
    icon: CircleIcon,
    iconColor: "text-[#9ca3af]",
    badgeColor: "bg-[#e5e7eb] text-[#4a4a4a]",
  },
};

export function VulkRoadmapSection({ content }: VulkRoadmapSectionProps) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-10">{content.title}</h2>

        <div className="space-y-6">
          {content.phases.map((phase, index) => {
            const config = statusConfig[phase.status];
            const IconComponent = config.icon;

            return (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 mt-1">
                  <IconComponent className={`w-8 h-8 ${config.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-[#1a1a1a]">
                      {phase.title}
                    </h3>
                    <span className={`px-3 py-1 ${config.badgeColor} text-xs font-semibold rounded-full`}>
                      {phase.statusLabel}
                    </span>
                  </div>
                  <p className="text-[#4a4a4a]">{phase.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
