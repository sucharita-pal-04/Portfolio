import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Code2, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's build something <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Open to SWE and AI/ML opportunities — internships, collaborations, or just a good conversation about tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass rounded-2xl p-8 glow-border mb-10"
        >
          <a
            href="mailto:sucharita.pal04@gmail.com"
            className="inline-flex items-center gap-2 text-lg font-display font-semibold text-primary hover:opacity-80 transition-opacity mb-4"
          >
            <Mail size={20} />
            sucharita.pal04@gmail.com
            <ArrowUpRight size={16} />
          </a>
          <p className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Phone size={14} />
            +91 8887627826
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 Sucharita Pal. Designed & built with precision.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
