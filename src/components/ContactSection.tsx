"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section className="py-32 relative" id="contact">
      <div className="absolute top-0 right-0 w-1/2 h-full ambient-glow-gold -z-10 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">Liên Hệ Trực Tiếp</h2>
            <p className="text-on-surface-variant mb-12 max-w-md">Mọi cuộc hội thoại đều được bảo mật tuyệt đối. Hãy để lại thông tin, chúng tôi sẽ liên hệ lại trong vòng 24h làm việc.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center border border-white/5">
                  <span className="material-symbols-outlined text-secondary">call</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Hotline / WhatsApp</div>
                  <div className="text-xl font-headline font-bold text-on-surface">+84 (0) 90 123 4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center border border-white/5">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Tư Vấn</div>
                  <div className="text-xl font-headline font-bold text-on-surface">advisory@vanguardwealth.vn</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <a className="w-12 h-12 rounded-lg bg-surface-container-high border border-white/5 flex items-center justify-center hover:bg-primary/20 transition-all" href="#">
                <svg className="w-6 h-6 fill-on-surface" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a className="w-12 h-12 rounded-lg bg-surface-container-high border border-white/5 flex items-center justify-center hover:bg-primary/20 transition-all" href="#">
                <svg className="w-6 h-6 fill-on-surface" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 rounded-2xl border border-white/10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase">Họ và Tên</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 text-on-surface transition-all outline-none" placeholder="Nguyễn Văn A" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase">Số Điện Thoại</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 text-on-surface transition-all outline-none" placeholder="+84 ..." type="tel" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase">Email</label>
                <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 text-on-surface transition-all outline-none" placeholder="email@example.com" type="email" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase">Dịch vụ quan tâm</label>
                <select className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 text-on-surface transition-all appearance-none outline-none">
                  <option className="bg-surface-container">Strategic Advisory</option>
                  <option className="bg-surface-container">Portfolio Management</option>
                  <option className="bg-surface-container">HNWI Coaching</option>
                  <option className="bg-surface-container">Market Analysis</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase">Lời nhắn (Tùy chọn)</label>
                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 text-on-surface transition-all resize-none outline-none" placeholder="Tôi muốn trao đổi về..." rows={4}></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-on-primary font-headline font-extrabold py-4 rounded-md shadow-[0_10px_30px_rgba(221,183,255,0.2)] hover:shadow-primary/40 transition-all uppercase tracking-widest text-sm" 
                type="submit"
              >
                Gửi Yêu Cầu Tư Vấn
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
