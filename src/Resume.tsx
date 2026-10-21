/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  Download,
  ArrowLeft,
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  Trophy,
  CheckCircle2,
  ChevronRight,
  Globe,
} from "lucide-react";

/* ─────────────────────────────── Data ─────────────────────────────── */

const CONTACT = {
  name: "Kalid Adem",
  title: "Software Engineer & AI Developer",
  location: "Addis Ababa, Ethiopia",
  email: "kjbuta@gmail.com",
  phone: "+251 909 561 875",
  github: "https://github.com/Kthesword",
  linkedin: "https://www.linkedin.com/in/kalid-adem",
  portfolio: "https://kalid-portfolio-chi.vercel.app/",
};

const SUMMARY =
  "Full-Stack Software Engineer & AI Developer with hands-on experience building scalable enterprise platforms, real-time distributed systems, and data-driven applications. Engineered OpsFlow at GoldenAge Technology PLC — a multi-tenant operations suite powered by Next.js 16, NestJS 11, and PostgreSQL. Proven track record in competitive programming with 340+ algorithmic solutions and a LeetCode 200-Day consistency badge.";

const EXPERIENCE = [
  {
    company: "GoldenAge Technology PLC",
    role: "Software Engineering Intern",
    period: "Jul 2026 – Sep 2026",
    location: "Addis Ababa, Ethiopia",
    project: "OpsFlow Platform",
    tech: ["Next.js 16", "NestJS 11", "TypeScript", "PostgreSQL", "Prisma ORM", "Socket.IO", "Turborepo"],
    points: [
      "Engineered OpsFlow — an internal enterprise operations platform for asset management, multi-stage approval pipelines, and executive intelligence dashboards.",
      "Built full-stack features across a Next.js 16 (App Router) frontend and NestJS 11 backend with PostgreSQL & Prisma ORM.",
      "Implemented server-enforced Role-Based Access Control (RBAC), room-scoped Socket.IO WebSockets for zero-refresh collaborative workflows, and automated cron snapshot services.",
    ],
  },
  {
    company: "Africa to Silicon Valley (A2SV)",
    role: "Software Engineering Intern",
    period: "Summer 2025",
    location: "Remote",
    project: "Remedymate Healthcare",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Node.js"],
    points: [
      "Collaborated in an agile team on Remedymate — a healthcare app for medication tracking and clinical appointment scheduling.",
      "Implemented secure user authentication flows, dynamic reminder notifications, and interactive UI views.",
      "Followed test-driven development, strict version control workflows, and rigorous peer code reviews.",
    ],
  },
];

