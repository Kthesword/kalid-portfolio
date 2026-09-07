/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code2, 
  Cpu, 
  Trophy, 
  ExternalLink, 
  ChevronRight,
  Terminal,
  Layers,
  BookOpen,
  Sparkles,
  GitBranch,
  Activity,
  CheckCircle2,
  Briefcase
} from "lucide-react";

const NAV_LINKS = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Activity", href: "#activity" },
  { name: "Education", href: "#education" },
];

const EXPERIENCE = [
  {
    company: "GoldenAge Technology PLC",
    role: "Software Engineering Intern",
    period: "Present",
    location: "Addis Ababa, Ethiopia",
    projectFocus: "OpsFlow Platform",
    tech: ["Next.js 16", "NestJS 11", "TypeScript", "PostgreSQL", "Prisma ORM", "Socket.IO", "Turborepo"],
    description: [
      "Contributing to OpsFlow, an internal enterprise operations platform engineered for asset management, approval pipelines, and executive intelligence.",
      "Building end-to-end features across a Next.js 16 (App Router) presentation layer and a NestJS 11 backend powered by PostgreSQL & Prisma ORM.",
      "Implementing server-enforced Role-Based Access Control (RBAC), room-scoped Socket.IO WebSockets for zero-refresh collaborative workflows, and automated cron snapshot services."
    ]
  },
  {
    company: "Africa to Silicon Valley (A2SV)",
    role: "Software Engineering Intern",
    period: "Summer 2025",
    location: "Remote",
    projectFocus: "Remedymate Healthcare",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Node.js"],
    description: [
      "Collaborated in an agile engineering team on Remedymate, a healthcare mobile and web application streamlining medication tracking and clinical appointment scheduling.",
      "Implemented secure user authentication flows, dynamic reminder notifications, and interactive UI views using React, Firebase, and Tailwind CSS.",
      "Followed test-driven development practices, version control workflows, and peer code reviews in a fast-paced development sprint."
    ]
  }
];

const PROJECTS = [
  {
    title: "OpsFlow",
    subtitle: "Enterprise Operations & Workflow Platform",
    badge: "Featured / Production",
    description: "Enterprise operations and workflow management platform engineered with multi-stage approval automation, real-time WebSocket collaboration, server-side RBAC, and live executive analytics.",
    tech: ["Next.js 16", "NestJS 11", "TypeScript", "PostgreSQL", "Prisma ORM", "Socket.IO", "Turborepo"],
    github: "https://github.com/Kthesword/opsflow-test",
    live: null
  },
  {
    title: "Kindi-Hub",
    subtitle: "Trainee Management & CP Tracker",
    badge: "Analytics Suite",
    description: "Interactive trainee management & competitive programming tracking system engineered to monitor coding consistency, attendance, and problem-solving milestones with dynamic visual analytics.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Clerk Auth", "Recharts", "Router v7"],
    github: "https://github.com/Kthesword/Kindi-hub",
    live: null
  },
  {
    title: "Personal Portfolio",
    subtitle: "Modern Developer Portfolio & Showcase",
    badge: "Live Deployment",
    description: "High-performance developer portfolio showcasing engineering projects, competitive programming milestones, and technical background with fluid animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
    github: "https://github.com/Kthesword/kalid-portfolio",
    live: "https://kalid-portfolio-chi.vercel.app/"
  },
  {
    title: "Job Listing App",
    subtitle: "Full-Stack Job Discovery Engine",
    badge: "Full-Stack",
    description: "Modern web application for browsing, filtering, and applying to job postings, featuring individual detail views and optimized responsive design.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Kthesword/jobs-listing-app",
    live: null
  },
  {
    title: "A2SV Application Platform",
    subtitle: "Student Education & Progress Tracker",
    badge: "Community Platform",
    description: "Full-stack educational platform built with the A2SV community for students to manage coursework, monitor progress, and access curated learning resources.",
    tech: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Kthesword/A2SV-Projects",
    live: null
  },
  {
    title: "Remedymate",
    subtitle: "Health Assistant & Medication Manager",
    badge: "Healthcare App",
    description: "Healthcare mobile and web solution providing appointment reminders, medication tracking schedules, and authentication features developed during A2SV training.",
    tech: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Kthesword",
    live: null
  },
  {
    title: "Competitive Programming & DSA",
    subtitle: "340+ Optimized Algorithmic Solutions",
    badge: "Algorithms",
    description: "Curated repository containing 340+ optimized solutions across LeetCode and Codeforces focusing on Dynamic Programming, Graph Theory, and advanced algorithms.",
    tech: ["Python", "C++", "DSA", "LeetCode", "Codeforces"],
    github: "https://github.com/Kthesword/Competitive_programming",
    secondaryLink: {
      name: "Codeforces Repo",
      url: "https://github.com/Kthesword/codeforces"
    },
    live: null
  },
  {
    title: "Arcade Game Suite",
    subtitle: "Two-Player Pong & Classic Snake",
    badge: "Python / OOP",
    description: "Built interactive arcade classics including a two-player Pong game with realistic physics simulation and score tracking, plus a Snake game featuring real-time collision detection.",
    tech: ["Python", "Turtle Graphics", "OOP", "Physics Simulation"],
    github: "https://github.com/Kthesword/100-days-of-python",
    live: null
  }
];

