import React from 'react';
import { Mail, Facebook, Youtube, Phone, Printer, MapPin, PhoneCall } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: '訊息公告',
      links: ['最新消息', '課程活動報名', '專案資訊公告', '商情資訊', '影音訊息', '軟協e週報', '軟協快訊', '會員活動訊息', '薪資調查', '軟協徵才']
    },
    {
      title: '軟協簡介',
      links: ['大事紀', '組織章程', '服務宗旨', '組織圖', '理事長簡介', '理監事簡介', '相關連結', '活動花絮']
    },
    {
      title: '軟協服務',
      links: ['本會服務項目'],
      subTitle: '會員e名錄',
      extra: [
        { title: '產業文章', items: ['新知分享', '財訊專欄', '數位專欄'] }
      ]
    },
    {
      title: '網站服務',
      links: ['本會位置 聯絡本會', '網站導覽', '網站聲明', '安全管理政策']
    }
  ];

  return (
    <footer className="w-full flex flex-col">
      {/* Footer Main */}
      <div className="bg-[#F7E3D3] py-[60px] flex justify-center text-[#5A4A42]">
        <div className="max-w-[1200px] w-full px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-[18px] font-bold text-[#4A3B34] mb-6 border-l-4 border-[#E28A2E] pl-3">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[#6B5B52] hover:text-[#D4A73C] transition-colors flex items-center gap-2">
                      <span className="text-[#D4A73C]">›</span> {link}
                    </a>
                  </li>
                ))}
              </ul>
              {section.subTitle && (
                <div className="mt-8">
                  <h4 className="text-[18px] font-bold text-[#4A3B34] mb-4 border-l-4 border-[#E28A2E] pl-3">
                    {section.subTitle}
                  </h4>
                </div>
              )}
              {section.extra && section.extra.map((ex, i) => (
                <div key={i} className="mt-8">
                  <h4 className="text-[18px] font-bold text-[#4A3B34] mb-4 border-l-4 border-[#E28A2E] pl-3">
                    {ex.title}
                  </h4>
                  <ul className="space-y-3">
                    {ex.items.map(item => (
                      <li key={item}>
                        <a href="#" className="text-[#6B5B52] hover:text-[#D4A73C] transition-colors flex items-center gap-2">
                          <span className="text-[#D4A73C]">›</span> {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Social */}
      <div className="bg-[#F7E3D3] border-t border-[rgba(0,0,0,0.08)] py-[40px] flex justify-center">
        <div className="max-w-[1200px] w-full px-4 flex flex-col md:flex-row justify-start md:gap-32 items-start">
          
          {/* Left Side: Large Logo */}
          <div className="w-full md:w-auto flex items-center mb-8 md:mb-0">
            <img 
              src="https://www.cisanet.org.tw/HTMLFactory/img/logo.png" 
              alt="CISA Logo" 
              className="max-h-[100px] object-contain"
            />
          </div>

          {/* Right Side: Contact Details */}
          <div className="w-full md:w-auto flex flex-col gap-1.5 text-[#333333]">
            {/* Address Row */}
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#C88A65]" />
              <span className="text-[16px] font-bold leading-tight">104 台北市中山區長安東路二段99號8樓</span>
            </div>

            {/* Phone Row */}
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#C88A65]" />
              <span className="text-[16px] font-bold flex items-center gap-2 leading-tight">
                服務電話： (02)2553-3988
                <div className="bg-[#F0B429] p-0.5 rounded-full">
                  <PhoneCall size={12} className="text-[#333333]" />
                </div>
              </span>
            </div>

            {/* Fax Row */}
            <div className="flex items-center gap-3">
              <Printer size={18} className="text-[#C88A65]" />
              <span className="text-[16px] font-bold leading-tight">傳真電話： (02)2553-1319</span>
            </div>

            {/* Social & Accessibility Row */}
            <div className="flex flex-wrap items-center gap-5 mt-2">
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-1.5 text-[#888888] hover:text-[#D4A73C] font-medium text-[15px] transition-colors">
                  <Mail size={20} className="text-[#888888]" /> E-mail
                </a>
                <a href="#" className="flex items-center gap-1.5 text-[#888888] hover:text-[#D4A73C] font-medium text-[15px] transition-colors">
                  <Facebook size={20} className="text-[#888888]" /> facebook
                </a>
                <a href="#" className="flex items-center gap-1.5 text-[#888888] hover:text-[#D4A73C] font-medium text-[15px] transition-colors">
                  <Youtube size={20} className="text-[#888888]" /> youtube
                </a>
              </div>
              
              {/* Accessibility Mark */}
              <a href="https://accessibility.moda.gov.tw/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://www.cisanet.org.tw/HTMLFactory/img/Accessibility-mark.png" 
                  alt="無障礙標章 2.1" 
                  className="h-[40px] object-contain hover:opacity-80 transition-opacity" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#EED2BB] py-[20px] text-center text-[13px] text-[#6B5B52]">
        <div className="max-w-[1200px] mx-auto px-4">
          中華民國資訊軟體協會 版權所有，禁止侵害。連結必究 © Copyright 2021 | Designed by TISNet
        </div>
      </div>
    </footer>
  );
};
