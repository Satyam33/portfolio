"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 blur-[120px] rounded-full point-events-none" />
      <div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[100px] rounded-full point-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={item} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-sm font-medium text-emerald-400">Available for new opportunities</p>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-outfit">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Satyam Limbani</span>
          </motion.h1>

          <motion.h2 variants={item} className="text-2xl md:text-4xl font-semibold mb-8 text-neutral-300">
            Software Development Engineer
          </motion.h2>

          <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Building scalable, high-performance web applications. <br className="hidden md:block" />
            4.5+ years experience | SDE II @ Nickelfox
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 border-white/10">
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <a
              href="/satyam_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors flex items-center justify-center gap-2 border border-white/10"
            >
              Download Resume <Download size={18} />
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-center gap-6 mt-16 text-muted-foreground">
            <a href="https://linkedin.com/in/satyam-limbani" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:scale-110 transform">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:satyamlimbani2510@gmail.com" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:scale-110 transform">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Satyam33" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:scale-110 transform">
              <FaGithub size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
