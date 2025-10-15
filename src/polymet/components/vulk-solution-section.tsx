import React, { useState } from "react";
import { SparklesIcon, TrendingUpIcon, BellIcon, XIcon, ZapIcon } from "lucide-react";
import { SolutionContent } from "@/polymet/data/vulk-content";

interface VulkSolutionSectionProps {
  content: SolutionContent;
  viewMode?: "onepager" | "deck";
}

const iconMap = {
  sparkles: SparklesIcon,
  "trending-up": TrendingUpIcon,
  bell: BellIcon,
  zap: ZapIcon,
};

export function VulkSolutionSection({ content, viewMode = "onepager" }: VulkSolutionSectionProps) {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const isDeck = viewMode === "deck";

  return (
    <section className={`bg-[#F5F1E8] ${isDeck ? "py-12" : "py-16"} px-6`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-[#1a1a1a] ${isDeck ? "mb-6" : "mb-8"}`}>{content.title}</h2>

        <p className={`text-2xl text-[#2a2a2a] ${isDeck ? "mb-6" : "mb-8"} leading-relaxed`}>
          {content.description}{" "}
          <span className="font-semibold text-[#FF5733]">
            {content.descriptionHighlight}
          </span>{" "}
          that:
        </p>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 ${isDeck ? "gap-4 mb-6" : "gap-6 mb-12"}`}>
          {content.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#FF5733] rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#4a4a4a] text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {content.images.map((image, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div
                className="aspect-video bg-[#E5E1D8] rounded-lg flex items-center justify-center mb-3 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setEnlargedImage(image.path)}
              >
                <img
                  src={image.path}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {image.caption && (
                <p className="text-sm text-[#6a6a6a] italic">{image.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setEnlargedImage(null)}
          >
            <XIcon className="w-8 h-8" />
          </button>
          <img
            src={enlargedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
