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
  const projects = [
    {
      
      title: "Accessories E-Commerce",
      id: "PRJ-01",
      tag: "FULL-STACK WEB",
      description: "Designed a full fleged E-Commerce Web Application with all features required. ",
      techStack: ["React", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/NiflanM/E-Commerce-Accessories",
      hostedUrl: "https://e-commerce-accessories.vercel.app"
    },
    {
      title: "Vehicle Rental System",
      id: "PRJ-02",
      tag: "ENTERPRISE CLOUD SYSTEM",
      description: "Designed a secure vehicle booking engine with atomic transactional states, real-time availability workflows, and a live cloud deployment environment.",
      techStack: ["Laravel", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/NiflanM/rental",
      hostedUrl: "https://rentalslk.infinityfreeapp.com"
    },
    {
      title: "Driver Drowsiness Detection App",
      id: "PRJ-03",
      tag: "COMPUTER VISION // MOBILE",
      description: "Engineered a Flutter mobile application to detect driver fatigue using computer vision. Achieved high-accuracy processing via an optimized landmark tracking pipeline tailored for low-overhead consumer hardware.",
      techStack: ["Flutter", "Python", "OpenCV", "Dlib"],
      githubUrl: "https://github.com/NiflanM/driver-drowisiness"
    },
    {
      title: "Sweet Shop E-Commerce Platform",
      id: "PRJ-04",
      tag: "FULL-STACK PLATFORM",
      description: "Developed a full-stack e-commerce architecture featuring dynamic inventory management, atomic shopping cart mechanics, and localized state tracking.",
      techStack: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/NiflanM/E-Commerce" 
    },
    {
      title: "Reserve.lk",
      id: "PRJ-05",
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

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-400 selection:bg-cyan-500 selection:text-black font-sans antialiased tracking-normal overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden border-b border-zinc-900/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[350px] bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="grid-cols-1 lg:col-span-8 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-cyan-950/20 border border-cyan-500/30 rounded-full text-[9px] sm:text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              SYSTEM_STATUS // ACTIVE_FOR_PROJECTS_2026
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight lg:leading-none">
                Niflan Munzir
              </h1>
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-cyan-400">// Full-Stack Software Engineer</p>
            </div>

            <h2 className="text-base sm:text-lg md:text-xl text-zinc-300 font-light max-w-2xl leading-relaxed">
              Architecting dependable cross-platform deployments, performant backend routers, and high-fidelity interactive digital experiences.
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <a
                href="/Niflan_CV.pdf" 
                download="Niflan_CV.pdf"
                className="bg-cyan-500 text-black font-semibold font-mono text-xs uppercase tracking-wider rounded px-6 py-3.5 hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
              >
                <Download size={14} />
                Download CV
              </a>
              
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-zinc-900/80 text-zinc-200 font-semibold font-mono text-xs uppercase tracking-wider rounded px-6 py-3.5 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                View Portfolio
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Telemetry Panel - Visible on large screens, cleanly stacked/hidden on smaller break points */}
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
      <section id="about" className="py-16 sm:py-24 border-b border-zinc-900/40 bg-zinc-950/20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="grid-cols-1 lg:col-span-3 font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2 self-start">
            <Compass size={14} className="text-cyan-400" /> 01 // ABOUT MANIFESTO
          </div>
          <div className="grid-cols-1 lg:col-span-9 space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
              Building highly performant operational systems inside agile environments.
            </h3>
            <p className="text-zinc-400 font-light text-sm sm:text-base md:text-lg leading-relaxed">
              Software Engineering professional with verified hands-on industry experience engineering enterprise infrastructure. Competent within fast-paced teams at <span className="text-white font-normal">Esupport Technologies</span>, scaling complex backend architectures for multi-tenant CRM platforms, live streaming systems, and intuitive cross-platform UI systems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono">
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
      <section id="projects" className="py-16 sm:py-24 border-b border-zinc-900/40">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-zinc-900 gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold block">02 // ARTIFACT REGISTRY</span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Selected Projects</h3>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <div className="flex gap-1.5 border border-zinc-800 p-1 rounded-lg bg-zinc-950/40">
                <button className="p-1.5 text-zinc-600 hover:text-white transition-colors"><ChevronLeft size={16} /></button>
                <button className="p-1.5 text-zinc-600 hover:text-white transition-colors"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="relative bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:border-cyan-500/30 hover:shadow-cyan-500/5 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent blur-xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 font-mono">
                    <span className="text-xs font-bold text-zinc-600 px-2 py-0.5 bg-zinc-950/60 rounded border border-zinc-800/40">{project.id}</span>
                    <span className="text-[9px] sm:text-[10px] font-medium text-cyan-400 tracking-wider bg-cyan-950/30 px-2.5 py-0.5 rounded-full border border-cyan-900/30">
                      {project.tag}
                    </span>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>
                
                <div className="relative z-10 space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] sm:text-[11px] font-mono text-zinc-300 bg-zinc-950/60 px-2.5 py-1 rounded-md border border-zinc-800/60 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 pt-4 border-t border-zinc-900/80 font-mono text-xs w-full">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-zinc-300 hover:text-black transition-all flex items-center gap-1.5 font-semibold bg-zinc-950/80 hover:bg-cyan-400 px-4 py-2.5 rounded-xl border border-zinc-800/80 hover:border-cyan-400 shadow-md w-full sm:flex-1 justify-center"
                      >
                        <Github size={14} /> View on GitHub
                      </a>
                    )}
                    {project.hostedUrl && (
                      <a 
                        href={project.hostedUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white transition-all flex items-center gap-1.5 font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-4 py-2.5 rounded-xl shadow-md w-full sm:flex-1 justify-center border border-purple-500/20"
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
      <section id="skills" className="py-16 sm:py-24 border-b border-zinc-900/40 bg-zinc-950/20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="grid-cols-1 lg:col-span-4 space-y-3 sm:space-y-4">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold block">03 // ENGINE CAPABILITIES</span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Core Capabilities</h3>
            <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed max-w-xs">
              Structural analysis of client layouts, operational database engineering setups, and integration controls.
            </p>
          </div>
          
          <div className="grid-cols-1 lg:col-span-8 grid md:grid-cols-3 gap-4 sm:gap-6">
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
      <section id="experience" className="py-16 sm:py-24 border-b border-zinc-900/40">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="grid-cols-1 lg:col-span-3 font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2 self-start">
            <Briefcase size={14} className="text-cyan-400" /> 04 // WORK HISTORY
          </div>
          <div className="grid-cols-1 lg:col-span-9">
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
      <section id="contact" className="py-16 sm:py-24 bg-[#050507] relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-cyan-500/5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="border border-zinc-900 bg-zinc-950/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden">
            <div className="absolute top-4 right-6 hidden sm:block text-[9px] font-mono tracking-widest text-zinc-700">NODE // COMMS_ROUTER_v3.0</div>
            
            {/* Left Content Column */}
            <div className="grid-cols-1 lg:col-span-5 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-cyan-950/30 border border-cyan-500/20 rounded-md text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                05 // HUB TERMINAL
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                  Let's Connect.
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Available for full-time engineering placements, cross-platform consulting, or production backend architecture updates. 
                </p>
              </div>
              <p className="text-zinc-600 font-mono text-[10px] sm:text-[11px] pt-1 sm:pt-2">
                // Click a vector to initialize handshake sequence.
              </p>
            </div>
            
            {/* Right Interactive Channels Column */}
            <div className="grid-cols-1 lg:col-span-7 space-y-3 w-full">
              {/* GitHub Link Card */}
              <a 
                href="https://github.com/NiflanM" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between p-3.5 sm:p-4 bg-zinc-900/10 border border-zinc-900/80 rounded-2xl hover:border-cyan-500/30 hover:bg-zinc-900/30 transition-all duration-300 group shadow-sm"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="p-2.5 sm:p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-colors shadow-inner flex-shrink-0">
                    <Github size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-zinc-500 uppercase">Code Repository</span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors block truncate">github.com/NiflanM</span>
                  </div>
                </div>
                <div className="text-zinc-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all pr-1 flex-shrink-0">
                  <ArrowRight size={16} />
                </div>
              </a>

              {/* LinkedIn Link Card */}
              <a 
                href="https://www.linkedin.com/in/niflan-munzir-06a9b1257/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between p-3.5 sm:p-4 bg-zinc-900/10 border border-zinc-900/80 rounded-2xl hover:border-cyan-500/30 hover:bg-zinc-900/30 transition-all duration-300 group shadow-sm"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="p-2.5 sm:p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-colors shadow-inner flex-shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-zinc-500 uppercase">Professional Network</span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors block truncate">niflan-munzir</span>
                  </div>
                </div>
                <div className="text-zinc-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all pr-1 flex-shrink-0">
                  <ArrowRight size={16} />
                </div>
              </a>

              {/* Email Link Card */}
              <a 
                href="mailto:niflanmunzir@gmail.com" 
                className="flex items-center justify-between p-3.5 sm:p-4 bg-zinc-900/10 border border-zinc-900/80 rounded-2xl hover:border-cyan-500/30 hover:bg-zinc-900/30 transition-all duration-300 group shadow-sm"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="p-2.5 sm:p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-colors shadow-inner flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-zinc-500 uppercase">Direct Transmission</span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors block truncate">niflanmunzir@gmail.com</span>
                  </div>
                </div>
                <div className="text-zinc-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all pr-1 flex-shrink-0">
                  <ArrowRight size={16} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-zinc-900 bg-[#030305] font-mono text-[11px] sm:text-xs text-zinc-600">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left">© 2026 Niflan Munzir. All systems functional.</p>
          <div className="flex gap-6">
            <a href="https://github.com/NiflanM" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/niflan-munzir-06a9b1257/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}