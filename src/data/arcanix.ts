/**
 * ARCANIX 2K26 — central content data layer.
 * Every screen reads from here. Replace placeholder values (marked TBA / ₹—)
 * with real symposium data when it is confirmed. No fabricated facts here.
 */

export const brand = {
  name: "ARCANIX 2K26",
  tagline: "The Arcane Ascension",
  college: "K.S.R. College of Engineering",
  department: "Department of Internet of Things",
  location: "Tiruchengode, Tamil Nadu",
  dateLabel: "TBA",
  logoUrl: "/images/ksrce-logo.svg",
};

export type Domain = "IoT" | "AI" | "Robotics" | "Software" | "Cyber" | "Design";

export type ArcanixEvent = {
  id: string;
  quest: string;
  name: string;
  short: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  domain: Domain;
  path: "arcane" | "forge";
  mode: "Individual" | "Team";
  teamSize: string;
  duration: string;
  prize: string;
  rounds: string[];
  rules: string[];
  eligibility: string;
  timing: string;
  venue: string;
  coordinators: { name: string; phone: string }[];
  registrationUrl: string;
};

export const events: ArcanixEvent[] = [
  {
    id: "sensor-sigil",
    quest: "QUEST 01",
    name: "Sensor Sigil",
    short: "Bind raw sensor data into a working smart-device prototype.",
    description:
      "Aspirants receive a sealed kit of sensors and a controller board. Within the allotted time the team must inscribe a working sigil — a functioning IoT prototype that senses, decides and acts.",
    difficulty: 3,
    domain: "IoT",
    path: "forge",
    mode: "Team",
    teamSize: "2 – 3 members",
    duration: "90 minutes",
    prize: "₹—",
    rounds: ["Round I — Kit Inspection & Design", "Round II — Build & Demo"],
    rules: [
      "Kits are provided at the venue; external components are not allowed.",
      "Laptops permitted for programming only.",
      "Judging weighs functionality, originality and clarity of explanation.",
    ],
    eligibility: "Open to all UG students with a valid college ID.",
    timing: "TBA",
    venue: "TBA",
    coordinators: [{ name: "Coordinator name — TBA", phone: "TBA" }],
    registrationUrl: "/register",
  },
  {
    id: "codex-of-logic",
    quest: "QUEST 02",
    name: "Codex of Logic",
    short: "A timed coding trial through escalating algorithmic gates.",
    description:
      "Three gates of increasing difficulty. Each solved problem unlocks the next chamber of the codex. Only the swiftest minds reach the final seal.",
    difficulty: 4,
    domain: "Software",
    path: "arcane",
    mode: "Individual",
    teamSize: "1 member",
    duration: "120 minutes",
    prize: "₹—",
    rounds: ["Gate I — Fundamentals", "Gate II — Data Structures", "Gate III — Final Seal"],
    rules: [
      "Any one language from the allowed list may be used.",
      "Internet access is restricted to the judge platform.",
      "Ties are broken by submission time.",
    ],
    eligibility: "Open to all UG students with a valid college ID.",
    timing: "TBA",
    venue: "TBA",
    coordinators: [{ name: "Coordinator name — TBA", phone: "TBA" }],
    registrationUrl: "/register",
  },
  {
    id: "oracle-of-models",
    quest: "QUEST 03",
    name: "Oracle of Models",
    short: "Train a model on a sealed dataset and out-predict the arena.",
    description:
      "Teams are handed an unseen dataset and a metric. Build, tune and defend a model before the arena clock closes.",
    difficulty: 4,
    domain: "AI",
    path: "arcane",
    mode: "Team",
    teamSize: "1 – 2 members",
    duration: "150 minutes",
    prize: "₹—",
    rounds: ["Round I — Model Build", "Round II — Defense of the Oracle"],
    rules: [
      "Pre-trained public models are allowed with disclosure.",
      "Leaderboard score carries 70% weight, defense 30%.",
    ],
    eligibility: "Open to all UG students with a valid college ID.",
    timing: "TBA",
    venue: "TBA",
    coordinators: [{ name: "Coordinator name — TBA", phone: "TBA" }],
    registrationUrl: "/register",
  },
  {
    id: "iron-automaton",
    quest: "QUEST 04",
    name: "Iron Automaton",
    short: "Guide your machine through the labyrinth of the forge.",
    description:
      "A line-and-obstacle arena awaits. Bring your own automaton or use a provided chassis and prove its mastery over the course.",
    difficulty: 5,
    domain: "Robotics",
    path: "forge",
    mode: "Team",
    teamSize: "2 – 4 members",
    duration: "Heats across the day",
    prize: "₹—",
    rounds: ["Heats", "Semi-Final", "Grand Arena"],
    rules: [
      "Maximum bot dimensions announced with the arena layout.",
      "One re-run permitted per heat with a time penalty.",
      "Damaging the arena leads to disqualification.",
    ],
    eligibility: "Open to all UG students with a valid college ID.",
    timing: "TBA",
    venue: "TBA",
    coordinators: [{ name: "Coordinator name — TBA", phone: "TBA" }],
    registrationUrl: "/register",
  },
  {
    id: "warded-gate",
    quest: "QUEST 05",
    name: "The Warded Gate",
    short: "Capture-the-flag trials in cryptography, forensics and web wards.",
    description:
      "A layered set of security puzzles. Break the wards, claim the flags, and climb the live scoreboard.",
    difficulty: 4,
    domain: "Cyber",
    path: "arcane",
    mode: "Team",
    teamSize: "1 – 3 members",
    duration: "180 minutes",
    prize: "₹—",
    rounds: ["Round I — Recon", "Round II — Exploitation"],
    rules: [
      "Attacks target only the provided sandbox.",
      "Flag sharing between teams means disqualification.",
    ],
    eligibility: "Open to all UG students with a valid college ID.",
    timing: "TBA",
    venue: "TBA",
    coordinators: [{ name: "Coordinator name — TBA", phone: "TBA" }],
    registrationUrl: "/register",
  },
  {
    id: "seers-pitch",
    quest: "QUEST 06",
    name: "Seer's Pitch",
    short: "Present an original idea before the council of judges.",
    description:
      "A paper-and-pitch trial. Bring an original concept blending intelligence and hardware, then defend it in open questioning.",
    difficulty: 2,
    domain: "Design",
    path: "arcane",
    mode: "Team",
    teamSize: "1 – 3 members",
    duration: "8 min pitch + 4 min questions",
    prize: "₹—",
    rounds: ["Abstract Screening", "Final Pitch"],
    rules: [
      "Abstract must be submitted before the announced deadline.",
      "Slides limited to 10; plagiarism leads to rejection.",
    ],
    eligibility: "Open to all UG students with a valid college ID.",
    timing: "TBA",
    venue: "TBA",
    coordinators: [{ name: "Coordinator name — TBA", phone: "TBA" }],
    registrationUrl: "/register",
  },
];

