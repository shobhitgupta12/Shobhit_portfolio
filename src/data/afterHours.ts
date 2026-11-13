export type InterestItem = {
  title: string;
  desc: string;
  theme?: string;
  status?: string;
  meta?: string;
};

export type InterestCategory = {
  id: string;
  label: string;
  color: string;
  subtitle?: string;
  items: InterestItem[];
};

export const afterHoursData: InterestCategory[] = [
  {
    id: 'movies',
    label: 'MOVIES & SERIES',
    color: '#f87171',
    subtitle: 'Realistic. Intelligent. Intense.',
    items: [
      { title: 'Scam 1992', desc: 'Harshad Mehta. The original. How ambition meets the system — and breaks it.', theme: 'FINANCE / AMBITION / CRIME', status: 'WATCHED' },
      { title: 'Scam 2003', desc: 'Abdul Karim Telgi. Stamped paper fraud at scale. Sequel to the obsession.', theme: 'CRIME / SCALE / SYSTEM', status: 'WATCHED' },
      { title: 'The Wolf of Wall Street', desc: 'Jordan Belfort. Excess, manipulation, and the dark side of finance.', theme: 'FINANCE / GREED / PSYCHOLOGY', status: 'WATCHED' },
      { title: 'Money Heist', desc: 'Tactical genius, human psychology, and a plan executed under pressure.', theme: 'STRATEGY / HEIST / PSYCHOLOGY', status: 'WATCHED' },
      { title: 'Interstellar', desc: 'Gravity, time, love, and the universe. The kind of film that makes you think for days.', theme: 'SCI-FI / PHYSICS / EMOTION', status: 'WATCHED' },
      { title: 'The Shawshank Redemption', desc: 'Patience, hope, and the long game. One of the greatest stories ever told.', theme: 'HOPE / PERSEVERANCE / FREEDOM', status: 'WATCHED' },
      { title: 'Kho Gaye Hum Kahan', desc: 'Social media, identity, and what we lose chasing the highlight reel.', theme: 'IDENTITY / REALITY / CONNECTIONS', status: 'WATCHED' },
      { title: 'Marvel Cinematic Universe', desc: 'Interconnected storytelling, character arcs, and a universe built over decades.', theme: 'SUPERHEROES / UNIVERSE / STORIES' },
      { title: 'DC Universe', desc: 'Batman, Joker, Superman. Darker, grittier superhero storytelling.', theme: 'DARK / PSYCHOLOGY / IDENTITY' },
    ]
  },
  {
    id: 'games',
    label: 'STRATEGY GAMES',
    color: '#4ade80',
    subtitle: 'Outthink. Outlast. Outplay.',
    items: [
      { title: 'Clash Royale', desc: 'Real-time card strategy. Every deck is a system — optimize it or lose.', theme: 'STRATEGY / DECK BUILDING / REAL-TIME', status: 'PLAYED' },
      { title: 'Clash of Clans', desc: 'Base design, resource management, and clan wars. Long-term strategy over instant gratification.', theme: 'STRATEGY / RESOURCE MGMT / CLAN', status: 'PLAYED' },
      { title: 'Mini Militia', desc: 'Fast, chaotic, and fun. The game that united every hostel common room.', theme: 'ACTION / MULTIPLAYER / NOSTALGIA', status: 'PLAYED' },
    ]
  },
  {
    id: 'trading',
    label: 'TRADING & MARKETS',
    color: '#fbbf24',
    subtitle: 'Systems with real consequences.',
    items: [
      { title: 'Cryptocurrency Markets', desc: 'BTC, SOL, AVAX, PENDLE, DCR and emerging protocols. Spot and futures.', theme: 'VOLATILITY / STRATEGY / RISK', status: 'ACTIVE' },
      { title: 'Gold & MCX', desc: 'Gold trading, MCX markets, commodity price behaviour and macro factors.', theme: 'COMMODITY / MACRO / HEDGE' },
      { title: 'Swing Trading & Scalping', desc: 'Multi-day position management and short-term entries. Finding edges in price structure.', theme: 'PATIENCE / ANALYSIS / DISCIPLINE' },
      { title: 'Futures & Leverage', desc: 'Explored leveraged trading. Losses taught more than wins ever could.', theme: 'RISK / LIQUIDATION / LEARNING' },
      { title: 'Funding Rate Strategies', desc: 'Capturing funding differentials across perpetual markets. Delta-neutral thinking.', theme: 'QUANT / CARRY / STRATEGY' },
      { title: 'Risk & Portfolio Management', desc: 'Capital preservation, position sizing, stop-loss discipline. The unsexy part that matters most.', theme: 'PRESERVATION / SIZING / DISCIPLINE' },
      { title: 'Market Microstructure', desc: 'How orders flow, how price discovery actually works, why markets move the way they do.', theme: 'DEPTH / MECHANICS / UNDERSTANDING' },
    ]
  },
  {
    id: 'chess',
    label: 'CHESS',
    color: '#e2e8f0',
    subtitle: 'Strategy, tactics, and thinking ahead.',
    items: [
      { title: 'Chess', desc: 'Strategy, pattern recognition, and long-term thinking under pressure. Competitive and logical by nature.', theme: 'STRATEGY / TACTICS / PLANNING' },
    ]
  },
  {
    id: 'creative',
    label: 'CREATIVE WORK',
    color: '#f472b6',
    subtitle: 'From idea to visual output.',
    items: [
      { title: 'Video Editing & Reels', desc: 'Short-form video content, transitions, pacing and storytelling through clips.', theme: 'EDITING / STORYTELLING / PACING' },
      { title: 'Graphic Design & Posters', desc: 'Promotional posters for college events, fests and ASCE chapter activities.', theme: 'DESIGN / VISUAL / IDENTITY' },
      { title: 'AI Video Generation', desc: 'Exploring AI-powered tools for video creation and character animation.', theme: 'AI / GENERATION / CREATIVE' },
      { title: 'Social Media Content', desc: 'College fest publicity campaigns, creative content and audience engagement strategies.', theme: 'CONTENT / AUDIENCE / CAMPAIGNS' },
      { title: 'Storytelling & Scripts', desc: 'Structuring ideas into narratives — video scripts, campaign messages, creative briefs.', theme: 'NARRATIVE / STRUCTURE / COMMUNICATION' },
    ]
  },
  {
    id: 'entrepreneurship',
    label: 'ENTREPRENEURSHIP',
    color: '#60a5fa',
    subtitle: 'Technology meeting real-world problems.',
    items: [
      { title: 'Hyperlocal Marketplaces', desc: 'TrustedHands: connecting local service providers with customers through technology.', theme: 'MARKETPLACE / COMMUNITY / TECH' },
      { title: 'EdTech & Career Platforms', desc: 'Career Compass: helping students navigate career decisions with better information.', theme: 'EDUCATION / GUIDANCE / IMPACT' },
      { title: 'AI-Powered Products', desc: 'Using Gemini API and generative AI to build practical, real-world applications.', theme: 'AI / PRODUCT / UTILITY' },
      { title: 'FinTech Ideas', desc: 'Trading dashboards, portfolio trackers, backtesting engines, financial calculators.', theme: 'FINTECH / AUTOMATION / DATA' },
      { title: 'EV & Clean Infrastructure', desc: 'EV adoption research, total-cost calculators, charging accessibility tools.', theme: 'SUSTAINABILITY / TECH / FUTURE' },
    ]
  },
  {
    id: 'psychology',
    label: 'PSYCHOLOGY & BEHAVIOUR',
    color: '#a78bfa',
    subtitle: 'Why people do what they do.',
    items: [
      { title: 'Human Psychology', desc: 'Emotional intelligence, decision-making under uncertainty, and how bias shapes judgment.', theme: 'MIND / BEHAVIOUR / DECISIONS' },
      { title: 'Manipulation & Persuasion', desc: 'How influence works — in markets, negotiations, and human relationships.', theme: 'INFLUENCE / POWER / AWARENESS' },
      { title: 'Ambition & Discipline', desc: 'What drives people to build empires — and what makes them collapse.', theme: 'AMBITION / DRIVE / COLLAPSE' },
      { title: 'Success & Failure Patterns', desc: 'Understanding why people succeed or fail — systems, habits, and decision quality.', theme: 'PATTERNS / GROWTH / SYSTEMS' },
    ]
  },
  {
    id: 'civil',
    label: 'CIVIL ENGINEERING',
    color: '#fb923c',
    subtitle: 'Where it all started.',
    items: [
      { title: 'ASCE PEC Student Chapter', desc: 'Senior Creative Committee Member — reels, posters, social media, concrete canoe.', theme: 'LEADERSHIP / CREATIVITY / ENGINEERING' },
      { title: 'Structural Engineering', desc: 'RCC and steel design, foundation engineering — the backbone of physical systems.', theme: 'DESIGN / ANALYSIS / SAFETY' },
      { title: 'Concrete Canoe', desc: 'Engineering meets creativity. Building a floating vessel out of concrete — ASCE competition.', theme: 'INNOVATION / TEAMWORK / ENGINEERING' },
      { title: 'Sustainable Infrastructure', desc: 'Environmental engineering, hydrology, EVs and the future of built environments.', theme: 'SUSTAINABILITY / ENVIRONMENT / FUTURE' },
    ]
  },
  {
    id: 'rabbitholes',
    label: 'RABBIT HOLES',
    color: '#34d399',
    subtitle: 'Things I randomly get obsessed with.',
    items: [
      { title: 'Quantum Computing', desc: 'Shor\'s algorithm, Bell states, qubits — the future threat to classical cryptography.', theme: 'QUANTUM / SECURITY / FUTURE' },
      { title: 'Financial Market Microstructure', desc: 'How orders actually flow. Bid-ask spreads, liquidity, and price discovery mechanics.', theme: 'MARKETS / DEPTH / MECHANICS' },
      { title: 'System Design', desc: 'How scalable systems are architected. Load balancers, caches, message queues.', theme: 'ARCHITECTURE / SCALABILITY / SYSTEMS' },
      { title: 'UI Interactions', desc: 'Micro-animations and transitions that make software feel alive and intentional.', theme: 'UX / ANIMATION / DELIGHT' },
      { title: 'Crypto Protocol Mechanics', desc: 'Deep dives into PENDLE, SUI, ARWEAVE, ZEC — tokenomics and protocol design.', theme: 'CRYPTO / PROTOCOL / DESIGN' },
      { title: 'Algorithmic Trading Systems', desc: 'Backtesting engines, strategy automation, execution systems and market data pipelines.', theme: 'QUANT / AUTOMATION / DATA' },
    ]
  }
];
