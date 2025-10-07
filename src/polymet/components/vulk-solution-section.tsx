import React, { useState } from "react";
import { SparklesIcon, TrendingUpIcon, BellIcon, XIcon } from "lucide-react";

export function VulkSolutionSection() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <section className="bg-[#F5F1E8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8">The Solution</h2>

        <p className="text-xl text-[#2a2a2a] mb-8 leading-relaxed">
          Vulk is an{" "}
          <span className="font-semibold text-[#FF5733]">
          always-on AI career agent
          </span>{" "}
          that:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#FF5733] rounded-lg flex items-center justify-center mb-4">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
              Hyper personalized
            </h3>
            <p className="text-[#4a4a4a] text-sm">
              Every week, analyzes your situation, goals, recent activity, market conditions, and availability
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#FF5733] rounded-lg flex items-center justify-center mb-4">
              <TrendingUpIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
              Agent-Executed Actions
            </h3>
            <p className="text-[#4a4a4a] text-sm">
              Generates 3-5 prioritized actions. 90% completed by Vulk, 10% by you. Templates, drafts, and execution delivered in command center
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#FF5733] rounded-lg flex items-center justify-center mb-4">
              <BellIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
              Adaptive Strategy
            </h3>
            <p className="text-[#4a4a4a] text-sm">
              Learns from results, doubles down on what works, pivots when strategies aren't converting
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#FF5733] rounded-lg flex items-center justify-center mb-4">
              <TrendingUpIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
              Expanding Career OS
            </h3>
            <p className="text-[#4a4a4a] text-sm">
              Continuously building tools that empower Vulk to do more. Delivering a true career concierge experience over time
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <div
              className="aspect-video bg-[#E5E1D8] rounded-lg flex items-center justify-center mb-3 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setEnlargedImage("/onboarding_1.png")}
            >
              <img
                src="/onboarding_1.png"
                alt="Vulk onboarding experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div
              className="aspect-video bg-[#E5E1D8] rounded-lg flex items-center justify-center mb-3 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setEnlargedImage("/command_center.png")}
            >
              <img
                src="/command_center.png"
                alt="Vulk command center interface"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-[#6a6a6a] italic">
              Agent command center (coming soon)
            </p>
          </div>
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
