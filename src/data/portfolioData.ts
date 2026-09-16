// ==========================================
// CONFIGURATION: SOCIAL PROFILES
// Replace these placeholders with your actual public URLs
// ==========================================
export const GITHUB_URL = "https://github.com/workwithved12";
export const LINKEDIN_URL = "https://www.linkedin.com/in/vedant-lokhande-ab190a351/";
export const EMAIL_ADDRESS = "workwithved12@gmail.com";
export const PHONE_NUMBER = "+91 8482922271";

export interface LeadershipCommunityRole {
  id: string;
  entity: string;
  role: string;
  type: 'Leadership' | 'Community' | 'Hackathon';
  year?: string;
  summary: string;
  highlights: string[];
  cursorLabel: string;
  accentColor: string;
  eventContext?: {
    isEventFact: true;
    title: string;
    metrics: string[];
    recordNote?: string;
  };
}

export interface AchievementItem {
  id: string;
  title: string;
  roleOrCategory: string;
  hierarchyType: 'ACHIEVEMENTS' | 'LEADERSHIP' | 'COMMUNITY';
  description: string;
  year?: string;
  cursorLabel: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  period: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Vedant Kisan Lokhande",
    displayName: "VEDANT LOKHANDE",
    primaryIdentity: "DATA SCIENCE • AI • GENAI • BUILDER",
    supportingLine: "Building with data, AI and ambitious teams.",
    alternativeLine: "Exploring data, artificial intelligence and building technology through hackathons and communities.",
    email: EMAIL_ADDRESS,
    phone: PHONE_NUMBER,
    githubUrl: GITHUB_URL,
    linkedinUrl: LINKEDIN_URL,
    location: "India",
    timezone: "IST (UTC+5:30)",
  },

  // Near Hero Metadata / Statistics
  heroStats: [
    { value: "01", label: "TECH LEAD ROLE", detail: "SUNHACKS 2025", cursor: "TECH LEAD" },
    { value: "02+", label: "TECH COMMUNITIES", detail: "Team Nest & Dark Arcane", cursor: "COMMUNITY" },
    { value: "AI / GENAI", label: "CORE FOCUS", detail: "Data & Model Pipelines", cursor: "GENAI" },
  ],

  // Role Badges near hero
  heroRolePills: [
    { role: "CORE TEAM · TECH LEAD", target: "SUNHACKS 2025", cursor: "TECH LEAD" },
    { role: "CORE MEMBER", target: "TEAM NEST", cursor: "CORE MEMBER" },
    { role: "MEMBER", target: "TEAM DARK ARCANE", cursor: "MEMBER" },
  ],

  // "WHERE I BUILD" / "THE ECOSYSTEM" - Dedicated Interactive Timeline Roles
  ecosystemTimeline: [
    {
      id: "sunhacks-2025",
      entity: "SUNHACKS 2025",
      role: "Core Team Member — Tech Lead",
      type: "Leadership",
      year: "2025",
      summary: "Core team member and Tech Lead contributing to the technology, operations, and execution of SUNHACKS 2025, a large-scale Generative AI hackathon hosted by Sandip University.",
      highlights: [
        "Core Team & Technical Leadership",
        "Generative AI Hackathon Architecture",
        "Hackathon Operations & Platform Infrastructure",
        "Collaborative Tech Coordination Across Squads"
      ],
      cursorLabel: "TECH LEAD",
      accentColor: "from-amber-400 to-amber-600",
      eventContext: {
        isEventFact: true,
        title: "Official Event Context (Sandip University)",
        metrics: [
          "Asia's Largest Generative AI Hackathon Initiative",
          "3,000+ Total Registrations",
          "1,800 Shortlisted Applicants",
          "1,746 Attendees"
        ],
        recordNote: "Entered the Asia Book of Records for maximum participants in a Generative AI tech hackathon."
      }
    },
    {
      id: "team-nest",
      entity: "TEAM NEST",
      role: "Core Member",
      type: "Community",
      year: "2024 — Present",
      summary: "Core member of Team Nest, contributing to technology, collaboration, community building and project execution.",
      highlights: [
        "Core Team Membership",
        "Technology & Rapid Engineering",
        "Team Building & Peer Mentorship",
        "Community & Practical Innovation"
      ],
      cursorLabel: "CORE MEMBER",
      accentColor: "from-blue-500 to-indigo-600"
    },
    {
      id: "team-dark-arcane",
      entity: "TEAM DARK ARCANE",
      role: "Team Member / Community Member",
      type: "Community",
      year: "2023 — Present",
      summary: "Member of Team Dark Arcane, contributing to the technology and hackathon ecosystem.",
      highlights: [
        "Team Dark Arcane Member",
        "Technology Community Collaboration",
        "Hackathon Ecosystem Building",
        "Collaborative Sprint Problem Solving"
      ],
      cursorLabel: "MEMBER",
    }
  ] as LeadershipCommunityRole[],

  // Distinct Hierarchical Categorization
  hierarchy: {
    achievements: [
    ] as AchievementItem[],

    leadership: [
      {
        id: "lead-1",
        title: "SUNHACKS 2025",
        roleOrCategory: "Core Team / Tech Lead",
        hierarchyType: "LEADERSHIP",
        description: "Led technical operations, infrastructure, and execution for the large-scale Generative AI hackathon hosted by Sandip University.",
        year: "2025",
        cursorLabel: "TECH LEAD",
        badge: "Leadership"
      }
    ] as AchievementItem[],

    community: [
      {
        id: "comm-1",
        title: "Team Nest",
        roleOrCategory: "Core Member",
        hierarchyType: "COMMUNITY",
        description: "Core member contributing to technology, collaboration, community building and execution.",
        cursorLabel: "CORE MEMBER",
        badge: "Core Member"
      },
      {
        id: "comm-2",
        title: "Team Dark Arcane",
        roleOrCategory: "Team Member / Community Member",
        hierarchyType: "COMMUNITY",
        description: "Member of Team Dark Arcane, contributing to the technology and hackathon ecosystem.",
        cursorLabel: "MEMBER",
        badge: "Member"
      }
    ] as AchievementItem[]
  },

  // Academic Degrees
  education: [
    {
      degree: "Master of Science (MSc) in Data Science",
      institution: "Currently Pursuing",
      status: "In Progress",
      period: "Current",
      description: "Deepening theoretical and practical foundations in statistical modeling, machine learning, data engineering, and modern AI algorithms.",
      highlights: [
        "Advanced data analysis and machine learning methodologies",
        "Applied GenAI and data-driven problem solving",
        "Continuous practical exploration through academic & competition projects"
      ]
    },
    {
      degree: "Bachelor's Degree",
      institution: "Sandip University",
      status: "Completed",
      period: "Alum",
      description: "Completed undergraduate degree program from Sandip University, developing core analytical reasoning and foundational computing knowledge.",
      highlights: [
        "Core computational & mathematical fundamentals",
        "Active student participation in university tech initiatives and hackathons",
        "Foundation for specialized postgraduate studies in Data Science"
      ]
    }
  ] as EducationItem[],

  // Honest Technical Competencies
  skills: {
    "Data Science & Analytics": [
      { name: "Python", level: "Primary Language" },
      { name: "Data Analysis & Pandas", level: "Applied" },
      { name: "Statistical Modeling", level: "Academic Focus" },
      { name: "Machine Learning Concepts", level: "In Practice" },
      { name: "Data Visualization", level: "Applied" }
    ],
    "AI & Generative AI": [
      { name: "Generative AI Architectures", level: "Hackathon Focus" },
      { name: "Prompt Engineering & Evaluation", level: "Practical" },
      { name: "LLM API Integrations", level: "Applied" },
      { name: "Rapid Prototyping & MVPs", level: "Specialty" }
    ],
    "Development & Hackathon Toolkit": [
      { name: "Modern Web Frontends", level: "Applied" },
      { name: "Git & Version Control", level: "Daily Workflow" },
      { name: "API Consumption & REST", level: "Practical" },
      { name: "Agile Sprint Collaboration", level: "10+ Hackathons" }
    ]
  }
};
