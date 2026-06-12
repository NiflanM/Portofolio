import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close mobile drawer immediately
    
    // Tiny delay allows state/scroll sync to finish cleanly without jerky movement
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navItems = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-[#050507]/90 backdrop-blur-md border-b border-zinc-900/80 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative z-50">
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection('home')}
          className="text-base sm:text-lg font-mono font-black tracking-wider text-white cursor-pointer hover:text-cyan-400 transition-colors"
        >
          NIFLAN MUNZIR
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-zinc-400 hover:text-cyan-400 transition-colors duration-200 capitalize relative py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Action Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-[#050507] z-40 flex flex-col justify-center items-center md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        {/* Subtle cyber background tech mesh lines for mobile frame depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent opacity-40 pointer-events-none" />
        
        <ul className="space-y-6 text-center font-mono relative z-10">
          {navItems.map((item, index) => (
            <li 
              key={item}
              className={`transition-all duration-300 delay-[${index * 50}ms] ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={() => scrollToSection(item)}
                className="text-xl font-medium tracking-widest text-zinc-300 hover:text-cyan-400 active:text-cyan-400 transition-colors capitalize px-6 py-2 block w-full"
              >
                <span className="text-[10px] text-zinc-600 mr-2 font-bold">0{index + 1} //</span>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}