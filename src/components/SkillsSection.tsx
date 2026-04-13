import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "SQL"],
  },
  {
    title: "AI / ML",
    skills: ["Reinforcement Learning", "GANs", "Supervised ML", "Computer Vision"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "OpenCV", "MediaPipe", "NumPy", "Firebase"],
  },
  {
    title: "Core CS",
    skills: ["Data Structures & Algorithms", "DBMS", "OOP", "System Design"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Clerk", "Google Gemini API"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 group hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-display font-semibold text-primary uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
