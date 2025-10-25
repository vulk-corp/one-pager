export interface VulkContent {
  hero: HeroContent;
  problem: ProblemContent;
  solution: SolutionContent;
  market: MarketContent;
  gtm: GTMContent;
  competition: CompetitionContent;
  team: TeamContent;
  roadmap: RoadmapContent;
  fundraising: FundraisingContent;
}

export interface HeroContent {
  title: string;
  websiteUrl: string;
  tagline: {
    text: string;
    isHighlight: boolean;
  }[];
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

export interface GTMContent {
  title: string;
  subtitle: string;
  targetCustomer: string;
  channels: {
    name: string;
    icon: string;
    key: string;
  }[];
  viralLoop: {
    title: string;
    steps: {
      number: string;
      label: string;
    }[];
  };
}

export interface CompetitionContent {
  title: string;
  subtitle: string;
  xAxis: {
    label: string;
    min: string;
    max: string;
  };
  yAxis: {
    label: string;
    min: string;
    max: string;
  };
  competitors: {
    name: string;
    x: number; // 0-100 scale
    y: number; // 0-100 scale
    logoUrl?: string; // Optional logo URL
  }[];
}

export interface TeamContent {
  title: string;
  subtitle: string;
  members: {
    name: string;
    role: string;
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
    tagline: [
      { text: "The AI Career agent to ", isHighlight: false },
      { text: "thrive", isHighlight: true },
      { text: " through the AI shift", isHighlight: false },
    ],
    logoPath: "/vulk_avatar.svg",
  },

  problem: {
    title: "The Job Market Is Fundamentally Changing",
    description:
      "Professionals face layoffs, AI disruption, and existential career doubt. The old playbook is dead. Surviving requires continuous transformation.",
    descriptionHighlights: [
      { text: "Professionals face layoffs, AI disruption, and existential career doubt. The old playbook is dead. ", isHighlight: false },
      { text: "Surviving requires continuous transformation", isHighlight: true },
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
        imagePath: "/reddit.png",
        imageType: "composition",
      },
    ],
    chartImage: "/S&P500_VS_JOB_OPENINGS.png",
    chartCaption:
      "Markets (SPX) are soaring, but job openings (JTSJOL) are collapsing. People are caught in between.",
  },

  solution: {
    title: "Your Always-On AI Career Agent",
    description: "Vulk is an",
    descriptionHighlight: "always-on AI career agent",
    features: [
      {
        icon: "sparkles",
        title: "Hyper personalized",
        description:
          "Understand your situation and discuss your career goals, then analyzes your current profile and the market to create a weekly action plan tailored to you",
      },
      {
        icon: "zap",
        title: "Takes Real Actions",
        description:
          "Updates your brand profile, builds custom upskilling roadmaps, sends connection requests and DMs, directly integrated with your tools",
      },
      {
        icon: "trending-up",
        title: "Learns From Every Signal",
        description:
          "Monitors opens, replies, and engagement across LinkedIn and email to optimize what's working for your career growth",
      },
      {
        icon: "bell",
        title: "Always Watching",
        description:
          "Continuously scans opportunities, relationship signals, and market shifts to keep you one step ahead",
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
    title: "$100-200B Career Management Market",
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

  gtm: {
    title: "Community-Led Growth Strategy",
    subtitle: "Targeting entry to mid-senior tech professionals ($75K-$150K) in US metro areas",
    targetCustomer: "Entry to mid-senior tech professionals seeking career visibility and growth",
    channels: [
      {
        name: "Reddit",
        icon: "message-circle",
        key: "r/cscareerquestions (1.9M members)",
      },
      {
        name: "Micro-Influencers",
        icon: "users",
        key: "Career coaches & LinkedIn creators",
      },
      {
        name: "Product Hunt",
        icon: "rocket",
        key: "Launch for early adopters",
      },
      {
        name: "Microsites",
        icon: "globe",
        key: "\"Are You Underpaid?\" salary tool",
      },
      {
        name: "Cold Outreach",
        icon: "mail",
        key: "Personalized to target profiles",
      },
      {
        name: "LinkedIn Organic",
        icon: "linkedin",
        key: "Founder-led content",
      },
    ],
    viralLoop: {
      title: "Viral Loop",
      steps: [
        { number: "1", label: "Drop LinkedIn profile" },
        { number: "2", label: "Get immediate value" },
        { number: "3", label: "Sign-up to see all opportunities" },
        { number: "4", label: "Refer to get agent credits" },
      ],
    },
  },

  competition: {
    title: "Uniquely Positioned: Proactive + Personalized",
    subtitle: "Vulk AI agent combines deep personalization with proactive execution.",
    xAxis: {
      label: "Level of Proactivity",
      min: "Reactive",
      max: "Proactive",
    },
    yAxis: {
      label: "Depth of Personalization",
      min: "Generic Advice",
      max: "Individualized",
    },
    competitors: [
      { name: "LinkedIn", x: 30, y: 20, logoUrl: "https://logo.clearbit.com/linkedin.com" },
      { name: "Glassdoor", x: 20, y: 15, logoUrl: "https://logo.clearbit.com/glassdoor.com" },
      { name: "Coursera", x: 25, y: 30, logoUrl: "https://logo.clearbit.com/coursera.org" },
      { name: "TealHQ", x: 50, y: 70, logoUrl: "https://logo.clearbit.com/tealhq.com" },
      { name: "Careerflow.ai", x: 55, y: 55, logoUrl: "https://logo.clearbit.com/careerflow.ai" },
      { name: "BetterUp", x: 35, y: 70, logoUrl: "https://logo.clearbit.com/betterup.com" },
      { name: "Human Coaches", x: 30, y: 90 },
      { name: "Taplio", x: 65, y: 40, logoUrl: "https://logo.clearbit.com/taplio.com" },
      { name: "Buffer", x: 70, y: 35, logoUrl: "https://logo.clearbit.com/buffer.com" },
      { name: "Vulk", x: 85, y: 85, logoUrl: "/vulk_avatar.svg" },
    ],
  },

  team: {
    title: "Battle-Tested Founders with 10+ Years in Career Tech",
    subtitle: "Both working full-time on Vulk and releasing iterations every day.",
    members: [
      {
        name: "Emmanuel Marboeuf",
        role: "Co-Founder & CEO",
        imagePath: "/pic_manu.png",
        linkedinUrl: "https://www.linkedin.com/in/emmanuelmarboeuf/",
        bio: "Co-founded Visage.jobs (up to 8M ARR), 10 years building AI recruiting products.",
      },
      {
        name: "Dorian Ouvrard",
        role: "Co-Founder & CTO",
        imagePath: "/pic_dorian.png",
        linkedinUrl: "https://www.linkedin.com/in/dorian-ouvrard/",
        bio: "GenAI lead developer and key speaker at GenAI events, ex-enterprise LLM evangelist.",
      },
    ],
  },

  roadmap: {
    title: "Path to Product-Market Fit",
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
    title: "Join Our $400K Pre-Seed Round",
    raising: "$400k",
    valuationCap: "$8M",
    useOfFunds:
      "Build AI-powered career OS with proactive career agent, onboard first 1000s users, find PMF and a cost efficient acquisition channel.",
    ctaText: "Learn More at vulk.ai",
    ctaUrl: "https://www.vulk.ai",
    contactEmail: "emmanuel@vulk.ai",
  },
};
