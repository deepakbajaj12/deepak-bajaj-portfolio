"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Scene3D } from "@/components/ui/Scene3D";

export const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black text-white">
      <Scene3D />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4 perspective-1000"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md"
        >
          <span className="text-sm font-medium text-purple-300">Available for work</span>
        </motion.div>

        <motion.h2 
          className="text-xl md:text-2xl font-light text-purple-400 mb-4 tracking-widest uppercase"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello, I'm
        </motion.h2>
        <motion.h1 
          className="text-6xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-purple-600 mb-6 tracking-tighter py-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Deepak Bajaj
        </motion.h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building digital experiences that merge <span className="text-purple-400 font-semibold">creativity</span> with <span className="text-pink-500 font-semibold">technology</span>.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black rounded-full font-bold transition-all hover:bg-gray-200 flex items-center gap-2"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold transition-all hover:bg-white/10 backdrop-blur-sm"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="text-white/50 w-8 h-8" />
      </motion.div>
    </section>
  );
};

