"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

export const Skills = () => {
  const categories = [
    {
      title: "Frontend Core",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      title: "Styling & UI",
      skills: ["Tailwind CSS", "SCSS", "Material UI", "Framer Motion", "Responsive Design", "Glassmorphism"],
    },
    {
      title: "State Management & APIs",
      skills: ["Redux", "Redux Toolkit", "Context API", "REST APIs", "React Query"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "AWS", "Jira", "VS Code", "Webpack", "Vite"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with on a daily basis." />

        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold font-outfit mb-6 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-neutral-300 hover:text-white rounded-lg text-sm font-medium transition-all cursor-default"
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
