import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { ProjectCard } from './components/ProjectCard';
import { SkillBar } from './components/SkillBar';
import { TimelineItem } from './components/TimelineItem';
import { Github, Linkedin, Mail, ArrowUpRight, ArrowRight, Terminal, Sparkles, Layers, Cpu } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const projects = [
    {
      title: "Driver Drowsiness Detection App",
      id: "PRJ-01",
      description: "Engineered a Flutter-based mobile application to detect driver fatigue using computer vision. Achieved a high-accuracy threshold on mid-to-low-end consumer smartphones via an optimized tracking pipeline.",
      techStack: ["Flutter", "Python", "OpenCV", "Dlib"],
      githubUrl: "https://github.com/NiflanM/driver-drowisiness"
    },
    {
      title: "Sweet Shop E-Commerce Platform",
      id: "PRJ-02",
      description: "Developed a full-stack e-commerce web application featuring robust dynamic inventory control, stateful interactive shopping cart mechanics, and custom responsive layouts.",
      techStack: ["React.js", "Laravel", "MySQL", "Tailwind CSS", "Axios API"],
      githubUrl: "https://github.com/NiflanM/E-Commerce" 
    },
    {
      title: "Vehicle Rental System",
      id: "PRJ-03",
      description: "Designed and deployed a comprehensive vehicle rental system with seamless booking workflows, real-time availability tracking, and a production-ready environment hosted on Railway.",
      techStack: ["Laravel", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/NiflanM/rental",
      hostedUrl: "https://rental-production-4a15.up.railway.app/"
    },
    {
      title: "Reserve.lk",
      id: "PRJ-04",
      description: "Developed a centralized reservation web infrastructure customized for regional operations, optimizing data normalization and backend route structures for stable client bookings.",
      techStack: ["Laravel", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/NiflanM/Reserve.lk"
    }
  ];

  const skills = {
    frontend: [
      { name: "React (JS & TS)", level: 80 },
      { name: "Flutter", level: 85 },
      { name: "Tailwind CSS / Bootstrap", level: 90 },
      { name: "HTML / Responsive UI", level: 95 }
    ],
    backend: [
      { name: "Laravel", level: 95 },
      { name: "MySQL & RestAPI", level: 86 },
      { name: "Postman API Execution", level: 88 },
      { name: "Jmeter Performance Test", level: 75 }
    ],
    tools: [
      { name: "Git / GitHub", level: 90 },
      { name: "Jira / Agile Tracking", level: 85 },
      { name: "Figma UI Prototyping", level: 80 },
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Transmission acknowledged. Thank you for your message, Niflan will connect shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#070708] text-[#e4e4e7] selection:bg-emerald-500 selection:text-black font-sans antialiased">
      <Navbar />

      {/* Unique Geometric Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative border-b border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-30" />
        
        <div className="absolute top-32 left-12 w-8 h-8 border-t-2 border-l-2 border-zinc-800 hidden md:block" />
        <div className="absolute top-32 right-12 w-8 h-8 border-t-2 border-r-2 border-zinc-800 hidden md:block" />

        <div className="container mx-auto max-w-6xl px-6 relative z-10 text-center md:text-left grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/30 border border-emerald-800/50 rounded text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              SYSTEM STATUS: ACTIVE // 2026
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-none">
              NIFLAN <br/>
              <span className="text-zinc-600 font-mono font-light">  </span> MUNZIR
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed">
              Software Engineering professional specializing in robust full-stack applications, interactive environments, and cross-platform native engineering.
            </p>

           <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
  <button
    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
    className="bg-emerald-400 text-black font-mono text-xs uppercase tracking-wider font-bold px-6 py-4 hover:bg-white transition-all duration-300 flex items-center gap-3 group border border-emerald-400"
  >
    Inspect Portfolio 
    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
  </button>
  
  {/* NEW DOWNLOAD CV BUTTON */}
  <a
    href="/Niflan_CV.pdf" 
    download="Niflan_CV.pdf"
    className="bg-transparent text-emerald-400 font-mono text-xs uppercase tracking-wider px-6 py-4 border border-emerald-800/50 hover:bg-emerald-950/30 hover:border-emerald-400 transition-all duration-300 text-center"
  >
    Download CV
  </a>

  <button
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="bg-transparent text-white font-mono text-xs uppercase tracking-wider px-6 py-4 border border-zinc-800 hover:border-zinc-400 transition-colors"
  >
    Initiate Contact
  </button>
</div>
          </div>

          <div className="hidden md:flex flex-col border border-zinc-800 bg-[#0c0c0e] p-6 font-mono text-xs text-zinc-500 space-y-4 rounded-lg shadow-2xl">
            <div className="flex justify-between border-b border-zinc-900 pb-2">
              <span>OPERATOR:</span>
              <span className="text-white">NIFLAN_MUNZIR</span>
            </div>
            <div className="flex justify-between border-b border-zinc-900 pb-2">
              <span>ALUMNI:</span>
              <span className="text-white">SOFTWARE ENG GRADUATE</span>
            </div>
            <div className="flex justify-between border-b border-zinc-900 pb-2">
              <span>CORE FOCUS:</span>
              <span className="text-emerald-400">LARAVEL // FLUTTER // REACT</span>
            </div>
            <div className="pt-2 opacity-60">
              <p className="mb-1 text-[10px]">CURRENT TRACK METRICS:</p>
              <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[91%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01: Manifesto (About) */}
      <section id="about" className="py-24 border-b border-zinc-800 bg-[#09090b]">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-12">
          <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest md:pt-2">
            [ 01 // CORE MANIFESTO ]
          </div>
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              Building real-world operational platforms inside collaborative Agile teams.
            </h2>
            <p className="text-zinc-400 leading-relaxed font-light text-base md:text-lg">
              Software Engineering graduate with hands-on industry experience building scalable digital assets. Experienced inside enterprise environments at Esupport Technologies, engineering clean CRM platforms, fast-paced live streaming tools, and intuitive low-distraction mobile experiences using design thinking principles.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 border border-zinc-900 bg-zinc-900/20 rounded">
                <div className="font-mono text-xs text-emerald-400 mb-1">⚡ CORE COMPETENCY</div>
                <p className="text-xs text-zinc-500">Time Management, Problem Solving, Adaptability, and rigorous Critical Thinking paths.</p>
              </div>
              <div className="p-4 border border-zinc-900 bg-zinc-900/20 rounded">
                <div className="font-mono text-xs text-emerald-400 mb-1">📦 SYSTEMS EXPERIENCE</div>
                <p className="text-xs text-zinc-500">Delivered complex web applications with Laravel routing and clean React state contexts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02: Blueprint Showcases (Projects) */}
      <section id="projects" className="py-24 border-b border-zinc-800">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex justify-between items-end mb-16 border-b border-zinc-900 pb-6">
            <div>
              <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest block mb-2">[ 02 // PRODUCTION BLUEPRINTS ]</span>
              <h2 className="text-3xl font-bold tracking-tight text-white">Selected Implementations</h2>
            </div>
            <div className="font-mono text-xs text-zinc-500 hidden sm:block">
              INDEX_COUNT: 04 // LAB_READY
            </div>
          </div>

          {/* Technical List-to-Grid View */}
          <div className="grid md:grid-cols-2 gap-px bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
            {projects.map((project, index) => {
              const hasValidRepo = project.githubUrl && project.githubUrl !== '#';
              
              return (
                <div 
                  key={index}
                  className="bg-[#070708] h-full p-8 hover:bg-[#0c0c0f] transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-mono text-xs text-zinc-600">{project.id}</span>
                      <div className="flex items-center gap-3">
                        {hasValidRepo && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="View Source Code"
                            className="text-zinc-500 hover:text-emerald-400 transition-colors"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.hostedUrl && (
                          <a 
                            href={project.hostedUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Live Deployment"
                            className="text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-0.5"
                          >
                            <span className="text-[10px] font-mono tracking-tighter">LIVE</span>
                            <ArrowUpRight size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono text-zinc-500 bg-zinc-900/40 px-2 py-0.5 rounded border border-zinc-800/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03: Matrix Blueprint (Skills) */}
      <section id="skills" className="py-24 border-b border-zinc-800 bg-[#09090b]">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest block mb-2">[ 03 // TECHNICAL MATRIX ]</span>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Capabilities</h2>
            <p className="text-zinc-500 text-sm font-light">Granular breakdown of front-end layouts, back-end architecture parameters, and tooling arrays.</p>
          </div>
          
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs border-b border-zinc-900 pb-2">
                <Sparkles size={14} className="text-emerald-400" /> INTERFACE LAYER
              </div>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs border-b border-zinc-900 pb-2">
                <Layers size={14} className="text-emerald-400" /> LOGIC MATRIX
              </div>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs border-b border-zinc-900 pb-2">
                <Cpu size={14} className="text-emerald-400" /> TOOLING ARCH
              </div>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04: History Registry (Experience) */}
      <section id="experience" className="py-24 border-b border-zinc-800">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-12">
          <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
            [ 04 // INDUSTRIAL HISTORY ]
          </div>
          <div className="md:col-span-2 space-y-12">
            <TimelineItem
              title="Software Engineering Intern"
              company="Esupport Technologies"
              period="OCT 2025 — APR 2026"
              description="Collaborated within an cross-functional Agile team to ship production-grade code layers. Accelerated workflow routing profiles inside corporate CRM software and integrated real-time match data telemetry panels for high-performance cricket live streaming engines."
            />
          </div>
        </div>
      </section>

      {/* 05: Gateways (Contact) */}
      <section id="contact" className="py-24 bg-[#09090b]">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest block mb-2">[ 05 // GATEWAY CONNECTION ]</span>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Start Syncing</h2>
            <p className="text-zinc-400 text-sm font-light mb-6">Open for production-level software placements, advanced application consulting, and collaborative engineering pipelines.</p>
            
            <div className="space-y-2 font-mono text-xs text-zinc-500">
              <a href="https://github.com/NiflanM" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors"><Github size={14} /> github.com/NiflanM</a>
              <a href="https://www.linkedin.com/in/niflan-munzir-06a9b1257/" className="flex items-center gap-2 hover:text-emerald-400 transition-colors"><Linkedin size={14} /> LinkedIn</a>
              <a href="niflanmunzir@gmail.com" className="flex items-center gap-2 hover:text-emerald-400 transition-colors"><Mail size={14} /> Email </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="IDENTIFIER (NAME)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded font-mono text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="TRANSMISSION ENDPOINT (EMAIL)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded font-mono text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                />
              </div>
              <textarea
                placeholder="TRANSMISSION METRICS (MESSAGE SCOPE)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded font-mono text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                required
              />
              <button type="submit" className="px-6 py-4 bg-zinc-900 border border-zinc-800 text-white font-mono text-xs uppercase tracking-wider hover:bg-emerald-400 hover:text-black hover:border-emerald-400 w-full transition-all duration-300">
                Dispatch Transmission
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Structured Minimal Footer */}
      <footer className="py-8 px-6 border-t border-zinc-900 bg-[#070708] font-mono text-[10px] text-zinc-600">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 NIFLAN MUNZIR // ALL RIGHTS RESERVED CODESPACE.</p>
          <div className="flex gap-4">
            <a href="https://github.com/NiflanM" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GH</a>
            <a href="#" className="hover:text-white transition-colors">LN</a>
            <a href="#" className="hover:text-white transition-colors">ML</a>
          </div>
        </div>
      </footer>
    </div>
  );
}