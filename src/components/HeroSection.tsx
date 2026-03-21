"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full ambient-glow-purple -z-10 translate-y-[-20%]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full ambient-glow-gold -z-10 translate-x-[20%]"></div>
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#e9c349]"></span>
            <span className="text-xs font-label uppercase tracking-widest text-secondary">35 Years of Asian Excellence</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-[-0.03em] leading-[1.1] text-on-surface">
            Wealth Partner <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed-dim to-secondary">&amp; Strategist</span>
          </h1>
          
          <p className="text-xl text-on-surface-variant font-body max-w-lg leading-relaxed">
            Kiến tạo thịnh vượng bền vững qua ba thập kỷ kinh nghiệm tại thị trường chứng khoán Việt Nam và Châu Á. Đồng hành cùng giới thượng lưu trong việc bảo tồn và phát triển tài sản.
          </p>
          
          <div className="flex gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(233,195,73,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-on-secondary font-headline font-bold px-8 py-4 rounded-md transition-all shadow-[0_0_20px_rgba(233,195,73,0.3)]"
            >
              Khởi Tạo Hành Trình
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-surface-bright)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-outline-variant/30 text-on-surface font-headline font-bold px-8 py-4 rounded-md transition-all"
            >
              Tìm Hiểu Thêm
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
            <img 
              alt="Professional Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxLQd-6UIo8I40UDu-lWPdQKZLYmceaYRip2ZTy4HxqsB85eYwuL3FSVCARTfn9m1b7xMzwrBhvposVsxwpUzX76MlIlbJdt2ADVzRL8_lfjYydU2PYXzbaXhEME_rYzv8SXsQe6K4iGYY-7Es0A6zr_h1qtHtWgV25U1Eo6Lq0yf3r555kHZl0rB4HW4mi65fJi0iwEBg74hK8oBBvK6zTJ90Dpnb7WAC6DPDVzjCvCCg7Cm4RKVwUVpBrFSUQvkrCqumsBQC7c0"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl border border-white/10 z-20 max-w-[240px]"
          >
            <div className="text-secondary font-headline font-bold text-3xl">35+</div>
            <div className="text-on-surface-variant text-sm font-body">Năm kinh nghiệm thực chiến tại các thị trường tài chính Châu Á.</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