const SKILLS = [
  {
    category: "Frontend",
    items: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5 / CSS3", "Vite"]
  },
  {
    category: "Backend",
    items: ["NestJS 11", "Node.js", "Golang", "Express", "REST APIs", "Socket.IO (WebSockets)"]
  },
  {
    category: "Database & Cloud",
    items: ["PostgreSQL", "Prisma ORM", "MongoDB", "Firebase", "Clerk Auth"]
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Golang", "C++"]
  },
  {
    category: "Tools & DevOps",
    items: ["Docker", "Turborepo", "Git", "GitHub", "VS Code", "Postman", "PyCharm"]
  },
  {
    category: "Engineering & Concepts",
    items: ["Distributed Systems", "Server RBAC", "Data Structures & Algorithms", "Microservices", "OOP"]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-x-hidden relative">
      {/* Ambient Background Grid & Glow Elements */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none z-0" />
      <div className="fixed top-[10%] right-[5%] w-[420px] h-[420px] bg-blob pointer-events-none z-0" />
      <div className="fixed bottom-[15%] left-[5%] w-[380px] h-[380px] bg-blob pointer-events-none z-0 opacity-50" />
      
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 h-20 flex justify-between items-center px-6 md:px-12 border-b border-white/5 z-50 bg-dark-bg/80 backdrop-blur-md">
        <div className="font-extrabold text-2xl tracking-tighter text-white flex items-center gap-2">
          <span>K<span className="text-neon-cyan">A</span>.</span>
          <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-neon-cyan/70 px-2 py-0.5 rounded border border-neon-cyan/20 bg-neon-cyan/5">
            SE & AI Dev
          </span>
        </div>
        <nav className="flex items-center gap-6 md:gap-8 text-[12px] md:text-[13px] font-semibold uppercase tracking-widest opacity-80">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-neon-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:kjbuta@gmail.com" 
            className="px-3.5 py-1.5 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all font-bold text-xs"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 md:px-12 lg:px-24 py-16 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 md:gap-20 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono mb-6">
                <Sparkles size={13} />
                <span>Open to Engineering & AI Opportunities</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-[80px] font-black text-white tracking-tighter leading-[0.95] mb-6">
                KALID<br />
                <span className="text-neon-cyan text-glow-cyan uppercase">ADEM</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-text tracking-[0.5px] border-l-[3px] border-neon-cyan pl-4 leading-relaxed mb-10 max-w-xl">
                <strong className="text-white font-semibold">Software Engineer & AI Developer</strong> with hands-on experience engineering scalable web applications, distributed platforms, and AI-driven systems. Currently building <span className="text-neon-cyan font-medium">OpsFlow</span> at GoldenAge Technology PLC.
              </p>
              
              {/* Quick Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
                <div className="neon-border p-5 rounded-xl">
                  <div className="text-[11px] uppercase tracking-widest text-slate-text mb-1 font-semibold">Current Role</div>
                  <div className="text-sm font-bold text-white mb-1">Software Eng. Intern</div>
                  <div className="text-[11px] text-neon-cyan font-mono">@ GoldenAge Tech</div>
                </div>

                <div className="neon-border p-5 rounded-xl">
                  <div className="text-[11px] uppercase tracking-widest text-slate-text mb-1 font-semibold">Algorithms & DSA</div>
                  <div className="text-2xl font-bold text-white mb-1">340+</div>
                  <div className="text-[11px] text-emerald-400 font-medium">LeetCode 200 Days Badge</div>
                </div>

                <div className="neon-border p-5 rounded-xl">
                  <div className="text-[11px] uppercase tracking-widest text-slate-text mb-1 font-semibold">Stack Core</div>
                  <div className="text-sm font-bold text-white mb-1">Next.js & NestJS</div>
                  <div className="text-[11px] text-slate-text font-mono">PostgreSQL + Prisma</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a 
                  href="#projects" 
                  className="px-6 py-3 rounded-lg bg-neon-cyan text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all flex items-center gap-2"
                >
                  <Briefcase size={16} />
                  View Featured Projects
                </a>
                <a 
                  href="https://github.com/Kthesword" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg neon-border text-white font-medium text-sm hover:border-neon-cyan/60 hover:text-neon-cyan transition-all flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub Profile
                </a>
              </div>
            </motion.div>

            {/* Terminal Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="neon-border p-8 rounded-xl font-mono text-sm min-h-[480px] flex flex-col relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-slate-text/60 font-mono">kalid_profile.ts</span>
              </div>
              
              <div className="flex-1 space-y-1.5 text-neon-cyan leading-relaxed mb-6 font-mono text-[13px]">
                <p className="text-slate-text opacity-70">// Full-Stack & Distributed Systems Profile</p>
                <p><span className="text-pink-400">interface</span> <span className="text-yellow-400">Engineer</span> {'{'}</p>
                <p>&nbsp;&nbsp;name: <span className="text-emerald-400">"Kalid Adem"</span>;</p>
                <p>&nbsp;&nbsp;role: <span className="text-emerald-400">"Software Engineer & AI Developer"</span>;</p>
                <p>&nbsp;&nbsp;experience: <span className="text-yellow-400">"GoldenAge Tech PLC"</span>;</p>
                <p>&nbsp;&nbsp;flagshipApp: <span className="text-emerald-400">"OpsFlow (Next.js 16 + NestJS 11)"</span>;</p>
                <p>&nbsp;&nbsp;capabilities: string[];</p>
                <p>{'}'}</p>
                <br />
                <p><span className="text-pink-400">const</span> kalid: <span className="text-yellow-400">Engineer</span> = {'{'}</p>
                <p>&nbsp;&nbsp;name: <span className="text-emerald-400">"Kalid Adem"</span>,</p>
                <p>&nbsp;&nbsp;role: <span className="text-emerald-400">"AI Developer & Full-Stack SE"</span>,</p>
                <p>&nbsp;&nbsp;experience: <span className="text-emerald-400">"GoldenAge Technology (OpsFlow)"</span>,</p>
                <p>&nbsp;&nbsp;flagshipApp: <span className="text-emerald-400">"OpsFlow Management Suite"</span>,</p>
                <p>&nbsp;&nbsp;capabilities: [</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"Full-Stack Web Architecture"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"Real-Time WebSockets (Socket.IO)"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"PostgreSQL & Prisma ORM"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"Server-Enforced RBAC Security"</span></p>
                <p>&nbsp;&nbsp;]</p>
                <p>{'}'};</p>
                <br />
                <p className="text-slate-text opacity-70">// Status: Ready to build & deploy</p>
                <p className="text-emerald-400 tracking-tight">&gt; System check: Operational</p>
                <p className="text-neon-cyan tracking-tight">&gt; Continuous Integration: Passing</p>
                <p className="text-white animate-blink">&gt; _</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {["Next.js 16", "NestJS 11", "PostgreSQL", "Socket.IO", "React 19", "Python"].map(t => (
                  <span key={t} className="px-2.5 py-1 rounded bg-neon-cyan/5 border border-neon-cyan/30 text-[11px] text-neon-cyan">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 md:px-12 lg:px-24 py-28 bg-dark-bg/50 border-t border-white/5">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono mb-4">
                <Briefcase size={14} />
                <span>Industry Track Record</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Layers className="text-neon-cyan" />
                Experience
              </h2>
              <p className="text-slate-text leading-relaxed mb-6">
                Engineering production software, real-time workflows, and healthcare solutions within enterprise and agile teams.
              </p>
              <div className="p-4 rounded-xl neon-border text-xs text-slate-text space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  <span>Production Impact</span>
                </div>
                <p>Enterprise operations suites, role-based access control, WebSocket collaboration, and scalable API services.</p>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-16">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-white/10 group"
                >
                  <div className="absolute top-0 left-[-1.5px] h-full w-[2px] bg-gradient-to-b from-neon-cyan via-neon-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-neon-cyan group-hover:shadow-[0_0_12px_rgba(34,211,238,1)] transition-all" />
                  
                  <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{exp.company}</h3>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                          {exp.projectFocus}
                        </span>
                      </div>
                      <p className="text-neon-cyan/90 font-mono text-sm mt-1">{exp.role}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="inline-block px-2.5 py-1 rounded bg-white/5 text-slate-text font-mono text-xs border border-white/10">
                        {exp.period}
                      </span>
                      <p className="text-xs text-slate-text/70 mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-slate-text mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <ChevronRight className="text-neon-cyan shrink-0 mt-1" size={16} />
                        <span className="leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="text-[11px] font-mono font-medium border border-neon-cyan/20 px-3 py-1 rounded-full text-neon-cyan bg-neon-cyan/5 tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="px-6 md:px-12 lg:px-24 py-28 bg-dark-surface/30">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono mb-4">
                <Code2 size={14} />
                <span>Engineered Solutions</span>
              </div>
              <h2 className="text-4xl font-bold text-white flex items-center gap-4">
                <Terminal className="text-neon-cyan" />
                Featured Projects
              </h2>
            </div>
            <p className="text-slate-text text-sm max-w-md">
              A curated collection of enterprise applications, competitive programming systems, and full-stack software built for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="neon-border p-7 rounded-xl group transition-all flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                      {proj.badge}
                    </span>
                    <div className="flex items-center gap-3">
                      {proj.live && (
                        <a 
                          href={proj.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="Live Demo"
                          className="text-slate-text hover:text-emerald-400 transition-colors p-1.5 rounded hover:bg-white/5"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                      <a 
                        href={proj.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="GitHub Repository"
                        className="text-slate-text hover:text-neon-cyan transition-colors p-1.5 rounded hover:bg-white/5"
                      >
                        <Github size={17} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neon-cyan/70 font-mono mb-4">{proj.subtitle}</p>
                  
                  <p className="text-slate-text text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {proj.secondaryLink && (
                    <div className="mb-6">
                      <a 
                        href={proj.secondaryLink.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-neon-cyan hover:underline font-mono"
                      >
                        <GitBranch size={13} />
                        {proj.secondaryLink.name} →
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[11px] font-mono text-slate-text/70 bg-white/5 px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Stack Section */}
        <section id="skills" className="px-6 md:px-12 lg:px-24 py-28 border-t border-white/5">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono mb-4">
                <Cpu size={14} />
                <span>Capabilities</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Cpu className="text-neon-cyan" />
                Tech Stack
              </h2>
              <p className="text-slate-text leading-relaxed">
                Full-stack toolchain spanning modern frontend frameworks, scalable backend microservices, relational and document databases, and competitive algorithmic fundamentals.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {SKILLS.map((set, idx) => (
                <div key={idx} className="p-6 rounded-xl neon-border">
                  <h4 className="text-neon-cyan font-bold text-xs uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan" />
                    {set.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {set.items.map(item => (
                      <span 
                        key={item} 
                        className="px-3 py-1.5 border border-white/10 rounded-lg bg-white/5 hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all text-xs font-medium text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Stats & Live Activity Section */}
        <section id="activity" className="px-6 md:px-12 lg:px-24 py-28 bg-dark-bg/60 border-t border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono mb-4">
              <Activity size={14} />
              <span>Continuous Engineering</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              GitHub Metrics & Coding Activity
            </h2>
            <p className="text-slate-text text-sm">
              Live statistics tracking code frequency, language distribution, and problem-solving consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* GitHub Stats Widget */}
            <div className="neon-border p-6 rounded-xl flex flex-col justify-center items-center overflow-hidden">
              <img 
                src="https://github-readme-stats-eight-theta.vercel.app/api?username=Kthesword&show_icons=true&theme=tokyonight" 
                alt="Kalid's GitHub Stats"
                className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Top Languages Widget */}
            <div className="neon-border p-6 rounded-xl flex flex-col justify-center items-center overflow-hidden">
              <img 
                src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Kthesword&layout=compact&theme=tokyonight" 
                alt="Kalid's Top Languages"
                className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Streak Stats Widget */}
            <div className="neon-border p-6 rounded-xl flex flex-col justify-center items-center lg:col-span-2 overflow-hidden">
              <img 
                src="https://streak-stats.demolab.com?user=Kthesword&theme=tokyonight" 
                alt="Kalid's GitHub Streak"
                className="w-full max-w-xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <section id="education" className="px-6 md:px-12 lg:px-24 py-28 bg-dark-surface/20 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-4xl font-bold text-white mb-10 flex items-center gap-4">
                <BookOpen className="text-neon-cyan" />
                Academic & Training
              </h2>
              <div className="space-y-8">
                <div className="neon-border p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                  <span className="text-neon-cyan font-mono text-xs font-bold tracking-widest block mb-2">2023 – 2027</span>
                  <h4 className="text-xl font-bold text-white">Bachelor of Electronics Engineering</h4>
                  <p className="text-slate-text mt-1 text-sm">ASTU | Adama Science and Technology University</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Control Systems", "VLSI Design", "Signal Processing", "Embedded Systems", "DSA"].map(tag => (
                      <span key={tag} className="text-[10px] text-slate-text/70 uppercase tracking-widest font-mono border border-white/10 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="neon-border p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-neon-blue/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                  <span className="text-neon-cyan font-mono text-xs font-bold tracking-widest block mb-2">2025/01 – 2025/09</span>
                  <h4 className="text-xl font-bold text-white">Software Dev & DSA Fellowship</h4>
                  <p className="text-slate-text mt-1 text-sm">Africa to Silicon Valley (A2SV)</p>
                  <p className="text-xs text-emerald-400 mt-4 font-medium flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    600+ hours of rigorous algorithmic problem solving and full-stack software development
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-10 flex items-center gap-4">
                <Trophy className="text-neon-cyan" />
                Milestones & Badges
              </h2>
              <div className="space-y-5">
                {[
                  { 
                    title: "LeetCode 200 Days Badge", 
                    details: "Solved 340+ algorithmic challenges with deep focus on Dynamic Programming, Graph Theory, and Trees.",
                    highlight: "340+ Solutions"
                  },
                  { 
                    title: "Top 5% ASTU Entrance Contest", 
                    details: "Ranked in the top percentile among 400+ university candidates in algorithmic problem-solving speed and accuracy.",
                    highlight: "Top 5%"
                  },
                  { 
                    title: "Competitive Programming Mastery", 
                    details: "Actively training across Codeforces and LeetCode, advancing proficiency in distributed algorithms, greedy strategies, and computational complexity.",
                    highlight: "Active Contender"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="neon-border p-6 rounded-xl flex gap-5 items-center"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan font-mono font-bold text-base">
                      0{i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-white font-bold text-base">{item.title}</h4>
                        <span className="text-[10px] font-mono text-neon-cyan px-2 py-0.5 rounded bg-neon-cyan/10 border border-neon-cyan/20">
                          {item.highlight}
                        </span>
                      </div>
                      <p className="text-xs text-slate-text leading-relaxed">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left bg-dark-bg">
          <div className="max-w-md">
            <div className="font-extrabold text-2xl tracking-tighter text-white mb-2">
              K<span className="text-neon-cyan">A</span>.
            </div>
            <p className="text-xs text-slate-text leading-relaxed mb-3">
              "Code with purpose, build with passion."
            </p>
            <p className="text-[11px] text-slate-text/60 uppercase tracking-wider font-mono">
              Designed & Developed by Kalid Adem — Software Engineer & AI Developer
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex flex-col sm:items-end gap-1.5">
              <span className="text-[10px] uppercase font-bold text-slate-text tracking-[0.2em]">Direct Channels</span>
              <a href="mailto:kjbuta@gmail.com" className="text-xs font-mono text-gray-300 hover:text-neon-cyan transition-colors flex items-center gap-2">
                <Mail size={13} />
                kjbuta@gmail.com
              </a>
              <a href="tel:+251909561875" className="text-xs font-mono text-gray-300 hover:text-neon-cyan transition-colors flex items-center gap-2">
                <Phone size={13} />
                +251 909 561 875
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/Kthesword" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-neon-cyan hover:text-neon-cyan transition-all bg-white/5"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kalid-adem" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-neon-cyan hover:text-neon-cyan transition-all bg-white/5"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://kalid-portfolio-chi.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Live Portfolio"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-neon-cyan hover:text-neon-cyan transition-all bg-white/5"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
