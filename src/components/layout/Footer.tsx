"use client";

import { Mail, ArrowUp } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-md mt-24">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Satyam<span className="text-primary">.dev</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Satyam Limbani. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/satyam-limbani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:satyamlimbani2510@gmail.com"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
          >
            <Mail size={20} />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors flex items-center justify-center group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
