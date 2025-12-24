import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface MenuItem {
  title: string;
  subItems?: string[];
}

const navMenus: MenuItem[] = [
  { title: '資訊白皮書' },
  { 
    title: '訊息公告', 
    subItems: ['最新消息', '課程暨活動報名', '專案資訊公告', '薪資調查', '商情資訊', '影音訊息', '軟協e週報', '軟協快訊', '會員活動訊息', '軟協徵才'] 
  },
  { 
    title: '軟協簡介', 
    subItems: ['大事紀', '組織章程', '服務宗旨', '組織圖', '理事長簡介', '理監事簡介', '相關連結', '活動花絮'] 
  },
  { 
    title: '產業服務', 
    subItems: ['資通安全', '人工智慧', 'ESG綠色轉型', '軟協促進會專區'] 
  },
  { title: '資安長聯誼會' },
  { 
    title: '會員專區', 
    subItems: ['會員e名錄', '會員登入', '會員服務說明', '入會申請'] 
  },
  { 
    title: '產業文章', 
    subItems: ['新知分享', '財訊專欄', '數位專欄'] 
  },
  { title: '軟協徵才' }
];

export const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col fixed top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="h-[40px] bg-[#E9F0EE] flex items-center justify-center">
        <div className="max-w-[1200px] w-full px-4 flex justify-end items-center gap-6 text-[13px] text-[#555555]">
          <div className="flex gap-4">
            <button className="hover:text-[#D4A73C] bg-transparent">中文</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-[#D4A73C] bg-transparent">English</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-[#D4A73C] bg-transparent">日本語</button>
          </div>
          <div className="flex gap-4">
            <button className="hover:text-[#D4A73C] bg-transparent">登入</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-[#D4A73C] bg-transparent">加入會員</button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="h-[80px] bg-white flex items-center justify-center">
        <div className="max-w-[1200px] w-full px-4 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://www.cisanet.org.tw/HTMLFactory/img/logo.png" 
              alt="CISA Logo" 
              className="h-[50px] object-contain"
            />
          </div>

          {/* Main Menu */}
          <ul className="hidden md:flex items-center gap-2 lg:gap-6 h-full">
            {navMenus.map((item) => (
              <li key={item.title} className="group relative h-full flex items-center">
                <a 
                  href="#" 
                  className="text-[#2F3A40] font-medium hover:text-[#D4A73C] transition-colors duration-200 flex items-center gap-1 px-2 py-1"
                >
                  {item.title}
                  {item.subItems && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                </a>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="absolute top-full left-0 w-[220px] bg-[#F7E3D3] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[60]">
                    <ul className="flex flex-col">
                      {item.subItems.map((subItem, index) => (
                        <li key={subItem} className={index !== item.subItems!.length - 1 ? 'border-b border-[#EED2BB]' : ''}>
                          <a 
                            href="#" 
                            className="block px-6 py-4 text-[#5A4A42] font-bold text-[16px] hover:bg-[#D4A73C] hover:text-white transition-colors duration-200"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Search Icon */}
          <div className="flex items-center">
            <button className="p-2 text-[#2F3A40] hover:text-[#D4A73C]">
              <Search size={24} />
            </button>
          </div>
        </div>
      </nav>
      {/* Spacer to push content below the fixed header */}
      <div className="h-[120px]" />
    </header>
  );
};