export type Workshop = {
  id: string;
  title: string;
  topic: string;
  speaker: string;
  affiliation: string;
  date: string;
  time: string;
  venue: string;
  seats: string;
  description: string;
  registrationUrl: string;
};

export const workshops: Workshop[] = [
  {
    id: "scroll-of-things",
    title: "Scroll of Connected Things",
    topic: "Hands-on IoT: sensors, gateways and cloud dashboards",
    speaker: "Speaker name — TBA",
    affiliation: "Affiliation — TBA",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    seats: "Limited seats — TBA",
    description:
      "A guided build from a bare sensor to a live dashboard, covering wiring, firmware, telemetry and alerting.",
    registrationUrl: "/register",
  },
  {
    id: "scroll-of-thought",
    title: "Scroll of Machine Thought",
    topic: "Applied machine learning for embedded and edge devices",
    speaker: "Speaker name — TBA",
    affiliation: "Affiliation — TBA",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    seats: "Limited seats — TBA",
    description:
      "From dataset to deployable model on constrained hardware — quantization, latency and practical trade-offs.",
    registrationUrl: "/register",
  },
  {
    id: "scroll-of-wards",
    title: "Scroll of Digital Wards",
    topic: "Securing devices, firmware and networks",
    speaker: "Speaker name — TBA",
    affiliation: "Affiliation — TBA",
    date: "TBA",
    time: "TBA",
    venue: "TBA",
    seats: "Limited seats — TBA",
    description:
      "Threat modelling for connected products, secure boot basics, and hardening a real device end to end.",
    registrationUrl: "/register",
  },
];

