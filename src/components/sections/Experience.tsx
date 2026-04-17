"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Nickelfox Technologies Pvt. Ltd.",
      role: "Software Development Engineer II",
      duration: "Jan 2022 – Present",
      responsibilities: [
        "Built and maintained highly scalable applications using React.js & Next.js.",

        "Significantly improved application performance, security, and Core Web Vitals.",
        "Collaborated cross-functionally with product managers and design teams to deliver seamless user experiences.",
      ],
    },
    {
      id: 2,
      company: "Newton School of Technology",
      role: "Software Developer Intern",
      duration: "Jun 2021 – Dec 2021",
      responsibilities: [
        "Contributed to building web application features using modern frontend technologies.",
        "Collaborated with senior developers to troubleshoot, debug, and optimize code.",
        "Participated in agile ceremonies and sprint planning to deliver tasks on schedule.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Work Experience" subtitle="My professional journey and career highlights." />

        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/50 via-emerald-500/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 top-6 w-8 h-8 rounded-full bg-background border-4 border-blue-500 flex items-center justify-center z-10 hidden md:flex">
                  <Briefcase size={12} className="text-blue-500" />
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className={`glass-panel p-8 rounded-3xl inline-block w-full hover:border-blue-500/30 transition-colors`}>
                    <div className={`flex flex-col mb-4 ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                      <h3 className="text-xl md:text-2xl font-bold font-outfit text-white">{exp.role}</h3>
                      <h4 className="text-lg text-blue-400 font-medium">{exp.company}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2 bg-white/5 px-3 py-1 rounded-full w-fit">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    
                    <ul className={`text-muted-foreground space-y-3 mt-6 ${index % 2 === 0 ? "text-left" : "md:text-right text-left"}`}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className={`flex items-start gap-3 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
