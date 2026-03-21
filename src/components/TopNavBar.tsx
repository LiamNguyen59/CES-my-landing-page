"use client";
import React from "react";
import { motion } from "framer-motion";

export const TopNavBar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-[#131314]/80 backdrop-blur-[20px] border-b border-[#ffffff]/15 shadow-[0_20px_50px_rgba(183,109,255,0.1)]"
    >
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-[#e9c349] font-headline">Vanguard Wealth</div>
        <div className="hidden md:flex items-center gap-8">
          {['Expertise', 'Solutions', 'Portfolio', 'Insights', 'Contact'].map((item) => (
            <a 
              key={item}
              className="font-headline font-medium tracking-[-0.02em] text-[#e5e2e3]/70 hover:text-[#ddb7ff] hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded" 
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="transition-transform bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-bold px-6 py-2.5 rounded-lg text-sm"
        >
          Private Consultation
        </motion.button>
      </div>
    </motion.nav>
  );
};
