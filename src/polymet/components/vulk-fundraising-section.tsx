import React from "react";
import { RocketIcon } from "lucide-react";

export function VulkFundraisingSection() {
  return (
    <section className="bg-[#FF5733] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
          <RocketIcon className="w-8 h-8 text-[#FF5733]" />
        </div>

        <h2 className="text-4xl font-bold text-white mb-6">Accelerating</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-white/20">
            <p className="text-white/80 text-sm font-semibold mb-2 uppercase tracking-wide">
              Raising
            </p>
            <p className="text-6xl font-bold text-white mb-2">$400k</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-white/20">
            <p className="text-white/80 text-sm font-semibold mb-2 uppercase tracking-wide">
              Valuation Cap
            </p>
            <p className="text-6xl font-bold text-white mb-2">$8M</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-white/20">
          <p className="text-xl text-white leading-relaxed">
            Build AI-powered career OS with proactive career agent, onboard first 1000s users, find PMF and a cost efficient acquisition channel.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://www.vulk.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#FF5733] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F5F1E8] transition-colors"
          >
            Learn More at vulk.ai
          </a>
        </div>
      </div>
    </section>
  );
}
