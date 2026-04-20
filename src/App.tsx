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
  BookOpen
} from "lucide-react";

const NAV_LINKS = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

const EXPERIENCE = [
  {
    company: "CSEC-ASTU",
    role: "Competitive Programming Member",
    period: "2025/03 – Present",
    location: "Adama, Ethiopia",
    tech: ["Python", "C++", "DSA"],
    description: [
      "Mentored junior members in solving coding challenges and explaining DSA concepts, improving team performance in competitions.",
      "Helped organize and deliver 2+ programming contests with 100+ participants."
    ]
  },
  {
    company: "A2SV",
    role: "Full-stack Developer (G7 Project)",
    period: "2025/01 - Present",
    location: "Remote",
    tech: ["React", "TailwindCSS", "Node.js"],
    description: [
      "Contributed to building a full-stack web platform used by A2SV students for coursework management, progress tracking, and resource access.",
      "Developed and optimized interactive pages and key features that improved performance and user engagement.",
      "Worked collaboratively with other developers using Git and GitHub for version control and code reviews."
    ]
  }
];

const PROJECTS = [
  {
    title: "Remedymate",
    type: "Mobile Health App (Team Project @ A2SV)",
    description: "UI integration, authentication, and reminder-related features for a health-focused mobile application.",
    tech: ["React", "Firebase", "Tailwind"],
    github: "#"
  },
  {
    title: "Pong Game",
    type: "Arcade Game (Python, OOP)",
    description: "Two-player arcade-style Pong game with realistic physics simulation and dynamic score tracking.",
    tech: ["Python", "Turtle Graphics", "OOP"],
    github: "#"
  },
  {
    title: "Snake Game",
    type: "Terminal-based Game (Solo Project)",
    description: "Classical Snake game implementation with real-time movement and collision detection.",
    tech: ["Python", "Turtle Library"],
    github: "#"
  }
];

