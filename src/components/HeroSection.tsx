import { motion } from "framer-motion";
import { ArrowDown, Code2, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* Deep background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/5" />

      {/* Far parallax background orbs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] parallax-layer parallax-layer-3"
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
        }}
      />
      <div
        className="absolute bottom-[-200px] right-[-150px] w-[700px] h-[700px] bg-accent/5 rounded-full blur-[150px] parallax-layer parallax-layer-3"
        style={{
          transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
        }}
      />

      {/* Mid-depth floating orbs with animation */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] animate-pulse-glow parallax-layer parallax-layer-2 floating-slow"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/8 rounded-full blur-[120px] animate-pulse-glow parallax-layer parallax-layer-2 floating-delayed"
        style={{
          transform: `translate(${mousePosition.x * -0.35}px, ${mousePosition.y * -0.35}px)`,
          animationDelay: "2s"
        }}
      />

      {/* Close parallax orbs with enhanced responsiveness */}
      <div
        className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary/12 rounded-full blur-[100px] animate-pulse-glow parallax-layer parallax-layer-1 floating"
        style={{
          transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[90px] animate-pulse-glow parallax-layer parallax-layer-1"
        style={{
          transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
          animationDelay: "1.5s"
        }}
      />

      {/* Grid pattern with depth and enhanced perspective */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)] parallax-layer parallax-layer-2" />

      {/* Network-style 3D background */}
      <div className="absolute inset-0 hero-network-bg" />
      <div
        className="absolute inset-0 hero-network-lines parallax-layer parallax-layer-2"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      />
      <div className="absolute inset-0 hero-network-grid parallax-layer parallax-layer-3" />
      <div
        className="absolute inset-0 hero-network-nodes parallax-layer parallax-layer-1"
        style={{
          transform: `translate(${mousePosition.x * 0.25}px, ${mousePosition.y * 0.25}px)`,
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4 text-float">
            AI/ML Engineer · Software Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-3d interactive-3d">
            Sucharita{" "}
            <span className="text-foreground">Pal</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-light leading-relaxed shine-effect">
            Building intelligent systems at the intersection of
            <span className="text-foreground font-medium"> reinforcement learning</span>,
            <span className="text-foreground font-medium"> computer vision</span>, and
            <span className="text-foreground font-medium"> full-stack engineering</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-display text-sm font-semibold hover:border-primary/50 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/sucharita-pal-04", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sucharita-p-2b2305293/", label: "LinkedIn" },
            { icon: Code2, href: "https://leetcode.com/u/pal_178/", label: "LeetCode" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={18} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
