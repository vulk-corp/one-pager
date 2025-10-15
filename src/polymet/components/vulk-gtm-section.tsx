import React from "react";
import { MessageCircleIcon, UsersIcon, RocketIcon, GlobeIcon, MailIcon, LinkedinIcon, ArrowRightIcon, RefreshCwIcon } from "lucide-react";
import { GTMContent } from "@/polymet/data/vulk-content";

interface VulkGTMSectionProps {
  content: GTMContent;
}

const iconMap = {
  "message-circle": MessageCircleIcon,
  "users": UsersIcon,
  "rocket": RocketIcon,
  "globe": GlobeIcon,
  "mail": MailIcon,
  "linkedin": LinkedinIcon,
};

export function VulkGTMSection({ content }: VulkGTMSectionProps) {
  return (
    <section className="bg-[#F5F1E8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">{content.title}</h2>

        <p className="text-lg text-[#4a4a4a] mb-12">{content.subtitle}</p>

        {/* Channels - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {content.channels.map((channel, index) => {
            const IconComponent = iconMap[channel.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-20 h-20 bg-[#FF5733] rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {channel.name}
                </h3>
                <p className="text-sm text-[#6a6a6a]">{channel.key}</p>
              </div>
            );
          })}
        </div>

        {/* Viral Loop */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-6 md:mb-8 text-center">
            {content.viralLoop.title}
          </h3>

          {/* Desktop: Horizontal with arrows */}
          <div className="hidden md:block relative pt-6 pb-12">
            <div className="flex items-start justify-center gap-6">
              {content.viralLoop.steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center w-[140px] z-10">
                    <div className="w-14 h-14 bg-[#FF5733] rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    <p className="text-sm font-medium text-[#4a4a4a] text-center min-h-[40px] flex items-center justify-center">
                      {step.label}
                    </p>
                  </div>
                  {index < content.viralLoop.steps.length - 1 && (
                    <ArrowRightIcon className="w-8 h-8 text-[#FF5733] flex-shrink-0 mt-3" strokeWidth={2.5} />
                  )}
                </React.Fragment>
              ))}

              {/* Curved arrow connecting Step 4 back to Step 1 */}
              <svg
                className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
              >
                <defs>
                  <marker
                    id="loop-arrowhead"
                    markerWidth="12"
                    markerHeight="12"
                    refX="10"
                    refY="6"
                    orient="auto"
                  >
                    <polygon points="0 0, 12 6, 0 12" fill="#FF5733" />
                  </marker>
                </defs>
                <path
                  d="M 85 5 Q 95 5, 95 15 Q 95 35, 90 40 L 10 40 Q 5 40, 5 30 Q 5 15, 10 10"
                  stroke="#FF5733"
                  strokeWidth="1.2"
                  fill="none"
                  markerEnd="url(#loop-arrowhead)"
                  strokeDasharray="8,5"
                  opacity="0.8"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          {/* Mobile: Vertical without arrows */}
          <div className="md:hidden space-y-6">
            {content.viralLoop.steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF5733] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <p className="text-sm font-medium text-[#4a4a4a]">
                  {step.label}
                </p>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-2 justify-center">
              <RefreshCwIcon className="w-6 h-6 text-[#FF5733]" strokeWidth={2.5} />
              <span className="text-sm font-semibold text-[#FF5733]">Repeats</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
