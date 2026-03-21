"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const ServicesSection = () => {
  const services = [
    { icon: 'verified_user', title: 'Strategic Advisory', desc: 'Tư vấn chiến lược vĩ mô, xây dựng cấu trúc danh mục đầu tư dài hạn dựa trên phân tích dòng tiền toàn cầu.', color: 'text-primary', bgColor: 'bg-primary/10', borderColor: 'group-hover:border-primary/30' },
    { icon: 'insights', title: 'Portfolio Management', desc: 'Quản lý danh mục chuyên nghiệp, tái cấu trúc tài sản nhằm đạt được hiệu suất tối ưu và an toàn.', color: 'text-secondary', bgColor: 'bg-secondary/10', borderColor: 'group-hover:border-secondary/30' },
    { icon: 'psychology', title: 'HNWI Coaching', desc: 'Đào tạo và cố vấn 1-1 cho các nhà đầu tư cá nhân có giá trị tài sản ròng cao về tư duy thị trường.', color: 'text-primary', bgColor: 'bg-primary/10', borderColor: 'group-hover:border-primary/30' },
    { icon: 'query_stats', title: 'Market Analysis', desc: 'Báo cáo phân tích chuyên sâu về thị trường mới nổi và các xu hướng công nghệ tương lai.', color: 'text-secondary', bgColor: 'bg-secondary/10', borderColor: 'group-hover:border-secondary/30' },
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="solutions">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ambient-glow-purple -z-10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">Giải Pháp Đặc Quyền</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Chúng tôi cung cấp lộ trình tài chính được thiết kế riêng biệt, đáp ứng những tiêu chuẩn khắt khe nhất của thị trường quốc tế.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-1 rounded-2xl border border-white/5 group ${svc.borderColor} transition-all duration-500`}
            >
              <div className="p-8 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg ${svc.bgColor} flex items-center justify-center mb-6`}>
                  <span className={`material-symbols-outlined ${svc.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{svc.icon}</span>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-3">{svc.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow">{svc.desc}</p>
                <button className={`${svc.color} font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all`}>
                  Khám phá <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
