import React from "react";
import { LinkedinIcon } from "lucide-react";
import { TeamContent } from "@/polymet/data/vulk-content";

interface VulkTeamSectionProps {
  content: TeamContent;
}

export function VulkTeamSection({ content }: VulkTeamSectionProps) {
  return (
    <section className="bg-[#F5F1E8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">{content.title}</h2>

        <p className="text-lg text-[#4a4a4a] mb-10">{content.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {content.members.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-[#E5E1D8] rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.imagePath}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">
                      {member.name}
                    </h3>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF5733] hover:text-[#E54623] transition-colors"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
