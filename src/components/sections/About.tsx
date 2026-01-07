"use client";

import { motion } from "framer-motion";
import { Code2, Palette } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "12+" },
  { label: "Hackathons", value: "5+" },
];

export const About = () => {
  return (
    <section className="py-32 bg-black text-white relative" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="aspect-square rounded-3xl overflow-hidden relative z-10 border border-white/10 bg-zinc-900 group">
               <Image 
                 src="/IMG_2808.JPG" 
                 alt="Deepak Bajaj" 
                 fill 
                 sizes="(max-width: 768px) 100vw, 50vw"
                 priority
                 className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-600/20 rounded-full blur-[80px] -z-10" />
            
            <motion.div 
              className="absolute -right-8 top-10 bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 className="w-8 h-8 text-purple-400" />
            </motion.div>
            
            <motion.div 
              className="absolute -left-8 bottom-20 bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Palette className="w-8 h-8 text-pink-400" />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg mb-10 leading-relaxed">
              <p>
                I am a final year student passionate about bridging the gap between <span className="text-purple-400 font-semibold">complex AI technologies</span> and <span className="text-pink-400 font-semibold">user-friendly applications</span>. 
                With a strong foundation in Full Stack Development and Machine Learning, I thrive on building innovative solutions that solve real-world problems.
              </p>
              <p>
                My portfolio showcases a diverse range of projects, from <span className="text-gray-100">AI-powered recruitment tools</span> to <span className="text-gray-100">comprehensive retail operating systems</span>. 
                I am proficient in Python, React, Next.js, and cloud technologies, always eager to learn and adapt to new challenges.
              </p>
              <p>
                I am currently exploring opportunities in <span className="text-white font-medium border-b border-purple-500">Software Engineering</span>, <span className="text-white font-medium border-b border-purple-500">AI/ML</span>, and <span className="text-white font-medium border-b border-purple-500">Full Stack Development</span> roles where I can apply my skills 
                to create impactful digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
