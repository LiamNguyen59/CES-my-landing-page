"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const PortfolioSection = () => {
  return (
    <section className="py-32 bg-background" id="portfolio">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">Dấu Ấn Thành Công</h2>
            <p className="text-on-surface-variant">Minh chứng cho khả năng dự báo và quản trị trong các thương vụ lớn nhất khu vực.</p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-headline font-bold underline underline-offset-8 decoration-primary decoration-2 hover:text-primary transition-colors"
          >
            Xem Tất Cả Case Studies
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/5"
          >
            <img alt="Market Expansion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM76wambQ4_eDg-kyKJJgPYzx-OYNSNjNDJZG7cdnaDnyoUR-9A0BEdzmfsETZ_qJ4_1C0gw_9Ip8ZTVft2i4yEx041_etUdHc4pHVs3v83-WeknOF9EojFxXU4zm2MKhyDLZVRjfk5rU4kK-cCW_lJcl8iDsesiatBuCtdc5F7DWWTfnBeHW3Pfysek1WZIEA65zhqOb22ODG-XFQuVRXucbgkfMRmUXc7d5kukNhO1cnyDsjVLFcitYVq91DnkP5CQ_DPCvQkg4" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="px-3 py-1 bg-primary text-on-primary-container text-[10px] font-bold uppercase tracking-widest rounded mb-4 inline-block">Expansion</span>
              <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">Asian Market Expansion</h3>
              <p className="text-on-surface-variant max-w-md">Dẫn dắt chiến lược thâm nhập thị trường Đông Nam Á cho tập đoàn tài chính đa quốc gia, đạt mức tăng trưởng 200% trong 2 năm.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group overflow-hidden rounded-2xl border border-white/5"
          >
            <img alt="Tech Portfolio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3p5CHISyH36jlRDWdjdI_c4qReDPKWvGG1z_SHKii0N9Z25wab-nD7wwsUaL7OevPK3uHURboAZhcwA2yIFoymwPnIFM5-v8frgiNbHw4mAH1hvXt6O8gkXqdNZeP9p-UwTyBUvADQqYvR31hjlOgRBJwutkaLbqZn86dhxE0XjCpPMtAEQXfE36qXpH_QB24nCJPBN4R2FR8G8k6uZRzwjESf8iJSbaAjB_Bl_tzAcQ7KO-VbD6zmvhIvEu-Tx4HvWS40A9YxqA" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="px-3 py-1 bg-secondary text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded mb-4 inline-block">Growth</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Tech Portfolio Growth</h3>
              <p className="text-on-surface-variant text-sm">Tái cấu trúc danh mục công nghệ cho HNWI, tối ưu hóa lợi nhuận vượt xa chỉ số tham chiếu.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group overflow-hidden rounded-2xl border border-white/5"
          >
            <img alt="Sustainable Investment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYpOvPqzY-HPgdRvFDLrMNTw4i7-tClM6zYPXGpmB-dB5v3ug5DpY43BkeFjgjXw2rFsLxyxHRmUYAhuttsSWwQTdl3tsBI5GtjjSyap0nikHafVBZXC6_ccPmIZF4T9Ul7k_1IWGkwb8rMh1mwD0mypF-CuyOLaIkSY1jjtuOmF23tgQ7b2UHqxg1ViAG2Sv4B4wReWRcajN1Rn8TN9ZGPmq8KhXCb-HsbFxA61-zL-CImLm8lEy4x50W7Ry027mH0zQl_kUZON8" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="px-3 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-widest rounded mb-4 inline-block">ESG</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Sustainable Assets</h3>
              <p className="text-on-surface-variant text-sm">Chuyển dịch tài sản sang năng lượng xanh, bảo toàn giá trị cho thế hệ tương lai.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/5"
          >
            <div className="absolute inset-0 bg-surface-container-high flex flex-col items-center justify-center p-12 text-center">
              <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full animate-ping bg-primary/10"></div>
                <span className="material-symbols-outlined text-primary text-4xl">rocket_launch</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">Sẵn sàng cho dự án tiếp theo?</h3>
              <p className="text-on-surface-variant max-w-md mb-8">Hãy cùng chúng tôi xây dựng một tương lai tài chính vững chắc và thịnh vượng cho bạn và gia đình.</p>
              <a className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-headline font-bold text-on-surface hover:bg-white/10 transition-all cursor-pointer" href="#contact">Kết Nối Ngay</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
