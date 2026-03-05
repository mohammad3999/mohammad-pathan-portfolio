import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import { Download, Mail, MapPin, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
        >
          Frontend Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-foreground">Mohammadkha</span>
          <br />
          <span className="text-gradient">Pathan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Crafting highly responsive, performant & scalable user interfaces with 3+ years of React.js expertise
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-primary" /> Pune, India
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-primary" /> +91 8626015912
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-primary" /> mohammadpathan3999@gmail.com
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1Z2gkmjrxXKWOiBtBh8qx5JmvccytUKIN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm font-medium shadow-lg shadow-primary/25"
          >
            <Download size={16} /> Hire Me
          </a>
          <a
            href="#about"
            className="inline-block px-8 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 glow-primary text-sm font-medium"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
