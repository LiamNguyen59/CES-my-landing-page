"use client";
import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full py-16 px-8 border-t border-[#ffffff]/5 bg-[#0e0e0f]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        <div className="col-span-1 md:col-span-1">
          <span className="text-lg font-extrabold text-[#e9c349] mb-4 block font-headline">Vanguard Wealth</span>
          <p className="text-[#e5e2e3]/40 text-sm font-['Manrope'] leading-relaxed">
            Định hình tương lai tài chính Châu Á với chuyên môn sâu rộng và đạo đức nghề nghiệp hàng đầu.
          </p>
        </div>
        
        <div>
          <h4 className="text-[#e9c349] font-semibold text-sm mb-6 font-['Manrope']">Dịch vụ</h4>
          <ul className="space-y-4">
            <li><a className="text-[#e5e2e3]/40 hover:text-[#ddb7ff] transition-colors duration-200 text-sm font-['Manrope']" href="#">Strategic Advisory</a></li>
            <li><a className="text-[#e5e2e3]/40 hover:text-[#ddb7ff] transition-colors duration-200 text-sm font-['Manrope']" href="#">Portfolio Management</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[#e9c349] font-semibold text-sm mb-6 font-['Manrope']">Pháp lý</h4>
          <ul className="space-y-4">
            <li><a className="text-[#e5e2e3]/40 hover:text-[#ddb7ff] transition-colors duration-200 text-sm font-['Manrope']" href="#">Regulatory Disclosure</a></li>
            <li><a className="text-[#e5e2e3]/40 hover:text-[#ddb7ff] transition-colors duration-200 text-sm font-['Manrope']" href="#">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[#e9c349] font-semibold text-sm mb-6 font-['Manrope']">Bản tin thị trường</h4>
          <p className="text-[#e5e2e3]/40 text-xs mb-4 font-['Manrope']">Nhận phân tích hàng tuần từ chuyên gia.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input className="bg-surface-container-high border-0 text-on-surface text-xs rounded-l-md w-full focus:ring-1 focus:ring-primary outline-none px-3" placeholder="Email của bạn" type="email" />
            <button className="bg-primary px-4 py-2 rounded-r-md text-on-primary border-0 cursor-pointer">
              <span className="material-symbols-outlined text-sm pt-1">send</span>
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#e5e2e3]/40 text-sm font-['Manrope']">© 2024 Vanguard Wealth Partners. Excellence in Asian Private Equity.</p>
        <div className="flex gap-6">
          <a className="text-[#e5e2e3]/40 hover:text-white text-xs uppercase tracking-tighter" href="#">Vietnam</a>
          <a className="text-[#e5e2e3]/40 hover:text-white text-xs uppercase tracking-tighter" href="#">Singapore</a>
          <a className="text-[#e5e2e3]/40 hover:text-white text-xs uppercase tracking-tighter" href="#">Hong Kong</a>
        </div>
      </div>
    </footer>
  );
};
