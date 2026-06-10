import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { ProjectCard } from './components/ProjectCard';
import { SkillBar } from './components/SkillBar';
import { TimelineItem } from './components/TimelineItem';
import { Github, Linkedin, Mail, ArrowUpRight, ArrowRight, ExternalLink, Globe } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A production-grade, highly scalable e-commerce infrastructure featuring seamless stripe payment routing, localized tax handling, and an enterprise management console.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Enterprise-grade real-time collaborative hub built for high-throughput messaging, instant global state syncing, and cross-platform fluid task structures.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      techStack: ["Flutter", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Content Generator",
      description: "An advanced orchestration layer leveraging custom LLM templates, automated contextual prompting, and lightning-fast static page generation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      techStack: ["Next.js", "OpenAI", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "High-performance operational engine rendering tens of thousands of complex real-time metrics per second via responsive D3 visualization layers.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      techStack: ["React", "D3.js", "AWS", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const skills = {
    frontend: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Flutter", level: 85 }
    ],
    backend: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Django", level: 82 },
      { name: "PostgreSQL / MongoDB", level: 85 },
      { name: "REST / GraphQL APIs", level: 90 }
    ],
    tools: [
      { name: "Git / GitHub", level: 93 },
      { name: "AWS / Cloud Services", level: 80 },
      { name: "Docker / CI/CD", level: 78 },
      { name: "Figma / Design", level: 75 }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f4f4f6] selection:bg-zinc-800 selection:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle dynamic grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        <div className="container mx-auto max-w-5xl text-center relative z-10 pt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur text-xs tracking-wider text-zinc-400 uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for Select Roles & Consultations
          </div>

          <h1 className="text-5xl md:text-8xl font-medium tracking-tight mb-6 text-white">
            John Developer
          </h1>

          <p className="text-xl md:text-3xl font-light text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building premium digital experiences, robust system architectures, and scalable web solutions.
          </p>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-black hover:bg-zinc-200 transition-all font-medium rounded-md px-6 py-3 flex items-center gap-2 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects 
              <ArrowRight className="text-black group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-zinc-800 text-zinc-300 hover:bg-zinc-900/50 hover:text-white transition-all rounded-md px-6 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 border-t border-zinc-900 bg-[#0c0c0e]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-500 sticky top-32">
                01 // Biography
              </h2>
            </div>
            <div className="md:col-span-2 space-y-8">
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                I am a Full Stack Developer with over five years of professional experience crafting robust web infrastructures and premium client applications. 
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Specializing in structural reliability, clean functional programming architectures, and responsive ecosystems. I convert granular product concepts into highly optimized web experiences. Beyond shipping application features, I design optimized internal tools, write developer blogs, and audit system performances.
              </p>
              
              {/* Refined Mini-Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-zinc-900">
                <div>
                  <h4 className="text-3xl font-light text-white">5+</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-light text-white">20+</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Shipped Projects</p>
                </div>
                <div>
                  <h4 className="text-3xl font-light text-white">40%</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Perf. Improvements</p>
                </div>
                <div>
                  <h4 className="text-3xl font-light text-white">Open</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Source Contributor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 border-t border-zinc-900">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-20">
            <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              02 // Selected Work
            </h2>
            <p className="text-3xl font-light text-zinc-300">
              A curated showcase of recent production builds and architecture pieces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden bg-zinc-900 aspect-video rounded-lg border border-zinc-800/60 mb-6 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 bg-black/80 rounded-full backdrop-blur border border-zinc-800 text-white hover:text-emerald-400">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-medium text-white group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4 font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800/40">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section id="skills" className="py-32 px-6 border-t border-zinc-900 bg-[#0c0c0e]">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-20">
            <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              03 // Core Competencies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-6 pb-3 border-b border-zinc-900">
                Frontend Stack
              </h3>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-6 pb-3 border-b border-zinc-900">
                Backend Systems
              </h3>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-6 pb-3 border-b border-zinc-900">
                DevOps & Architecture
              </h3>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <SkillBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 border-t border-zinc-900">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-500 sticky top-32">
                04 // Professional History
              </h2>
            </div>
            <div className="md:col-span-2 divide-y divide-zinc-900">
              <div className="pb-8">
                <TimelineItem
                  title="Senior Full Stack Developer"
                  company="Tech Innovations Inc."
                  period="Jan 2023 - Present"
                  description="Orchestrating cloud-native deployment patterns across distributed services. Overseeing software engineering quality metrics, scaling core systems with AWS infrastructure, and mentoring cross-functional product crews."
                />
              </div>

              <div className="py-8">
                <TimelineItem
                  title="Full Stack Developer"
                  company="Digital Solutions Co."
                  period="Mar 2021 - Dec 2022"
                  description="Engineered modular UI components and modern API microservices. Constructed automated CI/CD tooling loops that minimized product turnaround times and improved core engine speeds by 40%."
                />
              </div>

              <div className="pt-8">
                <TimelineItem
                  title="Frontend Developer Intern"
                  company="Startup Labs"
                  period="Jun 2020 - Feb 2021"
                  description="Wrote pixel-perfect, highly operational application layers. Participated in structural UI design tokens and contributed to system architecture consistency models."
                  isLast
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 border-t border-zinc-900 bg-[#0c0c0e]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
                05 // Connection Channel
              </h2>
              <h3 className="text-3xl font-light text-white mb-6">
                Let's scope a project.
              </h3>
              <p className="text-zinc-400 mb-8 leading-relaxed font-light">
                Seeking a senior consultant, enterprise software implementation, or custom architectural consulting? Shoot over a transmission.
              </p>

              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                  <Github size={16} /> github.com/johndeveloper
                </a>
                <a href="#" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                  <Linkedin size={16} /> linkedin.com/in/johndeveloper
                </a>
                <a href="#" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                  <Mail size={16} /> john@developer.com
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900/40 border border-zinc-800 rounded focus:outline-none focus:border-zinc-500 text-white placeholder-zinc-600 text-sm transition-colors"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900/40 border border-zinc-800 rounded focus:outline-none focus:border-zinc-500 text-white placeholder-zinc-600 text-sm transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Brief Project Scope Description"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-900/40 border border-zinc-800 rounded focus:outline-none focus:border-zinc-500 text-white placeholder-zinc-600 text-sm transition-colors resize-none"
                    required
                  />
                </div>
                <button type="submit" className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium transition-colors rounded">
                  Send Transmission
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 text-zinc-600 text-xs font-mono">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 John Developer. System Architecture Engineered with React & Tailwind.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors"><Github size={16} /></a>
            <a href="#" className="hover:text-zinc-400 transition-colors"><Linkedin size={16} /></a>
            <a href="#" className="hover:text-zinc-400 transition-colors"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}