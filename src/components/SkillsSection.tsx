import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React.js", level: 95 },
  { name: "JavaScript (ES6+)", level: 92 },
  { name: "TypeScript", level: 80 },
  { name: "HTML5 / CSS3", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Redux / Context API", level: 85 },
  { name: "RESTful APIs", level: 88 },
  { name: "Git / GitHub", level: 85 },
  { name: "Responsive Design", level: 93 },
  { name: "Web3 / DApps", level: 70 },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">03 — Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="glass rounded-xl p-5"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-primary font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + 0.08 * i, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, hsl(175 80% 50%), hsl(280 70% 60%))",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
