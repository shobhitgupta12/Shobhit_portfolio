export type Project = {
  id: string;
  title: string;
  subtitle: string;
  type: 'featured' | 'experiment' | 'archive' | 'learning';
  maturity: 'PRODUCTION-STYLE' | 'RESEARCH' | 'SHIPPED' | 'IN PROGRESS' | 'PLAYGROUND' | 'LEARNING' | 'EXPERIMENT';
  technologies: string[];
  capabilities?: string[];
  repository: string;
  githubUrl: string;
  description: string;
  architecture?: string[];
  liveUrl?: string;
  caseStudyRoute?: string;
  externalDocUrl?: string;
  doi?: string;
};

export const projects: Project[] = [
  {
    id: "trustedhands",
    title: "TrustedHands",
    subtitle: "Hyperlocal Gig-Worker Marketplace with AI",
    type: "featured",
    maturity: "SHIPPED",
    technologies: ["React.js", "FastAPI", "Python", "Gemini API", "Vercel"],
    capabilities: [
      "AI-powered assistant",
      "image analysis",
      "location-based service discovery",
      "secure authentication",
      "service-provider profiles",
      "ratings & reviews",
      "booking functionality"
    ],
    repository: "shobhitgupta12 / Trusted-Hands-main",
    githubUrl: "https://github.com/shobhitgupta12/Trusted-Hands-main",
    liveUrl: "https://trusted-hand.vercel.app/",
    description: "A hyperlocal gig-worker marketplace connecting customers with local service providers. Built with an AI assistant, image analysis, and location-based discovery.",
    architecture: ["React Frontend", "FastAPI Backend", "Gemini API Integration", "Auth & User Mgmt", "Service Discovery", "Booking System"]
  },
  {
    id: "career-compass",
    title: "CareerCompass",
    subtitle: "Career Guidance EdTech Platform",
    type: "featured",
    maturity: "SHIPPED",
    technologies: ["React.js", "JavaScript", "Node.js", "REST APIs", "Vercel"],
    repository: "shobhitgupta12 / CareercompassFinal",
    githubUrl: "https://github.com/shobhitgupta12/CareercompassFinal",
    liveUrl: "https://matricks.vercel.app/",
    description: "A career-guidance platform helping students explore career opportunities and make informed decisions. Built in the context of Smart India Hackathon exploration.",
    architecture: ["React Frontend", "Career Data APIs", "Student Dashboard", "Guidance Engine"]
  },
  {
    id: "arabian-nights",
    title: "Arabian Nights Quiz Challenge",
    subtitle: "PECathon — Interactive Quiz Web App",
    type: "experiment",
    maturity: "EXPERIMENT",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    repository: "shobhitgupta12 / ArabianNightsQuizChallenge",
    githubUrl: "https://github.com/shobhitgupta12/ArabianNightsQuizChallenge",
    liveUrl: "https://pecathonfinal1one1.vercel.app/",
    description: "An Arabian Nights-themed quiz challenge web app built for PECathon. A creative frontend experiment with an immersive quiz experience and themed design."
  }
];

export const archiveProjects: Project[] = [
  {
    id: "soaraway-admin",
    title: "Soaraway Admin Panel",
    subtitle: "Professional Internship — Ervon Technology",
    type: "archive",
    maturity: "SHIPPED",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    repository: "Private Repository",
    githubUrl: "https://github.com/shobhitgupta12",
    description: "Full-stack Admin Panel built during 6-month internship at Ervon Technology. Delivered Login & Auth UI (JWT), forgot/reset password, role-based access, RESTful API design, database schema, and backend specification documentation."
  }
];
