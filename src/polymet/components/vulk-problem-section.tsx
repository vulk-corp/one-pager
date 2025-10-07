import React, { useState } from "react";
import { TrendingDownIcon, AlertCircleIcon, XIcon } from "lucide-react";
import { ProblemContent } from "@/polymet/data/vulk-content";

interface VulkProblemSectionProps {
  content: ProblemContent;
  viewMode?: "onepager" | "deck";
}

export function VulkProblemSection({ content, viewMode = "onepager" }: VulkProblemSectionProps) {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const isDeck = viewMode === "deck";

  return (
    <section className={`bg-white ${isDeck ? "py-12" : "py-16"} px-6`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-[#1a1a1a] ${isDeck ? "mb-6" : "mb-8"}`}>{content.title}</h2>

        <p className={`text-xl text-[#2a2a2a] ${isDeck ? "mb-6" : "mb-8"} leading-relaxed`}>
          {content.descriptionHighlights.map((part, index) => (
            <React.Fragment key={index}>
              {part.isHighlight ? (
                <span className="font-semibold text-[#FF5733]">{part.text}</span>
              ) : (
                part.text
              )}
            </React.Fragment>
          ))}
        </p>

        <div className={`grid md:grid-cols-3 ${isDeck ? "gap-4 mb-6" : "gap-6 mb-8"}`}>
          {content.stats.map((stat, index) => (
            <div key={index} className="bg-[#FFF5F3] border-l-4 border-[#FF5733] p-6 rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                {index === 0 ? (
                  <TrendingDownIcon className="w-6 h-6 text-[#FF5733] flex-shrink-0 mt-1" />
                ) : (
                  <AlertCircleIcon className="w-6 h-6 text-[#FF5733] flex-shrink-0 mt-1" />
                )}

                <div>
                  <p className="text-3xl font-bold text-[#FF5733] mb-1">{stat.value}</p>
                  {stat.imagePath ? (
                    <button
                      onClick={() =>
                        setEnlargedImage(
                          stat.imageType === "composition" ? "reddit-composition" : stat.imagePath
                        )
                      }
                      className="text-sm text-[#FF5733] underline hover:text-[#E54623] cursor-pointer text-left font-medium"
                    >
                      {stat.label}
                    </button>
                  ) : (
                    <p className="text-sm text-[#4a4a4a]">{stat.label}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F5F1E8] p-6 rounded-lg">
          <img
            src={content.chartImage}
            alt="S&P 500 vs Job Openings chart"
            className={`max-w-full w-auto h-auto rounded-md shadow-lg cursor-pointer hover:opacity-90 transition-opacity mx-auto object-contain ${isDeck ? "max-h-[40vh]" : ""}`}
            onClick={() => setEnlargedImage(content.chartImage)}
          />
          <p className="text-sm text-[#6a6a6a] mt-3 italic text-center">
            {content.chartCaption}
          </p>
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
            {enlargedImage === "reddit-composition" ? (
              <div className="relative max-w-4xl w-full aspect-video bg-[#E5E1D8] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                {/* Overlapping Reddit screenshots composition */}
                <img
                  src="/reddit_2.png"
                  alt="Reddit career struggle post"
                  className="absolute top-[2%] left-[2%] w-[55%] shadow-xl rounded-md z-10 rotate-[-2deg]"
                />
                <img
                  src="/reddit_3.png"
                  alt="Reddit career struggle post"
                  className="absolute top-[5%] right-[3%] w-[52%] shadow-xl rounded-md z-20 rotate-[2deg]"
                />
                <img
                  src="/reddit_4.png"
                  alt="Reddit career struggle post"
                  className="absolute top-[32%] left-[5%] w-[50%] shadow-xl rounded-md z-15 rotate-[-1deg]"
                />
                <img
                  src="/reddit_5.png"
                  alt="Reddit career struggle post"
                  className="absolute top-[28%] right-[6%] w-[53%] shadow-xl rounded-md z-18 rotate-[3deg]"
                />
                <img
                  src="/reddit_6.png"
                  alt="Reddit career struggle post"
                  className="absolute bottom-[5%] left-[8%] w-[51%] shadow-xl rounded-md z-25 rotate-[-2deg]"
                />
                <img
                  src="/reddit_7.png"
                  alt="Reddit career struggle post"
                  className="absolute bottom-[3%] right-[5%] w-[54%] shadow-xl rounded-md z-12 rotate-[1deg]"
                />
                <img
                  src="/reddit_8.png"
                  alt="Reddit career struggle post"
                  className="absolute top-[15%] left-[25%] w-[48%] shadow-xl rounded-md z-22 rotate-[-1deg]"
                />
                <img
                  src="/reddit_9.png"
                  alt="Reddit career struggle post"
                  className="absolute bottom-[18%] right-[22%] w-[49%] shadow-xl rounded-md z-28 rotate-[2deg]"
                />
                {/* Center image - main focus */}
                <img
                  src="/reddit.png"
                  alt="Reddit career struggle post"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] shadow-2xl rounded-md z-40 rotate-[0deg]"
                />
              </div>
            ) : (
              <img
                src={enlargedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
