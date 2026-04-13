import { motion } from "framer-motion";
import { ExternalLink, Shield, Brain, Hand } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "InsiderForge",
    tagline: "AI-Powered Insider Threat Simulation",
    problem: "Organizations lack realistic adversarial simulations to stress-test their insider threat detection systems.",
    approach: "Designed a dynamic simulation engine combining Reinforcement Learning agents with GANs to generate realistic attack patterns on the CERT dataset.",
    stack: ["Reinforcement Learning", "GANs", "Python", "CERT Dataset"],
    impact: "Enables security teams to evaluate detection pipelines against evolving, synthetic insider threats — improving resilience before real incidents occur.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "AI Mock Interviewer",
    tagline: "Intelligent Interview Prep Platform",
    problem: "Candidates lack access to personalized, realistic interview practice with actionable feedback.",
    approach: "Built a full-stack platform using Google Gemini AI for adaptive question generation and real-time performance analysis, with Clerk for auth and Firebase for persistence.",
    stack: ["React.js", "Google Gemini API", "Clerk", "Firebase Firestore"],
    impact: "Delivers personalized interview simulations with tracked analytics, helping users identify weak areas and improve systematically.",
    color: "accent",
  },
  {
    icon: Hand,
    title: "NexaGesture",
    tagline: "Real-Time Gesture Control System",
    problem: "Traditional input devices limit accessibility and hands-free interaction scenarios.",
    approach: "Engineered a computer vision pipeline using MediaPipe for hand tracking, mapping detected gestures to system-level controls like volume and brightness in real time.",
    stack: ["Python", "OpenCV", "MediaPipe", "NumPy", "Pycaw"],
    impact: "Achieved responsive hands-free control with extensible architecture ready for IoT and smart home integration.",
    color: "primary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Featured <span className="text-gradient">Case Studies</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-8 md:p-10 glow-border group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-${project.color}/10`}>
                  <project.icon size={24} className={`text-${project.color}`} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.tagline}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-xs text-primary font-display uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-primary font-display uppercase tracking-wider mb-2">Approach</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
                </div>
                <div>
                  <p className="text-xs text-primary font-display uppercase tracking-wider mb-2">Impact</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
