import React from "react";
import { TargetIcon, TrendingUpIcon, ZapIcon } from "lucide-react";

export function VulkMarketSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Market Size */}
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8">
              Market Opportunity
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#FF5733] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <TargetIcon className="w-5 h-5 text-[#FF5733]" />

                  <h3 className="text-lg font-semibold text-[#1a1a1a]">TAM</h3>
                </div>
                <p className="text-2xl font-bold text-[#FF5733] mb-1">
                  $100-200B
                </p>
                <p className="text-sm text-[#4a4a4a]">
                  1.1B white-collar professionals globally
                </p>
              </div>

              <div className="border-l-4 border-[#FF5733] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <TargetIcon className="w-5 h-5 text-[#FF5733]" />

                  <h3 className="text-lg font-semibold text-[#1a1a1a]">SAM</h3>
                </div>
                <p className="text-2xl font-bold text-[#FF5733] mb-1">$3-6B</p>
                <p className="text-sm text-[#4a4a4a]">
                  30M U.S. entry & mid-career professionals
                </p>
              </div>

              <div className="border-l-4 border-[#FF5733] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <TargetIcon className="w-5 h-5 text-[#FF5733]" />

                  <h3 className="text-lg font-semibold text-[#1a1a1a]">SOM</h3>
                </div>
                <p className="text-2xl font-bold text-[#FF5733] mb-1">
                  $30-60M ARR
                </p>
                <p className="text-sm text-[#4a4a4a]">
                  150-300k early adopters in 3-5 years
                </p>
              </div>
            </div>
          </div>

          {/* Why Now */}
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8">Why Now</h2>

            <div className="space-y-6">
              <div className="bg-[#F5F1E8] p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <TrendingUpIcon className="w-6 h-6 text-[#FF5733] flex-shrink-0 mt-1" />

                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Market Pressure
                    </h3>
                    <p className="text-sm text-[#4a4a4a]">
                      Persistent layoffs and AI disruption creating urgent need
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F1E8] p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <ZapIcon className="w-6 h-6 text-[#FF5733] flex-shrink-0 mt-1" />

                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      AI Agents {">"} Apps
                    </h3>
                    <p className="text-sm text-[#4a4a4a]">
                      LLMs enable execution, not just advice—real action for
                      professionals
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F1E8] p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <TargetIcon className="w-6 h-6 text-[#FF5733] flex-shrink-0 mt-1" />

                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      LinkedIn Gap
                    </h3>
                    <p className="text-sm text-[#4a4a4a]">
                      LinkedIn optimizes for recruiters & ads, not
                      professionals' outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
