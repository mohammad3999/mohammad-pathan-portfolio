import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "mohammadpathan3999@gmail.com", href: "mailto:mohammadpathan3999@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8626015912", href: "tel:+918626015912" },
  { icon: MapPin, label: "Location", value: "Pune, India", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "mohammadkha-pathan", href: "https://linkedin.com/in/mohammadkha-pathan" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">04 — Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12">
            I'm always open to new opportunities and interesting projects. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon size={20} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="text-sm text-foreground font-medium">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center text-sm text-muted-foreground">
        <p>© 2026 Mohammadkha Pathan. Built with React & Three.js</p>
      </div>
    </section>
  );
}