export const timeline = [
  { stage: "DAWN", title: "Registration Opens", detail: "Aspirants enrol and choose their quests.", time: "TBA" },
  { stage: "FIRST GATE", title: "Inauguration", detail: "The academy gates open with the opening ceremony.", time: "TBA" },
  { stage: "ARCANE TRIALS", title: "Technical Events", detail: "Coding, AI and cyber trials begin.", time: "TBA" },
  { stage: "THE FORGE", title: "Workshops", detail: "Arcane scrolls unsealed — hands-on sessions.", time: "TBA" },
  { stage: "GRAND ARENA", title: "Major Competitions", detail: "Finals of the flagship contests.", time: "TBA" },
  { stage: "THE ASCENSION", title: "Prize Distribution", detail: "Champions are named in the great hall.", time: "TBA" },
];

export const prizes = {
  overall: [
    { rank: "FIRST ASCENSION", medal: "🥇", amount: "₹—", note: "Overall champion" },
    { rank: "SECOND ASCENSION", medal: "🥈", amount: "₹—", note: "Runner-up" },
    { rank: "THIRD ASCENSION", medal: "🥉", amount: "₹—", note: "Second runner-up" },
  ],
  perEvent: events.map((e) => ({ event: e.name, prize: e.prize })),
  note: "Prize amounts are placeholders and will be published once confirmed by the organising committee.",
};

export type SponsorTier =
  | "TITLE PARTNER"
  | "GOLD PARTNER"
  | "SILVER PARTNER"
  | "TECH PARTNER"
  | "MEDIA PARTNER";

export type Sponsor = { name: string; tier: SponsorTier; logoUrl?: string; url?: string };

/** Empty by design — only real, confirmed partners should be listed here. */
export const sponsors: Sponsor[] = [];

export const sponsorTiers: SponsorTier[] = [
  "TITLE PARTNER",
  "GOLD PARTNER",
  "SILVER PARTNER",
  "TECH PARTNER",
  "MEDIA PARTNER",
];

export type GuildGroup = "Organisers" | "Faculty Coordinators" | "Student Coordinators" | "Event Coordinators";

export type Member = {
  name: string;
  role: string;
  group: GuildGroup;
  department: string;
  photoUrl?: string;
  link?: string;
};

export const guild: Member[] = [
  { name: "Name — TBA", role: "Chief Patron", group: "Organisers", department: brand.college },
  { name: "Name — TBA", role: "Convenor", group: "Organisers", department: brand.department },
  { name: "Name — TBA", role: "Head of Department", group: "Faculty Coordinators", department: brand.department },
  { name: "Name — TBA", role: "Faculty Coordinator", group: "Faculty Coordinators", department: brand.department },
  { name: "Name — TBA", role: "Student Secretary", group: "Student Coordinators", department: brand.department },
  { name: "Name — TBA", role: "Joint Secretary", group: "Student Coordinators", department: brand.department },
  { name: "Name — TBA", role: "Events Lead", group: "Event Coordinators", department: brand.department },
  { name: "Name — TBA", role: "Workshops Lead", group: "Event Coordinators", department: brand.department },
];

export const guildGroups: GuildGroup[] = [
  "Organisers",
  "Faculty Coordinators",
  "Student Coordinators",
  "Event Coordinators",
];

export const contact = {
  address: [brand.college, brand.department, "Tiruchengode, Tamil Nadu"],
  email: "TBA",
  phones: ["TBA"],
  mapQuery: "K.S.R. College of Engineering, Tiruchengode, Tamil Nadu",
  socials: [
    { label: "Instagram", url: "" },
    { label: "LinkedIn", url: "" },
    { label: "Website", url: "" },
  ],
};

export const registrationConfig = {
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "college", label: "College", type: "text", required: true },
    { name: "department", label: "Department", type: "text", required: true },
    { name: "year", label: "Year of Study", type: "select", required: true, options: ["I", "II", "III", "IV"] },
  ] as const,
  teamFields: [
    { name: "teamName", label: "Team Name", type: "text", required: true },
    { name: "members", label: "Team Members (one per line)", type: "textarea", required: true },
  ] as const,
  maxTeamSize: 4,
};

export const paths = [
  {
    id: "arcane",
    title: "The Arcane Path",
    line: "Master the unseen forces of computation.",
    skills: ["Artificial Intelligence", "Machine Learning", "Cloud", "Data", "Software", "Cybersecurity"],
  },
  {
    id: "forge",
    title: "The Forge Path",
    line: "Forge ideas into machines that shape the world.",
    skills: ["Internet of Things", "Embedded Systems", "Robotics", "Sensors", "Automation", "Smart Devices"],
  },
] as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Workshops", to: "/workshops" },
  { label: "Timeline", to: "/timeline" },
  { label: "Prizes", to: "/prizes" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;
