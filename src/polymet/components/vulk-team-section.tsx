import React from "react";
import { LinkedinIcon } from "lucide-react";

export function VulkTeamSection() {
  return (
    <section className="bg-[#F5F1E8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">The Team</h2>

        <p className="text-lg text-[#4a4a4a] mb-10">
          Both working full-time on Vulk and releasing iterations every day.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Emmanuel */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-[#E5E1D8] rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/pic_manu.png"
                  alt="Emmanuel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-[#1a1a1a]">
                    Emmanuel
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/emmanuelmarboeuf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF5733] hover:text-[#E54623] transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  Co-founded Visage.jobs (up to 8M ARR), 10 years building AI
                  recruiting products.
                </p>
              </div>
            </div>
          </div>

          {/* Dorian */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-[#E5E1D8] rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/pic_dorian.png"
                  alt="Dorian"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-[#1a1a1a]">Dorian</h3>
                  <a
                    href="https://www.linkedin.com/in/dorian-ouvrard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF5733] hover:text-[#E54623] transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  GenAI lead developer and key speaker at GenAI events,
                  ex-enterprise LLM evangelist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
