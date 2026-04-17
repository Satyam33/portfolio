"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Code, FastForward, Users, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <FastForward className="text-blue-400" size={24} />,
      title: "4.9+ Years Experience",
      desc: "Proven track record of building production-ready applications.",
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Performance Optimization",
      desc: "Obsessed with Core Web Vitals, fast load times, and smooth UI.",
    },

    {
      icon: <Code className="text-purple-400" size={24} />,
      title: "Scalable Architecture",
      desc: "Designing resilient frontend architectures with React & Next.js.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="A passionate Frontend Engineer dedicated to creating exceptional digital experiences." 
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full point-events-none" />
            <h3 className="text-2xl font-bold mb-4 font-outfit">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a Software Development Engineer with nearly 5 years of experience, I specialize in building scalable, 
              high-performance web applications using React.js and Next.js. My core focus lies in performance 
              optimization, accessibility, and crafting pixel-perfect user interfaces that leave a lasting impression.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Throughout my career, particularly as an SDE II at Nickelfox, I&apos;ve had the privilege of delivering robust production-ready applications 
              in fast-paced startup environments. I bridge the gap between design and engineering to create 
              products that look beautiful and function flawlessly.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl hover:bg-white/[0.08] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
