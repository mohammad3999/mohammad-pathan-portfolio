import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">01 — About</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl"
        >
          Results-driven Frontend Developer with 3+ years of hands-on experience specializing in building highly responsive, performant, and scalable user interfaces using React.js. Expert in modern JavaScript (ES6+), component-based architecture, and state management (Context API, Redux).
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mt-4"
        >
          Proven ability to translate high-fidelity design concepts into pixel-perfect, accessible web applications and seamlessly integrate with complex RESTful APIs. Strong understanding of UI/UX best practices, committed to writing clean, modular, and maintainable code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "React", label: "Specialization" },
            { value: "DApps", label: "Web3 Projects" },
            { value: "E-Com", label: "Platforms Built" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
