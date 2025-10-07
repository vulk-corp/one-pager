import React from "react";
import { TargetIcon, TrendingUpIcon, ZapIcon } from "lucide-react";
import { MarketContent } from "@/polymet/data/vulk-content";

interface VulkMarketSectionProps {
  content: MarketContent;
}

const iconMap = {
  target: TargetIcon,
  "trending-up": TrendingUpIcon,
  zap: ZapIcon,
};

export function VulkMarketSection({ content }: VulkMarketSectionProps) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Market Size */}
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8">
              {content.title}
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#FF5733] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <TargetIcon className="w-5 h-5 text-[#FF5733]" />
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">TAM</h3>
                </div>
                <p className="text-2xl font-bold text-[#FF5733] mb-1">
                  {content.marketSize.tam.value}
                </p>
                <p className="text-sm text-[#4a4a4a]">
                  {content.marketSize.tam.description}
                </p>
              </div>

              <div className="border-l-4 border-[#FF5733] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <TargetIcon className="w-5 h-5 text-[#FF5733]" />
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">SAM</h3>
                </div>
                <p className="text-2xl font-bold text-[#FF5733] mb-1">
                  {content.marketSize.sam.value}
                </p>
                <p className="text-sm text-[#4a4a4a]">
                  {content.marketSize.sam.description}
                </p>
              </div>

              <div className="border-l-4 border-[#FF5733] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <TargetIcon className="w-5 h-5 text-[#FF5733]" />
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">SOM</h3>
                </div>
                <p className="text-2xl font-bold text-[#FF5733] mb-1">
                  {content.marketSize.som.value}
                </p>
                <p className="text-sm text-[#4a4a4a]">
                  {content.marketSize.som.description}
                </p>
              </div>
            </div>
          </div>

          {/* Why Now */}
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8">
              {content.whyNow.title}
            </h2>

            <div className="space-y-6">
              {content.whyNow.points.map((point, index) => {
                const IconComponent = iconMap[point.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="bg-[#F5F1E8] p-6 rounded-lg">
                    <div className="flex items-start gap-3">
                      <IconComponent className="w-6 h-6 text-[#FF5733] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-[#1a1a1a] mb-2">
                          {point.title}
                        </h3>
                        <p className="text-sm text-[#4a4a4a]">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
