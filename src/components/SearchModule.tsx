import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const SearchModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('service');
  const [searchInput, setSearchInput] = useState('');

  const tabs = [
    { id: 'service', label: '服務查詢' },
    { id: 'news', label: '新聞查詢' },
    { id: 'product', label: '產品查詢' },
  ];

  return (
    <section className="py-80px bg-white">
      <div className="container mx-auto px-8">
        {/* Search Container */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-tabActive text-white'
                    : 'bg-tabUnactive text-textSecondary hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Content */}
          <div className="mb-8">
            {activeTab === 'service' && (
              <div>
                <p className="text-textSecondary mb-4">搜尋我們提供的各項服務</p>
              </div>
            )}
            {activeTab === 'news' && (
              <div>
                <p className="text-textSecondary mb-4">搜尋最新的新聞資訊</p>
              </div>
            )}
            {activeTab === 'product' && (
              <div>
                <p className="text-textSecondary mb-4">搜尋相關產品資訊</p>
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="輸入關鍵字..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            />
            <button className="bg-searchBtn hover:bg-searchBtnHover text-textMain font-bold px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300">
              <Search size={20} />
              搜尋
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