const PROJECTS = [
  {
    name: "OpsFlow",
    desc: "Enterprise operations & workflow management platform with multi-stage approval automation, real-time WebSocket collaboration, RBAC security, and live executive analytics.",
    tech: ["Next.js 16", "NestJS 11", "PostgreSQL", "Prisma ORM", "Socket.IO", "Turborepo"],
    github: "https://github.com/Kthesword/opsflow-test",
    live: null,
  },
  {
    name: "ASTU Geophysical Map",
    desc: "Interactive GIS web mapping application for Adama Science and Technology University — visualizing geological layers, survey points, and spatial datasets.",
    tech: ["Python", "Streamlit", "GeoPandas", "Folium", "GIS"],
    github: "https://github.com/Kthesword/Astu_geophysical_map",
    live: "https://astugeophysicalmap.streamlit.app/",
  },
  {
    name: "Kindi-Hub",
    desc: "Trainee management & competitive programming tracker with visual analytics, attendance monitoring, and coding consistency metrics.",
    tech: ["React 19", "TypeScript", "Vite", "Clerk Auth", "Recharts"],
    github: "https://github.com/Kthesword/Kindi-hub",
    live: null,
  },
  {
    name: "Job Listing App",
    desc: "Full-stack job discovery engine with filtering, detail views, and optimized responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Kthesword/jobs-listing-app",
    live: null,
  },
  {
    name: "Competitive Programming & DSA",
    desc: "Curated repository of 340+ optimized solutions across LeetCode and Codeforces — Dynamic Programming, Graph Theory, Trees, and more.",
    tech: ["Python", "C++", "DSA", "LeetCode", "Codeforces"],
    github: "https://github.com/Kthesword/Competitive_programming",
    live: null,
  },
  {
    name: "A2SV Application Platform",
    desc: "Full-stack educational platform for students to manage coursework, monitor progress, and access curated learning resources.",
    tech: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Kthesword/A2SV-Projects",
    live: null,
  },
  {
    name: "Remedymate",
    desc: "Healthcare mobile and web solution providing appointment reminders, medication tracking schedules, and authentication features — developed during A2SV training.",
    tech: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Kthesword",
    live: null,
  },
  {
    name: "Personal Portfolio",
    desc: "High-performance developer portfolio showcasing engineering projects, competitive programming milestones, and technical background with fluid animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
    github: "https://github.com/Kthesword/kalid-portfolio",
    live: "https://kalid-portfolio-chi.vercel.app/",
  },
  {
    name: "Arcade Game Suite",
    desc: "Interactive arcade classics including a two-player Pong game with realistic physics simulation and score tracking, plus a Snake game with real-time collision detection.",
    tech: ["Python", "Turtle Graphics", "OOP", "Physics Simulation"],
    github: "https://github.com/Kthesword/100-days-of-python",
    live: null,
  },
];

const SKILLS = [
  { cat: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "JavaScript", "HTML5 / CSS3", "Vite"] },
  { cat: "Backend", items: ["NestJS 11", "Node.js", "Golang", "Express", "REST APIs", "Socket.IO"] },
  { cat: "Databases & Auth", items: ["PostgreSQL", "Prisma ORM", "MongoDB", "Firebase", "Clerk Auth"] },
  { cat: "Languages", items: ["TypeScript", "JavaScript", "Python", "Golang", "C++"] },
  { cat: "Tools & DevOps", items: ["Docker", "Turborepo", "Git", "GitHub", "Postman", "PyCharm", "VS Code"] },
  { cat: "Concepts", items: ["Distributed Systems", "Server RBAC", "Data Structures & Algorithms", "Microservices", "OOP", "GIS / Geospatial"] },
];

const EDUCATION = [
  {
    degree: "Bachelor of Electronics Engineering",
    institution: "Adama Science and Technology University (ASTU)",
    period: "2023 – 2027",
    detail: "Relevant: Control Systems, VLSI Design, Signal Processing, Embedded Systems, DSA",
  },
  {
    degree: "Software Dev & DSA Fellowship",
    institution: "Africa to Silicon Valley (A2SV)",
    period: "Jan 2025 – Sep 2025",
    detail: "600+ hours of rigorous algorithmic problem solving and full-stack software development training",
  },
];

const ACHIEVEMENTS = [
  { title: "LeetCode 200 Days Badge", detail: "Solved 340+ problems — DP, Graph Theory, Trees", highlight: "340+ Solutions" },
  { title: "Top 5% ASTU Entrance Contest", detail: "Ranked top percentile among 400+ candidates in algorithmic speed and accuracy", highlight: "Top 5%" },
  { title: "Competitive Programming", detail: "Active on Codeforces & LeetCode — greedy strategies, distributed algorithms, complexity", highlight: "Active Contender" },
];

/* ───────────────────────────── Component ───────────────────────────── */

