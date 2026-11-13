export type LearningTrack = {
  id: string;
  title: string;
  provider: string;
  type: 'free' | 'paid';
  platform?: string;
  duration: string;
  lectures?: string;
  sections?: string;
  url: string;
  primaryFocus?: string;
  focus: string[];
  description: string;
  journey: string[];
};

export const learningTracks: LearningTrack[] = [
  {
    id: 'striver-dsa',
    title: "Striver's A2Z DSA Sheet",
    provider: "Take U Forward",
    type: 'free',
    platform: 'TakeUForward',
    duration: "Ongoing — 474 problems",
    url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
    description: "Structured DSA roadmap in Python, covering arrays through advanced problem solving. My primary DSA learning resource.",
    focus: ['Arrays', 'Strings', 'Binary Search', 'Recursion', 'Sorting', 'Hashing', 'Two Pointers', 'Bit Manipulation', 'Linked Lists', 'Trees', 'Graphs', 'DP'],
    journey: ['Basics', 'Arrays', 'Sorting', 'Binary Search', 'Recursion', 'Hashing', 'Advanced']
  },
  {
    id: 'love-babbar',
    title: "Love Babbar DSA Resources",
    provider: "Love Babbar / CodeHelp",
    type: 'free',
    platform: 'YouTube',
    duration: "Ongoing",
    url: "https://www.youtube.com/@LoveBabbar",
    description: "DSA fundamentals and problem-solving patterns. Supplementary resource alongside Striver's sheet.",
    focus: ['DSA Fundamentals', 'Problem Patterns', 'Interview Prep', 'Arrays', 'Strings', 'Recursion'],
    journey: ['Basics', 'Problem Solving', 'Interview Patterns']
  },
  {
    id: 'nptel-se',
    title: "Software Engineering",
    provider: "NPTEL / SWAYAM",
    type: 'free',
    platform: 'SWAYAM',
    duration: "12 weeks",
    url: "https://swayam.gov.in/",
    description: "12-week NPTEL Software Engineering course covering SDLC, design patterns, testing, and software project management.",
    focus: ['SDLC', 'Software Design', 'Testing', 'Project Management', 'OOP', 'Software Architecture', 'Agile'],
    journey: ['Requirements', 'Design', 'Coding', 'Testing', 'Deployment', 'Maintenance']
  },
  {
    id: 'chai-and-code',
    title: "Chai aur Code — Web Development",
    provider: "Hitesh Choudhary",
    type: 'free',
    platform: 'YouTube',
    duration: "Ongoing",
    url: "https://www.youtube.com/@chaiaurcode",
    primaryFocus: 'FULL-STACK',
    description: "Hitesh Choudhary's Chai aur Code series covering full-stack web development — JavaScript, React, Node.js, backend APIs, and modern web practices in a practical, project-first style.",
    focus: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'TypeScript', 'Full-Stack Projects', 'Web Dev Concepts'],
    journey: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'APIs', 'Full-Stack']
  },
  {
    id: 'fullstack-self',
    title: "Full-Stack Web Development",
    provider: "Self-learning",
    type: 'free',
    platform: 'Multiple Resources',
    duration: "Ongoing",
    url: "https://github.com/shobhitgupta12",
    primaryFocus: 'FRONTEND + BACKEND',
    description: "Self-driven full-stack learning journey — React, FastAPI, Node.js, MongoDB, REST APIs, deployment. Applied directly in real projects.",
    focus: ['React.js', 'FastAPI', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'JWT Auth', 'Vercel', 'Tailwind CSS'],
    journey: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Databases', 'APIs', 'Deployment']
  }
];

export const learningEvolution = [
  { label: 'Python', source: 'fullstack-self' },
  { label: 'DSA', source: 'striver-dsa' },
  { label: 'LeetCode', source: 'striver-dsa' },
  { label: 'React', source: 'fullstack-self' },
  { label: 'FastAPI', source: 'fullstack-self' },
  { label: 'Node.js', source: 'fullstack-self' },
  { label: 'Software Eng', source: 'nptel-se' },
  { label: 'Web Dev', source: 'chai-and-code' },
  { label: 'Full-Stack', source: 'fullstack-self' },
];
