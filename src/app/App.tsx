import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SkillBar } from './components/SkillBar';
import { TimelineItem } from './components/TimelineItem';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  ExternalLink,
  Code2, 
  Layers, 
  Cpu, 
  Download,
  Terminal,
  Compass,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({ name: 'Niflan Munzir', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projects = [
    {
      title: "Driver Drowsiness Detection App",
      id: "PRJ-01",
      tag: "COMPUTER VISION // MOBILE",
      description: "Engineered a Flutter mobile application to detect driver fatigue using computer vision. Achieved high-accuracy processing via an optimized landmark tracking pipeline tailored for low-overhead consumer hardware.",
      techStack: ["Flutter", "Python", "OpenCV", "Dlib"],
      githubUrl: "https://github.com/NiflanM/driver-drowisiness"
    },
    {
      title: "Sweet Shop E-Commerce Platform",
      id: "PRJ-02",
      tag: "FULL-STACK PLATFORM",
      description: "Developed a full-stack e-commerce architecture featuring dynamic inventory management, atomic shopping cart mechanics, and localized state tracking.",
      techStack: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/NiflanM/E-Commerce" 
    },
    {
      title: "Vehicle Rental System",
      id: "PRJ-03",
      tag: "ENTERPRISE CLOUD SYSTEM",
      description: "Designed a secure vehicle booking engine with atomic transactional states, real-time availability workflows, and a live cloud deployment environment.",
      techStack: ["Laravel", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/NiflanM/rental",
      hostedUrl: "https://rental-production-4a15.up.railway.app/"
    },
    {
      title: "Reserve.lk",
      id: "PRJ-04",
      tag: "B2C WEB INFRASTRUCTURE",
      description: "Centralized regional booking operations through custom data normalization layers, route structures, and responsive layouts designed for low-latency lookups.",
      techStack: ["Laravel", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/NiflanM/Reserve.lk"
    }
  ];

  const skills = {
    frontend: [
      { name: "React (JS & TS)", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "Tailwind CSS / Bootstrap", level: 95 },
      { name: "HTML5 / Responsive Design", level: 90 }
    ],
    backend: [
      { name: "Laravel", level: 88 },
      { name: "MySQL & RESTful APIs", level: 85 },
      { name: "Postman API Execution", level: 90 },
      { name: "JMeter Performance Testing", level: 75 }
    ],
    tools: [
      { name: "Git / GitHub Control", level: 90 },
      { name: "Jira / Agile Tracking", level: 80 },
      { name: "Figma UI Prototyping", level: 85 },
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Transmission successful. Niflan will initialize connection shortly.');
      setFormData({ name: 'Niflan Munzir', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-400 selection:bg-cyan-500 selection:text-black font-sans antialiased tracking-normal">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden border-b border-zinc-900/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-[140px] pointer-events-none" />
        
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100,200 Q300,600 800,200 T1800,400" fill="none" stroke="url(#cyan-grad)" strokeWidth="2" />
            <path d="M-50,300 Q400,100 900,500 T1900,200" fill="none" stroke="url(#purple-grad)" strokeWidth="1.5" />
            <defs>
              <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
                <stop offset="100%" stopColor="#7e22ce" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-cyan-950/20 border border-cyan-500/30 rounded-full text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              SYSTEM_STATUS // ACTIVE_FOR_PROJECTS_2026
            </div>
            
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-none">
                Niflan Munzir
              </h1>
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">// Full-Stack Software Engineer</p>
            </div>

            <h2 className="text-lg sm:text-xl text-zinc-300 font-light max-w-2xl leading-relaxed">
              Architecting dependable cross-platform deployments, performant backend routers, and high-fidelity interactive digital experiences.
            </h2>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-500 text-black font-semibold font-mono text-xs uppercase tracking-wider rounded px-6 py-3.5 hover:bg-cyan-400 transition-all flex items-center gap-2 group shadow-lg shadow-cyan-500/20"
              >
                Download CV
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="/Niflan_CV.pdf" 
                download="Niflan_CV.pdf"
                className="bg-zinc-900/80 text-zinc-200 font-semibold font-mono text-xs uppercase tracking-wider rounded px-6 py-3.5 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all flex items-center gap-2"
              >
                <Download size={14} />
                View Portfolio
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block border border-zinc-900 bg-zinc-950/60 backdrop-blur-md p-6 font-mono text-[11px] text-zinc-500 space-y-4 rounded-xl shadow-2xl relative">
            <div className="absolute top-4 right-4 text-[9px] text-zinc-700">CORE_V.2.6</div>
            <div className="flex items-center gap-2 border-b border-zinc-900 pb-3">
              <Terminal size={14} className="text-cyan-400" />
              <span className="text-zinc-300 font-bold tracking-wider">SYSTEM TELEMETRY</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between">
                <span>ENGINEER:</span>
                <span className="text-white font-medium">NIFLAN_MUNZIR</span>
              </div>
              <div className="flex justify-between">
                <span>PRIMARY STACK:</span>
                <span className="text-cyan-400 font-bold">LARAVEL // REACT // FLUTTER</span>
              </div>
              <div className="flex justify-between">
                <span>LOCALE:</span>
                <span className="text-zinc-300">SRI LANKA (LKA)</span>
              </div>
              <div className="flex justify-between">
                <span>COMPILING STATE:</span>
                <span className="text-emerald-400 font-medium">OPTIMIZED_STABLE</span>
              </div>
            </div>
            <div className="pt-2 border-t border-zinc-900 space-y-1.5">
              <span className="text-[10px] text-zinc-600 block">PRODUCTION EFFICIENCY READINESS</span>
              <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full w-[94%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Profile Manifesto */}
      <section id="about" className="py-24 border-b border-zinc-900/40 bg-zinc-950/20">
        <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3 font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold flex items-center lg:items-start gap-2">
            <Compass size={14} className="text-cyan-400" /> 01 // ABOUT MANIFESTO
          </div>
          <div className="lg:col-span-9 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
              Building highly performant operational systems inside agile environments.
            </h3>
            <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed">
              Software Engineering professional with verified hands-on industry experience engineering enterprise infrastructure. Competent within fast-paced teams at <span className="text-white font-normal">Esupport Technologies</span>, scaling complex backend architectures for multi-tenant CRM platforms, live streaming systems, and intuitive cross-platform UI systems.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4 font-mono">
              <div className="p-5 border border-zinc-900 bg-zinc-950/40 rounded-xl space-y-2">
                <div className="text-xs font-bold text-zinc-300 tracking-wider">⚡ CORE COMPETENCIES</div>
                <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                  System tuning optimization, reliable schema mapping, modular pattern implementations, and cross-team Agile tracking.
                </p>
              </div>
              <div className="p-5 border border-zinc-900 bg-zinc-950/40 rounded-xl space-y-2">
                <div className="text-xs font-bold text-zinc-300 tracking-wider">📦 STRUCTURAL INTEGRITY</div>
                <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                  Decoupled client states using enterprise contexts coupled together with strict Laravel authorization rules and REST routers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Selected Engineering Showcases */}
      <section id="projects" className="py-24 border-b border-zinc-900/40">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-zinc-900 gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold block">02 // ARTIFACT REGISTRY</span>
              <h3 className="text-3xl font-bold tracking-tight text-white">Selected Projects</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 border border-zinc-800 p-1 rounded-lg bg-zinc-950/40">
                <button className="p-1.5 text-zinc-600 hover:text-white transition-colors"><ChevronLeft size={16} /></button>
                <button className="p-1.5 text-zinc-600 hover:text-white transition-colors"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>

          {/* Upgraded Premium Project Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="relative bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:border-cyan-500/30 hover:shadow-cyan-500/5 hover:-translate-y-1 overflow-hidden"
              >
                {/* Visual Ambient Glow Behind Card Top Left */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent blur-xl pointer-events-none transition-opacity duration-300 opacity-50 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-5 font-mono">
                    <span className="text-xs font-bold text-zinc-600 px-2 py-0.5 bg-zinc-950/60 rounded border border-zinc-800/40">{project.id}</span>
                    <span className="text-[10px] font-medium text-cyan-400 tracking-wider bg-cyan-950/30 px-2.5 py-0.5 rounded-full border border-cyan-900/30">
                      {project.tag}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>
                
                <div className="relative z-10 space-y-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono text-zinc-300 bg-zinc-950/60 px-2.5 py-1 rounded-md border border-zinc-800/60 shadow-sm group-hover:border-zinc-700/60 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-900/80 font-mono text-xs">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-zinc-300 hover:text-black transition-all flex items-center gap-1.5 font-semibold bg-zinc-950/80 hover:bg-cyan-400 px-4 py-2 rounded-xl border border-zinc-800/80 hover:border-cyan-400 shadow-md flex-1 justify-center"
                      >
                        <Github size={14} /> View on GitHub
                      </a>
                    )}
                    {project.hostedUrl && (
                      <a 
                        href={project.hostedUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-white transition-all flex items-center gap-1.5 font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-4 py-2 rounded-xl shadow-md flex-1 justify-center border border-purple-500/20"
                      >
                        Live Instance <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Capability Matrix */}
      <section id="skills" className="py-24 border-b border-zinc-900/40 bg-zinc-950/20">
        <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold block">03 // ENGINE CAPABILITIES</span>
            <h3 className="text-3xl font-bold tracking-tight text-white">Core Capabilities</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs">
              Structural analysis of client layouts, operational database engineering setups, and integration controls.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="space-y-4 bg-zinc-950/50 p-5 rounded-2xl border border-zinc-900">
              <div className="flex items-center gap-2 text-zinc-200 font-mono text-xs border-b border-zinc-900 pb-3 font-bold tracking-wider">
                <Code2 size={14} className="text-cyan-400" /> FRONTEND
              </div>
              <div className="space-y-3">
                {skills.frontend.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-4 bg-zinc-950/50 p-5 rounded-2xl border border-zinc-900">
              <div className="flex items-center gap-2 text-zinc-200 font-mono text-xs border-b border-zinc-900 pb-3 font-bold tracking-wider">
                <Layers size={14} className="text-purple-400" /> BACKEND
              </div>
              <div className="space-y-3">
                {skills.backend.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-4 bg-zinc-950/50 p-5 rounded-2xl border border-zinc-900">
              <div className="flex items-center gap-2 text-zinc-200 font-mono text-xs border-b border-zinc-900 pb-3 font-bold tracking-wider">
                <Cpu size={14} className="text-cyan-400" /> TOOLS
              </div>
              <div className="space-y-3">
                {skills.tools.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Industrial History */}
      <section id="experience" className="py-24 border-b border-zinc-900/40">
        <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3 font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold flex items-center lg:items-start gap-2">
            <Briefcase size={14} className="text-cyan-400" /> 04 // WORK HISTORY
          </div>
          <div className="lg:col-span-9">
            <TimelineItem
              title="Software Engineering Intern"
              company="Esupport Technologies"
              period="OCT 2025 — APR 2026"
              description="Collaborated within a cross-functional Agile engineering squad to ship production-ready system updates. Refined relational logic loops and indexed critical query frameworks inside multi-tenant CRM architectures. Implemented live pipeline telemetry components to support streaming setups managing high-frequency data matrices."
            />
          </div>
        </div>
      </section>

      {/* Section 05: Contact Terminal */}
      <section id="contact" className="py-24 bg-zinc-950/20">
        <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold block">05 // HUB TERMINAL</span>
              <h3 className="text-3xl font-bold tracking-tight text-white">Let's Connect</h3>
            </div>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Available for full-time engineering placements, cross-platform consulting, or production backend updates.
            </p>
            
            <div className="space-y-3 font-mono text-xs pt-2">
              <a href="https://github.com/NiflanM" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-zinc-400 hover:text-cyan-400 transition-colors">
                <Github size={14} /> github.com/NiflanM
              </a>
              <a href="https://www.linkedin.com/in/niflan-munzir-06a9b1257/" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-zinc-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={14} /> linkedin.com/in/niflan-munzir
              </a>
              <a href="mailto:niflanmunzir@gmail.com" className="flex items-center gap-2.5 text-zinc-400 hover:text-cyan-400 transition-colors">
                <Mail size={14} /> niflanmunzir@gmail.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 border border-zinc-900 bg-zinc-950/60 p-6 sm:p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Identity Name</label>
                  <input
                    type="text"
                    placeholder="Niflan Munzir"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-xl text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-cyan-500 transition-all"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    placeholder="niflanmunzir@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-xl text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-cyan-500 transition-all"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Message Scope / Payload</label>
                <textarea
                  placeholder="Outline product vision, scope parameters, or engineering role criteria..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-xl text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                  required
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl shadow transition-all disabled:opacity-30"
              >
                {isSubmitting ? 'Transmitting...' : 'Broadcast Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-zinc-900 bg-[#030305] font-mono text-xs text-zinc-600">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Niflan Munzir. All systems functional.</p>
          <div className="flex gap-6">
            <a href="https://github.com/NiflanM" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/niflan-munzir-06a9b1257/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}