export default function Resume() {
  const handleDownload = () => {
    window.print();
  };

  const handleBack = () => {
    window.location.hash = "";
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #ffffff !important; color: #111827 !important; font-family: 'Inter', sans-serif; }
          .neon-border { border: 1px solid #e5e7eb !important; background: #f9fafb !important; box-shadow: none !important; }
          .text-neon-cyan { color: #0891b2 !important; }
          .bg-dark-bg, .bg-dark-surface { background: #ffffff !important; }
          .text-slate-400, .text-slate-500 { color: #6b7280 !important; }
          .text-slate-300 { color: #374151 !important; }
          .text-white { color: #111827 !important; }
          .border-white\\/5, .border-white\\/10 { border-color: #e5e7eb !important; }
          @page { margin: 0.55in 0.5in; size: A4; }
        }
      `}</style>

      <div className="min-h-screen bg-dark-bg text-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── Ambient glow (no-print) ── */}
        <div className="no-print fixed inset-0 pointer-events-none z-0">
          <div className="fixed top-[5%] right-[5%] w-[350px] h-[350px] bg-blob opacity-40" />
          <div className="fixed bottom-[10%] left-[5%] w-[280px] h-[280px] bg-blob opacity-25" />
        </div>

        {/* ── Sticky control bar ── */}
        <div className="no-print fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 bg-dark-bg/90 backdrop-blur-md border-b border-white/5">
          <button
            id="back-to-portfolio"
            onClick={handleBack}
            className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-neon-cyan transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </button>

          <div className="font-extrabold text-xl tracking-tighter text-white">
            K<span className="text-neon-cyan">A</span>.
            <span className="hidden sm:inline-block ml-2 text-[10px] font-mono uppercase tracking-widest text-neon-cyan/70 px-2 py-0.5 rounded border border-neon-cyan/20 bg-neon-cyan/5">
              Resume
            </span>
          </div>

          <button
            id="download-resume-btn"
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-neon-cyan text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all"
          >
            <Download size={15} />
            Download PDF
          </button>
        </div>

        {/* ── Resume Content ── */}
        <main className="relative z-10 pt-20 pb-16 max-w-5xl mx-auto px-6 md:px-10">

          {/* ── Header / Contact ── */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-12 border-b border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none mb-2">
                  KALID{" "}
                  <span
                    className="text-neon-cyan"
                    style={{ textShadow: "0 0 28px rgba(34,211,238,0.5)" }}
                  >
                    ADEM
                  </span>
                </h1>
                <p className="text-lg font-semibold text-slate-400 tracking-wide mt-2">{CONTACT.title}</p>
              </div>

              <div className="flex flex-col gap-1.5 text-sm font-mono text-slate-400">
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-neon-cyan transition-colors">
                  <Mail size={13} className="text-neon-cyan shrink-0" />
                  {CONTACT.email}
                </a>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-neon-cyan transition-colors">
                  <Phone size={13} className="text-neon-cyan shrink-0" />
                  {CONTACT.phone}
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={13} className="text-neon-cyan shrink-0" />
                  {CONTACT.location}
                </span>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors">
                    <Github size={13} className="text-neon-cyan" /> Kthesword
                  </a>
                  <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors">
                    <Linkedin size={13} className="text-neon-cyan" /> kalid-adem
                  </a>
                  <a href={CONTACT.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors">
                    <Globe size={13} className="text-neon-cyan" /> Portfolio
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Summary ── */}
          <ResumeSection icon={<Code2 size={18} className="text-neon-cyan" />} title="Professional Summary" delay={0.1}>
            <div className="neon-border rounded-xl p-6">
              <p className="text-slate-300 leading-relaxed text-[15px]">{SUMMARY}</p>
            </div>
          </ResumeSection>

          {/* ── Experience ── */}
          <ResumeSection icon={<Briefcase size={18} className="text-neon-cyan" />} title="Experience" delay={0.15}>
            <div className="space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="neon-border rounded-xl p-6 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-neon-cyan/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                  <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-neon-cyan font-mono text-sm mt-0.5">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400 font-mono text-xs">{exp.period}</span>
                      <p className="text-xs text-slate-500 mt-1 flex items-center justify-end gap-1"><MapPin size={10} />{exp.location}</p>
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 mb-4">
                    {exp.project}
                  </span>

                  <ul className="space-y-2 mb-5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex gap-2.5 text-slate-300 text-[13.5px] leading-relaxed">
                        <ChevronRight size={14} className="text-neon-cyan shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {exp.tech.map(t => (
                      <span key={t} className="text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ResumeSection>

          {/* ── Projects ── */}
          <ResumeSection icon={<Code2 size={18} className="text-neon-cyan" />} title="Featured Projects" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.map((proj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="neon-border rounded-xl p-5 flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-14 h-14 bg-neon-cyan/5 rounded-full -mr-5 -mt-5 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-bold text-sm group-hover:text-neon-cyan transition-colors">{proj.name}</h4>
                      <div className="flex items-center gap-1.5">
                        {proj.live && (
                          <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-400 transition-colors p-1" title="Live Demo">
                            <ExternalLink size={13} />
                          </a>
                        )}
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-neon-cyan transition-colors p-1" title="GitHub">
                          <Github size={13} />
                        </a>
                      </div>
                    </div>
                    <p className="text-slate-400 text-[12px] leading-relaxed mb-3">{proj.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono text-neon-cyan/70 bg-neon-cyan/5 border border-neon-cyan/20 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ResumeSection>

          {/* ── Skills ── */}
          <ResumeSection icon={<Code2 size={18} className="text-neon-cyan" />} title="Technical Skills" delay={0.25}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILLS.map((s, i) => (
                <div key={i} className="neon-border rounded-xl p-4">
                  <h4 className="text-neon-cyan font-bold text-[11px] uppercase tracking-[0.15em] mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan inline-block" />
                    {s.cat}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map(item => (
                      <span key={item} className="px-2.5 py-1 border border-white/10 rounded-lg bg-white/5 hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all text-[11px] font-medium text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>

          {/* ── Education ── */}
          <ResumeSection icon={<GraduationCap size={18} className="text-neon-cyan" />} title="Education & Training" delay={0.3}>
            <div className="space-y-4">
              {EDUCATION.map((ed, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="neon-border rounded-xl p-6 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-neon-cyan/5 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                  <span className="text-neon-cyan font-mono text-xs font-bold tracking-widest block mb-1">{ed.period}</span>
                  <h4 className="text-lg font-bold text-white">{ed.degree}</h4>
                  <p className="text-slate-400 text-sm mt-0.5">{ed.institution}</p>
                  <p className="text-slate-500 text-xs mt-3 flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                    {ed.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </ResumeSection>

          {/* ── Achievements ── */}
          <ResumeSection icon={<Trophy size={18} className="text-neon-cyan" />} title="Milestones & Achievements" delay={0.35}>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.01 }}
                  className="neon-border rounded-xl p-5 flex items-center gap-5"
                >
                  <div className="w-11 h-11 shrink-0 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan font-mono font-bold text-sm">
                    0{i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-white font-bold text-sm">{ach.title}</h4>
                      <span className="text-[10px] font-mono text-neon-cyan px-2 py-0.5 rounded bg-neon-cyan/10 border border-neon-cyan/20 shrink-0">
                        {ach.highlight}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{ach.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ResumeSection>

          {/* ── Footer CTA ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="no-print mt-16 py-10 border-t border-white/5 text-center"
          >
            <p className="text-slate-500 text-sm mb-6">Interested in working together?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kjbuta@gmail.com"
                className="px-6 py-3 rounded-lg bg-neon-cyan text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all flex items-center gap-2"
              >
                <Mail size={15} />
                kjbuta@gmail.com
              </a>
              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-lg neon-border text-white font-medium text-sm hover:border-neon-cyan/60 hover:text-neon-cyan transition-all flex items-center gap-2"
              >
                <Download size={15} />
                Download PDF
              </button>
            </div>
          </motion.div>

        </main>
      </div>
    </>
  );
}

/* ── Reusable section wrapper ── */
function ResumeSection({
  icon,
  title,
  delay,
  children,
}: {
  icon: ReactNode;
  title: string;
  delay: number;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="py-10 border-b border-white/5 last:border-0"
    >
      <div className="flex items-center gap-3 mb-7">
        <div className="p-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20">{icon}</div>
        <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
