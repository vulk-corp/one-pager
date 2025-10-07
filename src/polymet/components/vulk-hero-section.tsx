import React from "react";
import { ExternalLinkIcon } from "lucide-react";

export function VulkHeroSection() {
  return (
    <section className="bg-[#F5F1E8] py-20 px-6">
      <div className="max-w-6xl mx-auto flex items-center gap-8">
        {/* Text content */}
        <div className="flex-1">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a]">
                vulk.ai
              </h1>
              <a
                href="https://www.vulk.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF5733] hover:text-[#E54623] transition-colors"
              >
                <ExternalLinkIcon className="w-8 h-8" />
              </a>
            </div>
            <div className="h-1 w-24 bg-[#FF5733] mt-2"></div>
          </div>
          <p className="text-xl md:text-2xl text-[#4a4a4a] max-w-3xl leading-relaxed">
            Your always-on AI career agent that keeps you{" "}
            <span className="text-[#FF5733] font-semibold">relevant</span>,{" "}
            <span className="text-[#FF5733] font-semibold">visible</span>, and{" "}
            <span className="text-[#FF5733] font-semibold">in demand</span>
          </p>
        </div>

        {/* Logo on the right */}
        <div className="flex-shrink-0">
          <img src="/vulk_avatar.svg" alt="Vulk Logo" className="w-32 h-32 md:w-40 md:h-40" />
        </div>
      </div>
    </section>
  );
}
