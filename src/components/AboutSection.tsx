"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section className="py-32 bg-surface-container-low" id="expertise">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-8">Di Sản Của Sự <br/><span className="text-secondary">Chuyên Nghiệp</span></h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>Bắt đầu sự nghiệp từ những năm 1990, tôi đã chứng kiến sự thăng trầm của thị trường tài chính Châu Á qua nhiều giai đoạn lịch sử. Từ cuộc khủng hoảng tài chính 1997 đến sự bùng nổ của kỷ nguyên số hiện nay.</p>
              <p>Triết lý của tôi không chỉ dừng lại ở những con số. Đó là sự thấu hiểu sâu sắc về tâm lý thị trường, khả năng quản trị rủi ro nghiêm ngặt và cam kết bảo mật tuyệt đối cho khách hàng.</p>
            </div>
          </motion.div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'account_balance', title: 'Thị Trường Chứng Khoán', desc: 'Phân tích kỹ thuật và cơ bản chuyên sâu tại VN-Index và các sàn giao dịch lớn trong khu vực.', color: 'text-primary', borderColor: 'group-hover:border-primary/40' },
              { icon: 'monitoring', title: 'Quản Trị Rủi Ro', desc: 'Hệ thống bảo vệ tài sản đa lớp, tối ưu hóa lợi nhuận trong mọi biến động của thị trường.', color: 'text-secondary', borderColor: 'group-hover:border-secondary/40' },
              { icon: 'public', title: 'Tầm Nhìn Khu Vực', desc: 'Mạng lưới kết nối rộng khắp tại Singapore, Hong Kong và Nhật Bản.', color: 'text-primary', borderColor: 'group-hover:border-primary/40' },
              { icon: 'diamond', title: 'Tư Vấn HNWI', desc: 'Dịch vụ cá nhân hóa đặc quyền dành riêng cho giới siêu giàu và gia đình tài phiệt.', color: 'text-secondary', borderColor: 'group-hover:border-secondary/40' }
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className={`p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/10 group transition-all duration-500 hover:-translate-y-2 ${item.borderColor}`}
              >
                <span className={`material-symbols-outlined ${item.color} text-4xl mb-4`}>{item.icon}</span>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="text-on-surface-variant font-body text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
