"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ExternalLink, ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

export const Projects = () => {
  const [activeScreenshots, setActiveScreenshots] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeScreenshots) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeScreenshots]);

  const openGallery = (screenshots: string[]) => {
    setActiveScreenshots(screenshots);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setActiveScreenshots(null);
  };

  const nextImage = () => {
    if (activeScreenshots) {
      setCurrentImageIndex((prev) => (prev + 1) % activeScreenshots.length);
    }
  };

  const prevImage = () => {
    if (activeScreenshots) {
      setCurrentImageIndex((prev) => (prev - 1 + activeScreenshots.length) % activeScreenshots.length);
    }
  };

  const projects = [
    {
      id: "bitetime",
      title: "BiteTime",
      description: "A comprehensive Food Catering App featuring a role-based system for Admins, Staff, and Delivery personnel. Includes real-time order tracking and secure payments.",
      tech: ["React.js", "Next.js", "Node.js", "Redux", "Material UI"],
      gradient: "from-orange-500 to-rose-500",
      stats: "Food Catering App",
      liveUrl: "https://bitetime.com/",
    },
    {
      id: "blueverse",
      title: "BlueVerse",
      description: "Vehicle Wash Portal with live machine tracking capabilities, detailed revenue dashboards, and comprehensive analytics & reporting features.",
      tech: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
      gradient: "from-blue-500 to-cyan-500",
      stats: "Vehicle Wash Portal",
      screenshots: [
        // Placeholder names - you'll replace these by adding actual images to the /public folder
        "/blueverse-admin-1.png", 
        "/blueverse-admin-2.png",
        "/blueverse-admin-3.png",
        "/blueverse-admin-4.png",
        "/blueverse-admin-5.png",
      ]
    },
    {
      id: "loophealth",
      title: "LoopHealth",
      description: "Insurance Platform facilitating employee health policy management. Features complex multi-step forms with rich validation and heavily optimized state management.",
      tech: ["React.js", "Redux Toolkit", "Form Validation"],
      gradient: "from-emerald-500 to-teal-500",
      stats: "Insurance Platform",
      liveUrl: "https://www.loophealth.com/",
    },
    {
      id: "ittracking",
      title: "IT Tracking System",
      description: "Issue tracking portal for IT infrastructure. Custom SLA dashboards built with Chart.js and integrated real-time notifications.",
      tech: ["React.js", "Chart.js", "Real-time Notifications"],
      gradient: "from-purple-500 to-indigo-500",
      stats: "Issue Tracking Portal",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="A selection of scalable applications I&apos;ve built." />

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-panel rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Abstract Cover Image Replacement */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white font-outfit drop-shadow-md">{project.title}</h3>
                  <p className="text-white/90 text-sm font-medium mt-1 drop-shadow">{project.stats}</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.screenshots && (
                    <button 
                      onClick={() => openGallery(project.screenshots!)}
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      <ImageIcon size={16} /> View Screenshots
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeScreenshots && activeScreenshots.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          >
            {/* Close Button */}
            <button 
              onClick={closeGallery}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
            >
              <X size={24} />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full h-full flex items-center justify-center p-0 md:p-16">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={activeScreenshots[currentImageIndex]}
                alt={`Screenshot ${currentImageIndex + 1}`}
                className="w-full md:max-w-full md:max-h-full object-contain rounded-none md:rounded-xl shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/1200x800/1e1e2e/a6adc8?text=Screenshot+coming+soon...\\nAdd+" + activeScreenshots[currentImageIndex].replace('/', '') + "+to+/public+folder";
                }}
              />
            </div>

            {/* Navigation Overlay (Desktop) */}
            {activeScreenshots.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full backdrop-blur-md transition-all z-[110] hidden md:block"
                >
                  <ChevronLeft size={28} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full backdrop-blur-md transition-all z-[110] hidden md:block"
                >
                  <ChevronRight size={28} />
                </button>
                
                {/* Mobile Bottom Bar & Desktop Counter */}
                <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex items-center justify-center gap-4 z-[110] px-4">
                  {/* Mobile Prev Button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="md:hidden p-3 bg-black/60 border border-white/10 text-white rounded-full backdrop-blur-md transition-all flex items-center justify-center"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <div className="px-5 py-2 bg-black/60 border border-white/10 rounded-full backdrop-blur-md text-sm text-white font-medium">
                    {currentImageIndex + 1} / {activeScreenshots.length}
                  </div>

                  {/* Mobile Next Button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="md:hidden p-3 bg-black/60 border border-white/10 text-white rounded-full backdrop-blur-md transition-all flex items-center justify-center"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
