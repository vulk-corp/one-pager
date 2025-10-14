import React, { useMemo } from "react";
import { CompetitionContent } from "@/polymet/data/vulk-content";

interface VulkCompetitionSectionProps {
  content: CompetitionContent;
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

function normToUnit(v: number) {
  // maps [0..100] to [0..1]
  return v / 100;
}

export function VulkCompetitionSection({
  content,
}: VulkCompetitionSectionProps) {
  const processed = useMemo(() => {
    return content.competitors.map((comp) => ({
      ...comp,
      ux: clamp01(normToUnit(comp.x)),
      uy: 1 - clamp01(normToUnit(comp.y)), // SVG y grows downward, so invert
    }));
  }, [content.competitors]);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
          {content.title}
        </h2>
        <p className="text-lg text-[#4a4a4a] mb-12">{content.subtitle}</p>

        {/* Strategic Positioning Map */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] bg-white overflow-hidden">
          <svg viewBox="0 0 1000 625" className="w-full h-full">
            <defs>
              <filter id="vulkGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gradient definitions for axes */}
              <linearGradient id="horizontalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d1d5db" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FF5733" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d1d5db" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FF5733" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Background */}
            <rect x="0" y="0" width="1000" height="625" fill="#ffffff" />

            {/* Modern cross-hairs with CSS styling */}
            <g className="opacity-60">
              {/* Horizontal axis */}
              <line
                x1="0"
                y1="312.5"
                x2="1000"
                y2="312.5"
                stroke="#FF5733"
                strokeWidth="2"
                className="drop-shadow-sm"
              />
              {/* Vertical axis */}
              <line
                x1="500"
                y1="0"
                x2="500"
                y2="625"
                stroke="#FF5733"
                strokeWidth="2"
                className="drop-shadow-sm"
              />
            </g>

            {/* Quadrant labels */}
            <g fill="#d1d5db" fontSize="14" fontWeight="500">
              <text x="250" y="600" textAnchor="middle">TRADITIONAL TOOLS</text>
              <text x="250" y="40" textAnchor="middle">COACHING</text>
              <text x="750" y="600" textAnchor="middle">PROACTIVE TOOLS</text>
              <text x="750" y="40" textAnchor="middle">AGENTS</text>
            </g>

            {/* Axis labels */}
            <g fill="#6b7280" fontSize="12" fontWeight="500">
              {/* X-axis: middle left and middle right */}
              <text x="40" y="330" textAnchor="start">{content.xAxis.min}</text>
              <text x="960" y="330" textAnchor="end">{content.xAxis.max}</text>

              {/* Y-axis: top and bottom */}
              <text x="470" y="40" textAnchor="middle" transform="rotate(-90 490 40)">{content.yAxis.max}</text>
              <text x="530" y="605" textAnchor="middle" transform="rotate(-90 490 605)">{content.yAxis.min}</text>
            </g>

            {/* Competitors */}
            {processed.map((comp) => {
              const cx = 1000 * comp.ux;
              const cy = 625 * comp.uy;
              const isVulk = comp.name === "Vulk";

              return (
                <g key={comp.name} transform={`translate(${cx}, ${cy})`}>
                  {isVulk && (
                    <circle
                      cx={0}
                      cy={0}
                      r={55}
                      fill="#FF5733"
                      opacity={0.15}
                      filter="url(#vulkGlow)"
                    />
                  )}

                  {comp.logoUrl ? (
                    <>
                      {/* Logo with circular background */}
                      <circle
                        cx={0}
                        cy={0}
                        r={32}
                        fill="#ffffff"
                        stroke={isVulk ? "#FF5733" : "#e5e7eb"}
                        strokeWidth={isVulk ? 3 : 2}
                      />
                      <image
                        href={comp.logoUrl}
                        x={-24}
                        y={-24}
                        width={48}
                        height={48}
                        clipPath="url(#logoClip)"
                      />
                      <defs>
                        <clipPath id="logoClip">
                          <circle cx={0} cy={0} r={28} />
                        </clipPath>
                      </defs>

                      {/* Label below logo */}
                      <text
                        x={0}
                        y={50}
                        textAnchor="middle"
                        fontSize={13}
                        fill={isVulk ? "#FF5733" : "#6b7280"}
                        fontWeight={isVulk ? 700 : 600}
                      >
                        {comp.name}
                      </text>
                    </>
                  ) : (
                    <>
                      {/* Fallback: Emoji for "Human Coaches" */}
                      <circle
                        cx={0}
                        cy={0}
                        r={32}
                        fill="#ffffff"
                        stroke="#e5e7eb"
                        strokeWidth={2}
                      />
                      <text
                        x={0}
                        y={12}
                        textAnchor="middle"
                        fontSize={38}
                      >
                        👨‍🏫
                      </text>

                      {/* Label below emoji */}
                      <text
                        x={0}
                        y={50}
                        textAnchor="middle"
                        fontSize={13}
                        fill="#6b7280"
                        fontWeight={600}
                      >
                        {comp.name}
                      </text>
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
