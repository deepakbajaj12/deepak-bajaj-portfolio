"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Folder } from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";

const projects = [
  {
    title: "AI Job Screening Platform",
    description: "Smart, explainable AI-powered resume & JD analysis with coaching, semantic matching, and recruiter automation.",
    tags: ["Python", "Flask", "React", "Cohere/OpenAI", "Firebase"],
    link: "https://github.com/deepakbajaj12/AI-Job-Screening-Analyzer",
    github: "https://github.com/deepakbajaj12/AI-Job-Screening-Analyzer",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "AI Detective Agent",
    description: "Intelligent investigative workspace that ingests documents, extracts clues, and ranks suspects using hybrid ML.",
    tags: ["Python", "Flask", "React", "Transformers", "NLP"],
    link: "https://github.com/deepakbajaj12/ai-detective-agent",
    github: "https://github.com/deepakbajaj12/ai-detective-agent",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "RetailGenie",
    description: "Next-gen Retail Operating System with 35+ modules including AI inventory, biometric checkout, and IoT tracking.",
    tags: ["Next.js", "Python", "Firebase", "OpenAI", "IoT"],
    link: "https://github.com/deepakbajaj12/RetailGenie",
    github: "https://github.com/deepakbajaj12/RetailGenie",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "AIRC - Creative System",
    description: "AI-powered retail creative builder with automated layout suggestions, compliance checking, and multi-format export.",
    tags: ["FastAPI", "React", "OCR", "AI Layout", "Compliance"],
    link: "https://github.com/deepakbajaj12/AIRC-AI-Retail-Creative-System",
    github: "https://github.com/deepakbajaj12/AIRC-AI-Retail-Creative-System",
    color: "from-emerald-500 to-teal-500"
  }
];

export const Projects = () => {
  return (
    <section className="py-32 bg-black text-white relative" id="projects">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my passion for building digital products.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card3D key={index} className="h-full">
              <div className="h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-xl hover:bg-zinc-800/50 transition-all duration-300 group relative overflow-hidden flex flex-col hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-20 backdrop-blur-md shadow-inner ring-1 ring-white/10`}>
                    <Folder className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-purple-400 transition-colors border border-white/5 hover:border-purple-500/30" title="View Code">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-purple-400 transition-colors border border-white/5 hover:border-purple-500/30" title="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <a href={project.github} target="_blank" rel="noopener noreferrer" className="block group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-purple-300 group-hover:to-white transition-all">{project.title}</h3>
                </a>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg line-clamp-3 group-hover:text-gray-300 transition-colors">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-4 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

