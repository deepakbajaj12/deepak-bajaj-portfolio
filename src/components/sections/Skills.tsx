"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend & AI",
    skills: ["Python", "Flask", "FastAPI", "OpenAI", "Cohere", "Transformers", "NLP", "OCR"]
  },
  {
    title: "Database & Tools",
    skills: ["SQL", "MongoDB", "Firebase", "Git", "GitHub", "Vercel", "IoT"]
  }
];

export const Skills = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden" id="skills">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-colors group"
            >
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:bg-purple-600/20 hover:border-purple-500/50 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
