import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Turning complex problems into{" "}
            <span className="text-gradient">elegant solutions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-10 glow-border card-3d floating magnetic-hover"
        >
          <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
            I'm a final-year Computer Science student specializing in AI/ML at Dr. A.P.J. Abdul Kalam Technical University,
            with a strong foundation in data structures, machine learning, and systems thinking. My work spans from
            designing <span className="text-foreground">insider threat detection systems</span> using reinforcement learning and GANs
            to building <span className="text-foreground">AI-powered interview platforms</span> and <span className="text-foreground">real-time gesture recognition systems</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
            I thrive on building software that is both technically deep and user-centric — whether that means training
            adversarial models for cybersecurity or crafting intuitive interfaces powered by computer vision.
          </p>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: GraduationCap, text: "B.Tech CSE (AI/ML) — CGPA 8.3" },
              { icon: MapPin, text: "Kanpur, India" },
              { icon: Sparkles, text: "250+ LeetCode Problems" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground magnetic-hover">
                <Icon size={16} className="text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
