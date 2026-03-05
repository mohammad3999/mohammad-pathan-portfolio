import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "All Digital Live",
    location: "Remote",
    role: "Junior Frontend Developer",
    period: "April 2024 – January 2026",
    project: "Decentralized Applications (DApps) UI",
    points: [
      "Led frontend development of DApps, creating interactive and secure UIs with React.js and Hooks",
      "Built reusable React components and managed state with Context API & useState",
      "Integrated RESTful APIs with JWT authentication and connected with blockchain services",
      "Ensured responsive, cross-browser UI using CSS3 and Tailwind CSS",
      "Collaborated with backend teams for API specs and debugging",
      "Used Git/GitHub for version control and code reviews",
    ],
  },
  {
    company: "Ezio Infotech Pvt. Ltd.",
    location: "Pune, India",
    role: "Associate Frontend Developer",
    period: "July 2022 – April 2024",
    project: "DipShri E-commerce Platform (Food & Spices)",
    points: [
      "Developed UI for DipShri E-commerce Platform — Product Listing, Cart, and Checkout modules",
      "Used Redux Toolkit for managing complex state (cart & authentication)",
      "Built secure user registration & authentication flows with form validation",
      "Integrated payment gateway APIs ensuring smooth transactions",
      "Optimized performance with code splitting, lazy loading, memoization",
      "Supported deployment pipelines with AWS (S3/CloudFront)",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">02 — Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Where I've <span className="text-gradient">Worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 * i }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <Briefcase size={18} className="text-primary" />
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company} <span className="text-muted-foreground">• {exp.location}</span></p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <p className="text-accent font-medium text-sm mb-4">Project: {exp.project}</p>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-3">
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
