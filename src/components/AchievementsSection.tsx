import { motion } from "framer-motion";
import { Trophy, Code2, Award, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Flipkart GRiD 7.0",
    desc: "National Semi-Finalist — top performers among thousands of competing teams nationwide.",
  },
  {
    icon: Award,
    title: "JAGSoM Next Gen Minds 2025",
    desc: "Finalist — recognized for innovative thinking and technical execution.",
  },
  {
    icon: Code2,
    title: "250+ DSA Problems",
    desc: "Consistent problem solver on LeetCode, sharpening algorithmic thinking daily.",
  },
  {
    icon: GraduationCap,
    title: "Stanford & DeepLearning.AI",
    desc: "Certified in Supervised Machine Learning — strong theoretical ML foundation.",
  },
  {
    icon: Award,
    title: "Walmart Sparkathon",
    desc: "Certificate of Appreciation at Converge 2025 — recognized for impactful contribution.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Milestones & <span className="text-gradient">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 group hover:border-primary/30 transition-colors"
            >
              <item.icon size={22} className="text-primary mb-4" />
              <h3 className="font-display font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
