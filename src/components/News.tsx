import React from 'react';

const newsItems = [
  {
    id: '1',
    category: '最新消息',
    title: '國立空中大學「新一代整合校務資訊系統」委託開發服務案',
    date: '2025/12/23',
    image: 'https://picsum.photos/id/10/400/225'
  },
  {
    id: '2',
    category: '課程暨活動資訊',
    title: '115年【資安學院】3/5~3/6-IPAS-「資安管理師」輔導課程',
    date: '2025/03/18',
    image: 'https://picsum.photos/id/20/400/225'
  },
  {
    id: '3',
    category: '專案計劃公告',
    title: '公告【引領中小微型企業數位轉型戰略署】導入計畫',
    date: '2025/10/29',
    image: 'https://picsum.photos/id/30/400/225'
  }
];

export const News: React.FC = () => {
  return (
    <section className="bg-[#FAF7F2] py-[80px] flex justify-center">
      <div className="max-w-[1200px] w-full px-4">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-[1px] w-12 bg-[#E28A2E] mr-4"></div>
          <h2 className="text-[32px] font-bold text-[#333333]">重要訊息</h2>
          <div className="h-[1px] w-12 bg-[#E28A2E] ml-4"></div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-[8px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[#D4A73C] text-[15px] font-bold mb-2">{item.category}</span>
                <h3 className="text-[#2F2F2F] text-[18px] font-bold line-clamp-2 mb-4 h-[54px] leading-[1.5]">
                  {item.title}
                </h3>
                <span className="text-[#888888] text-[14px] mb-6">{item.date}</span>
                
                <button className="mt-auto w-full py-2 px-4 border border-[#D4A73C] text-[#D4A73C] font-bold text-center rounded transition-all duration-300 hover:bg-[#D4A73C] hover:text-white">
                  更多 {item.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
