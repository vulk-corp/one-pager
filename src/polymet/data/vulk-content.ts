export interface VulkContent {
  hero: HeroContent;
  problem: ProblemContent;
  solution: SolutionContent;
  market: MarketContent;
  team: TeamContent;
  roadmap: RoadmapContent;
  fundraising: FundraisingContent;
}

export interface HeroContent {
  title: string;
  websiteUrl: string;
  tagline: string;
  highlights: string[];
  logoPath: string;
}

export interface ProblemContent {
  title: string;
  description: string;
  descriptionHighlights: {
    text: string;
    isHighlight: boolean;
  }[];
  stats: {
    value: string;
    label: string;
    imagePath?: string;
    imageType?: "single" | "composition";
  }[];
  chartImage: string;
  chartCaption: string;
}

export interface SolutionContent {
  title: string;
  description: string;
  descriptionHighlight: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  images: {
    path: string;
    alt: string;
    caption?: string;
  }[];
}

export interface MarketContent {
  title: string;
  marketSize: {
    tam: { value: string; description: string };
    sam: { value: string; description: string };
    som: { value: string; description: string };
  };
  whyNow: {
    title: string;
    points: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

export interface TeamContent {
  title: string;
  subtitle: string;
  members: {
    name: string;
    imagePath: string;
    linkedinUrl: string;
    bio: string;
  }[];
}

export interface RoadmapContent {
  title: string;
  phases: {
    title: string;
    status: "completed" | "in-progress" | "planned";
    statusLabel: string;
    description: string;
  }[];
}

export interface FundraisingContent {
  title: string;
  raising: string;
  valuationCap: string;
  useOfFunds: string;
  ctaText: string;
  ctaUrl: string;
  contactEmail: string;
}

export const vulkContent: VulkContent = {
  hero: {
    title: "vulk.ai",
    websiteUrl: "https://www.vulk.ai",
    tagline: "Your always-on AI career agent that keeps you",
    highlights: ["relevant", "visible", "in demand"],
    logoPath: "/vulk_avatar.svg",
  },

  problem: {
    title: "The Problem",
    description:
      "AI + layoffs are making the white-collar job market more competitive than ever. Professionals don't know how to",
    descriptionHighlights: [
      { text: "AI + layoffs are making the white-collar job market more competitive than ever. Professionals don't know how to ", isHighlight: false },
      { text: "stay relevant", isHighlight: true },
      { text: " or ", isHighlight: false },
      { text: "grow their value", isHighlight: true },
      { text: ".", isHighlight: false },
    ],
    stats: [
      {
        value: "208k",
        label: "Projected layoffs YTD 2025 in tech alone",
        imagePath: "/layoff_in_tech.png",
        imageType: "single",
      },
      {
        value: "-20%",
        label: "Entry-level roles in AI-exposed fields",
      },
      {
        value: "100s",
        label: "Monthly Reddit posts from desperate professionals",
        imageType: "composition",
      },
    ],
    chartImage: "/S&P500_VS_JOB_OPENINGS.png",
    chartCaption:
      "Markets (SPX) are soaring, but job openings (JTSJOL) are collapsing. People are caught in between.",
  },

  solution: {
    title: "The Solution",
    description: "Vulk is an",
    descriptionHighlight: "always-on AI career agent",
    features: [
      {
        icon: "sparkles",
        title: "Hyper personalized",
        description:
          "Every week, analyzes your situation, goals, recent activity, market conditions, and availability",
      },
      {
        icon: "trending-up",
        title: "Agent-Executed Actions",
        description:
          "Generates 3-5 prioritized actions. 90% completed by Vulk, 10% by you. Templates, drafts, and execution delivered in command center",
      },
      {
        icon: "bell",
        title: "Adaptive Strategy",
        description:
          "Learns from results, doubles down on what works, pivots when strategies aren't converting",
      },
      {
        icon: "trending-up",
        title: "Expanding Career OS",
        description:
          "Continuously building tools that empower Vulk to do more. Delivering a true career concierge experience over time",
      },
    ],
    images: [
      {
        path: "/onboarding_1.png",
        alt: "Vulk onboarding experience",
      },
      {
        path: "/command_center.png",
        alt: "Vulk command center interface",
        caption: "Agent command center (coming soon)",
      },
    ],
  },

  market: {
    title: "Market Opportunity",
    marketSize: {
      tam: {
        value: "$100-200B",
        description: "1.1B white-collar professionals globally",
      },
      sam: {
        value: "$3-6B",
        description: "30M U.S. entry & mid-career professionals",
      },
      som: {
        value: "$30-60M ARR",
        description: "150-300k early adopters in 3-5 years",
      },
    },
    whyNow: {
      title: "Why Now",
      points: [
        {
          icon: "trending-up",
          title: "Market Pressure",
          description:
            "Persistent layoffs and AI disruption creating urgent need",
        },
        {
          icon: "zap",
          title: "AI Agents > Apps",
          description:
            "LLMs enable execution, not just advice—real action for professionals",
        },
        {
          icon: "target",
          title: "LinkedIn Gap",
          description:
            "LinkedIn optimizes for recruiters & ads, not professionals' outcomes",
        },
      ],
    },
  },

  team: {
    title: "The Team",
    subtitle: "Both working full-time on Vulk and releasing iterations every day.",
    members: [
      {
        name: "Emmanuel",
        imagePath: "/pic_manu.png",
        linkedinUrl: "https://www.linkedin.com/in/emmanuelmarboeuf/",
        bio: "Co-founded Visage.jobs (up to 8M ARR), 10 years building AI recruiting products.",
      },
      {
        name: "Dorian",
        imagePath: "/pic_dorian.png",
        linkedinUrl: "https://www.linkedin.com/in/dorian-ouvrard/",
        bio: "GenAI lead developer and key speaker at GenAI events, ex-enterprise LLM evangelist.",
      },
    ],
  },

  roadmap: {
    title: "Roadmap",
    phases: [
      {
        title: "Phase 1 - Foundation",
        status: "completed",
        statusLabel: "LIVE",
        description:
          "Branded profile builder + salary benchmarking + first users",
      },
      {
        title: "Phase 2 - Proof of Value",
        status: "in-progress",
        statusLabel: "IN PROGRESS",
        description:
          "Vulk command center + weekly plan + initial proactive actions catalog + reaching 1,000 users",
      },
      {
        title: "Phase 3 - Expansion",
        status: "planned",
        statusLabel: "PLANNED",
        description:
          "Full proactive AI agent with compounding actions across visibility, skills, income streams, and network building. Professionals continuously increase their resilience and market value.",
      },
    ],
  },

  fundraising: {
    title: "Accelerating",
    raising: "$400k",
    valuationCap: "$8M",
    useOfFunds:
      "Build AI-powered career OS with proactive career agent, onboard first 1000s users, find PMF and a cost efficient acquisition channel.",
    ctaText: "Learn More at vulk.ai",
    ctaUrl: "https://www.vulk.ai",
    contactEmail: "emmanuel@vulk.ai",
  },
};