const SKILLS = [
  { category: "Languages", items: ["Python", "C++", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Bootstrap"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "PyCharm", "Postman"] },
  { category: "Concepts", items: ["DSA", "OOP", "Competitive Programming", "REST API"] }
];

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-x-hidden relative">
      {/* Background Elements */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none z-0" />
      <div className="fixed top-[10%] right-[5%] w-[400px] h-[400px] bg-blob pointer-events-none z-0" />
      
      {/* Header - Horizontal as per Immersive UI */}
      <header className="fixed top-0 left-0 right-0 h-20 flex justify-between items-center px-6 md:px-12 border-b border-white/5 z-50 bg-dark-bg/60 backdrop-blur-md">
        <div className="font-extrabold text-2xl tracking-tighter text-white">
          K<span className="text-neon-cyan">A</span>.
        </div>
        <nav className="flex gap-8 text-[13px] font-semibold uppercase tracking-widest opacity-70">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-neon-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="mailto:kjbuta@gmail.com" className="text-neon-cyan">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        
        {/* Hero Section - Immersive 2-column Grid */}
        <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-[84px] font-black text-white tracking-tighter leading-[0.9] mb-6">
                KALID<br />
                <span className="text-neon-cyan text-glow-cyan uppercase">ADEM</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-text tracking-[1px] uppercase border-l-[3px] border-neon-cyan pl-4 leading-normal mb-12">
                Competitive Programmer &<br />
                Electronics Engineering Student
              </p>
              
              <div className="flex flex-col sm:flex-row gap-10 mt-16 max-w-xl">
                <div className="neon-border p-6 rounded-xl flex-1">
                  <div className="text-[11px] uppercase tracking-widest text-slate-text mb-2 font-semibold">Algorithmic Mastery</div>
                  <div className="text-3xl font-bold text-white mb-3">99.8%</div>
                  <div className="h-1 w-full bg-ghost-slate rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "99.8%" }}
                      transition={{ delay: 1, duration: 1.5 }}
                      className="h-full bg-neon-cyan shadow-[0_0_10px_#22d3ee]" 
                    />
                  </div>
                </div>
                <div className="neon-border p-6 rounded-xl flex-1">
                  <div className="text-[11px] uppercase tracking-widest text-slate-text mb-2 font-semibold">Solved Tasks</div>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-[12px] text-emerald-500 font-medium tracking-tight">↑ 24 solutions this month</div>
                </div>
              </div>
            </motion.div>

            {/* Terminal Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="neon-border p-8 rounded-xl font-mono text-sm min-h-[450px] flex flex-col relative"
            >
              <div className="flex gap-1.5 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              
              <div className="flex-1 space-y-1.5 text-neon-cyan leading-relaxed mb-12">
                <p className="text-slate-text opacity-70 mb-2">// High Performance Computing</p>
                <p><span className="text-pink-500">struct</span> Developer {'{'}</p>
                <p>&nbsp;&nbsp;string name = <span className="text-yellow-500">"Kalid Adem"</span>;</p>
                <p>&nbsp;&nbsp;string major = <span className="text-yellow-500">"Electronics Eng"</span>;</p>
                <p>&nbsp;&nbsp;vector&lt;string&gt; skills = {'{'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-500">"VLSI Design"</span>, <span className="text-yellow-500">"Embedded C++"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-500">"FPGA Programming"</span>, <span className="text-yellow-500">"DSA"</span></p>
                <p>&nbsp;&nbsp;{'}'};</p>
                <p>{'}'};</p>
                <br />
                <p className="text-slate-text opacity-70">// Latest Deployment Executing...</p>
                <p className="text-emerald-500 tracking-tight">&gt; System check: OK</p>
                <p className="text-emerald-500 tracking-tight">&gt; Compiling architecture...</p>
                <p className="text-neon-cyan tracking-tight">&gt; Portfolio ready.</p>
                <p className="text-white animate-blink">_</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {["Next.js", "Tailwind", "C++", "React", "Python"].map(t => (
                  <span key={t} className="px-3 py-1 rounded bg-neon-cyan/5 border border-neon-cyan/30 text-[12px] text-neon-cyan">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 md:px-12 lg:px-24 py-32 bg-dark-bg/50 border-t border-white/5">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Layers className="text-neon-cyan" />
                Experience
              </h2>
              <p className="text-slate-text max-w-sm leading-relaxed">
                Building products and optimizing algorithms in collaborative environments.
              </p>
            </div>
            
            <div className="lg:w-2/3 space-y-20">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-white/5 group"
                >
                  <div className="absolute top-0 left-[-1.5px] h-full w-[1px] bg-gradient-to-bottom from-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-neon-cyan group-hover:shadow-[0_0_10px_rgba(34,211,238,1)] transition-all" />
                  <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{exp.company}</h3>
                      <p className="text-neon-cyan/80 font-mono text-sm mt-1">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-text font-mono text-sm">{exp.period}</p>
                      <p className="text-xs text-slate-text/60 mt-1">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-4 text-slate-text mb-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <ChevronRight className="text-neon-cyan shrink-0 mt-1.5" size={14} />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase font-bold border border-neon-cyan/20 px-2.5 py-1 rounded-full text-neon-cyan bg-neon-cyan/5 tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-6 md:px-12 lg:px-24 py-32 bg-dark-surface/30">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-4">
              <Terminal className="text-neon-cyan" />
              Selected Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="neon-border p-8 rounded-xl group transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-neon-cyan/5 border border-neon-cyan/20 rounded-lg text-neon-cyan">
                    <Code2 size={22} />
                  </div>
                  <a href={proj.github} className="text-slate-text hover:text-neon-cyan transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{proj.title}</h3>
                <p className="text-[11px] font-bold text-neon-cyan/60 uppercase tracking-widest mb-4">{proj.type}</p>
                <p className="text-slate-text text-sm leading-relaxed mb-8">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold text-slate-text/60 uppercase tracking-[0.1em]">#{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/5">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Cpu className="text-neon-cyan" />
                Technical Stack
              </h2>
              <p className="text-slate-text leading-relaxed">
                A toolkit refined through academic rigor and competitive programming intensity.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
              {SKILLS.map((set, idx) => (
                <div key={idx}>
                  <h4 className="text-neon-cyan font-bold text-[12px] uppercase tracking-[0.15em] mb-6 inline-block border-b-2 border-neon-cyan/40 pb-2">{set.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {set.items.map(item => (
                      <div 
                        key={item} 
                        className="px-4 py-2 border border-white/10 rounded-lg bg-white/5 hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all text-[13px] font-medium"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <section id="education" className="px-6 md:px-12 lg:px-24 py-32 bg-dark-bg/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
                <BookOpen className="text-neon-cyan" />
                Academic
              </h2>
              <div className="space-y-12">
                <div className="neon-border p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                  <span className="text-neon-cyan font-mono text-[11px] font-bold tracking-widest block mb-1">2023 – 2027</span>
                  <h4 className="text-xl font-bold text-white mt-1">Bachelor of Electronics Engineering</h4>
                  <p className="text-slate-text mt-1">ASTU | Adama Science and Technology University</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Control Systems", "VLSI", "Signal Processing", "Embedded C++"].map(tag => (
                      <span key={tag} className="text-[10px] text-slate-text uppercase tracking-widest font-bold">_{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="neon-border p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-neon-blue/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                  <span className="text-neon-blue font-mono text-[11px] font-bold tracking-widest block mb-1">2025/01 – 2025/09</span>
                  <h4 className="text-xl font-bold text-white mt-1">Software Dev & DSA Training</h4>
                  <p className="text-slate-text mt-1">Africa to Silicon Valley (A2SV)</p>
                  <p className="text-[13px] text-emerald-500 mt-4 font-medium leading-normal tracking-normal underline-offset-[2px]">600+ hours of intensive training</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
                <Trophy className="text-neon-cyan" />
                Performance
              </h2>
              <div className="space-y-6">
                {[
                  { title: "200 Days Badge (LeetCode)", details: "Smashed 340+ daily challenges focusing on graph theory & dynamic programming." },
                  { title: "Top 5% Best Performers", details: "Achieved elite ranking among 400+ participants in CSEC-ASTU Entrance Contest." },
                  { title: "Global Competitive Ranking", details: "Consistently improving global rank, currently #1240 in major platform tracking." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="neon-border p-6 rounded-xl flex gap-6 items-center"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-[13px] text-slate-text leading-relaxed">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="max-w-sm">
            <div className="font-extrabold text-xl tracking-tighter text-white mb-4">
              K<span className="text-neon-cyan">A</span>.
            </div>
            <p className="text-[11px] text-slate-text uppercase tracking-widest leading-loose">
              Built for the next generation of hardware & software interfaces. 
              Reflecting Kalid Adem's relentless pursuit of efficiency.
            </p>
          </div>
          
          <div className="flex gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase font-bold text-slate-text tracking-[0.2em]">Contact</span>
              <a href="mailto:kjbuta@gmail.com" className="text-sm font-medium hover:text-neon-cyan transition-colors">kjbuta@gmail.com</a>
              <a href="tel:+251909561875" className="text-sm font-medium hover:text-neon-cyan transition-colors">+251 909561875</a>
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, label: "GH", href: "https://github.com" },
                { icon: Linkedin, label: "LN", href: "https://linkedin.com" }
              ].map(social => (
                <a 
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[13px] font-bold hover:border-neon-cyan/50 hover:text-neon-cyan transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
